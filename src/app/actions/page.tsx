'use client';
import React, {useState} from 'react';
import * as anchor from '@project-serum/anchor';
import { Farmer, IDL } from '../../../public/programs/farmer';
import { Connection, PublicKey } from '@solana/web3.js';
import { Box, Button,Card,Stack,Typography} from '@mui/material';
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

type farmerAccount = {
	name: string;
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
	const [farmer, setFarmer] = useState<farmerAccount>();

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
			<Stack
				className={styles.stack}
				direction={{ xs: 'column', md: 'row' }}
				spacing={{ xs: 1, sm: 2, md: 4 }}
			>
				<CreateCultivar />

				<PlantTree />

				<ViewTrees />
			</Stack>
		</Box>
	);
};

export default  Actions;
