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

type farmerAccount = {
	name: string,
	address: PublicKey,
	landCount: anchor.BN,
	treeCount: anchor.BN,
};


const CreateFarmer = (props: {
	searchFarmer: (farmerAccount: farmerAccount) => void;
}) => {
	const [name, setName] = useState('');
	const [loggedIn, setLoggedIn] = useState(false) ;

	const w = useAnchorWallet();

	const connection = new Connection('https://api.devnet.solana.com');

	const provider = new AnchorProvider(connection, w as Wallet, {
		commitment: 'confirmed',
	});

	const programID = new PublicKey(
		'FEa3hjWEQEmuUgZtDQ1btp1Y2EKVhChqCzADTenewCsF'
	);

	const program = new Program(IDL, programID, provider);
	let payer = program.provider;

	const handleCreate = async () => {
		let standard = name.trim().toLowerCase();
		try {
			if (payer.publicKey) {
				// farmer
				let [farmer] = anchor.web3.PublicKey.findProgramAddressSync(
					[Buffer.from('farmer'), payer.publicKey.toBuffer()],
					program.programId
				);
				let farmerState;
				farmerState = await program.account.farmer.fetchNullable(farmer);
				if (!farmerState) {
					const tx = await program.methods
						.initializeFarmer(standard)
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
				if (farmerState) {
					console.log('the farmer is,', farmerState);
					props.searchFarmer({
						name: farmerState.name,
						address: farmerState.address,
						landCount: farmerState.landCount,
						treeCount: farmerState.treeCount,
					});
					setLoggedIn(true)
				}
			} else {
				throw 'No pubkey provided';
			}
		} catch (e) {
			console.log(e);
		}

		setName('');
	};

	return (
		<>
			{!loggedIn ? (
				<div className={styles.outter}>
					<div className={styles.div}>
						<legend className={styles.legend}>
							<Typography
								className={styles.text1}
								variant='h4'
								component='h4'
								color='secondary'
							>
								Search or Create Account
							</Typography>
						</legend>
						<label htmlFor='name'>
							<Typography
								className={styles.text2}
								component='h5'
								color='secondary'
							>
								Whats your Name?
							</Typography>
						</label>
						<TextField
							id='name'
							variant='filled'
							label='Name'
							className={styles.textfield}
							value={name}
							onChange={(e) => setName(e.target.value)}
							required
							inputProps={{
								sx: {
									margin: '0px',
									backgroundColor: '#F9F871',
								},
							}}
						/>
						<Button
							variant='contained'
							sx={{ color: '#F9F871' }}
							onClick={() => {
								handleCreate();
							}}
						>
							Enter
						</Button>
					</div>
				</div>
			) : (
				<></>
			)}
		</>
	);
};

export default CreateFarmer


//{!loggedIn? ( ) : (
			// 	<>
			// 		<Typography variant='h3'>Hello {farmer.name}</Typography>
			// 		<Typography variant='body1' component='p' color='secondary.main'>
			// 			You have {farmer.treeCount.toString()} trees planted
			// 		</Typography>
			// 		<Typography variant='body1' component='p' color='secondary.main'>
			// 			You have {farmer.landCount.toString()} land pieces planted
			// 		</Typography>
			// 	</>
			// )}