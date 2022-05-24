import React from 'react';
import {TextField} from "@mui/material";

const TextFieldUI = (props) => {
	const {value, onChange, inputProps} = props
	return <TextField {...inputProps} value={value} onChange={onChange} />;
};

export default React.memo(TextFieldUI)
