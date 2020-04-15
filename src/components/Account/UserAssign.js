import React, { useState,useEffect } from 'react';
import { Formik, Field } from 'formik';
import Select from 'react-select';
import  {useDispatch, useSelector} from 'react-redux'
import { createUser, getFacilitiesList } from '../../Redux/actions'

import createUserValidationSchema from '../../util/create-user.validation';

export default function UserAssign() {
	const dispatch = useDispatch()
	const { user_type } = useSelector(({currentUser})=>currentUser.data)
	const [facilityOptions, setFacilityOptions] = useState([])
	const [ respUserData, setRespUserData] = useState({})
	let permissions = [
		{ label: 'State Admin', value: "StateAdmin" },
		{ label: 'District Admin', value: "DistrictAdmin" },
		{ label: 'Staff', value: "Staff" },
	]
	const setUserLevel = (type)=>{
		switch(type){
			case 'State Admin':
				return 0
			case 'District Admin':
				return 1
			case 'Staff':
				return 2
			default:
				return -1
		}
	}
	const user_type_level = setUserLevel(user_type)
	useEffect(() => {
		const getFacility = async () => {
			const res = await dispatch(getFacilitiesList())
			setFacilityOptions(res.data.results)
		}
			getFacility()
	}, [])


	permissions = permissions.filter((a,i)=>i>=user_type_level)


	const genders = [
		{ label: 'Male', value: "Male" },
		{ label: 'Female', value: "Female" },
	]
	
	const facilityOptionsForm = facilityOptions.map(a=> ({label:a.name, value: a.id }))

	const [facility, setFacility] = useState(null);
	const selectedPhcHandler = (optionsList) => {
		setFacility(optionsList);
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
		const { username, name, age, phone_number, } = values
		let param = {
			username,
			name,
			age,
			phone_number,
			gender: values.gender.value,
			user_type: values.user_type.value,
			facilities: facility.value,
			verified: true
		}
		console.log('params are',param)
		const res = await dispatch(createUser(param))
		if(res.data?.password){
			setRespUserData(res.data)
		}
		setSubmitting(false);
	};

	if(user_type_level===-1)return (
		<div className='h-screen overflow-hidden flex items-center justify-center'>
			<div class='max-w-xl bg-white block uppercase px-40 pt-40 pb-40 rounded overflow-hidden shadow-lg'>
				ACCESS DENIED
			</div>
			</div>
	)
	else return (
		<div className='container h-screen overflow-hidden pt-40 flex items-center justify-center'>
			<Formik
				initialValues={{
					username: '',
					name: '',
					age: '',
					phone_number: '',
					user_type: '',
					gender: ''
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
					<div class='max-w-xl bg-white px-10 pt-12 pb-40 rounded overflow-hidden shadow-lg'>
						<form class='w-full max-w-lg' onSubmit={handleSubmit}>
							<div class='flex flex-wrap -mx-3 mb-6'>
								{respUserData && <div class='w-full md:w px-3 mb-6 md:mb-0 block uppercase tracking-wide text-black-700 text-sm font-bold mb-2'>
									<div> NAME:  {respUserData.username} </div>
									<div> PASSWORD: {respUserData.password} </div>
								</div>}
								
								<div class='w-full md:w px-3 mb-6 md:mb-0'>
									<label
										class='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'
										for='grid-user-name'>
										User name
									</label>
									<input
										class='appearance-none block w-full bg-white-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white'
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
								<div class='w-full md:w mb-3 px-3'>
									<label
										class='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'
										for='grid-name'>
										Name
									</label>
									<input
										class='appearance-none block w-full bg-white-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500'
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
								<div class='w-30 md:w px-3'>
									<label
										class='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'
										for='grid-age'>
										Age
									</label>
									<input
										class='appearance-none block w-full bg-white-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500'
										id='grid-age'
										type='number'
										placeholder='Doe'
										onChange={handleChange('age')}
										onBlur={handleBlur('age')}
										value={values.age}
									/>
									<p class='text-red-500 text-xs italic'>
										{errors.age && touched.age && errors.age}
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
										class='appearance-none block w-full bg-white-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500'
										id='grid-phone'
										type='text'
										placeholder='+91-1234567890'
										value={values.phone_number}
										onChange={handleChange('phone_number')}
										onBlur={handleBlur('phone')}
									/>
									<p class='text-red-500 text-xs italic'>
										{errors.phone_number && touched.phone_number && errors.phone_number}
									</p>
								</div>
							</div>
							<div class='flex flex-wrap -mx mb-2'>
								<div class='w-full md:w mb-4'>
									<label
										class='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'
										htmlFor='grid-role'>
										Gender
									</label>
									<div class='relative'>
										<Field
											name='gender'
											options={genders}
											component={selectedPermissionHandler}
										/>
										<p class='text-red-500 text-xs italic'>
											{errors.gender && touched.gender && errors.gender}
										</p>
									</div>
								</div>
								<div class='w-full md:w mb-4'>
									<label
										class='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'
										for='grid-role'>
										Role
									</label>
									<div class='relative'>
										<Field
											name='user_type'
											options={permissions}
											component={selectedPermissionHandler}
										/>
										<p class='text-red-500 text-xs italic'>
											{errors.user_type && touched.user_type && errors.user_type}
										</p>
									</div>
								</div>
								<div class='w-full md:w mb-4'>
									<label
										class='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'
										for='grid-phcs'>
										PHC's
									</label>
									<div class='relative'>
										<Select
											name='phcs'
											value={facility}
											onChange={selectedPhcHandler}
											closeMenuOnSelect={false}
											options={facilityOptionsForm}
											isMulti={values.user_type.value !== 4 ? true : false}
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
