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
import BuyLand from '../components/BuyLand';
import BuyTree from '../components/BuyTree';
import Plant from '../components/Plant';
import styles from './styles/actions.module.css';
const Actions = (props: { cultivarName: String|null }) => {
	return (
		<Paper className={styles.stack}>
			<MenuList>
				<MenuItem>
					<BuyLand />
				</MenuItem>
				  {props.cultivarName?(
            <><MenuItem>
              <BuyTree cultivarName={props.cultivarName} />
            </MenuItem>
            <MenuItem>
              <Plant cultivarName={props.cultivarName} />
            </MenuItem></>):<></>
          }        
			</MenuList>
		</Paper>
	);
};

export default Actions