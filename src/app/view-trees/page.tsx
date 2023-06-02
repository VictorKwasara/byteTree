'use client';
import React from 'react'
import { Button, Box, Typography, TextField,Grid} from '@mui/material';
import styles from './page.module.css';

const ViewTrees = () => {
  return (
		<Box className={styles.box}>
			<Grid container spacing={2}>
				<Grid item xs={12} md={6}>
			    View Tree
				</Grid>
			</Grid>
		</Box>
	);
}

export default ViewTrees