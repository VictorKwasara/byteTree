'use client';
import React, { useState } from 'react';
import {
	Box,
	CardActionArea,
	Button,
	Card,
	Grid,
	Typography,
} from '@mui/material';
// import usePdas from '../hooks/usePda';qqqq
import { Farmer, IDL } from '../../../public/programs/farmer';
import styles from './styles/plantTree.module.css';
import * as anchor from '@project-serum/anchor';
import { useAnchorWallet } from '@solana/wallet-adapter-react';
import { Program, Wallet, AnchorProvider } from '@project-serum/anchor';
import { Connection, PublicKey } from '@solana/web3.js';
import { Link } from '@mui/material';
import NextLink from 'next/link';

const PlantTree = () => {
	return (
		<Card className={styles.card}>
			<Link href='/select-cultivar' component={NextLink} underline='none'>
				<CardActionArea className={styles.cardAction}>
					<div className={styles.outter}></div>
					<Box className={styles.typeBox}>
						<Typography variant='h4' color="text.secondary" className={styles.type}>
							Plant a tree
						</Typography>
						<Typography variant='body1' color="secondary.main" component='p' className={styles.body}>
							Select a cultivar, Buy the associated Seeds, Create a tree, Plant
							the tree on your land
						</Typography>
					</Box>
				</CardActionArea>
			</Link>
			
		</Card>
	);
};

export default PlantTree;
