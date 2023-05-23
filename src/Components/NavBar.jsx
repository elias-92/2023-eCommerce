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
import {Link as LinkRoute} from 'react-router-dom';
import {getAuth} from 'firebase/auth';
import {firebaseApp} from '../firebase';
import {useStateValue} from '../context/stateProvider';
import {actionTypes} from '../context/reducer';

export default function NavBar() {
	const auth = getAuth(firebaseApp);
	const [{basket, user}, dispatch] = useStateValue();
	const handleAuth = () => {
		if (user) {
			auth.signOut();
			dispatch({
				type: actionTypes.SIGN_OUT,
				basket: [],
				user: null,
			});
		}
	};
	return (
		<Box sx={{flexGrow: 1}} mb={'7rem'}>
			<AppBar
				position="fixed"
				sx={{
					backgroundColor: 'whitesmoke',
					boxShadow: 'none',
					'@media (max-width: 600px)': {
						flexDirection: 'column',
					},
				}}
			>
				<Toolbar
					sx={{
						'@media (max-width: 600px)': {
							flexDirection: 'column',
						},
					}}
				>
					<LinkRoute to="/">
						<IconButton>
							<img src={logo} alt="logo" height={'20rem'} />
						</IconButton>
					</LinkRoute>
					<Box sx={{flexGrow: 1}} />
					<Typography variant="h6" color="textPrimary" component="p">
						Hello {user ? user.email : 'guest'}
					</Typography>
					<Box
						sx={{
							'@media (max-width: 600px)': {
								display: 'flex',
								justifyContent: 'space-between',
								width: '100%',
							},
						}}
					>
						<LinkRoute to="/sign-in">
							<Button
								variant="outlined"
								sx={{marginLeft: '1rem'}}
								onClick={handleAuth}
							>
								<strong>{user ? 'Sign out' : 'Sign in'}</strong>
							</Button>
						</LinkRoute>
						{user && (
							<LinkRoute to="/checkout-page">
								<IconButton aria-label="show cart item" color="inherit">
									<Badge badgeContent={basket?.length} color="secondary">
										<ShoppingCart fontSize="large" color="primary" />
									</Badge>
								</IconButton>
							</LinkRoute>
						)}
					</Box>
				</Toolbar>
			</AppBar>
		</Box>
	);
}
