import React from 'react';
import {TextField} from "@mui/material";

const TextFieldSelectUI = (props) => {
	const {value, onChange, inputProps} = props
	return <TextField select {...inputProps} value={value} onChange={onChange} />;
};

export default React.memo(TextFieldSelectUI)
