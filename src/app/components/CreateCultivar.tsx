import React, { useState } from 'react';
import { Box,CardContent,CardMedia, Button, Card, Grid, Typography ,CardActionArea} from '@mui/material';
// import usePdas from '../hooks/usePda';qqqq
import { Farmer, IDL } from '../../../public/programs/farmer';
import styles from './styles/createCultivar.module.css';
import * as anchor from '@project-serum/anchor';
import { useAnchorWallet } from '@solana/wallet-adapter-react';
import { Program, Wallet, AnchorProvider } from '@project-serum/anchor';
import { Connection, PublicKey } from '@solana/web3.js';
import Image from 'next/image';
import image from '../images/tree.jpg';
import { Link } from '@mui/material';
import NextLink from 'next/link';

const CreateCultivar = () => {
	return (
		<div className={styles.outter}>
			<Card sx={{ backgroundColor: '#fff' }}>
				<Link href='/create-cultivar' component={NextLink} underline='none'>
					<CardActionArea color='#fff'>
						<CardMedia>
							<Image
								src='/d.jpg'
								alt='a tree with a sunrise background'
								width='200'
								height='140'
							/>
						</CardMedia>
						<CardContent>
							<Typography gutterBottom variant='h5' component='h5'>
								Create a cultivar
							</Typography>
							<Typography variant='body2' color='text.secondary' component='p'>
								You can create your own tree type, that other farmers can buy an
								grow on their land.Give your tree a attributes that are unique.
							</Typography>
						</CardContent>
					</CardActionArea>
				</Link>
			</Card>
		</div>
	);
};

export default CreateCultivar;
