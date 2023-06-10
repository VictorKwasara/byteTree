'use client';
import React from 'react';
import NextLink from 'next/link';
import {Link} from "@mui/material"
import AppBar from '@mui/material/AppBar';
import styles from './Header.module.css';
import Toolbar from '@mui/material/Toolbar';
import Stack from '@mui/material/Stack';
import { useWallet} from '@solana/wallet-adapter-react';
import {
	WalletMultiButton,
	WalletDialogProvider,
} from './adapter';
import Image from 'next/image';

const Header = () => {
	const {select, wallets, publicKey, disconnect ,} = useWallet();
	
	return (
		<>
			<AppBar
				position='static'
				color='transparent'
				sx={{ border: 'none', boxShadow: 'none' }}
				className={styles.appbar}
			>
				<Toolbar className={styles.toolbar}>
					<Stack className={styles.stack} direction='row' spacing={8}>
						<Link className={styles.link} href='/' component={NextLink}>
							Home
						</Link>
						<Link className={styles.link} href='/actions' component={NextLink}>
							Actions
						</Link>
						<Link className={styles.link} href='/about' component={NextLink}>
							About
						</Link>
						<WalletDialogProvider>
							<WalletMultiButton />
						</WalletDialogProvider>
					</Stack>
				</Toolbar>
			</AppBar>
		</>
	);
};

export default Header;
