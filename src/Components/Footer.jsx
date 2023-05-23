import {Box, Typography} from '@mui/material';

const Footer = () => {
	return (
		<Box
			sx={{
				marginTop: '2rem',
				borderTop: '1px solid #ccc',
				textAlign: 'center',
				fontStyle: 'italic',
				backgroundColor: 'whitesmoke',
			}}
		>
			<Typography variant="subtitle1">
				2023-Copyright by Elias Martinez
			</Typography>
			<Typography variant="subtitle1">Privacy - Terms - Sitemap</Typography>
		</Box>
	);
};

export default Footer;
