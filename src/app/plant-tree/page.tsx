'use client';
import React from 'react'
import { Button, Box, Typography, TextField } from '@mui/material';
import styles from './page.module.css';

const PlantTree = () => {
  return (
		<div>
			<Box
				component='form'
				className={styles.box}
				noValidate
				autoComplete='off'
				sx={{
					'& .MuiTextField-root': { m: 2 },
				}}
			>
				<Typography component='h3'>Enter your cultivar parameters</Typography>
				<div>
					<TextField
						color='info'
						id='initial-height'
						label='Name'
						fullWidth
						required
					/>
				</div>
				<div>
					<TextField
						color='info'
						id='initial-width'
						label='Initial Width'
						type='number'
						fullWidth
						required
					/>
				</div>
				<div>
					<TextField
						color='info'
						id='initial-height'
						label='Initial Height'
						type='number'
						fullWidth
						required
					/>
				</div>
			</Box>
		</div>
	);
}

export default PlantTree