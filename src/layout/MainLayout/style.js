import { styled } from '@mui/material';

export const MainLayoutStyled = () => {
	const MainLayoutMUI = styled('div')(() => ({
		padding: '0',
		margin: '0',
		width: '100%',
		height: '100vh',

		boxSizing: 'border-box',
	}));

	const ContentLayoutMUI = styled('div')(() => ({
		margin: '0 auto',
		maxWidth: '1440px',
	}));

	return {
		MainLayoutMUI,
		ContentLayoutMUI,
	};
};
