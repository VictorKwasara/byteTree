'use client';
import React, { useState,useEffect } from 'react';
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
import { Tree, IDL } from '../../../public/programs/tree';
import { Link } from '@mui/material';
import NextLink from 'next/link';
import {motion} from "framer-motion"
import { useRouter } from 'next/navigation';

const SelectCultivar = () => {
	const router = useRouter();
  const [cultivars,setCultivars] = useState<{
  name: string,
	count: anchor.BN;
	scarcityPoints: anchor.BN;
   }[]>([]);
  const [ready,setReady] = useState(false);
  const w = useAnchorWallet();
	

	const connection = new Connection('https://api.devnet.solana.com');

	const provider = new AnchorProvider(connection, w as Wallet, {
		commitment: 'confirmed',
	});
 const farmProgram = new PublicKey(
		'6DDP3hohHprxPNUWVtwpK89QAzcB27Fk4NSCgcq368P6'
	);
	const farmerProgram = new PublicKey(
		'5LJq1WKXV2bdgsosp6wk2pgvk1Rhc75ffRLRXGZvPQWU'
	);

	const programID = new PublicKey(
		'EfYywm823JAajvTAHFv7wnKGi8M4R7BwqufaUEECxUxG'
	);


	const program = new Program(IDL, programID, provider);
	let payer = program.provider;

  useEffect(() => {
		(async () => {
			let ct: any = await program.account.cultivar.all();
			console.log('Cultivars', ct[0].account.name);

			if (ct) {
				ct.map((ctvr: any) => {
					let c = ctvr.account;
					console.log('c is ', c);
					let c2: {
						name: string;
						count: anchor.BN;
						scarcityPoints: anchor.BN;
					}[] = cultivars;
					c2.push(c);
					setCultivars(c2);
				});
				console.log('Cultivars is now', cultivars);
				setReady(true);
			}
		})();
	}, [cultivars]); 

	const handleCreate = async (
		c: {
			name: string;
			count: anchor.BN;
			scarcityPoints: anchor.BN;
		}
	) => {
		try {
			if (payer.publicKey) {
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
						Buffer.from(c.name), //query
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
				
				router.push("view-trees");
			} else {
				throw 'No pubkey provided';
			}
		} catch (e) {
			console.log(e);
			alert('There was an error try again later');
		}
	};

	return (
		<motion.div
			className={styles.outter}
			initial={{ x: '-105vw' }}
			animate={{ x: '0' }}
			transition={{ delay: 1 }}
		>
			<Grid container spacing={2} className={styles.grid}>
				{ready ? (
					cultivars.map((c, i) => (
						<Grid
							className={styles.ingrid}
							item
							xs={12}
							md={5}
							key={`${i}+${c.name}`}
						>
							<Card className={styles.card} sx={{ backgroundColor: '#F9F871' }}>
								<CardActionArea
									component={Button}
									onClick={(e) => {
										e.preventDefault;
										handleCreate(c);
									}}
								>
									<Typography variant='h4'>{c.name}</Typography>
									<Typography variant='body2'>{c.count.toString()}</Typography>
									<Typography variant='body2'>
										{c.scarcityPoints.toString()}
									</Typography>
								</CardActionArea>
							</Card>
						</Grid>
					))
				) : (
					<Grid item xs={12} md={5}>
						<Card sx={{ backgroundColor: '#F9F871' }} className={styles.card}>
							Empty
						</Card>
					</Grid>
				)}
			</Grid>
		</motion.div>
	);
};

export default SelectCultivar;
