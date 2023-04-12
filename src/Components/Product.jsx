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
import nikeShoes from '../assets/img/nikeShoes.jpg';
import accounting from 'accounting';

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

export default function Product() {
	const [expanded, setExpanded] = React.useState(false);

	const handleExpandClick = () => {
		setExpanded(!expanded);
	};

	return (
		<Card sx={{maxWidth: 345}}>
			<CardHeader
				action={
					<Typography mt={2} variant="h5" color="textSecondary">
						{accounting.formatMoney(50)}
					</Typography>
				}
				title="Shoes"
				subheader="in stock"
			/>
			<CardMedia
				component="img"
				height="194"
				image={nikeShoes}
				alt="Nike Shoes"
			/>
			<CardContent>
				<Typography variant="body2" color="text.secondary">
					Running Shoes
				</Typography>
			</CardContent>
			<CardActions disableSpacing>
				<IconButton aria-label="Add to Cart">
					<AddShoppingCart fontSize="large" />
				</IconButton>
				{Array(4)
					.fill()
					.map((_, i) => (
						<p>&#11088;</p>
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
					<Typography paragraph>
						Zapatillas hermosas para correr tenemos del talle 38 al 43 no te las
						podes perder
					</Typography>
				</CardContent>
			</Collapse>
		</Card>
	);
}
