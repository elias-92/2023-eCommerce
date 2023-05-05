import {Grid, TextField} from '@mui/material';
import React from 'react';
import {useController} from 'react-hook-form';

const AddressInput = ({name, label, required}) => {

	const {
		field: {ref, ...inputProps},
		fieldState: {invalid},
	} = useController({
		name,
		rules: {required},
		defaultValue: '',
	});

	return (
		<Grid item xs={12} sm={6}>
			<TextField
				label={label}
				variant="outlined"
				fullWidth
				inputRef={ref}
				error={invalid}
				{...inputProps}
			/>
		</Grid>
	);
};

export default AddressInput;
