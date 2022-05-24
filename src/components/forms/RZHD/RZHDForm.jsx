import React from 'react';

import { useRZHDForm } from './useRZHDForm';
import RZHDFields from './RZHDFields/RZHDFields';
import { RZHDFormStyled } from './style';
import { Button } from '@mui/material';
import BasicCard from '../../BasicCard/BasicCard';

const RZHDForm = () => {
	const {
		useForm: { handleSubmit, control, fields },
		formHandlers: { addPassenger, deletePassenger },
		formValues: {
			counter
		},
		onSubmit,
	} = useRZHDForm();

	console.log('fields: ', fields)

	return (
		<ContainerMUI>
			<WrapperMUI>
				<h1>Форма оформления пассажиров РЖД New</h1>
				<form onSubmit={handleSubmit(onSubmit)}>
					{fields.map((field, i) => (
						<RZHDFields
							key={field.id}
							index={i}
							control={control}
							field={field}
							deletePassenger={deletePassenger}
						/>
					))}

					<RowMUI>
						<Button
							variant="outlined"
							type="button"
							onClick={addPassenger}
						>
							Добавить пассажира
						</Button>
						<Button variant="contained" type="submit">
							Сохранить данные
						</Button>
					</RowMUI>
				</form>
			</WrapperMUI>

			<BasicCard control={control} index={counter} />
		</ContainerMUI>
	);
};

const { WrapperMUI, RowMUI, ContainerMUI } = RZHDFormStyled();

export default React.memo(RZHDForm);
