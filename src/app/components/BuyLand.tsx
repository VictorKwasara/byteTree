import React, { useState } from 'react';
import * as anchor from '@project-serum/anchor';
import { Farmer, IDL } from '../../../public/programs/farmer';
import { Connection, PublicKey } from '@solana/web3.js';
import { Box, Button, Card, Stack, Typography, Grid ,CardActionArea,Link} from '@mui/material';
import styles from './styles/buyland.module.css';
import NextLink from "next/link"

const BuyLand = () => {
  return (
    <Card className={styles.card}>    
			<Link href='/select-cultivar' component={NextLink} underline='none'>
				<CardActionArea className={styles.cardArea}>
					 <Typography variant="h5">Buy Land</Typography>
				</CardActionArea>
			</Link>
		</Card>
  )
}

export default BuyLand