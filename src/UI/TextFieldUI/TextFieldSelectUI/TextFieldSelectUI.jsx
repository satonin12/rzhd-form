import React, {useMemo} from 'react';
import {FormControl, InputLabel, Select} from '@mui/material';
import { TextFieldSelectStyle } from './style';

const TextFieldSelectUI = (props) => {
	const { value, onChange, inputProps, children } = props;

	const { TextFieldSelectSx } = TextFieldSelectStyle();

	const textFieldSelectStyle = useMemo(() => {
		const propsStyle = props?.sx ? props.sx : {};

		return {
			...TextFieldSelectSx,
			...propsStyle,
		};
	}, []);

	return (
		<FormControl>
			<InputLabel>{inputProps?.label}</InputLabel>
			<Select
				sx={textFieldSelectStyle}
				{...inputProps}
				label="Гражданство"
				value={value}
				onChange={onChange}
			>
				{children}
			</Select>
		</FormControl>
	);
};

export default React.memo(TextFieldSelectUI)
