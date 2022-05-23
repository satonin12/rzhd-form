import {styled} from '@mui/material'

export const MainLayoutStyled = () => {

	const MainLayoutMUI = styled('div')(() => ({
		padding: '0',
		margin: '0',
		width: '100%',
		height: '100vh',

		boxSizing: 'border-box',
		border: '1px solid blue'
	}))

	const ContentLayoutMUI = styled('div')(() => ({
		margin: '0 auto',
		maxWidth: '1440px',

		border: '1px solid red'
	}))

	return {
		MainLayoutMUI,
		ContentLayoutMUI
	}
}
