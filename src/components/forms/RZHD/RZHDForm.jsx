import React from 'react';

import {useRZHDForm} from "./useRZHDForm";
import RZHDFields from "./RZHDFields/RZHDFields";

const RZHDForm = () => {
	const {
		useForm: {
			handleSubmit,
			control
		},
		formHandlers: {
			addPassenger,
			deletePassenger
		},
		formValues: {
			counter, passenger,
			splitNameWithCount
		},
		onSubmit
	} = useRZHDForm()


	return (
		<>
			<h1>RZHDForm</h1>
			<form onSubmit={handleSubmit(onSubmit)}>

				{passenger.map((item, i) => (
					<RZHDFields
						key={i}
						index={item}
						control={control}
						names={splitNameWithCount[counter - 1]}
						deletePassenger={deletePassenger}
					/>
				))}

				<button type="button" onClick={addPassenger}>Добавить пассажира</button>
				<button type="submit">submit</button>
			</form>
		</>
	);
};

export default React.memo(RZHDForm);
