import React from 'react'
import {
	Box,
	Button,
	Card,
	Stack,
	Typography,
	MenuList,
	Grid,
	MenuItem,
	Paper,
} from '@mui/material';
import * as anchor from '@project-serum/anchor';
import BuyLand from '../components/BuyLand';
import BuyTree from '../components/BuyTree';
import Plant from '../components/Plant';
import styles from './styles/actions.module.css';

const Actions = (props: {
	cultivarName: String | null;
	setSeeds: (amount: anchor.BN) => void;
}) => {
	return (
		<Paper className={styles.stack}>
			<MenuList>
				<MenuItem>
					{/* <BuyLand /> */}
				</MenuItem>
				{props.cultivarName ? (
					<>
						<MenuItem>
							{/* <BuyTree
								setSeeds={props.setSeeds}
								cultivarName={props.cultivarName}
							/> */}
						</MenuItem>
						<MenuItem>
							{/* <Plant
								setSeeds={props.setSeeds}
								cultivarName={props.cultivarName}
							/> */}
						</MenuItem>
					</>
				) : (
					<></>
				)}
			</MenuList>
		</Paper>
	);
};

export default Actions