'use client';
import React, { useState, useEffect } from 'react';
import {
	Button,
	CardContent,
	CardMedia,
	Box,
	Typography,
	CardActionArea,
	Grid,
	Card,
} from '@mui/material';
import styles from './page.module.css';
import * as anchor from '@project-serum/anchor';
import { useAnchorWallet } from '@solana/wallet-adapter-react';
import { Program, Wallet, AnchorProvider } from '@project-serum/anchor';
import { Connection, PublicKey, Keypair } from '@solana/web3.js';
import { TreeProgram, IDL } from '../../../public/programs/tree_program';
import { Link } from '@mui/material';
import NextLink from 'next/link';
import { motion } from 'framer-motion';
import * as token from '@solana/spl-token';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

type cultivar = {
	creator: PublicKey;
	imageUri: String;
	name: String;
	count: anchor.BN;
	initHeight: anchor.BN;
	initWidth: anchor.BN;
	initRootArea: anchor.BN;
	initLeafArea: anchor.BN;
	scarcityPoints: anchor.BN;
	isInitialized: boolean;
};

const SelectCultivar = () => {
	const router = useRouter();

	const [cultivars, setCultivars] = useState<cultivar[]>([]);

	const [ready, setReady] = useState<boolean>(false);

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
		(async () => {
			let ct: any = await program.account.cultivar.all();

			console.log('Cultivars', ct);

			if (ct.length !== 0) {
				ct.map((ctvr: any) => {
					let c: cultivar = ctvr.account;
					// console.log('c is ', c);
					let c2: cultivar[] = cultivars;
					let pubkey = c.creator;
					console.log(pubkey);
					if (c.imageUri.toString().indexOf('https://arweave') != -1) {
						console.log('image Uri ', c.imageUri.toString());
						c2.push(c);
					}
					setCultivars(c2);
				});
				console.log('Cultivars is now', cultivars);
				setReady(true);
			}
		})();
	}, []);

	const handleCreate = (c: cultivar) => {
		if (payer.publicKey) {
			let [seedsAuthority] = anchor.web3.PublicKey.findProgramAddressSync(
				[Buffer.from('seedsauthority'), payer.publicKey.toBuffer()],
				program.programId
			);

			let [seedsBalance] = anchor.web3.PublicKey.findProgramAddressSync(
				[
					Buffer.from('seedsbalance'),
					seedsAuthority.toBuffer(),
					Buffer.from(c.name),
				],
				program.programId
			);

			(async () => {
				try {
					let sBalance = await token.getAccount(
					provider.connection,
					seedsBalance
				);
				if (sBalance.amount < 1) {
					alert!('Please get some, ' + c.name + ' seeds');
				}
				// alert!('You have, ' + sBalance.amount + ' of ' + c.name);
				  router.push(`/plant-tree?name=${c.name}`);
				}catch (e) {
					alert!('You need to purchase ' + c.name + " before planting some!");
				  router.push(`/seeds-market?name=${c.name}`);
				}
		
			})();
		}
	};

	return (
		<motion.div
			className={styles.outter}
			initial={{ x: '-105vw' }}
			animate={{ x: '0' }}
			transition={{ delay: 1 }}
		>
			<Grid container spacing={2} className={styles.grid}>
				{ready ? (
					cultivars.map((c: cultivar, i) => (
						<Grid
							className={styles.ingrid}
							item
							xs={12}
							md={5}
							key={`${i}+${c.name}`}
						>
							<Card className={styles.card} sx={{ backgroundColor: '#F9F871' }}>
								<CardActionArea
									className={styles.cardAction}
									component={Button}
									onClick={(e) => {
										e.preventDefault;
										handleCreate(c);
									}}
								>
									<CardMedia className={styles.media}>
										<div className={styles.divImage}>
											<img
												src={c.imageUri as string}
												alt={`${c.name} image`}
												className={styles.img}
											/>
										</div>
									</CardMedia>
									<CardContent className={styles.content}>
										<Typography variant='h4'>{c.name}</Typography>
										<Typography variant='body2'>
											{c.count.toString()}
										</Typography>
										<Typography variant='body2'>
											{c.scarcityPoints.toString()}
										</Typography>
									</CardContent>
								</CardActionArea>
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
		</motion.div>
	);
};

export default SelectCultivar;
