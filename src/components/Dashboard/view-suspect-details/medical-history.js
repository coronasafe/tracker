import React from 'react';

export default function MedicalHistory() {
	return (
		<>
			<div class='bg-white px-4 py-5 border-b border-gray-200 sm:px-6'>
				<div class='-ml-4 -mt-2 flex items-center justify-between flex-wrap sm:flex-no-wrap'>
					<div class='ml-4 mt-2'>
						<h3 class='text-lg leading-6 font-medium text-gray-900'>Disease</h3>
					</div>
					<div class='ml-4 mt-2 flex-shrink-0'>
						<p class='relative inline-flex items-center px-4 py-2 border border-transparent text-sm leading-5 font-medium rounded-md text-dark'>
							Details of the disease
						</p>
					</div>
				</div>
			</div>
		</>
	);
}
