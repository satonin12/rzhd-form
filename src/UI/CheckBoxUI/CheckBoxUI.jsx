import React from 'react';
import {Checkbox} from '@mui/material';
import PropTypes from 'prop-types';

const CheckBoxUI = ({value, onChange, inputProps}) => {
	return <Checkbox {...inputProps} checked={value} onChange={onChange} />;
};

CheckBoxUI.propTypes = {
	value: PropTypes.bool.isRequired,
	onChange: PropTypes.func.isRequired,
	inputProps: PropTypes.object.isRequired,
};

export default React.memo(CheckBoxUI);
