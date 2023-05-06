const express = require('express');
const Stripe = require('stripe');
const cors = require('cors');
require('dotenv').config();

const stripe = new Stripe(process.env.REACT_APP_CLAVE_PRIVATE_STRIPE);

const app = express();

//middleware

app.use(cors({origin: 'https://e-commerce2023.netlify.app'}));
app.use(express.json());

app.post('/api/checkout', async (req, res) => {
	const {id, amount} = req.body;
	try {
		const payment = await stripe.paymentIntents.create({
			amount,
			currency: 'USD',
			description: 'Basket of products',
			payment_method: id,
			confirm: true,
		});
		console.log('payment:', payment);
		return res.status(200).json({message: 'Payment successful'});
	} catch (error) {
		return res.json({message: error.raw.message});
	}
});

app.listen(3001, () => console.log('Server listening port', 3001));
