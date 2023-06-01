'use client';
import React from 'react';
// import * as anchor from '@project-serum/anchor';
import { Farmer, IDL } from '../../../public/programs/farmer';
import { Connection,} from '@solana/web3.js';
import { Box, Button,Card,Grid,Typography} from '@mui/material';
import styles from './page.module.css';
import {
	AnchorWallet,
	useWallet,
	useAnchorWallet,
} from '@solana/wallet-adapter-react';
import {
	Wallet,
	AnchorProvider,
} from '@project-serum/anchor';
import CreateFarmer from '../components/CreateFarmer';
import CreateCultivar from '../components/CreateCultivar';
import PlantTree from '../components/PlantTree';
import ViewTrees from '../components/ViewTrees';
const connection = new Connection('https://api.devnet.solana.com');

const Actions = () => {
	const {
		select,
		wallets,
		publicKey,
		wallet,
		disconnect,
		signTransaction,
		signAllTransactions,
	} = useWallet();

	// const wallet =   useWallet()https://api.devnet.solana.comhttp://localhost:8899
	
	const w = useAnchorWallet();

	const provider = new AnchorProvider(connection, w as Wallet, {
		commitment: 'confirmed',
	});
	// const {} = usePdas(provider);

	// const programID = new PublicKey(
	// 	'5LJq1WKXV2bdgsosp6wk2pgvk1Rhc75ffRLRXGZvPQWU'
	// );

	// const program = new Program(IDL, programID, provider);
	
	const handleCreate = async () => {
		
	};
	return (
		<Box className={styles.box}>
			<Grid container spacing={2}>
				<Grid item xs={12} md={6}>
					<CreateCultivar/>
				</Grid>
				<Grid item xs={12} md={6}>					
						<CreateFarmer/>				
				</Grid>
				<Grid item xs={12} md={6}>
					<PlantTree/>
				</Grid>
				<Grid item xs={12} md={6}>
				<ViewTrees/>
				</Grid>
			</Grid>		
		</Box>
	);
};

export default  Actions;
