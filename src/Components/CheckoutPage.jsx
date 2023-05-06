import React from 'react';
import {Grid, Typography} from '@mui/material';
import CheckoutCard from './CheckoutCard';
import Total from './Total';
import {useStateValue} from '../context/stateProvider';

const CheckoutPage = () => {
	const [{basket}] = useStateValue();
	function FormRow() {
		return (
			<>
				{basket?.map((item) => (
					<Grid key={item.id} item xs={12} sm={8} md={6} lg={4}>
						<CheckoutCard product={item} />
					</Grid>
				))}
			</>
		);
	}

	return (
		<div sx={{flexGrow: 1, padding: '2rem'}}>
			<Grid container spacing={3} padding={2}>
				<Grid item xs={12}>
					<Typography align="center" gutterBottom variant="h4">
						Shopping Cart
					</Typography>
				</Grid>
				<Grid item xs={12} sm={8} md={9} container spacing={2}>
					<FormRow />
				</Grid>
				<Grid item xs={12} sm={4} md={3}>
					<Typography align="center" gutterBottom variant="h4">
						<Total />
					</Typography>
				</Grid>
			</Grid>
		</div>
	);
};

export default CheckoutPage;
