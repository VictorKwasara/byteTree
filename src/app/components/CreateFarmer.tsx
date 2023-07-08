"use client";
import React, {useState,useEffect,useMemo} from 'react'
import { Box, Button, Card, Grid, Typography, TextField } from '@mui/material';
// import usePdas from '../hooks/usePda';qqqq
import {FarmerProgram, IDL } from '../../../public/programs/farmer_program';
import styles from "./styles/createFarmer.module.css"
import * as anchor from '@project-serum/anchor';
import { useAnchorWallet, useConnection } from '@solana/wallet-adapter-react';
import {
	Program,
	Wallet,
	AnchorProvider,
} from '@project-serum/anchor';
import { Connection,PublicKey } from '@solana/web3.js';
import {motion} from 'framer-motion';

type farmerAccount = {
	name: string;
	address: PublicKey;
	landCount: anchor.BN;
	treeCount: anchor.BN;
	profileNft: string;
};

const CreateFarmer = (props: {
	searchFarmer: (farmerAccount: farmerAccount) => void;
}) => {
	const [name, setName] = useState('');
	const [isLoggedIn,setIsLoggedIn] = useState(false);
	const [data, setData] = useState<{
		payer: PublicKey;
		farmerKey: PublicKey;
		landPieces: number;
	} | null>(null);

	const w = useAnchorWallet();
	const { connection } = useConnection();

	// const connection = new Connection('https://api.devnet.solana.com');

	const provider = new AnchorProvider(connection, w as Wallet, {
		commitment: 'confirmed',
	});

		const programID = new PublicKey(
			'3pEgxEH8RhxKtdx3qsvcmrZQUMxeyQisiiBAJ52FmtMx'
		);

		const farmProgram = new PublicKey(
			'CrYtrU5xK6S98iGQVnyag1XKG9vSYzw2M3Mq4JNHLGSA'
		);

		// const programID = new PublicKey(
		// 	'GKUYrzV8pu6ZNvKG4KmEMMbMeqeSJGH1vQYgk9RuoYSR'
		// );

	const program = new Program(IDL, programID, provider);
  let payer = program.provider;

	useEffect(() => {				
			(async () => {
				if (payer.publicKey) {
			console.log('Inside if satement');
			 let [farm] = anchor.web3.PublicKey.findProgramAddressSync(
					[Buffer.from('farm')],
					farmProgram
				);
			// farmer
			let [farmer] = anchor.web3.PublicKey.findProgramAddressSync(
				[Buffer.from('farmer'), payer.publicKey.toBuffer()],
				program.programId
			);

			 let [landMeta] = anchor.web3.PublicKey.findProgramAddressSync(
					[Buffer.from('landmeta'), farm.toBuffer()],
					farmProgram
				);

			let [landPiece] = anchor.web3.PublicKey.findProgramAddressSync(
				[Buffer.from('landpiece'), landMeta.toBuffer(), farmer.toBuffer()],
				program.programId
			);		

			let landP;
	        landP = await program.account.landPiece.all([{					  
						memcmp : {
							offset: 8, // Starting from the 42nd byte.
							bytes: farmer.toString(), // My base-58 encoded public key.
						},
					}]);
					console.log("Land Piece Account Is now: ", landP) ;		
					let count = 0  ;
					landP.map(x => {

						if(x.account.isPlanted != true) {
							 count ++
						}

					})				   

					  // tree = await treeProgram.account.tree.all([
						// 	{
						// 		memcmp: {
						// 			offset: 8, // Starting from the 42nd byte.
						// 			bytes: payer.publicKey.toString(), // My base-58 encoded public key.
						// 		},
						// 	},
						// ]);

						setData({
							farmerKey: farmer,
							payer: payer.publicKey,
							landPieces: count,
						});
					}			
			})() ;		
		
	},[payer.publicKey]);

	useEffect(() => {		  
		(async () => {		
			if (data !== null) {
				console.log('Inside if the data is', data);
				let farmerKey = data.farmerKey;
				let farmerState;
				farmerState = await program.account.farmer.fetchNullable(farmerKey);
				if (farmerState) {
					props.searchFarmer({
						name: farmerState.name,
						address: farmerState.address,
						landCount: farmerState.landCount,
						treeCount: farmerState.treeCount,
						profileNft: farmerState.profileNft,
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
				let farmerKey = data.farmerKey ;
				const tx = await program.methods
					.initializeFarmer(standard)
					.accounts({
							farmer:data.farmerKey,
					})
					.rpc();

					setTimeout(async () => {
						let farmerState = await program.account.farmer.fetchNullable(farmerKey);
						
						if (farmerState) {
					console.log('the farmer is,', farmerState);
					props.searchFarmer({
						name: farmerState.name,
						address: farmerState.address,
						landCount: farmerState.landCount,
						treeCount: farmerState.treeCount,
						profileNft: farmerState.profileNft,
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
				<>
					<motion.div
						animate={{
							opacity: 0,
							transition: { duration: 7 },
						}}
						initial={{ opacity: 1 }}
						className={styles.outter}
					>
						{' '}
					</motion.div>
					<motion.div
						className={styles.inner}
						animate={{
							opacity: 1,
							transition: { duration: 2 },
						}}
						initial={{ opacity: 0.6 }}
					>
						<div className={styles.div}>
							<legend className={styles.legend}>
								<Typography
									className={styles.text1}
									variant='h4'
									component='h4'
									color='#7d814c'
									fontFamily='Oswald'
									fontWeight='700px'
								>
									Search or Create Account
								</Typography>
							</legend>
							<label htmlFor='name'>
								<Typography
									className={styles.text2}
									component='h5'
									color='#1b5749'
								>
									Whats Your Nickname?
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
										background: '#1b5749',
										borderRadius:'5px'
									},
								}}
							/>
							<Button
								variant='contained'
								sx={{ color: '#7d814c', background: '#1b5749' }}
								onClick={() => {
									handleCreate();
								}}
							>
								Enter
							</Button>
						</div>
					</motion.div>
				</>
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