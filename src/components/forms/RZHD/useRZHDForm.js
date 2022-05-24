import {useMemo, useState} from 'react';
import {useForm} from "react-hook-form";

export const useRZHDForm = () => {
	// * state's
	const [passenger, setPassenger] = useState([]);
	const [counter, setCounter] = useState(0);

	// useForm initialize
	const {handleSubmit, control} = useForm();

	// * Handlers
	const addPassenger = () => {
		console.log('addPassenger')
		setPassenger(prevState => [...prevState, counter]);
		setCounter(prevState => prevState + 1);
	}

	const deletePassenger = (passengerIndex) => {
		console.log('deletePassenger: ', passengerIndex)
		setPassenger(prevState => [...prevState.filter(item => item !== passengerIndex)]);
		setCounter(prevState => prevState - 1);
	}

	const onSubmit = (data) => {
		console.log('data: ', data);
	};

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

			bonus: true,
		}),
		[]
	);

	const splitNameWithCount = useMemo(() => {
		const newPassengerFormName = {}

		for(let i = 0; i < counter; i++) {
			const innerObject = {}
			const fieldName = `passenger[${i}]`;

			for (let formName in defaultValues) innerObject[formName] = `${fieldName}.${formName}`;
			newPassengerFormName[i] = innerObject
		}
		return newPassengerFormName
	}, [counter]);

	return {
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
	}
}
