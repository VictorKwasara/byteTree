import React, {useState} from 'react'
import { Box, Button, Card, Grid,Typography } from '@mui/material';
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

const CreateFarmer = () => {
	const [name, setName] = useState('');
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

		const tx = await program.methods
			.initializeFarmer(name)
			.accounts({
				farmer,
			})
			.rpc();

			// setFarmer()
   } else {
       throw "No pubkey provided" ;
   }

  }catch(e) {
   console.log(e);
 }
	};
	return (
		<div className={styles.outter}>
			<legend className={styles.legend}>
				<Typography component='h3'> Enter or Create account </Typography>
			</legend>
			<label htmlFor='name'>
				<Typography component='h5'>Whats your Name?</Typography>
			</label>
			<input
				type='text'
				required
				value={name}
				onChange={(e) => setName(e.target.value)}
				name='name'
				id='name'
			/>
			<Button
				onClick={() => {
					handleCreate;
				}}
			>
			 Enter Name
			</Button>
		</div>
	);
}

export default CreateFarmer