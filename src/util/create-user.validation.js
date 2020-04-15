import * as Yup from 'yup';
import '@availity/phone/src/validatePhone';

const createUserValidationSchema = Yup.object().shape({
	username: Yup.string().label('User name').required('User name is required'),
	name: Yup.string().label('Name').required('Name is required'),
	phone_number: Yup.string()
		.validatePhone('This phone number is invalid.', true, 'IN')
		.required('Phone number is required'),
	age: Yup.string().required('age is required'),
	gender: Yup.string().required('Gender is required'),
	user_type: Yup.string().required('Role is required'),
});

export default createUserValidationSchema;
