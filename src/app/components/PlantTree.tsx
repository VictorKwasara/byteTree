import React, { useState } from 'react';
import { Box,CardActionArea, Button, Card, Grid, Typography } from '@mui/material';
// import usePdas from '../hooks/usePda';qqqq
import { Farmer, IDL } from '../../../public/programs/farmer';
import styles from './styles/plantTree.module.css';
import * as anchor from '@project-serum/anchor';
import { useAnchorWallet } from '@solana/wallet-adapter-react';
import { Program, Wallet, AnchorProvider } from '@project-serum/anchor';
import { Connection, PublicKey } from '@solana/web3.js';
import Link from 'next/link';

const PlantTree = () => {
	return (
		<Card className={styles.card}>
			<Link href="/plant-tree">
				<CardActionArea className={styles.card}>
				<div className={styles.outter}></div>
				<Typography variant='h3' className={styles.type}>
					Plant a tree
				</Typography>
			</CardActionArea>
			</Link>		
		</Card>
	);
};

export default PlantTree;
