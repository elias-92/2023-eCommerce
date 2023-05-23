import * as React from 'react';
import {useState} from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import {createTheme, ThemeProvider} from '@mui/material/styles';
import {Link as LinkRoute} from 'react-router-dom';
import {
	AuthErrorCodes,
	getAuth,
	signInWithEmailAndPassword,
} from 'firebase/auth';
import {firebaseApp} from '../firebase';

const theme = createTheme();

export default function SignIn() {
	const auth = getAuth(firebaseApp);

	const [input, setInput] = useState({email: '', password: ''});

	const handleSubmit = (event) => {
		event.preventDefault();
		const email = input.email.toLowerCase().trim();
		const password = input.password;
		signInWithEmailAndPassword(auth, email, password)
			.then((userCredential) => {
				console.log(userCredential.user);
				window.location.href = '/';
			})
			.catch((err) => {
				if (
					err.code === AuthErrorCodes.INVALID_PASSWORD ||
					err.code === AuthErrorCodes.USER_DELETED
				) {
					alert('The email address or password is incorrect');
				} else {
					console.log(err.code);
					alert(err.code);
				}
			});
	};
	const handleChange = (e) => {
		setInput((prevState) => ({
			...prevState,
			[e.target.name]: e.target.value,
		}));
	};

	return (
		<ThemeProvider theme={theme}>
			<Container component="main" maxWidth="xs">
				<CssBaseline />
				<Box
					sx={{
						marginTop: 8,
						display: 'flex',
						flexDirection: 'column',
						alignItems: 'center',
					}}
				>
					<Avatar sx={{m: 1, bgcolor: 'secondary.main'}}>
						<LockOutlinedIcon />
					</Avatar>
					<Typography component="h1" variant="h5">
						Sign in
					</Typography>
					<Box component="form" noValidate sx={{mt: 1}}>
						<TextField
							value={input.email}
							onChange={handleChange}
							margin="normal"
							required
							fullWidth
							id="email"
							label="Email Address"
							name="email"
							autoComplete="email"
							autoFocus
						/>
						<TextField
							value={input.password}
							onChange={handleChange}
							margin="normal"
							required
							fullWidth
							name="password"
							label="Password"
							type="password"
							id="password"
							autoComplete="current-password"
						/>
						<FormControlLabel
							control={<Checkbox value="remember" color="primary" />}
							label="Remember me"
						/>
						<Button
							onClick={handleSubmit}
							type="submit"
							fullWidth
							variant="contained"
							sx={{mt: 3, mb: 2}}
						>
							Sign In
						</Button>
						<Grid container>
							<Grid item xs>
								<Link href="#" variant="body2">
									Forgot password?
								</Link>
							</Grid>
							<Grid item>
								<LinkRoute to="/sign-up" variant="body2">
									{"Don't have an account? Sign Up"}
								</LinkRoute>
							</Grid>
						</Grid>
					</Box>
				</Box>
			</Container>
		</ThemeProvider>
	);
}
