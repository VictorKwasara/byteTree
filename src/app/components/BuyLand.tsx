import React, { useState, useEffect } from 'react';
import * as anchor from '@project-serum/anchor';
import { FarmerProgram, IDL } from '../../../public/programs/farmer_program';
import { FarmProgram, IDL as fIDL } from '../../../public/programs/farm_program';
import { Connection, PublicKey } from '@solana/web3.js';
import { Box, Button, Card, Stack, Typography, Grid ,CardActionArea,Link} from '@mui/material';
import styles from './styles/buyland.module.css';
import NextLink from "next/link"
import { useAnchorWallet } from '@solana/wallet-adapter-react';
import { Program, Wallet, AnchorProvider } from '@project-serum/anchor';
import {motion} from 'framer-motion';


const BuyLand = (props: {
	landCount: anchor.BN;
	setLandPiece: (tree: anchor.web3.PublicKey) => void;
}) => {
	const w = useAnchorWallet();
	// const { connection } = useConnection();

	const connection = new Connection('https://api.devnet.solana.com');

	const provider = new AnchorProvider(connection, w as Wallet, {
		commitment: 'confirmed',
	});

	const farmProgramID = new PublicKey(
		'CrYtrU5xK6S98iGQVnyag1XKG9vSYzw2M3Mq4JNHLGSA'
	);

	const programID = new PublicKey(
		'3pEgxEH8RhxKtdx3qsvcmrZQUMxeyQisiiBAJ52FmtMx'
	);

	const program = new Program(IDL, programID, provider);
	const fp = new Program(fIDL, farmProgramID, provider);

	let payer = program.provider;

	useEffect(() => {
		(async () => {
			if (payer.publicKey != null) {
					let [farmer] = anchor.web3.PublicKey.findProgramAddressSync(
						[Buffer.from('farmer'), payer.publicKey.toBuffer()],
						program.programId
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
				
				props.setLandPiece(landP[0].publicKey);
			}
		})();
	}, [payer.publicKey]);

	const handleClick = async () => {
		if (payer.publicKey) {
			console.log('Inside if satement');
			let [farm] = anchor.web3.PublicKey.findProgramAddressSync(
				[Buffer.from('farm')],
				farmProgramID
			);
			// farmer
			let [farmer] = anchor.web3.PublicKey.findProgramAddressSync(
				[Buffer.from('farmer'), payer.publicKey.toBuffer()],
				program.programId
			);

			let [landMeta] = anchor.web3.PublicKey.findProgramAddressSync(
				[Buffer.from('landmeta'), farm.toBuffer()],
				farmProgramID
			);

			let lm = await fp.account.landMeta.fetch(landMeta);

			let [landPiece] = anchor.web3.PublicKey.findProgramAddressSync(
				[
					Buffer.from('landpiece'),
					landMeta.toBuffer(),
					farmer.toBuffer(),
					Buffer.from([lm.xCoord, lm.yCoord]),
				],
				program.programId
			);

			let [vault] = anchor.web3.PublicKey.findProgramAddressSync(
				[Buffer.from('carbonvault')],
				farmProgramID
			);		

			const tx = await program.methods
				.buyLand()
				.accounts({
					farm,
					farmer,
					landMeta,
					landPiece,
					vault,
					farmProgram: farmProgramID,
				})
				.rpc();

			console.log('Your transaction signature', tx);
			alert('success!!');

			// setData({
			// 	farmer: farmer,
			// 	payer: payer.publicKey,
			// 	landPieces: landP.length,
			// });
		}
	};

	return (
		<motion.div
			className={styles.container}
			animate={{
				x: props.landCount > new anchor.BN(0) ? '103vw' : '0px',
				transition: { duration: 2, delay: 1 },
			}}
			initial={{ x: '0px' }}
		>
			<Card className={styles.card}>
				<CardActionArea
					component={Button}
					onClick={handleClick}
					className={styles.cardArea}
				>
					<Typography variant='h5' className={styles.type}>
						Buy Land
					</Typography>
				</CardActionArea>
			</Card>
		</motion.div>
	);
};

export default BuyLand