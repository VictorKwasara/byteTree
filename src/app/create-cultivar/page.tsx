'use client';
import React, { useEffect, useState } from 'react';
import { Button, Box, Typography, TextField } from '@mui/material';
import styles from './page.module.css';
import * as anchor from '@project-serum/anchor';
import { useAnchorWallet, useWallet } from '@solana/wallet-adapter-react';
import { Program, Wallet, AnchorProvider } from '@project-serum/anchor';
import { Connection, PublicKey, Keypair } from '@solana/web3.js';
import { TreeProgram, IDL } from '../../../public/programs/tree_program';
import Router from 'next/router';

import {
	Metaplex,
	keypairIdentity,
	bundlrStorage,
	toMetaplexFile,
	walletAdapterIdentity,
} from '@metaplex-foundation/js';
import { readFile } from 'fs/promises';

type cultivarAccount = {
	name: string;
	address: PublicKey | null;
	count: anchor.BN;
	initHeight: anchor.BN;
	initWidth: anchor.BN;
	scarcityPoints: anchor.BN;
	isInitialized: boolean;
};
type inputs = {
	name: string;
	initHeight: anchor.BN;
	initWidth: anchor.BN;
};

const CreateCultivar = () => {
	const [input, setInput] = useState<inputs>({
		name:"",
	  initHeight: new anchor.BN(0),
	  initWidth:  new anchor.BN(0)
	});
	const [f, setFile] = useState<File|null>(null);
	const [cultivar, setCultivar] = useState<cultivarAccount| null>();
	const w = useAnchorWallet();
	const wallet = useWallet() ;

	const connection = new Connection('https://api.devnet.solana.com');

	const provider = new AnchorProvider(connection, w as Wallet, {
		commitment: 'finalized',
	});

	const farmerProgram = new PublicKey(
		'9CWoSJWQZaNiZ83cqEer79u4MtZdfo8RRnspJcDnsZcu'
	);

	const farmProgram = new PublicKey(
		'xFUDB75wmPfzua8VgnSLrnNH18Ve4xztakzfBVyURob'
	);

	const programID = new PublicKey(
		'8qxZgcFjdoJSwJYnvMMgR1ACyH24oFTBcaw8LSrAkiic'
	);

	const program = new Program(IDL, programID, provider);
	let payer = program.provider;

	const handleCreate = async () => {
    console.log("The f is now ", f)
		if (input == null) {
			throw "provide all required input values"
		}

		let cultivarName = input.name.trim();
		try {
			if (payer.publicKey != null) {
				// farm
				let [farm] = anchor.web3.PublicKey.findProgramAddressSync(
					[Buffer.from('farm')],
					farmProgram
				);

				let [farmer] = anchor.web3.PublicKey.findProgramAddressSync(
					[Buffer.from('farmer'), payer.publicKey.toBuffer()],
					farmerProgram
				);

				// console.log('farm', farm.toString());

				// cultivar_meta
				let [cultivarMeta] = anchor.web3.PublicKey.findProgramAddressSync(
					[Buffer.from('cultivarmeta'), farm.toBuffer()],
					farmProgram
				);

				// console.log('cultivarMeta', cultivarMeta.toString());

				let [cultivar] = anchor.web3.PublicKey.findProgramAddressSync(
					[
						Buffer.from('cultivar'),
						cultivarMeta.toBuffer(),
						Buffer.from(cultivarName),
					],
					program.programId
				);

				// console.log('cultivar', cultivar.toString());

				let [fruitMint] = anchor.web3.PublicKey.findProgramAddressSync(
					[Buffer.from('fruitmint'), Buffer.from(cultivarName)],
					program.programId
				);
				// console.log('fruitMint', fruitMint.toString());

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
						Buffer.from(cultivarName),
					],
					program.programId
				);
				// console.log('fruitMintauthority', fruitMintAuthority.toString());

				let cultivarState;

				cultivarState = await program.account.cultivar.fetchNullable(cultivar);

				if (cultivarState) {
					alert('cultivar already exists');
					return;
				}

				// console.log(
				// 	'The inputs are ' + input.name + input.initHeight,
				// 	+input.initWidth
				// );

				const metaplex = Metaplex.make(provider.connection)
					.use(walletAdapterIdentity(wallet))
					.use(
						bundlrStorage({
							address: 'https://devnet.bundlr.network',
							providerUrl: 'https://api.devnet.solana.com',
							timeout: 60_000,
						})
					);
				let url;
				
				console.log(metaplex);
					// const image = await readFile('./tests/1.png');
				console.log("the input file is => ", f);

				if(f!=null){
					console.log("Inside");
					let d = await f.arrayBuffer() ;
					const metaplex_image = toMetaplexFile(d, f.name);
					console.log("The metaplex image is  ===> ", metaplex_image) ;
					url = await metaplex.storage().upload(metaplex_image);
					console.log(`${url}`);
					console.log(` the url is ${url}`);

	        const { uri } = await metaplex.nfts().uploadMetadata({
						name: cultivarName,
						description: 'My description',
						image: url,
					});

						console.log(uri);


						if (url != undefined) {
							let tx = await program.methods
								.createCultivar(
									cultivarName,
									new anchor.BN(input.initHeight),
									new anchor.BN(input.initWidth),
									url
								)
								.accounts({
									farm,
									farmer,
									cultivarMeta,
									cultivar,
									fruitMint,
									fruitMintAuthority,
									seedsBalance,
									seedsAuthority,
									farmProgram,
								})
								.rpc();
							console.log('create cultivar transaction', tx);
						}			

						const { nft } = await metaplex.nfts().create({
							uri: uri,
							name: cultivarName,
							sellerFeeBasisPoints: 500, // Represents 5.00%.
						});
						
						console.log('nft', nft);

				}				

					

				setTimeout(async () => {}, 15000);
				cultivarState = await program.account.cultivar.fetchNullable(cultivar);

				if (cultivarState) {
					console.log('the cultivar  is,', cultivarState);
					alert(`The Cultivar Is Initialized,
					 ${cultivarState},
					`);
				}
				setInput({
					name: '',
					initHeight: new anchor.BN(0),
					initWidth: new anchor.BN(0),
				});

				alert('Success');
			} else {
				throw 'No pubkey provided';
			}
		} catch (e) {
			if (e == "AccountNotFoundError"){
				console.log("In heerrre ==> ")				
			}
			console.log(e);
		}
	};

	return (
		<div>
			<Box
				component='form'
				className={styles.box}
				noValidate
				autoComplete='off'
				sx={{
					'& .MuiTextField-root': { m: 2 },
				}}
			>
				<Typography variant='h5' color='secondary.main'>
					Enter your cultivar parameters
				</Typography>
				<div className={styles.field}>
					<label className={styles.label}>
						<Typography variant='body1'>The name of the cultivar</Typography>
					</label>
					<TextField
						color='primary'
						id='name'
						defaultValue='Name'
						label='Name'
						value={input.name}
						onChange={(e) => {
							setInput({ ...input, name: e.target.value });
						}}
						sx={{ color: '#000' }}
						inputProps={{
							color: '#000',
						}}
						fullWidth
						required
					/>
				</div>
				<div className={styles.field}>
					<label className={styles.label}>
						<Typography variant='body1'>
							The initial width of the Cultiver
						</Typography>
					</label>
					<TextField
						color='primary'
						id='initial-width'
						label='Initial Width'
						value={input.initWidth}
						type='number'
						onChange={(e) => {
							if (e.target.value != null)
							setInput({ ...input, initWidth: new anchor.BN(e.target.value)});
						}}
						fullWidth
						required
					/>
				</div>
				<div className={styles.field}>
					<label className={styles.label}>
						{' '}
						<Typography variant='body1'>
							{' '}
							The initial Height of the Cultiver
						</Typography>
					</label>
					<TextField
						color='primary'
						id='initial-height'
						label='Initial Height'
						value={input.initHeight}
						onChange={(e) => {
							if (e.target.value != null)
							setInput({ ...input, initHeight: new anchor.BN(e.target.value)});
						}}
						type='number'
						fullWidth
						required
					/>
					<div className={styles.image}>
						<label htmlFor='cultivar-image' className={styles.label}>
							<Typography variant="body1">Cutivar Image</Typography>
							</label>
							<input
								className={styles.imginput}
								name='cultivar-image'
								id='cultivar-image'
								type='file'
								onChange={(e) => {
									  console.log("E is", e) ;
										if(e.target.files != null){
									  console.log(e.target.files[0])
										setFile(e.target.files[0]);
									  console.log("the file in useSet => ", f);
									  }
									}
								}						
								required
							/>						
					</div>
				</div>
				<Button
					className={styles.button}
					variant='contained'
					onClick={(e) => {
						e.preventDefault ;						
						handleCreate();
					}}
				>
					Enter Name
				</Button>
			</Box>
		</div>
	);
};

export default CreateCultivar;
