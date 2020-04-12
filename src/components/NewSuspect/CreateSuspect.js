import React, { useState } from 'react';
import DatePicker from 'react-date-picker';
import { Formik } from 'formik';
import { RadioGroup, RadioButton } from 'react-radio-buttons';

import createSuspectValidationSchema from '../../util/create-suspect.validation';

export default function CreateSuspect() {
	const [check, setCheck] = useState({ dob: new Date(1991, 0) });
	const [gender, setGender] = useState(null);

	const handleGenderChange = (value) => {
		setGender(value);
	};

	const handleSubmission = async (values, { setSubmitting }) => {
		/*
		 * values contain name and phone
		 */
		console.log(values, gender, check.dob);
		setSubmitting(false);
	};

	return (
		<div
			className='h-screen overflow-hidden flex items-center justify-center'
			style={{ background: '#edf2f7' }}>
			<Formik
				initialValues={{
					name: '',
					phone: '',
				}}
				validationSchema={createSuspectValidationSchema}
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
					<form onSubmit={handleSubmit}>
						<div className='bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col my-2'>
							<div className='-mx-3 md:flex mb-2'>
								<div className='px-3 mb-6 w-full'>
									<label
										className='block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2'
										for='grid-first-name'>
										Name
									</label>
									<input
										className='appearance-none block w-full bg-grey-lighter text-grey-darker border border-red rounded py-3 px-4 mb-3'
										id='grid-name'
										type='text'
										placeholder='Doe'
										onChange={handleChange('name')}
										onBlur={handleBlur('name')}
										value={values.name}
									/>
									<p className='text-red-500 text-xs italic'>
										{errors.name && touched.name && errors.name}
									</p>
								</div>
							</div>
							<div className='-mx-3 md:flex mb-2'>
								<div className='md:w-1/2 px-3 mb-6 md:mb-0'>
									<label
										className='block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2'
										for='grid-city'>
										Date of Birth
									</label>
									<DatePicker
										className='appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4'
										onChange={(date) => setCheck({ dob: date })}
										value={check.dob}
									/>
									<p className='text-red-500 text-xs italic'>
										{!check.dob && 'Please select a date'}
									</p>
								</div>
								<div class='md:w-1/2 px-3 mb-6 md:mb-0'>
									<label
										className='block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2'
										for='grid-city'>
										Gender
									</label>
									<div className='block w-full rounded py-3 px-4'>
										<RadioGroup onChange={handleGenderChange} horizontal>
											<RadioButton
												padding={8}
												iconInnerSize={1}
												iconSize={1}
												rootColor='black'
												pointColor='#4299e1'
												value='Male'>
												Male
											</RadioButton>
											<RadioButton
												padding={8}
												iconInnerSize={1}
												iconSize={1}
												rootColor='black'
												pointColor='#4299e1'
												value='Female'>
												Female
											</RadioButton>
											<RadioButton
												padding={8}
												iconInnerSize={1}
												iconSize={1}
												rootColor='black'
												pointColor='#4299e1'
												value='Other'>
												Other
											</RadioButton>
										</RadioGroup>
										<p className='text-red-500 text-xs italic'>
											{!gender && 'Please select a gender'}
										</p>
									</div>
								</div>
							</div>

							<div className='-mx-3 md:flex mb-6'>
								<div className='md:w-full px-3 mb-6 md:mb-0'>
									<label
										className='block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2'
										for='grid-first-name'>
										Phone Number
									</label>
									<input
										className='appearance-none block w-full bg-grey-lighter text-grey-darker border border-red rounded py-3 px-4 mb-3'
										id='grid-first-name'
										type='text'
										placeholder='+91-9876543210'
										value={values.phone}
										onChange={handleChange('phone')}
										onBlur={handleBlur('phone')}
									/>
									<p className='text-red-500 text-xs italic'>
										{errors.phone && touched.phone && errors.phone}
									</p>
								</div>
							</div>
							<div class='md:flex md:items-right'>
								<div class='md:w-1/3'></div>
								<div class='md:w-2/3'>
									<button
										class='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline float-right'
										type='submit'
										disabled={!isValid && isSubmitting}>
										Submit
									</button>
								</div>
							</div>
						</div>
					</form>
				)}
			</Formik>
		</div>
	);
}
