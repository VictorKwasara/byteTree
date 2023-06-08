"use client";
import React, {useState,useEffect,useMemo} from 'react'
import { Box, Button, Card, Grid, Typography, TextField } from '@mui/material';
// import usePdas from '../hooks/usePda';qqqq
import { Farmer, IDL } from '../../../public/programs/farmer';
import styles from "./styles/createFarmer.module.css"
import * as anchor from '@project-serum/anchor';
import { useAnchorWallet, useConnection } from '@solana/wallet-adapter-react';
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
	const [isLoggedIn,setIsLoggedIn] = useState(false);
	const [data, setData] = 
	 useState<{
		payer:PublicKey,
		farmer: PublicKey
	}|null>(null);

	const w = useAnchorWallet();
	const { connection } = useConnection();

	// const connection = new Connection('https://api.devnet.solana.com');

	const provider = new AnchorProvider(connection, w as Wallet, {
		commitment: 'confirmed',
	});

	const programID = new PublicKey(
		'FEa3hjWEQEmuUgZtDQ1btp1Y2EKVhChqCzADTenewCsF'
	);

	const program = new Program(IDL, programID, provider);
  let payer = program.provider;

	useEffect(() => {		
		if (payer.publicKey) {
			console.log('Inside if satement');
			// farmer
			let [farmer] = anchor.web3.PublicKey.findProgramAddressSync(
				[Buffer.from('farmer'), payer.publicKey.toBuffer()],
				program.programId
			);
			setData({
				farmer: farmer,
				payer: payer.publicKey,
			});
		}
	},[payer.publicKey]);

	useEffect(() => {		  
		(async () => {		
			if (data !== null) {
				console.log('Inside if the data is', data);
				let farmer = data.farmer;
				let farmerState;
				farmerState = await program.account.farmer.fetchNullable(farmer);
				if (farmerState) {
					props.searchFarmer({
						name: farmerState.name,
						address: farmerState.address,
						landCount: farmerState.landCount,
						treeCount: farmerState.treeCount,
					});
					setIsLoggedIn(true);
				}
			}
		})();
	}, [data]);

	const handleCreate = async () => {
		let standard = name.trim().toLowerCase();
		try {
			if (data !== null) {
				let farmer = data.farmer ;
				const tx = await program.methods
					.initializeFarmer(standard)
					.accounts({
							farmer:data.farmer,
					})
					.rpc();

					setTimeout(async () => {
						let farmerState = await program.account.farmer.fetchNullable(farmer);
						
						if (farmerState) {
					console.log('the farmer is,', farmerState);
					props.searchFarmer({
						name: farmerState.name,
						address: farmerState.address,
						landCount: farmerState.landCount,
						treeCount: farmerState.treeCount,
					});
					setIsLoggedIn(true);
			 	}
         else {
				throw 'No pubkey provided';
			   }
					}, 5000);
				}
				
		} catch (e) {
			console.log(e);
		}
		setName('');
	};

	return (
		<>
			{!isLoggedIn ? (
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