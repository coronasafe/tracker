import React, { useState , useEffect } from 'react';
import DatePicker from 'react-date-picker';
import {connect} from 'react-redux';
import { Formik } from 'formik';
import { RadioGroup, RadioButton } from 'react-radio-buttons';
import {Success, Error} from '../../util/Notifications';
import createSuspectValidationSchema from '../../util/create-suspect.validation';
import { searchPatient, setCurrentPatient } from '../../Redux/actions';
import Labelled from '../common/Labelled';
import Options from '../common/Options';
import DatePickerComponent from '../common/DatePicker';
import { navigate } from 'hookrouter';

function CreateSuspect({searchPatient,setCurrentPatient}) {
	const [check, setCheck] = useState({ dob: new Date(1991, 0) });
	const [gender, setGender] = useState(null);

	const handleSubmission = async (values, { setSubmitting }) => {
		searchPatient({phone_number:values.phone, name:values.name}).then((response)=>{
			if(!response.data){
				Error({msg:response})
			}
			else if(response.data.count===0){
				Success({msg:"Patient not found."})
				setCurrentPatient({
					...values,
					dateOfBirth:check.dob,
					gender
				})
					navigate("/suspect/details");

			}
			else if(response.data.count!==0){
				Error({msg:"Patient already exists."})
			}
		})
		setSubmitting(false);
	};



	return (
		<div
			className='h-screen overflow-hidden flex items-center justify-center bg-blue-100'>
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

								<Labelled label="Date of Birth">
									<DatePickerComponent value={check.dob} onChange={(date) => setCheck({ dob: date })}/>
								</Labelled>
								<Labelled label="Gender">
									<Options options={["Male","Female","Other"]} value={gender} setValue={setGender}/>
								</Labelled>

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
										{errors.phone && touched.phone && errors.phone_number}
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
function mapStateToProps(state){
	console.log(state)
	return {
		searchPatientState:state.searchPatient
	};
}
function mapDispatchToProps(dispatch){
  return {
    searchPatient:(formData)=>{
      return searchPatient(formData)(dispatch);
	},
	setCurrentPatient:(patientData)=>{
		return setCurrentPatient(patientData)(dispatch);
	}
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(CreateSuspect);
