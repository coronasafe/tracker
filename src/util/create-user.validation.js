import * as Yup from 'yup';
import '@availity/phone/src/validatePhone';

const createUserValidationSchema = Yup.object().shape({
	username: Yup.string().label('User name').required('User name is required'),
	name: Yup.string().label('Name').required('Name is required'),
	phone: Yup.string()
		.validatePhone('This phone number is invalid.', true, 'IN')
		.required('Phone number is required'),
	email: Yup.string()
		.label('Email')
		.email('Enter a valid email address')
		.required('Email is required'),
	role: Yup.string().required('Role is required'),
});

export default createUserValidationSchema;
