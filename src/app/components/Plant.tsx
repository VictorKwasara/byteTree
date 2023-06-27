import React, { useState } from 'react';
import * as anchor from '@project-serum/anchor';
import { FarmerProgram, IDL } from '../../../public/programs/farmer_program';
import { TreeProgram, IDL as tIDL} from '../../../public/programs/tree_program';
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
		'6ENVuGLwmXzs3vTtrnELHTA1y3Q1s2NKZMu4zDo3nPUd'
	);

	const treeProgramID = new PublicKey(
		'GKUYrzV8pu6ZNvKG4KmEMMbMeqeSJGH1vQYgk9RuoYSR'
	);
	//farmer program
	const programID = new PublicKey(
		'5TNiwQX4cLvYtRp4vwhukHTrNt6MsK8URs6P98vsznQX'
	);

	const program = new Program(IDL, programID, provider);
	const treeProgram = new Program(tIDL, treeProgramID, provider) ;
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
				treeProgramID
			);

			console.log('cultivar', cultivar.toString());

			let [fruitMint] = anchor.web3.PublicKey.findProgramAddressSync(
				[Buffer.from('fruitmint'), Buffer.from(props.cultivarName)],
				treeProgramID
			);
			console.log('fruitMint', fruitMint.toString());

			let [fruitMintAuthority] = anchor.web3.PublicKey.findProgramAddressSync(
				[Buffer.from('fruitmintauthority')],
				treeProgramID
			);

			let [seedsAuthority] = anchor.web3.PublicKey.findProgramAddressSync(
				[Buffer.from('seedsauthority'), payer.publicKey.toBuffer()],
				treeProgramID
			);

			let [seedsBalance] = anchor.web3.PublicKey.findProgramAddressSync(
				[
					Buffer.from('seedsbalance'),
					seedsAuthority.toBuffer(),
					Buffer.from(props.cultivarName),
				],
				treeProgramID
			);

			// trees_meta
			let [treesMeta] = anchor.web3.PublicKey.findProgramAddressSync(
				[Buffer.from('treesmeta'), farm.toBuffer()],
				farmProgram
			);

			let trees = await treeProgram.account.tree.all([
				{
					memcmp: {
						offset: 8,
						bytes: payer.publicKey.toBase58().toString(),
					},
				},
			]);


			
		
			// let [inputBalance] = anchor.web3.PublicKey.findProgramAddressSync(
			// 	[Buffer.from('nutrientbalance'), tree.toBuffer()],
			// 	treeProgramID
			// );

			// //fruitBalance,
			// let [fruitBalance] = anchor.web3.PublicKey.findProgramAddressSync(
			// 	[Buffer.from('fruit'), tree.toBuffer()],
			// 	treeProgramID
			// );

			// //requiredNutrients
			// let [requiredNutrients] = anchor.web3.PublicKey.findProgramAddressSync(
			// 	[Buffer.from('requirednutrients'), tree.toBuffer()],
			// 	treeProgramID
			// );

			// const tx = await program.methods
			// 	.plant()
			// 	.accounts({
			// 		farmer,
			// 		farm,
			// 		landMeta,
			// 		landPiece,
			// 		cultivarMeta,
			// 		cultivar,
			// 		treesMeta,
			// 		tree,
			// 		farmProgram,
			// 		treeProgram: treeProgramID,
			// 	})
			// 	.rpc();
			// console.log(`The transaction signature is ${tx.toString()}`);

			// alert('success ' + tx);
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