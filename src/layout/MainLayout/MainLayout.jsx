import React from 'react';
import PropTypes from 'prop-types';

import ContentLayout from '../ContentLayout/ContentLayout';

import {MainLayoutStyled} from './style';

const MainLayout = ({ children }) => {
	return (
		<MainLayoutMUI>
			<ContentLayout>
				{children}
			</ContentLayout>
		</MainLayoutMUI>
	);
};

const {
	MainLayoutMUI,
} = MainLayoutStyled();

MainLayout.propTypes = {
	children: PropTypes.node.isRequired,
};

export default MainLayout;
