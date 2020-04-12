import React from 'react';

import MedicalHistory from './medical-history';

export default function UserAssign() {
	return (
		<div className='h-auto w-screen px-12 flex justify-center'>
			<div class='max-w-screen rounded overflow-hidden shadow-lg'>
				<div class='px-6 py-4 w-screen'>
					<div class='font-bold text-xl mb-2'>Details</div>
					<table class='table-auto'>
						<tbody>
							<tr>
								<td class='border px-4 py-2 font-bold bg-grey-lighter'>Name</td>
								<td class='border px-4 py-2'>Amal</td>
							</tr>
							<tr>
								<td class='border px-4 py-2 font-bold bg-grey-lighter'>Age</td>
								<td class='border px-4 py-2'>27</td>
							</tr>
							<tr>
								<td class='border px-4 py-2 font-bold bg-grey-lighter'>
									Gender
								</td>
								<td class='border px-4 py-2'>Male</td>
							</tr>
							<tr>
								<td class='border px-4 py-2 font-bold bg-grey-lighter'>
									Phone number
								</td>
								<td class='border px-4 py-2'>+91-1234567890</td>
							</tr>
							<tr>
								<td class='border px-4 py-2 font-bold bg-grey-lighter'>
									Address
								</td>
								<td class='border px-4 py-2'>
									Somewhere in Kerala, safe and secure, 112976
								</td>
							</tr>
							<tr>
								<td class='border px-4 py-2 font-bold bg-grey-lighter'>
									Blood Group
								</td>
								<td class='border px-4 py-2'>O +ve</td>
							</tr>
							<tr>
								<td class='border px-4 py-2 font-bold bg-grey-lighter'>DOB</td>
								<td class='border px-4 py-2'>27/10/1996</td>
							</tr>
							<tr>
								<td class='border px-4 py-2 font-bold bg-grey-lighter'>
									Nationality
								</td>
								<td class='border px-4 py-2'>Indian</td>
							</tr>
							<tr>
								<td class='border px-4 py-2 font-bold bg-grey-lighter'>
									Disease Status
								</td>
								<td class='border px-4 py-2 bg-blue-200'>POSITIVE</td>
							</tr>
							<tr>
								<td class='border px-4 py-2 font-bold bg-grey-lighter'>
									Source
								</td>
								<td class='border px-4 py-2 bg-green-200'>CARE</td>
							</tr>
						</tbody>
					</table>
				</div>

				<MedicalHistory />
			</div>
		</div>
	);
}
