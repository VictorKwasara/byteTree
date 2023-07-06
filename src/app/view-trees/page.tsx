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
import Image from 'next/image'
import {
	Button,
	Box,
	Typography,
	CardActionArea,
	Grid,
	Card,
	CardMedia,
} from '@mui/material';

type TreeType = {
	authority: PublicKey;
	cultivarName: String;
	nftUri: string,
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
	lastConsumedUsed: boolean ;
	location: number[] ;
	createdDate: String;
	isPlanted: boolean
};

const ViewTrees = () => {
	const router = useRouter();
	const [trees, setTrees] = useState<
		{ account: TreeType; publicKey: PublicKey }[]
	>([]);
	const [ready, setReady] = useState(false);
	const w = useAnchorWallet();

	const connection = new Connection('https://api.devnet.solana.com');

	const provider = new AnchorProvider(connection, w as Wallet, {
		commitment: 'confirmed',
	});
		const farmerProgram = new PublicKey(
			'3pEgxEH8RhxKtdx3qsvcmrZQUMxeyQisiiBAJ52FmtMx'
		);

		const farmProgram = new PublicKey(
			'CrYtrU5xK6S98iGQVnyag1XKG9vSYzw2M3Mq4JNHLGSA'
		);

		const programID = new PublicKey(
			'CUJ8TCeGSKKhqYtZYiBZRghTJvRRRpm9qR2ykX91N1ns'
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

				let t = await program.account.tree.all([
					{
						memcmp:{
							offset: 8,
							bytes: payer.publicKey.toString()
						}
					}
				]);
			
				let planted = t.filter((v) =>{
					console.log("is true =>", v);
					return v.account.isPlanted == true
				});
				console.log('Trees', t);
	      console.log('plantes Trees', planted);

				if (planted.length !== 0) {
					planted.map((tr: any) => {
						// let tree = tr.account;
						console.log('tree is ', tr);
						let tree2 = trees;
						tree2.push(tr);
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
						<Grid item xs={12} md={6} key={`${i} + ${t.account.cultivarName}`}>
							<Card sx={{ backgroundColor: '#F9F871' }} className={styles.card}>
								<Link
									href={`/tree?name=${t.account.cultivarName}&tree=${t.publicKey.toString()}`}
									component={NextLink}
									underline='none'
									className={styles.link}
								>
									<CardMedia>
										<Image
											alt='cultivar nft'
											src={t.account.nftUri}
											width='350'
											height='100'
										/>
									</CardMedia>
									<CardActionArea
										sx={{ width: '100%', height: '100%' }}
										className={styles.action}
									>
										<Typography
											variant='h5'
											className={styles.name}
											fontWeight='600'
										>
											{t.account.cultivarName}
										</Typography>
										<Grid container className={styles.gcontainer}>
											<Grid item sx={{ width: '60px' }}>
												<Typography variant='body1' className={styles.health}>
													Health
												</Typography>
											</Grid>
											<Grid item sx={{ width: '60px' }}>
												<Typography variant='body1' className={styles.health}>
													{t.account.health.toString()}
												</Typography>
											</Grid>
											<Grid
												item
												sx={{ width: `calc(${t.account.health }* 2px + 1px)` }}
											>
												<div
													className={styles.div}
													style={{
														backgroundColor:
															(t.account.health as number) > 50
																? 'green'
																: 'red',
													}}
												></div>
											</Grid>
										</Grid>
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
