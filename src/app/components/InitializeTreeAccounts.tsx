'use client'
import React, { useState, useEffect } from 'react';
import * as anchor from '@project-serum/anchor';
import { useAnchorWallet } from '@solana/wallet-adapter-react';
import { Program, Wallet, AnchorProvider } from '@project-serum/anchor';
import { Connection, PublicKey, Keypair } from '@solana/web3.js';
import styles from './styles/initializeTreeAccounts.module.css';
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
import BasalApplication from './BasalApplication';
import Calculate from './Calculate';
import Update from './Update';

const InitializeTreeAccounts = (props:{name: string}) => {
  const [initialized, setInitialized] = useState(false)
  const [newPlant, setNewPlant] = useState(false)
  const w = useAnchorWallet();
  const router = useRouter();
  const searchParams = useSearchParams();
	const name = searchParams.get('name');

	const connection = new Connection('https://api.devnet.solana.com');

	const provider = new AnchorProvider(connection, w as Wallet, {
		commitment: 'confirmed',
	});
	const farmerProgram = new PublicKey(
		'5TNiwQX4cLvYtRp4vwhukHTrNt6MsK8URs6P98vsznQX'
	);

	const farmProgram = new PublicKey(
		'6ENVuGLwmXzs3vTtrnELHTA1y3Q1s2NKZMu4zDo3nPUd'
	);

	const programID = new PublicKey(
		'GKUYrzV8pu6ZNvKG4KmEMMbMeqeSJGH1vQYgk9RuoYSR'
	);

	const program = new Program(IDL, programID, provider);
	let payer = program.provider;

	useEffect(() => {
		console.log('Are we in here getting? huh');
		(async () => {
			if (payer.publicKey && name != null) {
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
						Buffer.from(props.name),
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
          setInitialized(true);
         
				} catch (e) {
					console.log('the error is this => ', e);

					if (e == 'TokenAccountNotFoundError') {
						
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

	           alert("Success " + tx);
             setInitialized(true)
             setNewPlant(true)
					}
				}			
			}
		})();
	}, [payer.publicKey]);

	return !initialized ? (
		<div className={styles.initialize}></div>
	) : (
		<>
			{newPlant ? <BasalApplication cultivarName={props.name} /> : <></>}
			<Update cultivarName={props.name} />
			<Calculate cultivarName={props.name} />
		</>
	);
};

export default InitializeTreeAccounts;
