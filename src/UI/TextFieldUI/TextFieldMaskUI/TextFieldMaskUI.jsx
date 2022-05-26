import React from 'react';
import InputMask from 'react-input-mask';
import {TextField} from '@mui/material';
import PropTypes from 'prop-types';

const TextFieldMaskUI = ({ mask, maskChar, value, onChange, inputProps }) => {
	return (
		<InputMask
			mask={mask}
			maskChar={maskChar}
			value={value}
			onChange={onChange}
		>
			{() => <TextField {...inputProps} />}
		</InputMask>
	);
};

TextFieldMaskUI.propTypes = {
	mask: PropTypes.string.isRequired,
	maskChar: PropTypes.string.isRequired,
	value: PropTypes.string.isRequired,
	onChange: PropTypes.func.isRequired,
	inputProps: PropTypes.object.isRequired,
};

export default React.memo(TextFieldMaskUI);
