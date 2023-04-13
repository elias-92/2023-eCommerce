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

export default function NavBar() {
	return (
		<Box sx={{flexGrow: 1}} mb={'7rem'}>
			<AppBar
				position="fixed"
				sx={{backgroundColor: 'whitesmoke', boxShadow: 'none'}}
			>
				<Toolbar>
					<IconButton>
						<img src={logo} alt="logo" height={'20rem'} />
					</IconButton>
					<div className="grow" />
					<Typography variant="h6" color="textPrimary" component="p">
						Hello guest
					</Typography>
					<div>
						<Button variant="outlined" sx={{marginLeft: '1rem'}}>
							<strong>Sing in</strong>
						</Button>
						<IconButton aria-label="show cart item" color="inherit">
							<Badge badgeContent={2} color="secondary">
								<ShoppingCart fontSize="large" color="primary" />
							</Badge>
						</IconButton>
					</div>
				</Toolbar>
			</AppBar>
		</Box>
	);
}
