import { styled } from '@mui/material';

export const ContentLayoutStyled = () => {
	const ContentLayoutMUI = styled('div')(() => ({
		margin: '0 auto',
		maxWidth: '1440px',
	}));

	return {
		ContentLayoutMUI,
	};
};
