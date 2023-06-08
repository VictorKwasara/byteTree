import React from 'react'
import * as anchor from '@project-serum/anchor';
import { Box, Button, Card, Stack, Typography, Grid } from '@mui/material';
import styles from './styles/farmer.module.css';

const Farmer = (props:{
  name: String,
  landCount: anchor.BN,
  treeCount: anchor.BN,
}) => {
  return (
		<Box className={styles.box}>
			<Typography variant='h3' className={styles.text1}>
				name: {props.name}
			</Typography>
			<Typography className={styles.text2} variant='h5'>
				land: {props.landCount.toString()}
			</Typography>
			<Typography className={styles.text2} variant='h5'>
				tree: {props.treeCount.toString()}
			</Typography>
		</Box>
	);
}

export default Farmer