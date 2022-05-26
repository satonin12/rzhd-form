import React from 'react';

import Logo from '../../assets/icons/logo.svg';

import {HeaderStyled} from './style';

const Header = () => {
	return (
		<WrapperMUI>
			<LogoMUI>
				{/*<Logo/>*/}
				<img src={Logo} alt="Logo" />
			</LogoMUI>
			<HeaderNavMUI>
				<NavListMUI>
					<NavItemMUI>
						<LinkMUI>Пассажирам</LinkMUI>
					</NavItemMUI>
					<NavItemMUI>
						<LinkMUI>Грузовые перевозки</LinkMUI>
					</NavItemMUI>
					<NavItemMUI>
						<LinkMUI>Компания</LinkMUI>
					</NavItemMUI>
					<NavItemMUI>
						<LinkMUI>Работа в РЖДNew</LinkMUI>
					</NavItemMUI>
					<NavItemMUI>
						<LinkMUI>Контакты</LinkMUI>
					</NavItemMUI>
				</NavListMUI>
			</HeaderNavMUI>
		</WrapperMUI>
	);
};

const {
	LogoMUI,
	WrapperMUI,
	HeaderNavMUI,
	NavListMUI,
	NavItemMUI,
	LinkMUI
} = HeaderStyled();

export default React.memo(Header);
