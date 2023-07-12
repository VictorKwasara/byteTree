import React, { useState, useEffect } from 'react';
import * as anchor from '@project-serum/anchor';
import { FarmerProgram, IDL } from '../../../public/programs/farmer_program';
import { FarmProgram, IDL as fIDL } from '../../../public/programs/farm_program';
import { Connection, PublicKey } from '@solana/web3.js';
import { Box, Button, Card, Stack, Typography, Grid ,CardActionArea,Link} from '@mui/material';
import styles from './styles/buyland.module.css';
// import NextLink from "next/link";
import Image from "next/image" ;
import { useAnchorWallet } from '@solana/wallet-adapter-react';
import { Program, Wallet, AnchorProvider } from '@project-serum/anchor';
import {motion} from 'framer-motion';

const BuyLand = (props: {
	landCount: anchor.BN;
	setLandPiece: (tree: anchor.web3.PublicKey) => void;
}) => {
	const [land,setLand] = useState(props.landCount);
	const w = useAnchorWallet();
	// const { connection } = useConnection();

	const connection = new Connection('https://api.devnet.solana.com');

	const provider = new AnchorProvider(connection, w as Wallet, {
		commitment: 'confirmed',
	});

	const programID = new PublicKey(
		'9CWoSJWQZaNiZ83cqEer79u4MtZdfo8RRnspJcDnsZcu'
	);

	const farmProgramID = new PublicKey(
		'xFUDB75wmPfzua8VgnSLrnNH18Ve4xztakzfBVyURob'
	);


	const program = new Program(IDL, programID, provider);
	const fp = new Program(fIDL, farmProgramID, provider);

	let payer = program.provider;

	useEffect(() => {
		(async () => {
			if (payer.publicKey != null) {
					let [farmer] = anchor.web3.PublicKey.findProgramAddressSync(
						[Buffer.from('farmer'), payer.publicKey.toBuffer()],
						program.programId
					);
				let landP;
				landP = await program.account.landPiece.all([
					{
						memcmp: {
							offset: 8, // Starting from the 42nd byte.
							bytes: farmer.toString(), // My base-58 encoded public key.
						},
					},
				]);

				console.log('Land Piece Account Is now: ', landP);

				let freeLand = landP.filter((l) => l.account.isPlanted == false) ;
				
				props.setLandPiece(freeLand[0].publicKey);
			}
		})();
	}, [payer.publicKey]);

	const handleClick = async () => {

		if (payer.publicKey) {
			console.log('Inside if satement');
			let [farm] = anchor.web3.PublicKey.findProgramAddressSync(
				[Buffer.from('farm')],
				farmProgramID
			);
			// farmer
			let [farmer] = anchor.web3.PublicKey.findProgramAddressSync(
				[Buffer.from('farmer'), payer.publicKey.toBuffer()],
				program.programId
			);

			// trees_meta
			let [treesMeta] = anchor.web3.PublicKey.findProgramAddressSync(
				[Buffer.from('treesmeta'), farm.toBuffer()],
				farmProgramID
			);
				console.log('farm', farm.toString());

				// cultivar_meta
				let [cultivarMeta] = anchor.web3.PublicKey.findProgramAddressSync(
					[Buffer.from('cultivarmeta'), farm.toBuffer()],
					farmProgramID
				);

			let [landMeta] = anchor.web3.PublicKey.findProgramAddressSync(
				[Buffer.from('landmeta'), farm.toBuffer()],
				farmProgramID
			);

			let lm = await fp.account.landMeta.fetch(landMeta);

			let [landPiece] = anchor.web3.PublicKey.findProgramAddressSync(
				[
					Buffer.from('landpiece'),
					landMeta.toBuffer(),
					farmer.toBuffer(),
					Buffer.from([lm.xCoord, lm.yCoord]),
				],
				program.programId
			);

			let [vault] = anchor.web3.PublicKey.findProgramAddressSync(
				[Buffer.from('carbonvault')],
				farmProgramID
			);

			const tx = await program.methods
				.buyLand()
				.accounts({
					farm,
					farmer,
					landMeta,
					landPiece,
					treesMeta,
					vault,
					cultivarMeta,
					farmProgram: farmProgramID,
				})
				.rpc();

			console.log('Your transaction signature', tx);
			alert('success!!');

			props.setLandPiece(landPiece);
			setLand(new anchor.BN(1));

			// setData({
			// 	farmer: farmer,
			// 	payer: payer.publicKey,
			// 	landPieces: landP.length,
			// });
		}
	};

	return (
		<motion.div
			className={styles.container}
			animate={{
				x: land > new anchor.BN(0) ? '103vw' : '0px',
				opacity: land > new anchor.BN(0) ?  0 :  1 ,
				transition: { duration: 1, },
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
						mt={1}
					>
						Buy Land
					</Typography>
					<Typography
						variant='body1'
						textAlign='center'
						fontFamily='Glook'
						fontWeight={500}
						className={styles.body}
						align='justify'
						color='#989c5a'
						pl={4}
						pr={4}
						mt={2}
					>
						Buy a land piece on the digital farm where you want to plant your
						tree. Each land piece is unique on the virtual farm
					</Typography>
				</CardActionArea>
			</Card>
			<Image
				className={styles.img}
				alt='land'
				src='/land.jpg'
				width='300'
				height='300'
			/>
		</motion.div>
	);
};

export default BuyLand