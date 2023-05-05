import {Button, Grid, Typography} from '@mui/material';
import React from 'react';
import {useForm, FormProvider} from 'react-hook-form';
import AddressInput from './AddressInput';
import {Link as LinkRoute} from 'react-router-dom';
import {useStateValue} from '../../stateProvider';
import {actionTypes} from '../../reducer';

const AddressForm = ({handleNext}) => {
	const [, dispatch] = useStateValue();
	const methods = useForm();

	return (
		<>
			<Typography variant="h6" gutterBottom>
				Shipping Address
			</Typography>
			<FormProvider {...methods}>
				<form
					onSubmit={methods.handleSubmit((data) => {
						dispatch({
							type: actionTypes.SET_SHIPPING_DATA,
							shippingData: data,
						});
						handleNext();
					})}
				>
					<Grid container spacing={3}>
						<AddressInput required name="First Name" label="First Name" />
						<AddressInput required name="LastName" label="Last Name" />
						<AddressInput required name="Address" label="Address" />
						<AddressInput required name="Email Address" label="Email Address" />
						<AddressInput required name="City" label="City" />
						<AddressInput required name="Post Code" label="Post Code" />
					</Grid>
					<div
						style={{
							display: 'flex',
							justifyContent: 'space-between',
							marginTop: '1rem',
						}}
					>
						<LinkRoute to="/checkout-page">
							<Button>Back to the checkout page</Button>
						</LinkRoute>
						<Button type="submit" variant="contained" color="primary">
							Next
						</Button>
					</div>
				</form>
			</FormProvider>
		</>
	);
};

export default AddressForm;
