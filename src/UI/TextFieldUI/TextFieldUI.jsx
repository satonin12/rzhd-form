import React from 'react';
import {TextField} from '@mui/material';
import PropTypes from 'prop-types';

const TextFieldUI = ({ value, onChange, inputProps }) => {
	return <TextField {...inputProps} value={value} onChange={onChange} />;
};

TextFieldUI.propTypes = {
	value: PropTypes.bool.isRequired,
	onChange: PropTypes.func.isRequired,
	inputProps: PropTypes.object.isRequired,
};

export default React.memo(TextFieldUI);
