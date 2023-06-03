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

const SelectCultivar = () => {
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

	const programID = new PublicKey(
		'EfYywm823JAajvTAHFv7wnKGi8M4R7BwqufaUEECxUxG'
	);

	const program = new Program(IDL, programID, provider);
	let payer = program.provider;

  useEffect(() => {
   ( async () => {
      let ct: any = await program.account.cultivar.all() ;
      console.log('Cultivars', ct[0].account.name);
      
      if (ct){
        ct.map((ctvr:any)=>{
         let c = ctvr.account
         console.log('c is ', c);
         let c2: {
						name: string;
						count: anchor.BN;
						scarcityPoints: anchor.BN;
					}[] = cultivars; ;
         c2.push(c);
         setCultivars(c2) 
        });        
        console.log('Cultivars is now', cultivars);
        setReady(true)
      }        
    } )();   
    
    return ()=>{
      setCultivars([])
    }   
  },[]) 

	return (
		<motion.div
			className={styles.outter}
			initial={{ x: '-105vw' }}
			animate={{ x: '0' }}
			transition={{ delay: 0.5 }}
		>
			<Grid container spacing={2}>
				{ready ? (
					cultivars.map((c, i) => (
						<Grid item xs={12} md={5} key={`${i}+${c.name}`}>
							<Card className={styles.card}>
								<NextLink href={{ pathname: '/create-cultivar', query: c }}>
									<CardActionArea>
										<Typography variant='h4'>{c.name}</Typography>
										<Typography variant='body2'>
											{c.count.toString()}
										</Typography>
										<Typography variant='body2'>
											{c.scarcityPoints.toString()}
										</Typography>
									</CardActionArea>
								</NextLink>
							</Card>
						</Grid>
					))
				) : (
					<Grid item xs={12} md={5}>
						<Card className={styles.card}>Empty</Card>
					</Grid>
				)}
			</Grid>
		</motion.div>
	);
};

export default SelectCultivar;
