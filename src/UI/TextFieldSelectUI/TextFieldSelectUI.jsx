import React from 'react';
import {TextField} from "@mui/material";

const TextFieldSelectUI = (props) => {
	const {value, onChange, inputProps, children} = props
	return (
		<TextField
			select={true}
			{...inputProps}
			value={value}
			onChange={onChange}
			SelectProps={{
				multiple: false,
				value: []
			}}
		>
			{children}
		</TextField>
	)
};

export default React.memo(TextFieldSelectUI)
