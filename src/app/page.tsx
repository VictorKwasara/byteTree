'use client';
import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css"
import { Button,Box, Typography } from "@mui/material";

export default function Home() {
	return (
		<Box className={styles.box}>
			<div className={styles.image}></div>
			<div className={styles.content}>
				<Typography
					variant='h2'
					component='h2'
					align='center'
					p={2}
					m={2}
					color='primary.main'
				>
					{'Welcome To the Digital Tree Farm'.toLocaleUpperCase()}
				</Typography>
				<Typography
					variant='h6'
					align='center'
					m={2}
					paragraph
					color='text.primary'
				>
					Plant A digital tree, Take care of it and earn potential rewards from
					selling fruits
				</Typography>
				<Typography variant='body1' mb={2} paragraph color='text.primary'>
					Save the planet, by taking care of your tree and buying carbon credits
				</Typography>
				<Button
					LinkComponent={Link}
					href='/actions'
					size='large'
					variant='contained'
					color='secondary'
				>
					Become A Farmer
				</Button>
			</div>
		</Box>
	);
}
