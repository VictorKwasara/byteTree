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

	const farmProgram = new PublicKey(
		'CrYtrU5xK6S98iGQVnyag1XKG9vSYzw2M3Mq4JNHLGSA'
	);

	const treeProgramID = new PublicKey(
		'CUJ8TCeGSKKhqYtZYiBZRghTJvRRRpm9qR2ykX91N1ns'
	);
	//farmer program
	const programID = new PublicKey(
		'3pEgxEH8RhxKtdx3qsvcmrZQUMxeyQisiiBAJ52FmtMx'
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
			console.log("The tree key is => , ", props.tree.toString() );
			console.log("The farmer key is => , ", farmer );

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
				x: '0px',
				transition: { duration: 2, delay: 1 },
			}}
			initial={{ x: '102vw' }}
		>
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
		</motion.div>
	);
};

export default Plant