'use client';
import React, {useState,useEffect} from 'react';
import { useAnchorWallet } from '@solana/wallet-adapter-react';
import { Program, Wallet, AnchorProvider } from '@project-serum/anchor';
import { Connection, PublicKey, Keypair } from '@solana/web3.js';
import * as anchor from '@project-serum/anchor';
import { Tree, IDL } from '../../../public/programs/tree';
import styles from './page.module.css';
import { Link } from '@mui/material';
import NextLink from 'next/link';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import {
	Button,
	Box,
	Typography,
	CardActionArea,
	Grid,
	Card,
} from '@mui/material';

type TreeType = {
	name: String;
	count: anchor.BN;
	scarcityPoints: anchor.BN;
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

const ViewTrees = () => {
		const router = useRouter();
		const [trees, setTrees] = useState<TreeType[]>([]);
		const [ready, setReady] = useState(false);
		const w = useAnchorWallet();

		const connection = new Connection('https://api.devnet.solana.com');

		const provider = new AnchorProvider(connection, w as Wallet, {
			commitment: 'confirmed',
		});
		const farmProgram = new PublicKey(
			'6DDP3hohHprxPNUWVtwpK89QAzcB27Fk4NSCgcq368P6'
		);
		const farmerProgram = new PublicKey(
			'5LJq1WKXV2bdgsosp6wk2pgvk1Rhc75ffRLRXGZvPQWU'
		);

		const programID = new PublicKey(
			'EfYywm823JAajvTAHFv7wnKGi8M4R7BwqufaUEECxUxG'
		);

		const program = new Program(IDL, programID, provider);
		let payer = program.provider;
	

		useEffect(() => {
			(async () => {
				if(payer.publicKey){
						console.log('In useEffect');
						let [farmer] = anchor.web3.PublicKey.findProgramAddressSync(
							[Buffer.from('farmer'), payer.publicKey.toBuffer()],
							farmerProgram
						);
						console.log('farmer bytes ', farmer.toBase58());
						
						let t: any = await program.account.tree.all(
						// 	[
						// 	{
						// 		memcmp: {
						// 			offset: 32, // Discriminator.
						// 			bytes: farmer.toBase58(),
						// 		},
						// 	},
						// ]
						);
				
			      console.log('Treees', t);
	
				if (t) {
					t.map((tr: any) => {
						let tree = tr.account;
						console.log('tree is ', tree);
						let tree2: TreeType[] = trees;
						tree2.push(tree);
						setTrees(tree2);
					});
					console.log('Trees is now', trees);
					setReady(true);
				}
			}					
			})();
		}, [trees]);  
	
		return (
			<Box className={styles.box}>
				<Grid container spacing={2}>
					{ready ? (
						trees.map((t, i) => (
							<Grid item xs={12} md={6} key={`${i} + ${t.cultivarName}`}>
								{t.cultivarName}
							</Grid>
						))
					) : (
						<></>
					)}
				</Grid>
			</Box>
		);
}

export default ViewTrees