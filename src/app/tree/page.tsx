'use client';
import React, { useState, useEffect } from 'react';
import {
	Button,
	Box,
	Typography,
	CardActionArea,
	Grid,
	Card,
	Stack,
	Paper,
	CardContent,
	CardMedia,
} from '@mui/material';
import Image from "next/image";
import TreeActions from  '../components/TreeActions';
import styles from './page.module.css';
import * as anchor from '@project-serum/anchor';
import { useAnchorWallet } from '@solana/wallet-adapter-react';
import { Program, Wallet, AnchorProvider } from '@project-serum/anchor';
import { Connection, PublicKey, Keypair } from '@solana/web3.js';
import { TreeProgram, IDL } from '../../../public/programs/tree_program';
import { Link } from '@mui/material';
import NextLink from 'next/link';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import { useSearchParams } from 'next/navigation';
import CreateFarmer from '../components/CreateFarmer';
import FarmerComponent from '../components/Farmer';
import * as bs58 from 'bs58';
import NutrientBalance from '../components/NutrientBalance';
import InitializeTreeAccounts from '../components/InitializeTreeAccounts';

type TreeType = {
	authority: PublicKey;
	cultivarName: String;
	landNumber: anchor.BN;
	height: anchor.BN;
	girth: anchor.BN;
	age: anchor.BN;
	plantedTime: anchor.BN;
	health: Number;
	lastCheckTime: anchor.BN;
	nextFruitMaturaturationTime: anchor.BN;
	expectedFruitCount: anchor.BN;
	isAlive: Boolean;
	leafArea: anchor.BN;
	rootArea: anchor.BN;
};
const TreeComponent = () => {
    const [tree, setTree] = useState<TreeType | null>(null);
		const router = useRouter();
  	const searchParams = useSearchParams();
		const name = searchParams.get('name');
    const [ready, setReady] = useState<boolean>(false);

		const w = useAnchorWallet();

		const connection = new Connection('https://api.devnet.solana.com');

		const provider = new AnchorProvider(connection, w as Wallet, {
			commitment: 'confirmed',
		});
		const farmerProgram = new PublicKey(
			'5TNiwQX4cLvYtRp4vwhukHTrNt6MsK8URs6P98vsznQX'
		);

		const farmProgram = new PublicKey(
			'6ENVuGLwmXzs3vTtrnELHTA1y3Q1s2NKZMu4zDo3nPUd'
		);

		const programID = new PublicKey(
			'GKUYrzV8pu6ZNvKG4KmEMMbMeqeSJGH1vQYgk9RuoYSR'
		);

		const program = new Program(IDL, programID, provider);
		let payer = program.provider;

    useEffect(()=>{ 
      (async () => {
           if (payer.publicKey && name!= null) {
							console.log('the name is => ', name);

              let [farm] = anchor.web3.PublicKey.findProgramAddressSync(
								[Buffer.from('farm')],
								farmProgram
							);
							// farmer
							let [farmer] = anchor.web3.PublicKey.findProgramAddressSync(
								[Buffer.from('farmer'), payer.publicKey.toBuffer()],
								farmerProgram
							);

							// trees_meta
							let [treesMeta] = anchor.web3.PublicKey.findProgramAddressSync(
								[Buffer.from('treesmeta'), farm.toBuffer()],
								farmProgram
							);

							//tree
							let [tree] = anchor.web3.PublicKey.findProgramAddressSync(
								[
									Buffer.from('tree'),
									treesMeta.toBuffer(),
									farmer.toBuffer(),
									Buffer.from(name),
								],
								program.programId
							);
							

							let n = name.trim();
							console.log('the n is => ', n);
							let t: any = await program.account.tree.fetch(tree);
              console.log('this is the tree ', t);

              if(t.cultivarName == name){
                setTree(t);
                setReady(true);
              }							
						}
        }
        )();      
    },[payer.publicKey]);
	return (
		<div className={styles.dv}>
			{name ? <InitializeTreeAccounts name={name}/>:<></>}
			{ready && tree ? (
				<Grid container spacing={2} sx={{ width: '100%', haight: '100%' }}>
					<Grid item xs={8} md={4}>
						<Stack direction='column' spacing={1}>
							<Card className={styles.card}>
								<CardMedia className={styles.cardMedia}>
									<Image
										src='/d.jpg'
										alt='A tree image'
										width='400'
										height='190'
									/>
								</CardMedia>
								<Paper className={styles.paper}>
									<Typography variant='h4'>{tree.cultivarName}</Typography>{' '}
								</Paper>
								<div className={styles.divs}>
									<Typography className={styles.heading} variant='h5'>
										age:
									</Typography>
									<Typography variant='body1' className={styles.value}>
										{tree.age.toString()}
									</Typography>
								</div>
								<div className={styles.divs}>
									<Typography variant='h5' className={styles.heading}>
										health:
									</Typography>
									<Typography variant='body1' className={styles.value}>
										{' '}
										{tree.health.toString()}
									</Typography>
								</div>
								<div className={styles.divs}>
									<Typography variant='h5' className={styles.heading}>
										is alive:
									</Typography>
									<Typography variant='body1' className={styles.value}>
										{' '}
										{tree?.isAlive ? 'true' : 'false'}
									</Typography>
								</div>
								<div className={styles.divs}>
									<Typography variant='h5' className={styles.heading}>
										height:
									</Typography>
									<Typography variant='body1' className={styles.value}>
										{' '}
										{tree?.height.toString()}
									</Typography>
								</div>
								<div className={styles.divs}>
									<Typography variant='h5' className={styles.heading}>
										width:
									</Typography>
									<Typography variant='body1' className={styles.value}>
										{' '}
										{tree?.girth.toString()}
									</Typography>
								</div>
								<div className={styles.divs}>
									<Typography variant='h5' className={styles.heading}>
										next_maturation:
									</Typography>
									<Typography variant='body1' className={styles.value}>
										{tree?.nextFruitMaturaturationTime.toString()}
									</Typography>
								</div>
								<div className={styles.divs}>
									<Typography variant='h5' className={styles.heading}>
										expected fruit:
									</Typography>
									<Typography variant='body1' className={styles.value}>
										{' '}
										{tree?.expectedFruitCount.toString()}
									</Typography>
								</div>
							</Card>
							{name ? <TreeActions cultivarName={name} /> : <></>}
						</Stack>
					</Grid>					
					<Grid item xs={8} md={6}>
						<NutrientBalance cultivarName={tree.cultivarName} />
					</Grid>
				</Grid>
			) : (
				<></>
			)}
		</div>
	);
};

export default TreeComponent;
