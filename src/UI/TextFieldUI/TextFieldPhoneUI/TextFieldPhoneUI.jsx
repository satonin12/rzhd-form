import React from 'react';
import InputMask from 'react-input-mask';
import {TextField} from "@mui/material";

const TextFieldPhoneUI = (props) => {
	const {value, onChange, inputProps} = props
	return (
		<InputMask
			mask="+7 999 999 99 99"
			maskChar=" "
			value={value}
			onChange={onChange}
		>
			{() => (
				<TextField {...inputProps} />
			)}
		</InputMask>
	)
}

export default React.memo(TextFieldPhoneUI);
