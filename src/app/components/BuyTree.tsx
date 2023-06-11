import React, { useState } from 'react';
import * as anchor from '@project-serum/anchor';
import { Tree, IDL } from '../../../public/programs/tree';
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
import styles from './styles/buytree.module.css';
import NextLink from 'next/link';
import { useAnchorWallet } from '@solana/wallet-adapter-react';
import { Program, Wallet, AnchorProvider } from '@project-serum/anchor';

const BuyTree = (props: { cultivarName: String}) => {
	const w = useAnchorWallet();
	// const { connection } = useConnection();

	const connection = new Connection('https://api.devnet.solana.com');

	const provider = new AnchorProvider(connection, w as Wallet, {
		commitment: 'confirmed',
	});

	const farmProgram = new PublicKey(
		'6DDP3hohHprxPNUWVtwpK89QAzcB27Fk4NSCgcq368P6'
	);

	//farmer program
	const farmerProgram = new PublicKey(
		'FEa3hjWEQEmuUgZtDQ1btp1Y2EKVhChqCzADTenewCsF'
	);

	// tree program
	const programID = new PublicKey(
		'EfYywm823JAajvTAHFv7wnKGi8M4R7BwqufaUEECxUxG'
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
				farmerProgram
			);

			let [landMeta] = anchor.web3.PublicKey.findProgramAddressSync(
				[Buffer.from('landmeta'), farm.toBuffer()],
				farmProgram
			);

			let [landPiece] = anchor.web3.PublicKey.findProgramAddressSync(
				[Buffer.from('landpiece'), landMeta.toBuffer(), farmer.toBuffer()],
				farmerProgram
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
				program.programId
			);

			console.log('cultivar', cultivar.toString());

			let [fruitMint] = anchor.web3.PublicKey.findProgramAddressSync(
				[Buffer.from('fruitmint'), Buffer.from(props.cultivarName)],
				program.programId
			);
			console.log('fruitMint', fruitMint.toString());

			let [fruitMintAuthority] = anchor.web3.PublicKey.findProgramAddressSync(
				[Buffer.from('fruitmintauthority')],
				program.programId
			);

			let [seedsAuthority] = anchor.web3.PublicKey.findProgramAddressSync(
				[Buffer.from('seedsauthority'), payer.publicKey.toBuffer()],
				program.programId
			);

			let [seedsBalance] = anchor.web3.PublicKey.findProgramAddressSync(
				[
					Buffer.from('seedsbalance'),
					seedsAuthority.toBuffer(),
					Buffer.from(props.cultivarName),
				],
				program.programId
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
				program.programId
			);
			let [inputBalance] = anchor.web3.PublicKey.findProgramAddressSync(
				[Buffer.from('nutrientbalance'), tree.toBuffer()],
				program.programId
			);

			//fruitBalance,
			let [fruitBalance] = anchor.web3.PublicKey.findProgramAddressSync(
				[Buffer.from('fruit'), tree.toBuffer()],
				program.programId
			);

			//requiredNutrients
			let [requiredNutrients] = anchor.web3.PublicKey.findProgramAddressSync(
				[Buffer.from('requirednutrients'), tree.toBuffer()],
				program.programId
			);

			const tx = await program.methods
				.createTree()
				.accounts({
					farmer,
					farm,
					cultivarMeta,
					cultivar,
					treesMeta,
					tree,
					fruitBalance,
					seedsAuthority,
					seedsBalance,
					fruitMint,
					fruitMintAuthority,
					inputBalance,
					requiredNutrients,
					farmProgram,
				})
				.rpc();
			console.log(`The transaction signature is ${tx.toString()}`);
      alert("success " + tx) ;
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
					Buy Tree
				</Typography>
			</CardActionArea>
		</Card>
	);
};

export default BuyTree