import React from 'react'
import * as anchor from '@project-serum/anchor';
import ConsumeNutrients from './ConsumeNutrients'
import CalculateRequired from './CalculateRequired'
import AddNutrients from './AddNutrients'
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

const TreeActions = (props: {cultivarName: String, }) => {
  return (
		<ButtonGroup
			orientation='vertical'
			variant='contained'
			aria-label='outlined button group'
		>
			<CheckAndUpdate cultivarName={props.cultivarName} />
			<CalculateRequired cultivarName={props.cultivarName} />
			<ConsumeNutrients
				cultivarName={props.cultivarName}
				nutrient='consumeNitrogen'
			/>
			<ConsumeNutrients
				cultivarName={props.cultivarName}
				nutrient='consumePhosphorus'
			/>
			<ConsumeNutrients
				cultivarName={props.cultivarName}
				nutrient='consumePotassium'
			/>
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
	);
}

export default TreeActions