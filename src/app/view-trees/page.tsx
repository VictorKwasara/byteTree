'use client';
import React, { useState, useEffect } from 'react';
import { useAnchorWallet } from '@solana/wallet-adapter-react';
import { Program, Wallet, AnchorProvider } from '@project-serum/anchor';
import { Connection, PublicKey, Keypair } from '@solana/web3.js';
import * as anchor from '@project-serum/anchor';
import { TreeProgram, IDL } from '../../../public/programs/tree_program';
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

const ViewTrees = () => {
	const router = useRouter();
	const [trees, setTrees] = useState<TreeType[]>([]);
	const [ready, setReady] = useState(false);
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

	useEffect(() => {
		console.log('In useEffect');
		(async () => {
			if (payer.publicKey) {
				let [farmer] = anchor.web3.PublicKey.findProgramAddressSync(
					[Buffer.from('farmer'), payer.publicKey.toBuffer()],
					farmerProgram
				);
				console.log('farmer bytes ', farmer.toBase58());

				let t: any= await program.account.tree.all([
					{
						memcmp:{
							offset: 8,
							bytes: payer.publicKey.toString()
						}
					}
				]);

				console.log('Treees');
				console.log('Treees', t);

				if (t.length !== 0) {
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
	}, [payer.publicKey]);

	return (
		<Box className={styles.box}>
			<Grid container spacing={2}>
				{ready ? (
					trees.map((t, i) => (
						<Grid item xs={12} md={6} key={`${i} + ${t.cultivarName}`}>
							<Card sx={{ backgroundColor: '#F9F871' }} className={styles.card}>
								<Link
									href={`/tree?name=${t.cultivarName}`}
									component={NextLink}
									underline='none'
								>
									<CardActionArea sx={{ width: '100%', height: '100%' }}>
										{t.cultivarName}
									</CardActionArea>
								</Link>
							</Card>
						</Grid>
					))
				) : (
					<Grid item xs={12} md={5}>
						<Card sx={{ backgroundColor: '#F9F871' }} className={styles.card}>
							Empty
						</Card>
					</Grid>
				)}
			</Grid>
		</Box>
	);
};
export default ViewTrees;
