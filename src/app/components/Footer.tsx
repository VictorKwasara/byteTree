import React from 'react'
import styles from "./styles/footer.module.css"
import { Box, Button, Card, Stack, Typography, Grid } from '@mui/material';

const Footer = () => {
  return (
		<div className={styles.container}>
			<div className={styles.inner}></div>
			<div className={styles.card}>Footer</div>
		</div>
	);
}

export default Footer