import React from 'react';
import { MenuItem } from '@mui/material';

import CheckBoxUI from '../../../../UI/CheckBoxUI/CheckBoxUI';
import TextFieldUI from '../../../../UI/TextFieldUI/TextFieldUI';
import TextFieldSelectUI from '../../../../UI/TextFieldUI/TextFieldSelectUI/TextFieldSelectUI';
import FormTextField from '../../../Fields/WithController/FormFieldWithController';

import TypeDocumentArray from '../TypeDocumentData.json';
import NationalDataArray from '../NationalData.json';

import { RZHDFormStyled } from '../style';
import TextFieldPhoneUI from "../../../../UI/TextFieldUI/TextFieldPhoneUI/TextFieldPhoneUI";

const RZHDFields = ({ control, names, index, deletePassenger }) => {
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
					}}
				>
					<TextFieldUI
						inputProps={{
							placeholder: '',
							label: 'Снилс',
							name: names.snils,
							type: 'text',
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
					}}
				>
					<TextFieldUI
						inputProps={{
							placeholder: '',
							label: 'Отчество (обязательно, при наличии)',
							name: names.patronymic,
							type: 'text',
						}}
					/>
				</FormTextField>
			</RowMUI>

			{/*! 3 линия*/}

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
							type: 'date',
							required: true,
							InputLabelProps: {
								shrink: true,
								required: true
							}
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

			{/*! 4 линия*/}

			<ColumnMUI>
				<RowMUI>
					<FormTextField
						controller={{
							name: names.notif,
							control,
							defaultValue: true,
						}}
					>
						<CheckBoxUI
							inputProps={{
								placeholder: '',
								label: 'Пол',
								name: names.notif,
								select: true,
							}}
						/>
					</FormTextField>

					<TextMUI>
						Согласен на получение оповещений в случаях чрезвычайных ситуаций на желедорожном транспорте
					</TextMUI>
				</RowMUI>
				<TextMUI>
					Если вы хотите получать оповещения об изменении движения
					вашего поезда в случае чрезвычайной ситуации, укажите,
					пожалуйста e-mail и/или телефон пассажира. <br />
					Если не хотите
					получать оповещения - снимите галочку согласия на
					оповещения.
				</TextMUI>
			</ColumnMUI>

			{/*! 5 линия*/}

			<RowMUI>
				<FormTextField
					controller={{
						name: names.phone,
						control,
						defaultValue: '',
					}}
				>
					<TextFieldPhoneUI
						inputProps={{
							placeholder: '',
							label: 'Телефон пассажира',
							name: names.phone,
							type: 'text',
						}}
					/>
				</FormTextField>

				<FormTextField
					controller={{
						name: names.email,
						control,
						defaultValue: '',
					}}
				>
					<TextFieldUI
						inputProps={{
							placeholder: '',
							label: 'E-mail пассажира',
							name: names.email,
							type: 'email',
						}}
					/>
				</FormTextField>
			</RowMUI>

			{/*! 6 линия*/}

			<RowMUI>
				<FormTextField
					controller={{
						name: names.bonus,
						control,
						defaultValue: true,
					}}
				>
					<CheckBoxUI
						inputProps={{
							placeholder: '',
							label: 'Пол',
							name: names.bonus,
							select: true,
						}}
					/>
				</FormTextField>
				<TextMUI>
					Указать номер бонусной, электронной, дорожной карты или делового проездного.
				</TextMUI>
			</RowMUI>

			{/*! 7 линия*/}

			<RowMUI>
				<button type="button" onClick={() => deletePassenger(index)}>
					Удалить пассажира
				</button>
			</RowMUI>
		</>
	);
};

const { RowMUI, ColumnMUI, TextMUI } = RZHDFormStyled();

export default React.memo(RZHDFields);
