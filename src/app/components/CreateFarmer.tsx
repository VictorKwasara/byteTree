"use client";
import React, {useState} from 'react'
import { Box, Button, Card, Grid, Typography, TextField } from '@mui/material';
// import usePdas from '../hooks/usePda';qqqq
import { Farmer, IDL } from '../../../public/programs/farmer';
import styles from "./styles/createFarmer.module.css"
import * as anchor from '@project-serum/anchor';
import {
	useAnchorWallet,
} from '@solana/wallet-adapter-react';
import {
	Program,
	Wallet,
	AnchorProvider,
} from '@project-serum/anchor';
import { Connection,PublicKey } from '@solana/web3.js';

let  farmerAccount:{
	name: string,
	address: PublicKey,
	landCount: anchor.BN,
	treeCount: anchor.BN,
};
const CreateFarmer = () => {
	const [name, setName] = useState('');
	const [farmer, setFarmer] = useState(farmerAccount);
	const w = useAnchorWallet();

	const connection = new Connection('https://api.devnet.solana.com');

	const provider = new AnchorProvider(connection, w as Wallet, {
		commitment: 'confirmed',
	});

	const programID = new PublicKey(
		'5LJq1WKXV2bdgsosp6wk2pgvk1Rhc75ffRLRXGZvPQWU'
	);

	const program = new Program(IDL, programID, provider);
	let payer = program.provider;
  
	const handleCreate = async () => {   
		  
    try {
			if (payer.publicKey) {
	// farmer
        let [farmer] = anchor.web3.PublicKey.findProgramAddressSync(
          [Buffer.from('farmer'), payer.publicKey.toBuffer()],
          program.programId
        );
				let farmerState; 
				farmerState = await program.account.farmer.fetchNullable(farmer);
				if (!farmerState){
					 const tx = await program.methods
							.initializeFarmer(name)
							.accounts({
								farmer,
							})
							.rpc();
							
				setTimeout(async () => {
				farmerState = await program.account.farmer.fetchNullable(farmer);
					console.log('IIIINNN The farm is now ', farmerState);
					if (farmerState) {
						console.log('the farmer is,', farmerState);
					} else {
						console.log('else state is', farmerState);
					}
			   }, 5000);
				}
				if (farmerState){
				console.log('the farmer is,', farmerState);					
				setFarmer({
					name: farmerState.name,
					address: farmerState.address,
					landCount: farmerState.landCount,
					treeCount: farmerState.treeCount,
				});	
			}											

   } else {
       throw "No pubkey provided" ;
   }

  }catch(e) {
   console.log(e);
  }

  setName(''); 
	};

	
	return (
		<div className={styles.outter}>
			{!farmer ? (
				<>
					<legend className={styles.legend}>
						<Typography component='h3'> Enter or Create account </Typography>
					</legend>
					<label htmlFor='name'>
						<Typography component='h5'>Whats your Name?</Typography>
					</label>
					<TextField
						color='info'
						id='name'
						label='Name'
						value={name}
						onChange={(e) => setName(e.target.value)}
						required
					/>
					<Button
						onClick={() => {
							handleCreate();
						}}
					>
						Enter Name
					</Button>
				</>
			) : (
				<>
					<Typography variant='h3'>Hello {farmer.name}</Typography>
					<Typography variant='body1' component='p' color='secondary.main'>
						You have {farmer.treeCount.toString()} trees planted
					</Typography>
					<Typography variant='body1' component='p' color='secondary.main'>
						You have {farmer.landCount.toString()} land pieces planted
					</Typography>
				</>
			)}
		</div>
	);
}

export default CreateFarmer