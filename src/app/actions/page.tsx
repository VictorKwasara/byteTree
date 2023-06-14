'use client';
import React, { useState } from 'react';
import * as anchor from '@project-serum/anchor';
import { FarmerProgram, IDL } from '../../../public/programs/farmer_program';
import { Connection, PublicKey } from '@solana/web3.js';
import {
	Box,
	Button,
	Card,
	Stack,
	Typography,
	MenuList,
	Grid,
	MenuItem,
	Paper,
} from '@mui/material';
import styles from './page.module.css';
import {
	AnchorWallet,
	useWallet,
	useAnchorWallet,
} from '@solana/wallet-adapter-react';
import { Wallet, AnchorProvider } from '@project-serum/anchor';
import CreateFarmer from '../components/CreateFarmer';
import CreateCultivar from '../components/CreateCultivar';
import ActionsCard from '../components/Actions';
import PlantTree from '../components/PlantTree';
import ViewTrees from '../components/ViewTrees';
import BuySeed from '../components/BuySeed';
import FarmerComponent from '../components/Farmer';
const connection = new Connection('https://api.devnet.solana.com');

type farmerAccount = {
	name: String;
	address: PublicKey;
	landCount: anchor.BN;
	treeCount: anchor.BN;
	
};

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
	const [farmer, setFarmer] = useState<farmerAccount | null>(null);

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

	const searchFarmer = (farmerAccount: farmerAccount) => {
		console.log('clicked');
		setFarmer(farmerAccount);
	};
	return (
		<Box className={styles.box}>
			<CreateFarmer searchFarmer={searchFarmer} />
			<Grid container spacing={2} className={styles.grid}>
				<Grid className={styles.ingrid} item xs={12} md={12}>
					{farmer ? (
						<FarmerComponent
							name={farmer?.name}
							landCount={farmer?.landCount}
							treeCount={farmer?.treeCount}
							cultivarName={null}
						/>
					) : (
						<></>
					)}
				</Grid>
				<Grid className={styles.ingrid} item xs={12} md={3}>
					<CreateCultivar />
				</Grid>
				<Grid className={styles.ingrid} item xs={12} md={3}>
					<PlantTree />
				</Grid>
				<Grid className={styles.ingrid} item xs={12} md={3}>
					<ViewTrees />
				</Grid>
				{/* <Grid className={styles.ingrid} item xs={12} md={2}>
				</Grid> */}
				<Grid className={styles.ingrid} item xs={12} md={3}>
					<BuySeed/>
				</Grid>
			</Grid>
		</Box>
	);
};

export default Actions;
