import React, { useState } from 'react';
import * as anchor from '@project-serum/anchor';
import { TreeProgram, IDL } from '../../../public/programs/tree_program';
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
import styles from './styles/consume.module.css';
import NextLink from 'next/link';
import { useAnchorWallet } from '@solana/wallet-adapter-react';
import { Program, Wallet, AnchorProvider } from '@project-serum/anchor';
import * as token from '@solana/spl-token';
import { motion } from 'framer-motion';

const CheckAndUpdate = (props: { cultivarName: String, tree: string }) => {
	const w = useAnchorWallet();
	const [updated, setUpdated] = useState(false)
	// const { connection } = useConnection();
	// const [consume, setConsume ] =  useStat(false)

	const connection = new Connection('https://api.devnet.solana.com');

	const provider = new AnchorProvider(connection, w as Wallet, {
		commitment: 'confirmed',
	});

const farmerProgram = new PublicKey(
	'9CWoSJWQZaNiZ83cqEer79u4MtZdfo8RRnspJcDnsZcu'
);

const farmProgram = new PublicKey(
	'xFUDB75wmPfzua8VgnSLrnNH18Ve4xztakzfBVyURob'
);

const programID = new PublicKey('8qxZgcFjdoJSwJYnvMMgR1ACyH24oFTBcaw8LSrAkiic');

	const program = new Program(IDL, programID, provider);
	let payer = program.provider;

	const handleClick = () => {
		(async () => {
			if (payer.publicKey) {

				let tree = new anchor.web3.PublicKey(props.tree);

				let t_account = await program.account.tree.fetch(tree);
				
				// farm
				let [farm] = anchor.web3.PublicKey.findProgramAddressSync(
					[Buffer.from('farm')],
					farmProgram
				);

				// farmer
				let [farmer] = anchor.web3.PublicKey.findProgramAddressSync(
					[Buffer.from('farmer'), payer.publicKey.toBuffer()],
					farmerProgram
				);

				// land_meta
				let [landMeta] = anchor.web3.PublicKey.findProgramAddressSync(
					[Buffer.from('landmeta'), farm.toBuffer()],
					farmProgram
				);

				//land_piece
				let [landPiece] = anchor.web3.PublicKey.findProgramAddressSync(
					[Buffer.from('landpiece'), landMeta.toBuffer(), farmer.toBuffer(), Buffer.from(t_account.location)],
					farmerProgram
				);

				let [treesMeta] = anchor.web3.PublicKey.findProgramAddressSync(
					[Buffer.from('treesmeta'), farm.toBuffer()],
					farmProgram
				);				

				let [waterMint] = anchor.web3.PublicKey.findProgramAddressSync(
					[Buffer.from('watermint')],
					program.programId
				);

				let [nutrientMintAuthority] =
					anchor.web3.PublicKey.findProgramAddressSync(
						[Buffer.from('nutrientmintauthority')],
						program.programId
					);

				let [vault] = anchor.web3.PublicKey.findProgramAddressSync(
					[Buffer.from('carbonvault')],
					farmProgram
				);

				let [inputBalance] = anchor.web3.PublicKey.findProgramAddressSync(
					[Buffer.from('nutrientbalance'), tree.toBuffer()],
					program.programId
				);

				let [nitrogenMint] = anchor.web3.PublicKey.findProgramAddressSync(
					[Buffer.from('nitrogenmint')],
					program.programId
				);

				let [potassiumMint] = anchor.web3.PublicKey.findProgramAddressSync(
					[Buffer.from('potassiummint')],
					program.programId
				);

				let [phosphorusMint] = anchor.web3.PublicKey.findProgramAddressSync(
					[Buffer.from('phosphorusmint')],
					program.programId
				);

				let [fruitMintAuthority] = anchor.web3.PublicKey.findProgramAddressSync(
					[Buffer.from('fruitmintauthority')],
					program.programId
				);

				let [fruitMint] = anchor.web3.PublicKey.findProgramAddressSync(
					[Buffer.from('fruitmint'), Buffer.from(props.cultivarName)],
					program.programId
				);

				let [fruitBalance] = anchor.web3.PublicKey.findProgramAddressSync(
					[Buffer.from('fruit'), tree.toBuffer()],
					program.programId
				);

				let [requiredNutrients] = anchor.web3.PublicKey.findProgramAddressSync(
					[Buffer.from('requirednutrients'), tree.toBuffer()],
					program.programId
				);

				let [waterBalance] = anchor.web3.PublicKey.findProgramAddressSync(
					[Buffer.from('water'), inputBalance.toBuffer()],
					program.programId
				);

				let [nitrogenBalance] = anchor.web3.PublicKey.findProgramAddressSync(
					[Buffer.from('nitrogen'), inputBalance.toBuffer()],
					program.programId
				);

				let [phosphorusBalance] = anchor.web3.PublicKey.findProgramAddressSync(
					[Buffer.from('phosphorus'), inputBalance.toBuffer()],
					program.programId
				);

				let [potassiumBalance] = anchor.web3.PublicKey.findProgramAddressSync(
					[Buffer.from('potassium'), inputBalance.toBuffer()],
					program.programId
				);
					
				alert('Consume nutrients');
				const tx2 = await program.methods
					.consumeNutrients()
					.accounts({
							farm,
							farmer,
							waterMint,
							nitrogenMint,
							potassiumMint,
							phosphorusMint,
							nutrientMintAuthority,
							landMeta,
							treesMeta,
							tree,
							landPiece,
							inputBalance,
							waterBalance,
							nitrogenBalance,
							phosphorusBalance,
							potassiumBalance,
							fruitMintAuthority,
							fruitMint,
							fruitBalance,
							requiredNutrients,
							vault,
							farmProgram,
					})
					.rpc();
					console.log('The nutrients have been consumed: ', tx2.toString());
	
				  setUpdated(true)
			}
		})();
	};
	return   (
		<motion.div
			animate={{
				x: !updated ? 0 : '102vw',
				transition: { duration: 2, delay: 1 },
			}}
			initial={{ x: 0 }}
			className={styles.container}			
		>
			<Button
				variant='contained'
				sx={{ color: '#F1F085'}}
				onClick={handleClick}
			>
				Consume
			</Button>
		</motion.div>
	);
};

export default CheckAndUpdate;
