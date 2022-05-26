import React from 'react';
import {Typography} from '@mui/material';
import PropTypes from 'prop-types';

import {reverse} from '../../lib/services/services';

import TypeDocumentArray from '../forms/RZHD/TypeDocumentData.json';
import NationalDataArray from '../forms/RZHD/NationalData.json';
import {BasicCardStyled} from './style';

const BasicCardInfo = ({index, passanger}) => {
	const searchLabel = (searchValueDoc, searchValueNat) => {
		let stringDoc,
			stringNat = '';

		if (typeof searchValueDoc !== 'undefined') {
			stringDoc =
				TypeDocumentArray.find((item) => item.value === searchValueDoc)
					?.label || '';
		}
		if (typeof searchValueNat !== 'undefined') {
			stringNat =
				NationalDataArray.find((item) => item.value === searchValueNat)
					?.label || '';
		}

		if (stringDoc && stringNat) {
			return `${stringDoc} - ${stringNat}`;
		}
		return '';
	};

	return (
		<CardContentMUI>
			<Typography
				sx={{ fontSize: 14 }}
				color="text.secondary"
				gutterBottom
			>
				Пассажир №{index}
			</Typography>

			<Typography variant="h5" component="div">
				{passanger.surname} {passanger.name} {passanger.patronymic}
			</Typography>

			<Typography color="text.secondary">
				{reverse(passanger.birthday)}
			</Typography>

			<Typography sx={{ mb: 1 }} variant="body2">
				{searchLabel(
					passanger.type_doc,
					passanger.national
				)}
			</Typography>

			<Typography variant="body2">
				{passanger.phone}
				<br />
				{passanger.email}
			</Typography>
		</CardContentMUI>
	);
};

const {
	CardContentMUI
} = BasicCardStyled();

BasicCardInfo.propTypes = {
	index: PropTypes.number.isRequired,
	passanger: PropTypes.shape({
		phone: PropTypes.string,
		email: PropTypes.string,
		national: PropTypes.string,
		type_doc: PropTypes.string,
		birthday: PropTypes.string,
		patronymic: PropTypes.string,
		name: PropTypes.string,
		surname: PropTypes.string,
	}),
};

export default BasicCardInfo;
