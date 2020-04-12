import React from 'react';

import MedicalHistory from './medical-history';

export default function UserAssign() {
	return (
		<div className='h-auto w-screen px-12 flex justify-center'>
			<div class='max-w-screen rounded overflow-hidden shadow-lg'>
				<div class='px-6 py-4 w-screen'>
					<div class='font-bold text-xl mb-2'>Details</div>
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
									<dd class='mt-1 text-sm leading-5 text-gray-900'>25</dd>
								</div>
								<div class='sm:col-span-1'>
									<dt class='text-sm leading-5 font-medium text-gray-500'>
										Gender
									</dt>
									<dd class='mt-1 text-sm leading-5 text-gray-900'>Male</dd>
								</div>
								<div class='sm:col-span-1'>
									<dt class='text-sm leading-5 font-medium text-gray-500'>
										Address
									</dt>
									<dd class='mt-1 text-sm leading-5 text-gray-900'>
										Somewhere in India, safe and secure
									</dd>
								</div>
								<div class='sm:col-span-1'>
									<dt class='text-sm leading-5 font-medium text-gray-500'>
										Phone
									</dt>
									<dd class='mt-1 text-sm leading-5 text-gray-900'>
										+91-1234567890
									</dd>
								</div>
								<div class='sm:col-span-1'>
									<dt class='text-sm leading-5 font-medium text-gray-500'>
										DOB
									</dt>
									<dd class='mt-1 text-sm leading-5 text-gray-900'>
										12/12/2000
									</dd>
								</div>
								<div class='sm:col-span-1'>
									<dt class='text-sm leading-5 font-medium text-gray-500'>
										Blood Group
									</dt>
									<dd class='mt-1 text-sm leading-5 text-gray-900'>O +ve</dd>
								</div>
								<div class='sm:col-span-1'>
									<dt class='text-sm leading-5 font-medium text-gray-500'>
										Disease Status
									</dt>
									<dd class='mt-1 text-sm leading-5 text-gray-900'>POSITIVE</dd>
								</div>
								<div class='sm:col-span-1'>
									<dt class='text-sm leading-5 font-medium text-gray-500'>
										Source
									</dt>
									<dd class='mt-1 text-sm leading-5 text-gray-900'>CARE</dd>
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
								Medical college hospital
							</h3>
						</div>
						<div class='px-4 py-5 sm:px-6'>
							<dl class='grid grid-cols-1 col-gap-4 row-gap-8 sm:grid-cols-2'>
								<div class='sm:col-span-1'>
									<dt class='text-sm leading-5 font-medium text-gray-500'>
										District
									</dt>
									<dd class='mt-1 text-sm leading-5 text-gray-900'>Calicut</dd>
								</div>
								<div class='sm:col-span-1'>
									<dt class='text-sm leading-5 font-medium text-gray-500'>
										State
									</dt>
									<dd class='mt-1 text-sm leading-5 text-gray-900'>Kerala</dd>
								</div>
								<div class='sm:col-span-1'>
									<dt class='text-sm leading-5 font-medium text-gray-500'>
										Type
									</dt>
									<dd class='mt-1 text-sm leading-5 text-gray-900'>Hospital</dd>
								</div>
								<div class='sm:col-span-1'>
									<dt class='text-sm leading-5 font-medium text-gray-500'>
										Phone
									</dt>
									<dd class='mt-1 text-sm leading-5 text-gray-900'>
										+91-1234567890
									</dd>
								</div>
								<div class='sm:col-span-1'>
									<dt class='text-sm leading-5 font-medium text-gray-500'>
										Address
									</dt>
									<dd class='mt-1 text-sm leading-5 text-gray-900'>ok ok</dd>
								</div>
								<div class='sm:col-span-1'>
									<dt class='text-sm leading-5 font-medium text-gray-500'>
										Location
									</dt>
									<dd class='mt-1 text-sm leading-5 text-gray-900'>
										here here
									</dd>
								</div>
							</dl>
						</div>
					</div>
				</div>

				<div class='px-6 py-4 w-screen'>
					<div class='font-bold text-xl mb-2'>Medical History</div>
				</div>
				<MedicalHistory />
			</div>
		</div>
	);
}
