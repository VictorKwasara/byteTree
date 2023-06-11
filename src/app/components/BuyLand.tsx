import React, { useState } from 'react';
import * as anchor from '@project-serum/anchor';
import { Farmer, IDL } from '../../../public/programs/farmer';
import { Connection, PublicKey } from '@solana/web3.js';
import { Box, Button, Card, Stack, Typography, Grid ,CardActionArea,Link} from '@mui/material';
import styles from './styles/buyland.module.css';
import NextLink from "next/link"
import { useAnchorWallet } from '@solana/wallet-adapter-react';
import { Program, Wallet, AnchorProvider } from '@project-serum/anchor';


const BuyLand = () => {

	const w = useAnchorWallet();
	// const { connection } = useConnection();

	const connection = new Connection('https://api.devnet.solana.com');

	const provider = new AnchorProvider(connection, w as Wallet, {
		commitment: 'confirmed',
	});

	const farmProgram = new PublicKey(
		'6DDP3hohHprxPNUWVtwpK89QAzcB27Fk4NSCgcq368P6'
	);

	const programID = new PublicKey(
		'FEa3hjWEQEmuUgZtDQ1btp1Y2EKVhChqCzADTenewCsF'
	);

	const program = new Program(IDL, programID, provider);
	let payer = program.provider;

const handleClick =  async () => {
	
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

				let [vault] = anchor.web3.PublicKey.findProgramAddressSync(
					[Buffer.from('carbonvault')],
					farmProgram
        );

				let landP;
				landP = await program.account.landPiece.all([
					{
						memcmp: {
							offset: 8, // Starting from the 42nd byte.
							bytes: farmer.toString(), // My base-58 encoded public key.
						},
					},
				]);

				console.log('Land Piece Account Is now: ', landP);

				const tx = await program.methods
					.buyLand()
					.accounts({
						farm,
						farmer,
						landMeta,
						landPiece,
						vault,
						farmProgram,
					})
					.rpc();

					console.log('Your transaction signature', tx);

				// setData({
				// 	farmer: farmer,
				// 	payer: payer.publicKey,
				// 	landPieces: landP.length,
				// });
			}	


	};


  return (
    <Card className={styles.card}>   		
				<CardActionArea component={Button} onClick={handleClick} className={styles.cardArea}>
					 <Typography variant="h5"  className={styles.type}>Buy Land</Typography>
				</CardActionArea>			
		</Card>
  )
}

export default BuyLand