import React from 'react';
import { MenuItem } from '@mui/material';

import CheckBoxUI from '../../../../UI/CheckBoxUI/CheckBoxUI';
import TextFieldUI from '../../../../UI/TextFieldUI/TextFieldUI';
import TextFieldSelectUI from '../../../../UI/TextFieldSelectUI/TextFieldSelectUI';
import FormTextField from '../../../Fields/WithController/FormFieldWithController';

import TypeDocumentArray from '../TypeDocumentData.json';
import NationalDataArray from '../NationalData.json';

import { RZHDFormStyled } from '../style';

const RZHDFields = ({ control, names, index, deletePassenger }) => {
	console.log('NationalDataArray: ', NationalDataArray);

	return (
		<>
			{/*! 1 линия*/}

			<h4>{index}</h4>
			<RowMUI>
				<FormTextField
					controller={{
						name: names.snils,
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
							name: names.snils,
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
						name: names.surname,
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
							name: names.surname,
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
							name: names.name,
							type: 'text',
							required: true,
						}}
					/>
				</FormTextField>

				<FormTextField
					controller={{
						name: names.patronymic,
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
							name: names.patronymic,
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
						name: names.patronymic,
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
							name: names.patronymic,
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
						name: names.type_doc,
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
							name: names.type_doc,
							required: true,
						}}
					>
						{TypeDocumentArray.map((item) => (
							<MenuItem key={item.value} value={item.value}>
								{item.label}
							</MenuItem>
						))}
					</TextFieldSelectUI>
				</FormTextField>

				<FormTextField
					controller={{
						name: names.birthday,
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
							name: names.birthday,
							type: 'text',
							required: true,
						}}
					/>
				</FormTextField>

				<FormTextField
					controller={{
						name: names.national,
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
							name: names.national,
							required: true,
						}}
					>
						{NationalDataArray.map((item) => (
							<MenuItem key={item.value} value={item.value}>
								{item.label}
							</MenuItem>
						))}
					</TextFieldSelectUI>
				</FormTextField>
			</RowMUI>

			{/*! 5 линия*/}

			<RowMUI>
				<FormTextField
					controller={{
						name: names.notif,
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
							name: names.notif,
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
						name: names.phone,
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
							name: names.phone,
							type: 'text',
							required: true,
						}}
					/>
				</FormTextField>

				<FormTextField
					controller={{
						name: names.email,
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
							name: names.email,
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
						name: names.bonus,
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
							name: names.bonus,
							required: true,
							select: true,
						}}
					/>
				</FormTextField>
			</RowMUI>

			<RowMUI>
				<button type="button" onClick={() => deletePassenger(index)}>Удалить пассажира</button>
			</RowMUI>
		</>
	);
};

const {RowMUI} = RZHDFormStyled();

export default React.memo(RZHDFields)
