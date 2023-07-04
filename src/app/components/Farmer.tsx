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
		'3pEgxEH8RhxKtdx3qsvcmrZQUMxeyQisiiBAJ52FmtMx'
	);

	const farmProgram = new PublicKey(
		'CrYtrU5xK6S98iGQVnyag1XKG9vSYzw2M3Mq4JNHLGSA'
	);

	const programID = new PublicKey(
		'CUJ8TCeGSKKhqYtZYiBZRghTJvRRRpm9qR2ykX91N1ns'
	);

	// const setSeeds = (amount: anchor.BN) => {
	// 	console.log('Setting seeds amount');
	// 	setAmount(amount);
	//   console.log('The amount is now');
	// };

	return (
		<Box className={styles.box}>
			<div className={styles.content}>
				<div className={styles.imgSection}>
					<div className={styles.image}>
						<img className={styles.img} src={props.profileNft}></img>
					</div>
				</div>
				<Card className={styles.card}>
					<Typography
						variant='h4'
						color='text.secondary'
						className={styles.text1}
					>
						Welcome {props.name}
					</Typography>
					<Typography
						className={styles.text2}
						variant='body1'
						color='secondary.main'
					>
						You have {props.landCount.toString()} pieces of land
					</Typography>
					<Typography
						color='secondary.main'
						className={styles.text2}
						variant='body1'
					>
						You have planted {props.treeCount.toString()} trees
					</Typography>
				</Card>
			</div>
			{/* <Card className={styles.dv}>
				<Actions cultivarName={props.cultivarName} setSeeds={setSeeds} />
			</Card> */}
		</Box>
	);
};

export default Farmer;
