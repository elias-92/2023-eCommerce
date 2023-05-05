import {Button} from '@mui/material';
import {CardElement, useElements, useStripe} from '@stripe/react-stripe-js';
import React from 'react';
import {useStateValue} from '../../stateProvider';
import accounting from 'accounting';
import {getBasketTotal} from '../../reducer';
import axios from 'axios';

const CreditCardForm = ({handleNext, handleBack}) => {
	const [{basket}] = useStateValue();
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
		if (!error) {
			const {id} = paymentMethod;
			try {
				const {data} = await axios.post('https://localhost:3001/api/checkout', {
					id,
					amount: getBasketTotal(basket) * 100,
				});
				console.log(data);
			} catch (error) {
				console.log(error);
			}
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
				<Button
					type="submit"
					variant="contained"
					color="primary"
				>{`Pay ${accounting.formatMoney(getBasketTotal(basket))}`}</Button>
			</div>
		</form>
	);
};

export default CreditCardForm;
