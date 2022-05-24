import {useMemo, useState} from 'react';
import {useFieldArray, useForm} from "react-hook-form";

export const useRZHDForm = () => {
	// * state's
	const [passenger, setPassenger] = useState([]);
	const [counter, setCounter] = useState(0);

	// memo's values
	const defaultValues = useMemo(
		() => ({
			snils: '',

			surname: '',
			name: '',
			patronymic: '',

			type_doc: '',
			birthday: '',
			national: '',

			notif: true,

			phone: '',
			email: '',

			bonus: false,
		}),
		[]
	);

	// useForm initialize
	const {handleSubmit, control, watch} = useForm({
		defaultValues: {
			passenger: []
		}
	});
	const {fields, append, remove} = useFieldArray({
		control,
		name: 'passenger'
	})

	// * Handlers
	const addPassenger = () => {
		console.log('addPassenger')
		setPassenger(prevState => [...prevState, counter]);
		setCounter(prevState => prevState + 1);

		append({
			...defaultValues
		})

	}

	const deletePassenger = (passengerIndex) => {
		console.log('deletePassenger: ', passengerIndex)
		setPassenger(prevState => [...prevState.filter(item => item !== passengerIndex)]);
		setCounter(prevState => prevState - 1);

		remove(passengerIndex);
	}

	const onSubmit = (data) => {
		console.log('data: ', data);
	};

	return {
		useForm: {
			handleSubmit,
			control,
			watch,
			fields
		},
		formHandlers: {
			addPassenger,
			deletePassenger
		},
		formValues: {
			counter, passenger,
		},
		onSubmit
	}
}
