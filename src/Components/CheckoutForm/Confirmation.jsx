import {Button, Divider, Typography} from '@mui/material';
import React from 'react';
import {Link} from 'react-router-dom';

const Confirmation = ({message}) => {
	return (
		<>
			<Typography variant="h5">{message}</Typography>
			<Divider />
			<Typography variant="subtitle2" gutterBottom>
				{message === 'Payment successful'
					? 'Your booking reference: Rgh98876899hjd'
					: ''}
			</Typography>
			<Link to="/">
				<Button
					type="button"
					variant="outlined"
					color="primary"
					style={{marginTop: '1rem'}}
				>
					Back to home page
				</Button>
			</Link>
		</>
	);
};

export default Confirmation;
