import {Button} from '@mui/material';
import accounting from 'accounting';
import React from 'react';
import {useStateValue} from '../stateProvider';

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
			<h5>
				{accounting.formatMoney(
					basket?.reduce((acc, item) => {
						return item.price + acc;
					}, 0)
				)}
			</h5>
			<Button variant="contained" color="secondary" sx={{mt: 2}}>
				Check Out
			</Button>
		</div>
	);
};

export default Total;
