import * as React from 'react';
import {styled} from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import {AddShoppingCart} from '@mui/icons-material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import accounting from 'accounting';
import {useStateValue} from '../context/stateProvider';
import {actionTypes} from '../context/reducer';

const ExpandMore = styled((props) => {
	const {expand, ...other} = props;
	return <IconButton {...other} />;
})(({theme, expand}) => ({
	transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
	marginLeft: 'auto',
	transition: theme.transitions.create('transform', {
		duration: theme.transitions.duration.shortest,
	}),
}));

export default function Product({
	product: {id, name, productType, price, rating, image, description},
}) {
	const [expanded, setExpanded] = React.useState(false);
	const [, dispatch] = useStateValue();
	const handleExpandClick = () => {
		setExpanded(!expanded);
	};
	const addToBasket = () => {
		dispatch({
			type: actionTypes.ADD_TO_BASKET,
			item: {
				id,
				name,
				productType,
				image,
				price,
				rating,
				description,
			},
		});
	};

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
			<CardContent>
				<Typography variant="body2" color="text.secondary">
					{productType}
				</Typography>
			</CardContent>
			<CardActions disableSpacing>
				<IconButton aria-label="Add to Cart" onClick={addToBasket}>
					<AddShoppingCart fontSize="large" />
				</IconButton>
				{Array(rating)
					.fill()
					.map((_, i) => (
						<p key={i}>&#11088;</p>
					))}
				<ExpandMore
					expand={expanded}
					onClick={handleExpandClick}
					aria-expanded={expanded}
					aria-label="show more"
				>
					<ExpandMoreIcon />
				</ExpandMore>
			</CardActions>
			<Collapse in={expanded} timeout="auto" unmountOnExit>
				<CardContent>
					<Typography paragraph>{description}</Typography>
				</CardContent>
			</Collapse>
		</Card>
	);
}
