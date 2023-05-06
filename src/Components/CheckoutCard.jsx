import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardActions from '@mui/material/CardActions';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import DeleteIcon from '@mui/icons-material/Delete';
import accounting from 'accounting';
import {useStateValue} from '../context/stateProvider';
import {actionTypes} from '../context/reducer';

const cardRating = {
	display: 'flex',
};
export default function CheckoutCard({
	product: {id, name, price, rating, image},
}) {
	const [, dispatch] = useStateValue();
	const removeItem = () =>
		dispatch({
			type: actionTypes.REMOVE_ITEM,
			id,
		});
	return (
		<Card sx={{maxWidth: 345}}>
			<CardHeader
				action={
					<Typography mt={2} variant="h5" color="textSecondary">
						{accounting.formatMoney(price)}
					</Typography>
				}
				title={name}
				subheader={'in stock'}
			/>
			<CardMedia
				component="img"
				height="250"
				image={image}
				title={name}
				alt={name}
			/>
			<CardActions
				disableSpacing
				sx={{
					display: 'flex',
					justifyContent: 'space-between',
					textAlign: 'center',
				}}
			>
				<div style={cardRating}>
					{Array(rating)
						.fill()
						.map((_, i) => (
							<p key={i}>&#11088;</p>
						))}
				</div>
				<IconButton aria-label="Delete item" onClick={removeItem}>
					<DeleteIcon fontSize="large" />
				</IconButton>
			</CardActions>
		</Card>
	);
}
