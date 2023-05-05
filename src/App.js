import './App.css';
import CheckoutPage from './Components/CheckoutPage';
import NavBar from './Components/NavBar';
import Products from './Components/Products';
import {Route, Routes} from 'react-router-dom';
import SignIn from './Components/SignIn';
import SignUp from './Components/SignUp';
import {useStateValue} from './stateProvider';
import {useEffect} from 'react';
import {getAuth} from 'firebase/auth';
import {actionTypes} from './reducer';
import {firebaseApp} from './firebase';
import Checkout from './Components/CheckoutForm/Checkout';

function App() {
	const auth = getAuth(firebaseApp);

	const [, dispatch] = useStateValue();

	useEffect(() => {
		auth.onAuthStateChanged((authUser) => {
			if (authUser) {
				dispatch({
					type: actionTypes.SET_USER,
					user: authUser,
				});
			}
		});
	}, [auth, dispatch]);

	return (
		<>
			<NavBar />
			<Routes>
				<Route path="/sign-in" element={<SignIn />} />
				<Route path="/sign-up" element={<SignUp />} />
				<Route path="/" element={<Products />} />
				<Route path="/checkout-page" element={<CheckoutPage />} />
				<Route path="/checkout" element={<Checkout />} />
			</Routes>
		</>
	);
}

export default App;
