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
import ActionsCard from '../components/ActionsCard';
import PlantTree from '../components/PlantTree';
import ViewTrees from '../components/ViewTrees';
import BuySeed from '../components/BuySeed';
import FarmerComponent from '../components/Farmer';
import { motion } from 'framer-motion';
import Footer from "../components/Footer"

const connection = new Connection('https://api.devnet.solana.com');

type farmerAccount = {
	name: String;
	address: PublicKey;
	landCount: anchor.BN;
	treeCount: anchor.BN;
	profileNft: string ;
};

const content = [
	{
		source: '/d.jpg',
		alt: 'tree image',
		header: 'Create a Cultivar',
		body: 'You can create your own tree type, that other farmers can buy an	grow on their land.Give your tree a attributes that are unique.',
		key: '001h',
		href: '/create-cultivar',
	},
	{
		source: '/d2.jpg',
		alt: 'tree image',
		header: 'Plant Tree',
		body: 'Select a cultivar, Buy the associated Seeds, Create a tree, Plant the tree on your land',
		key: '0011h',
		href: '/select-cultivar',
	},
	{
		source: '/d3.jpg',
		alt: 'tree image',
		header: 'View My Trees',
		body: 'View My trees, Watch my trees, Add Nutrients, Harvest Fruits',
		key: '0012h',
		href: '/view-trees',
	},
	{
		source: '/seeds.jpg',
		alt: 'tree image',
		header: 'Buy Seeds',
		body: 'View the seeds that are available at the Market.',
		key: '0012seeds',
		href: '/seeds-market',
	},
];

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
		<div>
			<CreateFarmer searchFarmer={searchFarmer} />
			<motion.div
				animate={{
					opacity: 1,			
					transition: { duration: 3, delay: 1 },
				}}
				initial={{ opacity: 0 }}
				className={styles.box}
			>
				<Grid container spacing={2} className={styles.grid}>
					<Grid className={styles.ingrid} item xs={12} md={12}>						
							<motion.div
								animate={{
									opacity: farmer ? 1 : 0,
									transition: { duration: 2 },
								}}
								initial={{ opacity: 0 }}
								className={styles.farmer}							
							>
							{ farmer ?  <FarmerComponent
									name={farmer?.name}
									landCount={farmer?.landCount}
									treeCount={farmer?.treeCount}
									cultivarName={null}
									profileNft={farmer?.profileNft}
								/>: (
							<></>
						  )}
						</motion.div>						 
					</Grid>
					{content.map(({ source, alt, header, body, key, href }, i) => (
						<Grid className={styles.ingrid} item xs={12} key={key + i} md={3}>
							<ActionsCard
								source={source}
								alt={alt}
								header={header}
								body={body}
								href={href}
							/>
						</Grid>
					))}
				</Grid>
			</motion.div>
			<div className={styles.footer}>
				<Footer></Footer>
			</div>			
		</div>
	);
};

export default Actions;
