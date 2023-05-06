import {Button} from '@mui/material';
import accounting from 'accounting';
import React from 'react';
import {Link as LinkRoute} from 'react-router-dom';
import {useStateValue} from '../context/stateProvider';
import {getBasketTotal} from '../context/reducer';

const root = {
	display: 'flex',
	flexDirection: 'column',
	alignItems: 'center',
	justifyContent: 'center',
	height: '20vh',
};
const Total = () => {
	const [{basket}] = useStateValue();
	return (
		<div style={root}>
			<h5>Total items: {basket?.length}</h5>
			<h5>{accounting.formatMoney(getBasketTotal(basket))}</h5>
			<LinkRoute to="/checkout">
				<Button variant="contained" color="secondary" sx={{mt: 2}}>
					Check Out
				</Button>
			</LinkRoute>
		</div>
	);
};

export default Total;
