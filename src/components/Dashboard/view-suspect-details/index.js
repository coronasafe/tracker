import React, { useEffect, useState } from 'react';
import { getPatient } from '../../../Redux/actions'
import { useDispatch } from 'react-redux'

import MedicalHistory from './medical-history';

export default function SuspectDetails(props) {
  	const dispatch = useDispatch()
	const [ patientData, setPatientData ] = useState({})
	const getSuspectData = async() => {
		try{
			const {suspectId:id} = props
			const res = await dispatch(getPatient({id}))
			setPatientData(res.data)
		}
		catch(err){
			console.log(err)
		}
	}
	useEffect(() => {
			getSuspectData()
	}, [])
	const {
		age,
		blood_group,
		gender,
		phone_number,
		nationality,
		date_of_birth,
		disease_status,
		source,
		local_body_object,
		facility_object
	} = patientData
	return !patientData ? (<div class="lds-dual-ring mx-auto h-screen w-full items-center justify-center overflow-hidden flex"/>)
	: (
		<div className='h-full w-full flex justify-center py-5 bg-gray-200'>
			<div class='w-auto mx-12 rounded overflow-hidden shadow-lg  bg-white'>
				<div class='px-6 py-4'>
					<div class='font-bold text-xl mb-2'>Patient Information</div>
					<div class='w-screen'>
						<div class='px-4 py-5 border-b border-gray-200 sm:px-6'>
							<h3 class='text-lg leading-6 font-medium text-gray-900'>Amal</h3>
						</div>
						<div class='px-4 py-5 sm:px-6'>
							<dl class='grid grid-cols-1 col-gap-4 row-gap-8 sm:grid-cols-2'>
								<div class='sm:col-span-1'>
									<dt class='text-sm leading-5 font-medium text-gray-500'>
										Age
									</dt>
									<dd class='mt-1 text-sm leading-5 text-gray-900'>
										{age}
									</dd>
								</div>
								<div class='sm:col-span-1'>
									<dt class='text-sm leading-5 font-medium text-gray-500'>
										{gender?"Male":"Female"}
									</dt>
									<dd class='mt-1 text-sm leading-5 text-gray-900'>Male</dd>
								</div>
								<div class='sm:col-span-1'>
									<dt class='text-sm leading-5 font-medium text-gray-500'>
										Address
									</dt>
									<dd class='mt-1 text-sm leading-5 text-gray-900'>
										{ local_body_object?.name || "N/A" }
									</dd>
								</div>
								<div class='sm:col-span-1'>
									<dt class='text-sm leading-5 font-medium text-gray-500'>
										Phone
									</dt>
									<dd class='mt-1 text-sm leading-5 text-gray-900'>
										{phone_number}
									</dd>
								</div>
								<div class='sm:col-span-1'>
									<dt class='text-sm leading-5 font-medium text-gray-500'>
										DOB
									</dt>
									<dd class='mt-1 text-sm leading-5 text-gray-900'>
										{date_of_birth}
									</dd>
								</div>
								<div class='sm:col-span-1'>
									<dt class='text-sm leading-5 font-medium text-gray-500'>
										Nationality
									</dt>
									<dd class='mt-1 text-sm leading-5 text-gray-900'>
										{nationality || "N/A"}
									</dd>
								</div>
								<div class='sm:col-span-1'>
									<dt class='text-sm leading-5 font-medium text-gray-500'>
										Blood Group
									</dt>
									<dd class='mt-1 text-sm leading-5 text-gray-900'>
										{blood_group || "N/A"}
									</dd>
								</div>
								<div class='sm:col-span-1'>
									<dt class='text-sm leading-5 font-medium text-gray-500'>
										Disease Status
									</dt>
									<dd class='mt-1 text-sm leading-5 text-gray-900'>
										{disease_status}
									</dd>
								</div>
								<div class='sm:col-span-1'>
									<dt class='text-sm leading-5 font-medium text-gray-500'>
										Source
									</dt>
									<dd class='mt-1 text-sm leading-5 text-gray-900'>
										{source}
									</dd>
								</div>
							</dl>
						</div>
					</div>
				</div>

				<div class='px-6 py-4 w-screen'>
					<div class='font-bold text-xl mb-2'>Nearest facility</div>
					<div class='w-screen'>
						<div class='px-4 py-5 border-b border-gray-200 sm:px-6'>
							<h3 class='text-lg leading-6 font-medium text-gray-900'>
								{facility_object?.name || "N/A"}
							</h3>
						</div>
						<div class='px-4 py-5 sm:px-6'>
							<dl class='grid grid-cols-1 col-gap-4 row-gap-8 sm:grid-cols-2'>
								<div class='sm:col-span-1'>
									<dt class='text-sm leading-5 font-medium text-gray-500'>
										District
									</dt>
									<dd class='mt-1 text-sm leading-5 text-gray-900'>
										{facility_object?.district_object?.name || "N/A"}
									</dd>
								</div>
								<div class='sm:col-span-1'>
									<dt class='text-sm leading-5 font-medium text-gray-500'>
										{facility_object?.district_object?.name || "N/A"}
									</dt>
									<dd class='mt-1 text-sm leading-5 text-gray-900'>Kerala</dd>
								</div>
								<div class='sm:col-span-1'>
									<dt class='text-sm leading-5 font-medium text-gray-500'>
										Type
									</dt>
									<dd class='mt-1 text-sm leading-5 text-gray-900'>
										{facility_object?.facility_type || "N/A"}
									</dd>
								</div>
								<div class='sm:col-span-1'>
									<dt class='text-sm leading-5 font-medium text-gray-500'>
										Phone
									</dt>
									<dd class='mt-1 text-sm leading-5 text-gray-900'>
										{facility_object?.phone_number || "N/A"}
									</dd>
								</div>
								<div class='sm:col-span-1'>
									<dt class='text-sm leading-5 font-medium text-gray-500'>
										Address
									</dt>
									<dd class='mt-1 text-sm leading-5 text-gray-900'>
										{facility_object?.address || "N/A"}
									</dd>
								</div>
								<div class='sm:col-span-1'>
									<dt class='text-sm leading-5 font-medium text-gray-500'>
										Location
									</dt>
									<dd class='mt-1 text-sm leading-5 text-gray-900'>
										{(()=>{
											if(!facility_object) return null
											let { longitude, latitude } = facility_object.location
											return <a href={`https://www.google.com/maps/search/?api=1&query=${longitude},${latitude}`}>
												Location: View on google maps
											</a>
											})()}
									</dd>
								</div>
							</dl>
						</div>
					</div>
				</div>

				<div class='px-6 py-4 w-screen'>
					<div class='font-bold text-xl mb-2'>Medical History</div>
				</div>
				{/* {patientData?.medical_history?.map(medicalHistory => <MedicalHistory medicalHistory={medicalHistory}/>)} */}
			</div>
		</div>
	);
}
