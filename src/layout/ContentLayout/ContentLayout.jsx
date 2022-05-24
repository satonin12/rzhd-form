import React from 'react';
import PropTypes from 'prop-types';

import {ContentLayoutStyled} from "./style";

const ContentLayout = ({ children }) => {
	return (
			<ContentLayoutMUI>
				{children}
			</ContentLayoutMUI>
	)
};

const {
	ContentLayoutMUI
} = ContentLayoutStyled()

ContentLayout.propTypes = {
	children: PropTypes.node.isRequired,
};

export default ContentLayout;
