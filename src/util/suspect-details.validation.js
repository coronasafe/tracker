import * as Yup from 'yup';
import '@availity/phone/src/validatePhone';

const createSuspectValidationSchema = Yup.object().shape({
	name: Yup.string().label('Name').required('Name is required'),
	phone: Yup.string()
		.validatePhone('This phone number is invalid.', true, 'IN')
		.required('Phone number is required'),
});

export default createSuspectValidationSchema;
