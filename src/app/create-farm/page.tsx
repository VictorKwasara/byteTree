'use client';
import React from 'react';
import * as anchor from '@project-serum/anchor';
import { FarmProgram, IDL } from '../../../public/programs/farm_program';
import { Connection, Keypair, SystemProgram, PublicKey } from '@solana/web3.js';
import { Box, Button } from '@mui/material';
import styles from './page.module.css';
import {
	AnchorWallet,
	useWallet,
	useAnchorWallet,
} from '@solana/wallet-adapter-react';
import {
	Program,
	Wallet,
	AnchorProvider,
	Address,
	BN,
} from '@project-serum/anchor';

// import {
// 	farm,
// 	landMeta,
// 	cultivarMeta,
// 	treesMeta,
// 	vault,
// } from '../scripts/pdas';


const CreateFarmer = () => {
	const {
		select,
		wallets,
		publicKey,
		wallet,
		disconnect,
		signTransaction,
		signAllTransactions,
	} = useWallet();

	// const wallet =   useWallet()https://api.devnet.solana.comhttp://localhost:8899
	const w = useAnchorWallet();
	const connection = new Connection('https://api.devnet.solana.com');
	const provider = new AnchorProvider(connection, w as Wallet, {
		commitment: 'confirmed',
	});
	const programID = new PublicKey(
		'6ENVuGLwmXzs3vTtrnELHTA1y3Q1s2NKZMu4zDo3nPUd'
	);
	const program = new Program(IDL, programID, provider);
	const handleCreate = async () => {
		try {
			if (publicKey) {
				// let [farm] = anchor.web3.PublicKey.findProgramAddressSync(
				// 	[Buffer.from('farm')],
				// 	program.programId
				// );
	let payer = program.provider ;
	// farm
	let [farm] = anchor.web3.PublicKey.findProgramAddressSync(
		[Buffer.from('farm')],
		program.programId
	);

	// land_meta
	let [landMeta] = anchor.web3.PublicKey.findProgramAddressSync(
		[Buffer.from('landmeta'), farm.toBuffer()],
		program.programId
	);

	// cultivar_meta
	let [cultivarMeta] = anchor.web3.PublicKey.findProgramAddressSync(
		[Buffer.from('cultivarmeta'), farm.toBuffer()],
		program.programId
	);

	// trees_meta
	let [treesMeta] = anchor.web3.PublicKey.findProgramAddressSync(
		[Buffer.from('treesmeta'), farm.toBuffer()],
		program.programId
	);

	//vault
	let [vault] = anchor.web3.PublicKey.findProgramAddressSync(
		[Buffer.from('carbonvault')],
		program.programId
	);

	// Add your test here.
	const tx = await program.methods
		.initializeFarm()
		.accounts({
			farm,
			landMeta,
			cultivarMeta,
			treesMeta,
			vault,
		})
		.rpc();

	console.log('Your transaction signature', tx);
 let farmState = await program.account.farm.fetchNullable(farm);

				console.log('The farm is now ', farmState);

				if (farmState) {
					console.log('the farm is,', farmState);
				} else {
					console.log('else state is', farmState);
				}
			} else {
				throw 'Connect to wallet';
			}
		} catch (e) {
			console.log('There was an error ', e);
		}
	};
	return (
		<Box className={styles.box}>
			<legend>Create A Farmer Account</legend>
			<label htmlFor='name'></label>
			<input className={styles.name} type='text' name='name' id='name' />
			<Button onClick={handleCreate}>Create Farm</Button>
		</Box>
	);
};

export default CreateFarmer;
