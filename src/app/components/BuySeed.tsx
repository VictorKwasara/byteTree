import React, { useState } from 'react';
import * as anchor from '@project-serum/anchor';
import { Farmer, IDL } from '../../../public/programs/farmer';
import { Connection, PublicKey } from '@solana/web3.js';
import {
	Box,
	Button,
	Card,
	Stack,
	Typography,
	Grid,
	CardActionArea,
	Link,
} from '@mui/material';
import styles from './styles/buyseed.module.css';
import NextLink from 'next/link';

const BuySeed = () => {
	return (
		<Card className={styles.card}>
			<Link href='/select-cultivar' component={NextLink} underline='none'>
				<CardActionArea className={styles.cardAction}>
					<Typography variant="h5">Buy Seed</Typography>
				</CardActionArea>
			</Link>
		</Card>
	);
};

export default BuySeed;
