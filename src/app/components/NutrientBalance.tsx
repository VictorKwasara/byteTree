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
					 let [inputBalance] =
						anchor.web3.PublicKey.findProgramAddressSync(
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

          let nb = await token.getAccount(connection, nitrogenBalance);
          // let kb = await token.getAccount(connection, potassiumBalance);
          // let pb = await token.getAccount(connection, phosphorusBalance);
          // let wt = await token.getAccount(connection, waterBalance);


          console.log(nb);
          console.log(nb.amount)
          // let b: balance = {
          //    nitrogen: nb.amount ,
          //    potassium: kb.amount ,
          //    phosphorus: pb.amount ,
          //    water: wt.amount ,
          // }

          // console.log(b)
          // setBalance(b);
				}
      })();

    },[payer.publicKey])

  return (
		<div>
			{balance !== null ? (
				<div className={styles.div}>
					<Typography>nitrogen balance is {balance.nitrogen}</Typography>
					<Typography>potassium balance is{balance.potassium}</Typography>
					<Typography>phosphorus balance is{balance.phosphorus}</Typography>
					<Typography>water balance is{balance.water}</Typography>
				</div>
			  ):(
				<>Nothing </>
			)}
		</div>
	);
}

export default NutrientBalance