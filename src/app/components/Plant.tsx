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
import * as token from '@solana/spl-token';
import {motion} from 'framer-motion';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

const Plant = (props: {
	cultivarName: String;
	setSeeds: (amount: anchor.BN) => void;
	tree: anchor.web3.PublicKey;
	land: anchor.web3.PublicKey;
}) => {
	const w = useAnchorWallet();
	const router = useRouter();

	// const { connection } = useConnection();

	const connection = new Connection('https://api.devnet.solana.com');

	const provider = new AnchorProvider(connection, w as Wallet, {
		commitment: 'confirmed',
	});

	//farmer program
	const programID = new PublicKey(
		'9CWoSJWQZaNiZ83cqEer79u4MtZdfo8RRnspJcDnsZcu'
	);

	const farmProgram = new PublicKey(
		'xFUDB75wmPfzua8VgnSLrnNH18Ve4xztakzfBVyURob'
	);

	const treeProgramID = new PublicKey(
		'8qxZgcFjdoJSwJYnvMMgR1ACyH24oFTBcaw8LSrAkiic'
	);

	const program = new Program(IDL, programID, provider);
	const treeProgram = new Program(tIDL, treeProgramID, provider);
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
			console.log('The tree key is => , ', props.tree.toString());
			console.log('The farmer key is => , ', farmer);

			const tx = await program.methods
				.plant()
				.accounts({
					farmer,
					farm,
					landMeta,
					landPiece: props.land,
					cultivarMeta,
					cultivar,
					treesMeta,
					tree: props.tree,
					farmProgram,
					treeProgram: treeProgramID,
				})
				.rpc();
			console.log(`The transaction signature is ${tx.toString()}`);
			router.push(`/view-trees`);
		}
	};

	return (
		<motion.div
			className={styles.container}
			animate={{
				opacity: 1,
				transition: { duration: 1, delay: 3 },
			}}
			initial={{ opacity: 0 }}
		>
			<Card className={styles.card}>
				<CardActionArea
					component={Button}
					onClick={handleClick}
					className={styles.cardArea}
				>
					<Typography
						variant='h5'
						textAlign='center'
						fontFamily='Oswald'
						fontWeight={700}
						className={styles.header}
						color='#d2d376'
						mt={1}
					>
						Plant The Tree
					</Typography>
					<Typography
						variant='body1'
						textAlign='center'
						fontFamily='Glook'
						fontWeight={500}
						className={styles.body}
						alignSelf='center'
						align='justify'
						color='#989c5a'
						pl={4}
						pr={4}
						mt={2}
					>
						Now Plant your {props.cultivarName} tree. Once planted the{' '}
						{props.cultivarName} tree will need to be watered, and
						fed nutrients for it to stay alive. You can plant as many mutohwe trees as you like.
					</Typography>
				</CardActionArea>
			</Card>
			<Image
				className={styles.img}
				alt='land'
				src='/plant.jpg'
				width='300'
				height='300'
			/>
		</motion.div>
	);
};

export default Plant