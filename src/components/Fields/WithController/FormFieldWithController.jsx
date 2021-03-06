import React from 'react';
import { Controller } from 'react-hook-form';
import PropTypes from 'prop-types';

const FormFieldWithController = ({ controller, children }) => {
	return (
		<Controller
			name={controller.name}
			control={controller.control}
			defaultValue={controller.defaultValue}
			rules={controller.rules}
			render={({ field: { value, onChange } }) => {
				const childrenWithControllerProps = React.cloneElement(children, {
					value,
					onChange,
				});

				return <>{childrenWithControllerProps}</>;
			}}
		/>
	);
};

FormFieldWithController.propTypes = {
	controller: PropTypes.shape({
		name: PropTypes.string.isRequired,
		control: PropTypes.object.isRequired,
		defaultValue: PropTypes.oneOfType([
			PropTypes.string,
			PropTypes.bool
		]).isRequired,
		rules: PropTypes.shape({
			required: PropTypes.bool,
		}),
	}),
	children: PropTypes.node,
};

export default React.memo(FormFieldWithController);
