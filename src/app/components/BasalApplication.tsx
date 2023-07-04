import React, { useState, useEffect } from 'react';
import * as anchor from '@project-serum/anchor';
import { useAnchorWallet } from '@solana/wallet-adapter-react';
import { Program, Wallet, AnchorProvider } from '@project-serum/anchor';
import { Connection, PublicKey, Keypair } from '@solana/web3.js';
import styles from './styles/basalApplication.module.css';
import * as token from '@solana/spl-token';
import { TreeProgram, IDL } from '../../../public/programs/tree_program';
import {
	Button,
	Box,
	Typography,
	CardActionArea,
	Grid,
	Card,
} from '@mui/material';
import { publicKey } from '@project-serum/borsh';
import { Token } from 'typescript';
import { useRouter } from 'next/navigation';
import { useSearchParams } from 'next/navigation';
import Calculate from './Calculate';
import Update from './Update';
import AddNutrients from './AddNutrients';

type balance = {
	nitrogen: anchor.BN;
	potassium: anchor.BN;
	phosphorus: anchor.BN;
	water: anchor.BN;
};

const BasalApplication = (props: { cultivarName: String }) => {
	const [balance, setBalance] = useState<balance | null>(null);
	const w = useAnchorWallet();

	const connection = new Connection('https://api.devnet.solana.com');

	const provider = new AnchorProvider(connection, w as Wallet, {
		commitment: 'confirmed',
	});
	const farmerProgram = new PublicKey(
		'5TNiwQX4cLvYtRp4vwhukHTrNt6MsK8URs6P98vsznQX'
	);

	const farmProgram = new PublicKey(
		'CrYtrU5xK6S98iGQVnyag1XKG9vSYzw2M3Mq4JNHLGSA'
	);

	const programID = new PublicKey(
		'GKUYrzV8pu6ZNvKG4KmEMMbMeqeSJGH1vQYgk9RuoYSR'
	);

	const program = new Program(IDL, programID, provider);

	let payer = program.provider;

	useEffect(() => {
		console.log('Are we in here getting? huh');
		(async () => {
			if (payer.publicKey) {

				let [farm] = anchor.web3.PublicKey.findProgramAddressSync(
					[Buffer.from('farm')],
					farmProgram
				);
				// farmer
				let [farmer] = anchor.web3.PublicKey.findProgramAddressSync(
					[Buffer.from('farmer'), payer.publicKey.toBuffer()],
					farmerProgram
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
				// 	inputBalance,
				let [inputBalance] = anchor.web3.PublicKey.findProgramAddressSync(
					[Buffer.from('nutrientbalance'), tree.toBuffer()],
					program.programId
				);

				// waterBalance,
				let [waterBalance] = anchor.web3.PublicKey.findProgramAddressSync(
					[Buffer.from('water'), inputBalance.toBuffer()],
					program.programId
				);

				// 	nitrogenBalance,
				let [nitrogenBalance] = anchor.web3.PublicKey.findProgramAddressSync(
					[Buffer.from('nitrogen'), inputBalance.toBuffer()],
					program.programId
				);
				// 	phosphorusBalance,
				let [phosphorusBalance] = anchor.web3.PublicKey.findProgramAddressSync(
					[Buffer.from('phosphorus'), inputBalance.toBuffer()],
					program.programId
				);
				// 	potassiumBalance,
				let [potassiumBalance] = anchor.web3.PublicKey.findProgramAddressSync(
					[Buffer.from('potassium'), inputBalance.toBuffer()],
					program.programId
				);

				// nitrogenMint,
				let [nitrogenMint] = anchor.web3.PublicKey.findProgramAddressSync(
					[Buffer.from('nitrogenmint')],
					program.programId
				);

				// potassiumMint,
				let [potassiumMint] = anchor.web3.PublicKey.findProgramAddressSync(
					[Buffer.from('potassiummint')],
					program.programId
				);
				//phosphorusMint,
				let [phosphorusMint] = anchor.web3.PublicKey.findProgramAddressSync(
					[Buffer.from('phosphorusmint')],
					program.programId
				);

				// water_mint
				let [waterMint] = anchor.web3.PublicKey.findProgramAddressSync(
					[Buffer.from('watermint')],
					program.programId
				);

				let [nutrientMintAuthority] =
					anchor.web3.PublicKey.findProgramAddressSync(
						[Buffer.from('nutrientmintauthority')],
						program.programId
					);

				let nb: any;
				let kb: any;
				let pb: any;
				let wt: any;

				const getAccounts = async () => {
					nb = await token.getAccount(connection, nitrogenBalance);
					kb = await token.getAccount(connection, potassiumBalance);
					pb = await token.getAccount(connection, phosphorusBalance);
					wt = await token.getAccount(connection, waterBalance);
				};

				try {
					await getAccounts();
				} catch (e) {
					console.log('the error is this => ', e);

					if (e == 'TokenAccountNotFoundError') {
						console.log('gotcha');

						alert('Once of Initialisation of accounts');

						const tx = await program.methods
							.initTreeAccounts()
							.accounts({
								farm,
								farmer,
								waterMint,
								nitrogenMint,
								potassiumMint,
								phosphorusMint,
								nutrientMintAuthority,
								treesMeta,
								tree,
								inputBalance,
								waterBalance,
								nitrogenBalance,
								phosphorusBalance,
								potassiumBalance,
								farmProgram,
							})
							.rpc();
							console.log("The transaction is complete: ", tx);

						  await getAccounts();
					}
				}

				console.log('The nitrogen balance is ', nb);
				console.log('The nitrogen balance is ', pb);
				console.log('The nitrogen balance is ', kb);
				console.log('The nitrogen balance is ', w);

				let balance = console.log('the amount is? ', nb.amount);

				if (nb != null || kb != null || pb != null || wt != null) {
					let b: balance = {
						nitrogen: nb?.amount,
						potassium: kb?.amount,
						phosphorus: pb?.amount,
						water: wt?.amount,
					};
					if (nb != null) {
					}
					if (kb != null) {
					}
					if (pb != null) {
					}
					if (wt != null) {
					}

					console.log(b);
					setBalance(b);
				}
			}
		})();
	}, [payer.publicKey]);

	return balance != null &&
		balance.water > new anchor.BN(0) &&
		balance.potassium > new anchor.BN(0) &&
		balance.nitrogen > new anchor.BN(0) &&
		balance.phosphorus > new anchor.BN(0) ? (
		<></>
	) : (
		<div className={styles.container}>
			<div
				className={styles.button}
				style={{
					borderColor:
						balance !== null && balance.potassium > new anchor.BN(0)
							? 'green'
							: 'red',
				}}
			>
				<Typography variant='h6' sx={{ color: 'red' }}>
					{balance !== null ? balance.potassium.toString() : '0'}
				</Typography>
				<AddNutrients
					cultivarName={props.cultivarName}
					nutrient='addPotassium'
					amount={new anchor.BN(50000)}
				/>
			</div>
			<div
				className={styles.button}
				style={{
					borderColor:
						balance != null && balance.nitrogen > new anchor.BN(0)
							? 'green'
							: 'red',
				}}
			>
				<Typography variant='h6' sx={{ color: 'red' }}>
					{balance !== null ? balance.nitrogen.toString() : '0'}
				</Typography>
				<AddNutrients
					cultivarName={props.cultivarName}
					nutrient='addNitrogen'
					amount={new anchor.BN(50000)}
				/>
			</div>
			<div
				className={styles.button}
				style={{
					borderColor:
						balance !== null && balance.phosphorus > new anchor.BN(0)
							? 'green'
							: 'red',
				}}
			>
				<Typography variant='h6' sx={{ color: 'red' }}>
					{balance !== null ? balance.phosphorus.toString() : '0'}
				</Typography>
				<AddNutrients
					cultivarName={props.cultivarName}
					nutrient='addPhosphorus'
					amount={new anchor.BN(50000)}
				/>
			</div>
			<div
				className={styles.button}
				style={{
					borderColor:
						balance !== null && balance.water > new anchor.BN(0)
							? 'green'
							: 'red',
				}}
			>
				<Typography variant='h6' sx={{ color: 'red' }}>
					{balance !== null ? balance.water.toString(): "0"}
				</Typography>
				<AddNutrients
					cultivarName={props.cultivarName}
					nutrient='waterTree'
					amount={new anchor.BN(50000)}
				/>
			</div>
		</div>
	);
};

export default BasalApplication;
