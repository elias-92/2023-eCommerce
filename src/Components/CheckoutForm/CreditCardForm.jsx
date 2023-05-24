import {Button, CircularProgress} from '@mui/material';
import {CardElement, useElements, useStripe} from '@stripe/react-stripe-js';
import React, {useState} from 'react';
import {useStateValue} from '../../context/stateProvider';
import accounting from 'accounting';
import {actionTypes, getBasketTotal} from '../../context/reducer';
import axios from 'axios';

const CreditCardForm = ({handleBack, handleNext}) => {
	const [{basket}, dispatch] = useStateValue();
	const [loading, setLoading] = useState(false);
	const elements = useElements();
	const stripe = useStripe();

	const CARD_ELEMENT_OPTIONS = {
		iconStyle: 'solid',
		hidePostalCode: true,
		style: {
			base: {
				iconColor: 'RGB(240, 57, 122)',
				color: '#333',
				fontSize: '18px',
				'::placeholder': {
					color: '#ccc',
				},
			},
			invalid: {
				color: '#e5424d',
				':focus': {
					color: '#303238',
				},
			},
		},
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		const {error, paymentMethod} = await stripe.createPaymentMethod({
			type: 'card',
			card: elements.getElement(CardElement),
		});
		setLoading(true);
		if (!error) {
			const {id} = paymentMethod;
			try {
				const {data} = await axios.post('https://2023-ecommerce.netlify.com/api/checkout', {
					id,
					amount: getBasketTotal(basket),
				});
				dispatch({
					type: actionTypes.SET_PAYMENT_MESSAGE,
					paymentMessage: data.message,
				});
				if (data.message === 'Payment successful') {
					dispatch({
						type: actionTypes.EMPTY_BASKET,
						basket: [],
					});
				}
				elements.getElement(CardElement).clear();
				handleNext();
			} catch (error) {
				console.log(error);
				handleNext();
			}
			setLoading(false);
		}
	};

	return (
		<form onSubmit={handleSubmit}>
			<CardElement options={CARD_ELEMENT_OPTIONS} />
			<div
				style={{
					display: 'flex',
					justifyContent: 'space-between',
					marginTop: '2rem',
				}}
			>
				<Button variant="outlined" onClick={handleBack}>
					Back
				</Button>
				<Button type="submit" variant="contained" color="primary">
					{loading ? (
						<CircularProgress />
					) : (
						`Pay ${accounting.formatMoney(getBasketTotal(basket))}`
					)}
				</Button>
			</div>
		</form>
	);
};

export default CreditCardForm;
