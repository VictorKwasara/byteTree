'use client';
import React, { useState, useEffect } from 'react';
import {
	Button,
	Box,
	Typography,
	CardActionArea,
	Grid,
	Card,
} from '@mui/material';

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
		<div>
			{ready && tree ? (
				<Grid container spacing={2}>
					<Grid item xs={8} md={4}>
						<Card className={styles.card}>
							<Typography>name: {tree.cultivarName}</Typography>
							<Typography>age: {tree.age.toString()}</Typography>
							<Typography>health: {tree.health.toString()}</Typography>
							<Typography>
								is alive: {tree?.isAlive ? 'true' : 'false'}
							</Typography>
							<Typography>height: {tree?.height.toString()}</Typography>
							<Typography>width: {tree?.girth.toString()}</Typography>
							<Typography>
								next_maturation:
								{tree?.nextFruitMaturaturationTime.toString()}
							</Typography>
							<Typography>
								expected fruit: {tree?.expectedFruitCount.toString()}{' '}
							</Typography>
						</Card>
					</Grid>
					<Grid item xs={8} md={4}>
						{name? <TreeActions cultivarName={name} />: <></>}
					</Grid>
					<Grid item xs={8} md={4}>
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
