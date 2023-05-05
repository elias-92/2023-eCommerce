import React from 'react';
import Review from './Review';
import {Divider, Typography} from '@mui/material';
import {Elements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';
import CreditCardForm from './CreditCardForm';

const stripePromise = loadStripe(process.env.REACT_APP_CLAVE_STRIPE);

const PaymentForm = ({handleNext, handleBack}) => {
	return (
		<>
			<Review />
			<Divider />
			<Typography variant="h6" gutterBottom style={{marginTop: '1rem'}}>
				Payment Method
			</Typography>
			<Elements stripe={stripePromise}>
				<CreditCardForm handleBack={handleBack} handleNext={handleNext} />
			</Elements>
		</>
	);
};

export default PaymentForm;
