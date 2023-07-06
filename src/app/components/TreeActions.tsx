'use client';
import React,{useState} from 'react'
import * as anchor from '@project-serum/anchor';
import ConsumeNutrients from './ConsumeNutrients'
import CalculateRequired from './CalculateRequired'
import AddNutrients from './AddNutrients'
import styles from "./styles/treeActions.module.css"

import {
	Box,
	Button,
	ButtonGroup,
	Card,
	Stack,
	Typography,
	Grid,
	CardActionArea,
	Link,
} from '@mui/material';
import { Anchor } from '@mui/icons-material';
import CheckAndUpdate from './CheckAndUpdate';

const TreeActions = (props: {cultivarName: String}) => {
	const [enabled, setEnabled] = useState(false);

	const handleEnable = () => {
		  setEnabled(true) ;
		return (
			setTimeout(()=>{
				setEnabled(false)
			},80000)
		)
	}

  return (
		<div className={styles.container}>
			<Stack direction='row' spacing={2}>
				{/* <ButtonGroup
					orientation='vertical'
					variant='contained'
					aria-label='outlined button group'
				>
					<div className={styles.calculate}>
						<CalculateRequired
							cultivarName={props.cultivarName}
							handleEnable={handleEnable}
						/>
					</div>

					<div className={enabled ? styles.enabled : styles.disabled}>
						<CheckAndUpdate cultivarName={props.cultivarName} />
					</div>
				</ButtonGroup> */}
				<ButtonGroup
					orientation='vertical'
					variant='contained'
					aria-label='outlined button group'
				>
					<AddNutrients
						cultivarName={props.cultivarName}
						nutrient='addPotassium'
						amount={new anchor.BN(50000)}
					/>
					<AddNutrients
						cultivarName={props.cultivarName}
						nutrient='addNitrogen'
						amount={new anchor.BN(50000)}
					/>
					<AddNutrients
						cultivarName={props.cultivarName}
						nutrient='addPhosphorus'
						amount={new anchor.BN(50000)}
					/>
					<AddNutrients
						cultivarName={props.cultivarName}
						nutrient='waterTree'
						amount={new anchor.BN(50000)}
					/>
				</ButtonGroup>
			</Stack>
		</div>
	);
}

export default TreeActions