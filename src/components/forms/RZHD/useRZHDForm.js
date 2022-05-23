import {useMemo, useState} from 'react';
import {useForm} from "react-hook-form";

export const useRZHDForm = () => {
	// * state's
	const [passenger, setPassenger] = useState([]);
	const [counter, setCounter] = useState(0);

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
		const fieldName = `passenger[${counter}]`;

		for (let formName in defaultValues) {
			newPassengerFormName[formName] = `${fieldName}.${formName}`
		}

		return newPassengerFormName
	}, [counter]);

	console.log('splitNameWithCount: ', splitNameWithCount);

	// useForm initialize
	const {handleSubmit, control} = useForm({
		defaultValues: defaultValues,
	});

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
