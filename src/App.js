import './App.css';
import CheckoutPage from './Components/CheckoutPage';
import NavBar from './Components/NavBar';
import Products from './Components/Products';
import {Route, Routes} from 'react-router-dom';

function App() {
	return (
		<>
			<NavBar />
			<Routes>
				<Route path="/" element={<Products />} />
				<Route path="/checkout-page" element={<CheckoutPage />} />
			</Routes>
		</>
	);
}

export default App;
