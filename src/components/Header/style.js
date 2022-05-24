import {styled} from '@mui/material'

export const HeaderStyled = () => {

	const WrapperMUI = styled('header')(() => ({
		height: '53px',
		padding: '15px',

		display: 'flex',
		justifyContent: 'space-between',
		margin: '0',
	}))

	const LogoMUI = styled('div')(() => ({
		width: '50px',
		height: '50px',

		'& img': {
			width: '50px',
			height: '50px',
		}
	}))

	const HeaderNavMUI = styled('nav')(() => ({

	}))

	const NavListMUI = styled('ul')(() => ({
		display: 'flex',
		margin: '0',
		listStyleType: 'none',
	}))

	const NavItemMUI = styled('li')(() => ({
		fontWeight: '500',
		fontSize: '14px',
		lineHeight: '128%',
		color: '#000000',
		padding: '17px 20px',
	}))

	const LinkMUI = styled('a')(() => ({
		color: '#000000',
		textDecoration: 'none',
		cursor: 'pointer'
	}))

	return {
		LogoMUI,
		WrapperMUI,
		HeaderNavMUI,
		NavListMUI,
		NavItemMUI,
		LinkMUI
	}
}
