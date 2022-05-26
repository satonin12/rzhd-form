import React from 'react';

import RZHDForm from '../../forms/RZHD/RZHDForm';

import { RZHDPageStyled } from './style';

const RZHDPage = () => {
	return (
		<WrapperMUI>
			<RZHDForm />
		</WrapperMUI>
	);
};

const { WrapperMUI } = RZHDPageStyled();

export default RZHDPage;
