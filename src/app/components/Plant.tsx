import React, { useState } from 'react';
import * as anchor from '@project-serum/anchor';
import { Farmer, IDL } from '../../../public/programs/farmer';
import { Connection, PublicKey } from '@solana/web3.js';
import {
	Box,
	Button,
	Card,
	Stack,
	Typography,
	Grid,
	CardActionArea,
	Link,
} from '@mui/material';
import styles from './styles/plant.module.css';
import NextLink from 'next/link';
import { useAnchorWallet } from '@solana/wallet-adapter-react';
import { Program, Wallet, AnchorProvider } from '@project-serum/anchor';

const Plant = (props: { cultivarName: String }) => {
	const w = useAnchorWallet();
	// const { connection } = useConnection();

	const connection = new Connection('https://api.devnet.solana.com');

	const provider = new AnchorProvider(connection, w as Wallet, {
		commitment: 'confirmed',
	});

	const farmProgram = new PublicKey(
		'6DDP3hohHprxPNUWVtwpK89QAzcB27Fk4NSCgcq368P6'
	);

	const treeProgram = new PublicKey(
		'EfYywm823JAajvTAHFv7wnKGi8M4R7BwqufaUEECxUxG'
	);
	//farmer program
	const programID = new PublicKey(
		'FEa3hjWEQEmuUgZtDQ1btp1Y2EKVhChqCzADTenewCsF'
	);

	const program = new Program(IDL, programID, provider);
	let payer = program.provider;

	const handleClick = async () => {
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

			console.log('farm', farm.toString());

			// cultivar_meta
			let [cultivarMeta] = anchor.web3.PublicKey.findProgramAddressSync(
				[Buffer.from('cultivarmeta'), farm.toBuffer()],
				farmProgram
			);

			console.log('cultivarMeta', cultivarMeta.toString());

			let [cultivar] = anchor.web3.PublicKey.findProgramAddressSync(
				[
					Buffer.from('cultivar'),
					cultivarMeta.toBuffer(),
					Buffer.from(props.cultivarName),
				],
				treeProgram
			);

			console.log('cultivar', cultivar.toString());

			let [fruitMint] = anchor.web3.PublicKey.findProgramAddressSync(
				[Buffer.from('fruitmint'), Buffer.from(props.cultivarName)],
				treeProgram
			);
			console.log('fruitMint', fruitMint.toString());

			let [fruitMintAuthority] = anchor.web3.PublicKey.findProgramAddressSync(
				[Buffer.from('fruitmintauthority')],
				treeProgram
			);

			let [seedsAuthority] = anchor.web3.PublicKey.findProgramAddressSync(
				[Buffer.from('seedsauthority'), payer.publicKey.toBuffer()],
				treeProgram
			);

			let [seedsBalance] = anchor.web3.PublicKey.findProgramAddressSync(
				[
					Buffer.from('seedsbalance'),
					seedsAuthority.toBuffer(),
					Buffer.from(props.cultivarName),
				],
				treeProgram
			);

			// trees_meta
			let [treesMeta] = anchor.web3.PublicKey.findProgramAddressSync(
				[Buffer.from('treesmeta'), farm.toBuffer()],
				farmProgram
			);

			//tree
			let [tree] = anchor.web3.PublicKey.findProgramAddressSync(
				[
					Buffer.from('tree'),
					treesMeta.toBuffer(),
					farmer.toBuffer(),
					Buffer.from(props.cultivarName),
				],
				treeProgram
			);
			let [inputBalance] = anchor.web3.PublicKey.findProgramAddressSync(
				[Buffer.from('nutrientbalance'), tree.toBuffer()],
				treeProgram
			);

			//fruitBalance,
			let [fruitBalance] = anchor.web3.PublicKey.findProgramAddressSync(
				[Buffer.from('fruit'), tree.toBuffer()],
				treeProgram
			);

			//requiredNutrients
			let [requiredNutrients] = anchor.web3.PublicKey.findProgramAddressSync(
				[Buffer.from('requirednutrients'), tree.toBuffer()],
				treeProgram
			);

			const tx = await program.methods
				.plant()
				.accounts({
					farmer,
					farm,
					landMeta,
					landPiece,
					cultivarMeta,
					cultivar,
					treesMeta,
					tree,
					farmProgram,
					treeProgram,
				})
				.rpc();
			console.log(`The transaction signature is ${tx.toString()}`);

			alert('success ' + tx);
			// setData({
			// 	farmer: farmer,
			// 	payer: payer.publicKey,
			// 	landPieces: landP.length,
			// });
		}
	};

	return (
		<Card className={styles.card}>
			<CardActionArea
				component={Button}
				onClick={handleClick}
				className={styles.cardArea}
			>
				<Typography variant='h5' className={styles.type}>
					Plant The Tree  
				</Typography>
			</CardActionArea>
		</Card>
	);
};

export default Plant