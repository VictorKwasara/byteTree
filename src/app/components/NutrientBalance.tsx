import React, { useState, useEffect } from 'react'
import * as anchor from '@project-serum/anchor';
import { useAnchorWallet } from '@solana/wallet-adapter-react';
import { Program, Wallet, AnchorProvider } from '@project-serum/anchor';
import { Connection, PublicKey, Keypair } from '@solana/web3.js';
import styles from './styles/nutrientBalance.module.css';
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

type balance = {   
   nitrogen: anchor.BN,
   potassium: anchor.BN,
   phosphorus: anchor.BN,
   water: anchor.BN,
}

const NutrientBalance = ( props:{ cultivarName: String}) => {
    const [balance, setBalance] = useState<balance|null>(null)
    const w = useAnchorWallet();

		const connection = new Connection('https://api.devnet.solana.com');

		const provider = new AnchorProvider(connection, w as Wallet, {
			commitment: 'confirmed',
		});
		const farmerProgram = new PublicKey(
			'3pEgxEH8RhxKtdx3qsvcmrZQUMxeyQisiiBAJ52FmtMx'
		);

		const farmProgram = new PublicKey(
			'CrYtrU5xK6S98iGQVnyag1XKG9vSYzw2M3Mq4JNHLGSA'
		);

		const programID = new PublicKey(
			'CUJ8TCeGSKKhqYtZYiBZRghTJvRRRpm9qR2ykX91N1ns'
		);

		const program = new Program(IDL, programID, provider);
		let payer = program.provider;

    useEffect(()=>{
      console.log("Are we in here getting? huh");
      (async () => {
        if(payer.publicKey) {
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
					let [phosphorusBalance] =
						anchor.web3.PublicKey.findProgramAddressSync(
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

					const getAccounts = async ()  => {
							nb = await token.getAccount(connection, nitrogenBalance);
							kb = await token.getAccount(connection, potassiumBalance);
							pb = await token.getAccount(connection, phosphorusBalance);
							wt = await token.getAccount(connection, waterBalance);
					}

					try {
						 await getAccounts()
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

								await getAccounts();
						}
					}

					console.log('The nitrogen balance is ', nb);
					console.log('The nitrogen balance is ', pb);
					console.log('The nitrogen balance is ', kb);
					console.log('The nitrogen balance is ', w);
    
					let balance = 
					console.log("the amount is? ",nb.amount);
					if (nb != null || kb != null|| pb != null || wt != null) {
						let b: balance = {
							nitrogen: nb?.amount,
							potassium: kb?.amount,
							phosphorus: pb?.amount,
							water: wt?.amount,
						};

						console.log(b);
						setBalance(b);
					}						
				}
      })();

    },[payer.publicKey])

  return (
		<div>
			{balance != null ? (
				<div className={styles.div}>
					<Card className={styles.card}>
						<div className={styles.title}>
							<Typography variant='h4' sx={{ color: '#9CA860' }}>
								Your {"Tree's "}Nutrient Reserves
							</Typography>
						</div>

						<div className={styles.reserves}>
							<div className={styles.divs}>
								<Typography
									variant='h6'
									color='secondary'
									className={styles.header}
								>
									Nitrogen
								</Typography>
								<Typography variant='body1' className={styles.value}>
									<span className={styles.spn}>
										{balance.nitrogen.toString()}
									</span>
								</Typography>{' '}
							</div>
							<div className={styles.divs}>
								{' '}
								<Typography
									variant='h6'
									color='secondary'
									className={styles.header}
								>
									potassium
								</Typography>
								<Typography variant='body1' className={styles.value}>
									{' '}
									balance is{' '}
									<span className={styles.spn}>
										{balance.potassium.toString()}
									</span>
								</Typography>
							</div>
							<div className={styles.divs}>
								<Typography
									variant='h6'
									color='secondary'
									className={styles.header}
								>
									phosphorus
								</Typography>
								<Typography variant='body1' className={styles.value}>
									{' '}
									balance is{' '}
									<span className={styles.spn}>
										{balance.phosphorus.toString()}
									</span>
								</Typography>
							</div>
							<div className={styles.divs}>
								<Typography
									variant='h6'
									color='secondary'
									className={styles.header}
								>
									water
								</Typography>
								<Typography variant='body1' className={styles.value}>
									{' '}
									balance is{' '}
									<span className={styles.spn}>{balance.water.toString()}</span>
								</Typography>
							</div>
						</div>
					</Card>
				</div>
			) : (
				<>Nothing</>
			)}
		</div>
	);
}

export default NutrientBalance