import {styled, Typography} from '@mui/material'

export const RZHDFormStyled = () => {

	const WrapperMUI = styled('div')(() => ({

	}))

	const ContainerMUI = styled('div')(() => ({
		display: 'flex',
		justifyContent: 'space-between',

	}))

	const RowMUI = styled('div')(() => ({
		display: 'flex',
		flexDirection: 'row',
		alignItems: 'center',

		marginBottom: '15px',
		//TODO: исправить из-за слабой поддержки кроссбраузерности
		gap: '15px',
	}))

	const ColumnMUI = styled('div')(() => ({
		display: 'flex',
		flexDirection: 'column',
		marginBottom: '15px',
	}));

	const TextMUI = styled(Typography)(() => ({

	}))

	return {
		WrapperMUI,
		RowMUI, ColumnMUI,
		TextMUI,
		ContainerMUI
	}
}
