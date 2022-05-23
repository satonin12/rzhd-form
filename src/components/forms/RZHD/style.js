import {styled} from '@mui/material'

export const RZHDFormStyled = () => {

	const RowMUI = styled('div')(() => ({
		display: 'flex',
		flexDirection: 'row',

		marginBottom: '15px',
		//TODO: исправить из-за слабой поддержки кроссбраузерности
		gap: '15px',
	}))

	return {
		RowMUI
	}
}
