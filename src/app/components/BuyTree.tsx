import React, { useState, useEffect } from 'react';
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
import styles from './styles/buytree.module.css';
import NextLink from 'next/link';
import { useAnchorWallet } from '@solana/wallet-adapter-react';
import { Program, Wallet, AnchorProvider } from '@project-serum/anchor';
import * as token from '@solana/spl-token';
import { motion } from 'framer-motion';
import Image from 'next/image';

const BuyTree = (props: {
	cultivarName: String;
	cultivarUrl: string ;
	setSeeds: (amount: anchor.BN) => void;
	setKey: (tree: anchor.web3.PublicKey) => void;
	land: anchor.web3.PublicKey
}) => {
	// const [seeds, setSeeds] = useState<anchor.BN>(new anchor.BN(0)) ;
	const [trees, setTrees] = useState<number>(0);
	const [address, setAddress] = useState<anchor.web3.PublicKey | null>(null);

	const w = useAnchorWallet();
	// const { connection } = useConnection();

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

	const programID = new PublicKey(
		'8qxZgcFjdoJSwJYnvMMgR1ACyH24oFTBcaw8LSrAkiic'
	);

	const program = new Program(IDL, programID, provider);
	let payer = program.provider;

	useEffect(() => {
		(async () => {
			if (payer.publicKey != null) {
				let t = await program.account.tree.all([
					{
						memcmp: {
							offset: 8,
							bytes: payer.publicKey.toBase58(),
						},
					},
				]);

				console.log('the trees you own ==> ', t);
				console.log(' props.cultivarName', props.cultivarName);
				console.log(' t.account.cultivarName', t[0].account.cultivarName);

				let unplanted = t.filter(
					(t) =>
						t.account.isPlanted == false &&
						t.account.cultivarName == props.cultivarName
				);

				console.log('Unplanted trees! ', unplanted);

				let n = unplanted.length;
				setTrees(n);
				props.setKey(unplanted[0].publicKey);
			}
		})();
	}, [payer.publicKey]);

	const handleClick = async () => {
		if (payer.publicKey) {
			console.log('Inside if satement');
			let date = new Date().toISOString();

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

			// let [landPiece] = anchor.web3.PublicKey.findProgramAddressSync(
			// 	[Buffer.from('landpiece'), landMeta.toBuffer(), farmer.toBuffer()],
			// 	farmerProgram
			// );

			 let landPiece = new anchor.web3.PublicKey(props.land);

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
					Buffer.from(date),
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
				.createTree(date)
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
			alert('success ' + tx);
			setTrees(1);
			props.setKey(tree);
			// try {
			// 	let sb = await token.getAccount(connection, seedsBalance);
			// 	let amount = sb.amount.toString();
			// 	props.setSeeds(new anchor.BN(amount));
			// } catch (e) {
			// 	console.log('The error is ', e);
			// 	props.setSeeds(new anchor.BN(0));
			// }
		}
	};

	return (
		<motion.div
			className={styles.container}
			animate={{
				x: trees > 0 ? '102vw' : '0px',
				transition: { duration: 1, delay: 3 },
			}}
			initial={{ x: '0px' }}
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
					>
						Buy {props.cultivarName} Tree
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
					>
						Buy a {props.cultivarName} tree to plant on the land.Each tree is
						unique you can have multiple {props.cultivarName} , and as many
						trees as you want.
					</Typography>
				</CardActionArea>
			</Card>
			<Image
				className={styles.img}
				alt='land'
				src={props.cultivarUrl}
				width='300'
				height='300'
			/>
		</motion.div>
	);
};

export default BuyTree;
