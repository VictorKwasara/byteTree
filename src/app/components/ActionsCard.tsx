'use client';
import React, { useState } from 'react';
import { Box,CardContent,CardMedia, Button, Card, Grid, Typography ,CardActionArea} from '@mui/material';
// import usePdas from '../hooks/usePda';qqqq
import { FarmerProgram, IDL } from '../../../public/programs/farmer_program';
import styles from './styles/actionsCard.module.css';
import * as anchor from '@project-serum/anchor';
import { useAnchorWallet } from '@solana/wallet-adapter-react';
import { Program, Wallet, AnchorProvider } from '@project-serum/anchor';
import { Connection, PublicKey } from '@solana/web3.js';
import Image from 'next/image';
import image from '../images/tree.jpg';
import { Link } from '@mui/material';
import NextLink from 'next/link';

const CreateCultivar = (props:{source:string, alt:string, header: string, body: string, href: string}) => {
	return (
		<div className={styles.outter}>
			<Card
				sx={{
					backgroundImage:
						'radial-gradient(circle, #48422f, #413e2b, #3b3a27, #343623, #2e321f);',
				}}
			>
				<Link href={props.href} component={NextLink} underline='none'>
					<CardActionArea>
						<CardMedia>
							<Image
								src={props.source}
								alt={props.alt}
								width='275'
								height='140'
							/>
						</CardMedia>
						<CardContent>
							<Typography
								gutterBottom
								variant='h5'
								component='h5'
								color='text.secondary'
							>
								{props.header}
								{/*  */}
							</Typography>
							<Typography variant='body2' color='secondary.main' component='p'>
								{props.body}
								{/* */}
							</Typography>
						</CardContent>
					</CardActionArea>
				</Link>
			</Card>
		</div>
	);
};

export default CreateCultivar;
