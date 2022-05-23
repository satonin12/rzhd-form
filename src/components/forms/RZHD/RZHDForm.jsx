import React from 'react';
import { useForm } from 'react-hook-form';
import { MenuItem } from '@mui/material';

import TextFieldUI from '../../../UI/TextFieldUI/TextFieldUI';
import CheckBoxUI from '../../../UI/CheckBoxUI/CheckBoxUI';
import FormTextField from '../../Fields/WithController/FormFieldWithController';
import TextFieldSelectUI from '../../../UI/TextFieldSelectUI/TextFieldSelectUI';

import TypeDocumentArray from './TypeDocumentData.json';
import NationalDataArray from './NationalData.json';

import { RZHDFormStyled } from './style';

const RZHDForm = () => {
	const { handleSubmit, control } = useForm({
		defaultValues: {
			email: '',
			notif: true,
		},
	});

	const onSubmit = (data) => {
		console.log('data: ', data);
	};

	return (
		<>
			<h1>RZHDForm</h1>
			<form onSubmit={handleSubmit(onSubmit)}>

				{/*! 1 линия*/}

				<RowMUI>
					<FormTextField
						controller={{
							name: 'snils',
							control,
							defaultValue: '',
							rules: {
								required: true,
							},
						}}
					>
						<TextFieldUI
							inputProps={{
								placeholder: '',
								label: 'Снилс',
								name: 'snils',
								type: 'text',
								required: true,
							}}
						/>
					</FormTextField>
				</RowMUI>

				{/*! 2 линия*/}

				<RowMUI>
					<FormTextField
						controller={{
							name: 'surname',
							control,
							defaultValue: '',
							rules: {
								required: true,
							},
						}}
					>
						<TextFieldUI
							inputProps={{
								placeholder: '',
								label: 'Фамилия',
								name: 'surname',
								type: 'text',
								required: true,
							}}
						/>
					</FormTextField>

					<FormTextField
						controller={{
							name: 'name',
							control,
							defaultValue: '',
							rules: {
								required: true,
							},
						}}
					>
						<TextFieldUI
							inputProps={{
								placeholder: '',
								label: 'Имя',
								name: 'name',
								type: 'text',
								required: true,
							}}
						/>
					</FormTextField>

					<FormTextField
						controller={{
							name: 'patronymic',
							control,
							defaultValue: '',
							rules: {
								required: true,
							},
						}}
					>
						<TextFieldUI
							inputProps={{
								placeholder: '',
								label: 'Отчество (обязательно, при наличии)',
								name: 'patronymic',
								type: 'text',
								required: true,
							}}
						/>
					</FormTextField>
				</RowMUI>

				{/*! 3 линия*/}

				<RowMUI>
					<FormTextField
						controller={{
							name: 'patronymic',
							control,
							defaultValue: '',
							rules: {
								required: true,
							},
						}}
					>
						<TextFieldUI
							inputProps={{
								placeholder: '',
								label: 'Отчество (обязательно, при наличии)',
								name: 'patronymic',
								type: 'text',
								required: true,
							}}
						/>
					</FormTextField>
				</RowMUI>

				{/*! 4 линия*/}

				<RowMUI>
					<FormTextField
						controller={{
							name: 'type_doc',
							control,
							defaultValue: '',
							rules: {
								required: true,
							},
						}}
					>
						<TextFieldSelectUI
							inputProps={{
								placeholder: '',
								label: 'Тип документа',
								name: 'type_doc',
								required: true,
							}}
						>
							{TypeDocumentArray.map((item) => {
								<MenuItem key={item.value} value={item.value}>
									{item.label}
								</MenuItem>;
							})}
						</TextFieldSelectUI>
					</FormTextField>

					<FormTextField
						controller={{
							name: 'birthday',
							control,
							defaultValue: '',
							rules: {
								required: true,
							},
						}}
					>
						<TextFieldUI
							inputProps={{
								placeholder: '',
								label: 'Дата рождения',
								name: 'birthday',
								type: 'text',
								required: true,
							}}
						/>
					</FormTextField>

					<FormTextField
						controller={{
							name: 'national',
							control,
							defaultValue: '',
							rules: {
								required: true,
							},
						}}
					>
						<TextFieldSelectUI
							inputProps={{
								placeholder: '',
								label: 'Гражданство',
								name: 'national',
								required: true,
							}}
						>
							{NationalDataArray.map((item) => {
								<MenuItem key={item.value} value={item.value}>
									{item.label}
								</MenuItem>;
							})}
						</TextFieldSelectUI>
					</FormTextField>
				</RowMUI>

				{/*! 5 линия*/}

				<RowMUI>
					<FormTextField
						controller={{
							name: 'notif',
							control,
							defaultValue: true,
							rules: {
								required: true,
							},
						}}
					>
						<CheckBoxUI
							inputProps={{
								placeholder: '',
								label: 'Пол',
								name: 'notif',
								required: true,
								select: true,
							}}
						/>
					</FormTextField>
				</RowMUI>

				{/*! 6 линия*/}

				<RowMUI>
					<FormTextField
						controller={{
							name: 'phone',
							control,
							defaultValue: '',
							rules: {
								required: true,
							},
						}}
					>
						<TextFieldUI
							inputProps={{
								placeholder: '',
								label: 'Телефон пассажира',
								name: 'phone',
								type: 'text',
								required: true,
							}}
						/>
					</FormTextField>

					<FormTextField
						controller={{
							name: 'email',
							control,
							defaultValue: '',
							rules: {
								required: true,
							},
						}}
					>
						<TextFieldUI
							inputProps={{
								placeholder: '',
								label: 'E-mail пассажира',
								name: 'email',
								type: 'text',
								required: true,
							}}
						/>
					</FormTextField>
				</RowMUI>

				{/*! 7 линия*/}

				<RowMUI>
					<FormTextField
						controller={{
							name: 'bonus',
							control,
							defaultValue: true,
							rules: {
								required: true,
							},
						}}
					>
						<CheckBoxUI
							inputProps={{
								placeholder: '',
								label: 'Пол',
								name: 'bonus',
								required: true,
								select: true,
							}}
						/>
					</FormTextField>
				</RowMUI>

				<button type="submit">submit</button>
			</form>
		</>
	);
};

const {
	RowMUI
} = RZHDFormStyled()

export default RZHDForm;
