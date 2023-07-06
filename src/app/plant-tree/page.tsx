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
import * as token from '@solana/spl-token';
import BuyLand from '../components/BuyLand';
import BuyTree from '../components/BuyTree';
import Plant from '../components/Plant';

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
	profileNft: string;
};

const PlantTree = () => {
	const [farmer, setFarmer] = useState<farmerAccount | null>(null);
	const [amount, setAmount] = useState<anchor.BN>(new anchor.BN(0));
	const [number, setNumber] = useState<anchor.BN>(new anchor.BN(0));
	const [address, setAddress] = useState<anchor.web3.PublicKey | null>(null);
	const [land, setLand] = useState<anchor.web3.PublicKey | null>(null);

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

	useEffect(() => {
		(async () => {
			if (payer.publicKey != null && name != null) {
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

				let t = await program.account.tree.all([
					{
						memcmp: {
							offset: 8,
							bytes: payer.publicKey.toBase58(),
						},
					},
				]);

				console.log('the trees you own ==> ', t);
				let unplanted = t.filter((t) => {
					console.log('filtered');
					t.account.isPlanted == false;
				});

				let n = unplanted.length;
				setNumber(new anchor.BN(n));

				try {
					let sb = await token.getAccount(connection, seedsBalance);
					let amount = sb.amount.toString();
					setAmount(new anchor.BN(amount));
				} catch (e) {
					console.log('The error is ', e);
				}

			}
		})();
	}, [payer.publicKey, name]);

	const searchFarmer = (farmerAccount: farmerAccount) => {
		console.log('clicked');
		setFarmer(farmerAccount);
	};

	const setSeeds = (amount: anchor.BN) => {
		console.log('Setting seeds amount');
		setAmount(amount);
		console.log('The amount is now');
	};

	const setKey = ( tree: anchor.web3.PublicKey) => {
		console.log('Setting seeds amount');
		setAddress(tree);
		console.log('The amount is now');
	};

	const setLandPiece = ( land: anchor.web3.PublicKey) => {
		console.log('Setting seeds amount');
		setLand(land);
		console.log('The amount is now');
	};

	return (
		<div>
			<CreateFarmer searchFarmer={searchFarmer} />
			{farmer && name ? (
				// <FarmerComponent
				// 	name={farmer?.name}
				// 	treeCount={farmer?.treeCount}
				// 	cultivarName={name}
				// 	profileNft={farmer?.profileNft}
				// 	initial={amount}
				// 	unplanted={number}
				// />
				<motion.div className={styles.buyLand}>
					<BuyLand landCount={farmer?.landCount} setLandPiece={setLandPiece} />
						{land != null ?	<BuyTree
							setSeeds={setSeeds}
							cultivarName={name}
							land={land}
							setKey={setKey}
						/>:<></>
						}
						{address != null && land != null ? (
								<Plant
									setSeeds={setSeeds}
									cultivarName={name}
									tree={address}
									land={land}
								/>
							  ):(
							  <></>
						)}
				</motion.div>
			      ):(
				<></>
			)}
		</div>
	);
};

export default PlantTree;
