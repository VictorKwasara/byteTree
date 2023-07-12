import React, { useState, useEffect } from 'react';
import * as anchor from '@project-serum/anchor';
import { Box, Button, Card, Stack, Typography, Grid } from '@mui/material';
import styles from './styles/farmer.module.css';
import { Connection, PublicKey, Keypair } from '@solana/web3.js';
import { useAnchorWallet } from '@solana/wallet-adapter-react';
import { Program, Wallet, AnchorProvider } from '@project-serum/anchor';
import { TreeProgram, IDL } from '../../../public/programs/tree_program';
import Actions from './Actions';

const Farmer = (props: {
	name: String;
	landCount: anchor.BN;
	treeCount: anchor.BN;
	cultivarName: String | null;
	profileNft: string;
}) => {
	// const [data, setData] = useState<{
	// 	payer: PublicKey;
	// 	farmer: PublicKey;
	// } | null>(null);
	const w = useAnchorWallet();

	const connection = new Connection('https://api.devnet.solana.com');

	const provider = new AnchorProvider(connection, w as Wallet, {
		commitment: 'confirmed',
	});
const farmerProgram = new PublicKey(
	'9CWoSJWQZaNiZ83cqEer79u4MtZdfo8RRnspJcDnsZcu'
);

const farmProgram = new PublicKey(
	'xFUDB75wmPfzua8VgnSLrnNH18Ve4xztakzfBVyURob'
);

const programID = new PublicKey('8qxZgcFjdoJSwJYnvMMgR1ACyH24oFTBcaw8LSrAkiic');

	return (
		<Box className={styles.box}>
			<div className={styles.content}>
				<div className={styles.imgSection}>
					<div className={styles.image}>
						<img className={styles.img} src={props.profileNft}></img>
					</div>
				</div>
				<Card className={styles.card}>
					<Grid container  className={styles.grid}>
						<Grid item className={styles.item} mt={1}>
							<Typography
								variant='h4'
								color='text.secondary'
								className={styles.text1}
								fontFamily='Oswald'
								fontWeight='700'
							>
								Welcome {props.name}
							</Typography>
						</Grid>
						<Grid item className={styles.item}>
							<Typography
								className={styles.text2}
								variant='body1'
								color='secondary.main'
							>
								You have {props.landCount.toString()} pieces of land unplanted!
							</Typography>
							<Typography
								color='secondary.main'
								className={styles.text2}
								variant='body1'
							>
								You have planted {props.treeCount.toString()} trees
							</Typography>
						</Grid>
					</Grid>
				</Card>
			</div>
		</Box>
	);
};

export default Farmer;
