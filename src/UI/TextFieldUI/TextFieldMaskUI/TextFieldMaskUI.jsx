import React from 'react';
import InputMask from 'react-input-mask';
import {TextField} from "@mui/material";

const TextFieldMaskUI = (props) => {
	const { mask, maskChar, value, onChange, inputProps } = props;

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

export default React.memo(TextFieldMaskUI);
