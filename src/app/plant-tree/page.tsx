'use client';
import React, { useState, useEffect } from 'react';
import {
	Button,
	Box,
	Typography,
	CardActionArea,
	Grid,
	Card,
} from '@mui/material';
import styles from './page.module.css';
import * as anchor from '@project-serum/anchor';
import { useAnchorWallet } from '@solana/wallet-adapter-react';
import { Program, Wallet, AnchorProvider } from '@project-serum/anchor';
import { Connection, PublicKey, Keypair } from '@solana/web3.js';
import { TreeProgram, IDL } from '../../../public/programs/tree_program';
import { Link } from '@mui/material';
import NextLink from 'next/link';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import { useSearchParams } from 'next/navigation';
import CreateFarmer from '../components/CreateFarmer';
import FarmerComponent from '../components/Farmer';
type cultivar = {
	creator: PublicKey;
	name: String;
	count: anchor.BN;
	initHeight: anchor.BN;
	initWidth: anchor.BN;
	initRootArea: anchor.BN;
	initLeafArea: anchor.BN;
	scarcityPoints: anchor.BN;
	isInitialized: boolean;
};

type farmerAccount = {
	name: String;
	address: PublicKey;
	landCount: anchor.BN;
	treeCount: anchor.BN;
};

const PlantTree = () => {
	const [farmer, setFarmer] = useState<farmerAccount | null>(null);
	const router = useRouter();
	const searchParams = useSearchParams();
	const name = searchParams.get('name');

	const [cultivars, setCultivars] = useState<cultivar[]>([]);

	const [ready, setReady] = useState<boolean>(false);

	const w = useAnchorWallet();

	const [data, setData] = useState<{
		payer: PublicKey;
		farmer: PublicKey;
	} | null>(null);

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

	const searchFarmer = (farmerAccount: farmerAccount) => {
		console.log('clicked');
		setFarmer(farmerAccount);
	};

	const handleCreate = async (c: cultivar) => {
		try {
			if (payer.publicKey && name) {
				// farm
				let [farm] = anchor.web3.PublicKey.findProgramAddressSync(
					[Buffer.from('farm')],
					farmProgram
				);
				let [farmer] = anchor.web3.PublicKey.findProgramAddressSync(
					[Buffer.from('farmer'), payer.publicKey.toBuffer()],
					farmerProgram
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
						Buffer.from(name), //query
					],
					program.programId
				);

				console.log('cultivar', cultivar.toString());

				let [fruitMint] = anchor.web3.PublicKey.findProgramAddressSync(
					[Buffer.from('fruitmint'), Buffer.from(c.name)], //query
					program.programId
				);
				console.log('fruitMint', fruitMint.toString());

				let [fruitMintAuthority] = anchor.web3.PublicKey.findProgramAddressSync(
					[Buffer.from('fruitmintauthority')],
					program.programId
				);

				let [treesMeta] = anchor.web3.PublicKey.findProgramAddressSync(
					[Buffer.from('treesmeta'), farm.toBuffer()],
					farmProgram
				);

				let [tree] = anchor.web3.PublicKey.findProgramAddressSync(
					[Buffer.from('tree'), treesMeta.toBuffer(), farmer.toBuffer()],
					program.programId
				); /// only one tree error

				let [inputBalance] = anchor.web3.PublicKey.findProgramAddressSync(
					[Buffer.from('nutrientbalance'), tree.toBuffer()],
					program.programId
				);

				let [fruitBalance] = anchor.web3.PublicKey.findProgramAddressSync(
					[Buffer.from('fruit'), tree.toBuffer()],
					program.programId
				);

				//requiredNutrients
				let [requiredNutrients] = anchor.web3.PublicKey.findProgramAddressSync(
					[Buffer.from('requirednutrients'), tree.toBuffer()],
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
						Buffer.from(name),
					],
					program.programId
				);

				const tx = await program.methods
					.createTree()
					.accounts({
						farmer,
						farm,
						cultivarMeta,
						cultivar,
						treesMeta,
						tree,
						fruitBalance,
						fruitMint,
						fruitMintAuthority,
						inputBalance,
						requiredNutrients,
						farmProgram,
						seedsAuthority,
						seedsBalance,
					})
					.rpc();

				console.log('create cultivar transaction', tx);
				let treeState;
				treeState = await program.account.tree.fetchNullable(tree);

				if (treeState) {
					console.log('the tree is,', treeState);
					alert(`The Cultivar Is Initialized,
					 ${treeState},
					`);
				}

				router.push('view-trees');
			} else {
				throw 'No pubkey provided';
			}
		} catch (e) {
			console.log(e);
			alert('There was an error try again later');
		}
	};
	return (
		<div>
			<CreateFarmer searchFarmer={searchFarmer} />
			{farmer ? (
				<FarmerComponent
					name={farmer?.name}
					landCount={farmer?.landCount}
					treeCount={farmer?.treeCount}
					cultivarName={name}
				/>
			) : (
				<></>
			)}
		</div>
	);
};

export default PlantTree;
