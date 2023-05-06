import * as React from 'react';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Typography from '@mui/material/Typography';
import {createTheme, ThemeProvider} from '@mui/material/styles';
import AddressForm from './AddressForm';
import PaymentForm from './PaymentForm';
import {useStateValue} from '../../context/stateProvider';
import Confirmation from './Confirmation';

const steps = ['Shipping address', 'Payment details'];

const theme = createTheme();

export default function Checkout() {
	const [{paymentMessage}] = useStateValue();
	const [activeStep, setActiveStep] = React.useState(0);

	const handleNext = () => {
		setActiveStep(activeStep + 1);
	};

	const handleBack = () => {
		setActiveStep(activeStep - 1);
	};
	const Form = () =>
		activeStep === 0 ? (
			<AddressForm handleNext={handleNext} />
		) : (
			<PaymentForm handleBack={handleBack} handleNext={handleNext} />
		);

	return (
		<ThemeProvider theme={theme}>
			<Container component="main" maxWidth="sm" sx={{mb: 4}}>
				<Paper variant="outlined" sx={{my: {xs: 3, md: 6}, p: {xs: 2, md: 3}}}>
					<Typography component="h1" variant="h4" align="center">
						Checkout
					</Typography>
					<Stepper activeStep={activeStep} sx={{pt: 3, pb: 5}}>
						{steps.map((label) => (
							<Step key={label}>
								<StepLabel>{label}</StepLabel>
							</Step>
						))}
					</Stepper>
					{activeStep === steps.length ? (
						<Confirmation message={paymentMessage} />
					) : (
						<Form />
					)}
				</Paper>
			</Container>
		</ThemeProvider>
	);
}
