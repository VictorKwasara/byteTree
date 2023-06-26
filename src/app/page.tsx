'use client';
import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css"
import { Button,Box, Typography,Card , Grid} from "@mui/material";
import {motion} from 'framer-motion'

export default function Home() {
	return (
		<div className={styles.outter}>
			<div className={styles.image}></div>
			<Box className={styles.box}>
				<div className={styles.content}>
					<Typography
						variant='h2'
						component='h2'
						align='center'
						fontFamily='Oswald'
						className={styles.header}
						p={2}
						m={2}
						color='primary.main'
						fontWeight='700'
						fontSize={70}
					>
						{'ByteTree The digital tree farm'.toLocaleUpperCase()}
					</Typography>
					<div className={styles.textDiv}>
						<Typography
							variant='h6'
							align='center'
							m={2}
							paragraph
							// color='text.primary'
							sx={{ color: '#08120A' }}
							className={styles.header2}
							textAlign='justify'
						>
							Welcome to Byte Tree, the ultimate online destination for tree
							lovers. Here you can design and grow your own digital trees, and
							share them with other users. Whether you want to create a
							realistic oak or a fantasy rainbow tree, Byte Tree lets you
							unleash your creativity and enjoy nature in a new way.
						</Typography>
					</div>
					<Typography
						variant='body1'
						mb={2}
						paragraph
						color='text.primary'
					></Typography>
					<Button
						LinkComponent={Link}
						href='/actions'
						size='large'
						variant='contained'
						color='secondary'
						sx={{ color: '#f1f085' }}
					>
						Become A Farmer
					</Button>
				</div>
			</Box>

			<motion.div className={styles.page}>
				<Card
					sx={{
						backgroundColor: '#48422F',
						borderTopRightRadius: '0',
						borderBottomRightRadius: '0',
					}}
					className={styles.cardA}
				>
					<Typography
						variant='h4'
						component='h4'
						align='center'
						fontFamily='Oswald'
						className={styles.header}
						p={2}
						m={2}
						color='primary.main'
						sx={{ color: '#d2d376' }}
						fontWeight='700'
						// fontSize={70}
					>
						Purchase Carbon Credits for Eco-Friendliness
					</Typography>
					<div className={styles.innerText}>
						<Typography
							variant='body1'
							sx={{ color: '#989c5a' }}
							// color='text.secondary'
						>
							Byte Tree is more than just a fun and creative website. It’s also
							a way to make a positive impact on the environment. When you
							create and nurture your own digital trees, you also buy carbon
							credits that help reduce greenhouse gas emissions. Byte Tree lets
							you enjoy the beauty of nature while also supporting its
							preservation.
						</Typography>
					</div>
				</Card>
				<motion.div className={styles.imgDiv}>
					<Image
						src='/c.jpg'
						alt='A hand holding a carbon sign'
						width='300'
						height='300'
					/>
				</motion.div>
			</motion.div>

			<motion.div className={styles.page}>
				<motion.div className={styles.imgDiv2}>
					<Image
						src='/tree2.jpg'
						alt='A hand holding a carbon sign'
						width='300'
						height='300'
					/>
				</motion.div>
				<Card
					sx={{
						backgroundColor: '#48422F',
						borderTopLeftRadius: '0',
						borderBottomLeftRadius: '0',
					}}
					className={styles.cardB}
				>
					<Typography
						variant='h4'
						component='h4'
						align='center'
						fontFamily='Oswald'
						className={styles.header}
						p={2}
						m={2}
						color='primary.main'
						sx={{ color: '#d2d376' }}
						fontWeight='700'
						// fontSize={70}
					>
						Create & Trade Unique Digital Cultivars
					</Typography>
					<div className={styles.innerText}>
						<Typography
							variant='body1'
							sx={{ color: '#989c5a' }}
							// color='text.secondary'
						>
							Byte Tree is more than just a fun and creative website. It’s also
							a way to make a positive impact on the environment. When you
							create and nurture your own digital trees, you also buy carbon
							credits that help reduce greenhouse gas emissions. Byte Tree lets
							you enjoy the beauty of nature while also supporting its
							preservation.
						</Typography>
					</div>
				</Card>
			</motion.div>

			<motion.div className={styles.page2}>
				<Typography
					variant='h2'
					component='h4'
					align='center'
					fontFamily='Gloock'
					className={styles.text}
					p={2}
					m={2}
					color='primary.main'
					sx={{ color: '#d2d376' }}
					fontWeight='700'
				>
					Frequently Asked Questions
				</Typography>
				<motion.div className={styles.innerDiv}>
					<Grid container spacing={2}>
						<Grid item sm={12} md={3} m={2}>
							<div className={styles.textwrap}>
								<Typography
									variant='h6'
									component='h4'
									align='center'
									fontFamily='Oswald'
									className={styles.text}
									p={2}
									m={2}
									color='primary.main'
									sx={{ color: '#d2d376' }}
									fontWeight='700'
								>
									What are digital trees?
								</Typography>
								<Typography
									variant='body1'
									component='p'
									align='center'
									fontFamily='Inter'
									className={styles.text2}
									p={2}
									m={2}
									textAlign='justify'
									color='primary.main'
									sx={{ color: '#d2d376' }}
								>
									Digital trees are virtual representations of real-world trees
									and plants, built on blockchain that you can create, grow, and
									trade.
								</Typography>
							</div>
						</Grid>
						<Grid item sm={12} md={3} m={2}>
							<div className={styles.textwrap}>
								<Typography
									variant='h6'
									component='h4'
									align='center'
									fontFamily='Oswald'
									className={styles.text}
									p={2}
									m={2}
									color='primary.main'
									sx={{ color: '#d2d376' }}
									fontWeight='700'
								>
									Can I make money on ByteTree?
								</Typography>
								<Typography
									variant='body1'
									component='p'
									align='center'
									fontFamily='Inter'
									className={styles.text2}
									p={2}
									m={2}
									textAlign='justify'
									color='primary.main'
									sx={{ color: '#d2d376' }}
								>
									You can list the seeds you have at the market and earn sol.
								</Typography>
							</div>
						</Grid>
						<Grid item sm={12} md={3} m={2}>
							<div className={styles.textwrap}>
								<Typography
									variant='h6'
									component='h4'
									align='center'
									fontFamily='Oswald'
									className={styles.text}
									p={2}
									m={2}
									color='primary.main'
									sx={{ color: '#d2d376' }}
									fontWeight='700'
								>
									What are carbon credits?
								</Typography>
								<Typography
									variant='body1'
									component='p'
									align='center'
									fontFamily='Inter'
									className={styles.text2}
									p={2}
									m={2}
									textAlign='justify'
									color='primary.main'
									sx={{ color: '#d2d376' }}
								>
									Carbon credits represent a reduction in greenhouse gas
									emissions. When you palnt and nature trees on ByteTree the sol
									token fees are used to purchase carbon tokens.
								</Typography>
							</div>
						</Grid>
					</Grid>
				</motion.div>
			</motion.div>
			<motion.div className={styles.page3}>
				<div className={styles.dataDiv}>
					<Typography
						variant='h4'
						component='h4'
						fontFamily='Gloock'
						className={styles.text3}
						p={2}
						m={2}
						color='primary.main'
						// sx={{ color: '#d2d376' }}
						fontWeight='700'
					>
						Fun ByteTree Stats
					</Typography>
					<Typography
						variant='h6'
						component='h4'
						// align='center'
						// fontFamily='Gloock'
						className={styles.text3}
						p={2}
						m={2}
						color='primary.main'
						sx={{ marginTop: '-15px', color: '#2e321f' }}
					>
						Trees in Our Forest
					</Typography>
				</div>
				<Grid container spacing={1} className={styles.dataGrid}>
					<Grid item sm={12} md={3} m={1}>
						<div className={styles.numbers}>
							<Typography
								variant='h4'
								component='h4'
								fontFamily='Gloock'
								className={styles.number}
								m={4}
								color='primary.main'
								sx={{ marginBottom: '0' }}
								fontWeight='700'
							>
								700
							</Typography>
							<Typography
								variant='h6'
								component='h4'
								// align='center'
								// fontFamily='Gloock'
								className={styles.text5}
								m={4}
								color='primary.main'
								sx={{ marginTop: '0', color: '#413e2b' }}
							>
								Thriving Trees!
							</Typography>
						</div>
					</Grid>
					<Grid item sm={12} md={3} m={1}>
						<div className={styles.numbers}>
							<Typography
								variant='h4'
								component='h4'
								fontFamily='Gloock'
								className={styles.number}
								m={4}
								color='primary.main'
								sx={{ marginBottom: '0' }}
								fontWeight='700'
							>
								125
							</Typography>
							<Typography
								variant='h6'
								component='h4'
								// align='center'
								// fontFamily='Gloock'
								className={styles.text5}
								m={4}
								color='primary.main'
								sx={{ marginTop: '0', color: '#413e2b' }}
							>
								Daily Active Farmers!
							</Typography>
						</div>
					</Grid>
					<Grid item sm={12} md={3} m={1}>
						<div className={styles.numbers}>
							<Typography
								variant='h4'
								component='h4'
								fontFamily='Gloock'
								className={styles.number}
								m={4}
								color='primary.main'
								sx={{ marginBottom: '0' }}
								fontWeight='700'
							>
								35
							</Typography>
							<Typography
								variant='h6'
								component='h4'
								// align='center'
								// fontFamily='Gloock'
								className={styles.text5}
								m={4}
								color='primary.main'
								sx={{ marginTop: '0', color: '#413e2b' }}
							>
								Unique Cultivars!
							</Typography>
						</div>
					</Grid>
				</Grid>
			</motion.div>
		</div>
	);
}
