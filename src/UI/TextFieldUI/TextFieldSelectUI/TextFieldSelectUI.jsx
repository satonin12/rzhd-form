import React, {useMemo} from 'react';
import PropTypes from 'prop-types';
import {FormControl, InputLabel, Select} from '@mui/material';

import { TextFieldSelectStyle } from './style';

const TextFieldSelectUI = ({sx, value, onChange, inputProps, children}) => {
	const { TextFieldSelectSx } = TextFieldSelectStyle();

	const textFieldSelectStyle = useMemo(() => {
		const propsStyle = sx ? sx : {};

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

TextFieldSelectUI.propTypes = {
	value: PropTypes.string.isRequired,
	onChange: PropTypes.func.isRequired,
	inputProps: PropTypes.object.isRequired,
	children: PropTypes.node.isRequired,
	sx: PropTypes.object,
};

export default React.memo(TextFieldSelectUI);
