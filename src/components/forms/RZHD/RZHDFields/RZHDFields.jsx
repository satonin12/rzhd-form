import React from 'react';
import {Button, MenuItem} from '@mui/material';

import CheckBoxUI from '../../../../UI/CheckBoxUI/CheckBoxUI';
import TextFieldUI from '../../../../UI/TextFieldUI/TextFieldUI';
import TextFieldSelectUI from '../../../../UI/TextFieldUI/TextFieldSelectUI/TextFieldSelectUI';
import FormTextField from '../../../Fields/WithController/FormFieldWithController';

import TypeDocumentArray from '../TypeDocumentData.json';
import NationalDataArray from '../NationalData.json';

import { RZHDFormStyled } from '../style';
import TextFieldMaskUI from "../../../../UI/TextFieldUI/TextFieldMaskUI/TextFieldMaskUI";

const RZHDFields = ({ control, field, index, deletePassenger }) => {

	return (
		<>
			{/*! 1 линия*/}

			<RowMUI>
				<h2>Пассажир №{index + 1}</h2>

				<Button
					size="small"
					variant="outlined"
					type="button"
					onClick={() => deletePassenger(index)}
				>
					Удалить пассажира
				</Button>
			</RowMUI>
			<RowMUI>
				<FormTextField
					controller={{
						name: `passenger.${index}.snils`,
						control,
						defaultValue: field.snils,
					}}
				>
					<TextFieldMaskUI
						mask="999-999-999-99"
						maskChar="-"
						inputProps={{
							placeholder: '',
							label: 'Снилс',
							name: `passenger.${index}.snils`,
							type: 'text',
						}}
					/>
				</FormTextField>
			</RowMUI>

			{/*! 2 линия*/}

			<RowMUI>
				<FormTextField
					controller={{
						name: `passenger.${index}.surname`,
						control,
						defaultValue: field.surname,
						rules: {
							required: true,
						},
					}}
				>
					<TextFieldUI
						inputProps={{
							placeholder: '',
							label: 'Фамилия',
							name: `passenger.${index}.surname`,
							type: 'text',
							required: true,
						}}
					/>
				</FormTextField>

				<FormTextField
					controller={{
						name: `passenger.${index}.name`,
						control,
						defaultValue: field.name,
						rules: {
							required: true,
						},
					}}
				>
					<TextFieldUI
						inputProps={{
							placeholder: '',
							label: 'Имя',
							name: `passenger.${index}.name`,
							type: 'text',
							required: true,
						}}
					/>
				</FormTextField>

				<FormTextField
					controller={{
						name: `passenger.${index}.patronymic`,
						control,
						defaultValue: field.patronymic,
					}}
				>
					<TextFieldUI
						inputProps={{
							placeholder: '',
							label: 'Отчество (обязательно, при наличии)',
							name: `passenger.${index}.patronymic`,
							type: 'text',
						}}
					/>
				</FormTextField>
			</RowMUI>

			{/*! 3 линия*/}

			<RowMUI>
				<FormTextField
					controller={{
						name: `passenger.${index}.type_doc`,
						control,
						defaultValue: field.type_doc,
						rules: {
							required: true,
						},
					}}
				>
					<TextFieldSelectUI
						inputProps={{
							placeholder: '',
							label: 'Тип документа',
							name: `passenger.${index}.type_doc`,
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
						name: `passenger.${index}.birthday`,
						control,
						defaultValue: field.birthday,
						rules: {
							required: true,
						},
					}}
				>
					<TextFieldUI
						inputProps={{
							placeholder: '',
							label: 'Дата рождения',
							name: `passenger.${index}.birthday`,
							type: 'date',
							required: true,
							InputLabelProps: {
								shrink: true,
								required: true,
							},
						}}
					/>
				</FormTextField>

				<FormTextField
					controller={{
						name: `passenger.${index}.national`,
						control,
						defaultValue: field.national,
						rules: {
							required: true,
						},
					}}
				>
					<TextFieldSelectUI
						inputProps={{
							label: 'Гражданство',
							name: `passenger.${index}.national`,
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
							name: `passenger.${index}.notif`,
							control,
							defaultValue: field.notif,
						}}
					>
						<CheckBoxUI
							inputProps={{
								placeholder: '',
								label: 'Пол',
								name: `passenger.${index}.notif`,
								select: true,
							}}
						/>
					</FormTextField>

					<TextMUI>
						Согласен на получение оповещений в случаях чрезвычайных
						ситуаций на желедорожном транспорте
					</TextMUI>
				</RowMUI>
				<TextMUI>
					Если вы хотите получать оповещения об изменении движения
					вашего поезда в случае чрезвычайной ситуации, укажите,
					пожалуйста e-mail и/или телефон пассажира. <br />
					Если не хотите получать оповещения - снимите галочку
					согласия на оповещения.
				</TextMUI>
			</ColumnMUI>

			{/*! 5 линия*/}

			<RowMUI>
				<FormTextField
					controller={{
						name: `passenger.${index}.phone`,
						control,
						defaultValue: field.phone,
					}}
				>
					<TextFieldMaskUI
						mask="+7 999 999 99 99"
						maskChar=" "
						inputProps={{
							placeholder: '',
							label: 'Телефон пассажира',
							name: `passenger.${index}.phone`,
							type: 'text',
						}}
					/>
				</FormTextField>

				<FormTextField
					controller={{
						name: `passenger.${index}.email`,
						control,
						defaultValue: field.email,
					}}
				>
					<TextFieldUI
						inputProps={{
							placeholder: '',
							label: 'E-mail пассажира',
							name: `passenger.${index}.email`,
							type: 'email',
						}}
					/>
				</FormTextField>
			</RowMUI>

			{/*! 6 линия*/}

			<RowMUI>
				<FormTextField
					controller={{
						name: `passenger.${index}.bonus`,
						control,
						defaultValue: field.bonus,
					}}
				>
					<CheckBoxUI
						inputProps={{
							placeholder: '',
							label: 'Пол',
							name: `passenger.${index}.bonus`,
							select: false,
						}}
					/>
				</FormTextField>
				<TextMUI>
					Указать номер бонусной, электронной, дорожной карты или
					делового проездного.
				</TextMUI>
			</RowMUI>
		</>
	);
};

const { RowMUI, ColumnMUI, TextMUI } = RZHDFormStyled();

export default React.memo(RZHDFields);
