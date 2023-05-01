import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import logo from '../assets/img/logo.png';
import {ShoppingCart} from '@mui/icons-material';
import {Badge} from '@mui/material';
import '../App.css';
import {Link} from 'react-router-dom';
import {useStateValue} from '../stateProvider';

export default function NavBar() {
	const [{basket}] = useStateValue();
	return (
		<Box sx={{flexGrow: 1}} mb={'7rem'}>
			<AppBar
				position="fixed"
				sx={{backgroundColor: 'whitesmoke', boxShadow: 'none'}}
			>
				<Toolbar>
					<Link to="/">
						<IconButton>
							<img src={logo} alt="logo" height={'20rem'} />
						</IconButton>
					</Link>
					<div className="grow" />
					<Typography variant="h6" color="textPrimary" component="p">
						Hello guest
					</Typography>
					<div>
						<Button variant="outlined" sx={{marginLeft: '1rem'}}>
							<strong>Sing in</strong>
						</Button>
						<Link to="/checkout-page">
							<IconButton aria-label="show cart item" color="inherit">
								<Badge badgeContent={basket?.length} color="secondary">
									<ShoppingCart fontSize="large" color="primary" />
								</Badge>
							</IconButton>
						</Link>
					</div>
				</Toolbar>
			</AppBar>
		</Box>
	);
}
