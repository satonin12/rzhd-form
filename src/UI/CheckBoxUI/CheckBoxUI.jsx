import React from 'react';
import {Checkbox} from "@mui/material";

const CheckBoxUI = (props) => {
	const {value, onChange, inputProps} = props
	return <Checkbox {...inputProps} checked={value} onChange={onChange} />;
}

export default React.memo(CheckBoxUI)
