import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import logo from '../assets/img/logo.png';

export default function NavBar() {
	return (
		<Box sx={{flexGrow: 1}}>
			<AppBar position="static">
				<Toolbar>
					<IconButton>
						<img src={logo} alt="logo" />
					</IconButton>
					<Button color="inherit">Login</Button>
				</Toolbar>
			</AppBar>
		</Box>
	);
}
