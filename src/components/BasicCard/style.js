import { styled } from '@mui/material';

export const BasicCardStyled = () => {
	const CardContentMUI = styled('div')(() => ({
		minHeight: '230px',
		padding: '15px 0',
	}));

	return {
		CardContentMUI,
	};
};
