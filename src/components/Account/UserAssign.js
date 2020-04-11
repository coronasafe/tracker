import React, { useState } from 'react';
import { Formik, Field } from 'formik';
import Select from 'react-select';

import createUserValidationSchema from '../../util/create-user.validation';

export default function UserAssign() {
	const [permissions, setPermissions] = useState([
		{ label: 'Super Admins', value: 1 },
		{ label: 'District Admins', value: 2 },
		{ label: 'Multiple PHC Admins', value: 3 },
		{ label: 'PHC/Railway/Airport Admins', value: 4 },
	]);
	const [phcs, setPhcs] = useState([
		{ label: 'me', value: 1 },
		{ label: 'you', value: 2 },
		{ label: 'them', value: 3 },
	]);

	const [selectedPhcs, setSelectedPhcs] = useState(null);

	const selectedPhcHandler = (optionsList) => {
		setSelectedPhcs(optionsList);
	};

	const selectedPermissionHandler = (FieldProps) => {
		return (
			<Select
				options={FieldProps.options}
				{...FieldProps.field}
				onChange={(option) =>
					FieldProps.form.setFieldValue(FieldProps.field.name, option)
				}
			/>
		);
	};

	const handleSubmission = async (values, { setSubmitting }) => {
		// check role value on values.role.value
		/*
		 * if for a particular role phcs should be single
		 * check for the length of selectedPhcs
		 */
		console.log(values, selectedPhcs);
		setSubmitting(false);
	};

	return (
		<div className='h-screen overflow-hidden flex items-center justify-center'>
			<Formik
				initialValues={{
					username: '',
					name: '',
					phone: '',
					email: '',
					role: '',
				}}
				validationSchema={createUserValidationSchema}
				onSubmit={(values, { setSubmitting }) => {
					handleSubmission(values, { setSubmitting });
				}}>
				{({
					values,
					errors,
					touched,
					handleChange,
					handleBlur,
					handleSubmit,
					isSubmitting,
					isValid,
				}) => (
					<div class='max-w-xl px-4 pt-12 pb-40 rounded overflow-hidden shadow-lg'>
						<form class='w-full max-w-lg' onSubmit={handleSubmit}>
							<div class='flex flex-wrap -mx-3 mb-6'>
								<div class='w-full md:w px-3 mb-6 md:mb-0'>
									<label
										class='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'
										for='grid-user-name'>
										User name
									</label>
									<input
										class='appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white'
										id='grid-user-name'
										type='text'
										placeholder='Jane'
										onChange={handleChange('username')}
										onBlur={handleBlur('username')}
										value={values.username}
									/>
									<p class='text-red-500 text-xs italic'>
										{errors.username && touched.username && errors.username}
									</p>
								</div>
								<div class='w-full md:w px-3'>
									<label
										class='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'
										for='grid-name'>
										Name
									</label>
									<input
										class='appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500'
										id='grid-name'
										type='text'
										placeholder='Doe'
										onChange={handleChange('name')}
										onBlur={handleBlur('name')}
										value={values.name}
									/>
									<p class='text-red-500 text-xs italic'>
										{errors.name && touched.name && errors.name}
									</p>
								</div>
							</div>
							<div class='flex flex-wrap -mx-3 mb-6'>
								<div class='w-full px-3'>
									<label
										class='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'
										for='grid-phone'>
										Phone
									</label>
									<input
										class='appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500'
										id='grid-phone'
										type='number'
										placeholder='+91-1234567890'
										value={values.phone}
										onChange={handleChange('phone')}
										onBlur={handleBlur('phone')}
									/>
									<p class='text-red-500 text-xs italic'>
										{errors.phone && touched.phone && errors.phone}
									</p>
								</div>
								<div class='w-full md:w px-3 mb-6 md:mb-0'>
									<label
										class='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'
										for='grid-email'>
										Email
									</label>
									<input
										class='appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white'
										id='grid-email'
										type='email'
										placeholder='abc@mail.com'
										value={values.email}
										onChange={handleChange('email')}
										onBlur={handleBlur('email')}
									/>
									<p class='text-red-500 text-xs italic'>
										{errors.email && touched.email && errors.email}
									</p>
								</div>
							</div>
							<div class='flex flex-wrap -mx-3 mb-2'>
								<div class='w-full md:w-1/2 px-3 mb-6 md:mb-0'>
									<label
										class='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'
										for='grid-role'>
										Role
									</label>
									<div class='relative'>
										<Field
											name='role'
											options={permissions}
											component={selectedPermissionHandler}
										/>
										<p class='text-red-500 text-xs italic'>
											{errors.role && touched.role && errors.role}
										</p>
									</div>
								</div>
								<div class='w-full md:w-1/2 px-3 mb-6 md:mb-0'>
									<label
										class='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'
										for='grid-phcs'>
										PHC's
									</label>
									<div class='relative'>
										<Select
											name='phcs'
											value={selectedPhcs}
											onChange={selectedPhcHandler}
											options={phcs}
											isMulti={values.role.value !== 4 ? true : false}
											isSearchable={true}
											placeholder='Select PHCs'
										/>
									</div>
								</div>
							</div>
							<div class='flex justify-center'>
								<button
									disabled={!isValid && isSubmitting}
									type='submit'
									class='bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded'>
									Submit
								</button>
							</div>
						</form>
					</div>
				)}
			</Formik>
		</div>
	);
}
