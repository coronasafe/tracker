import React from 'react';

export default function MedicalHistory() {
	return (
		<>
			<div class='w-full md:w-full mx-auto p-8'>
				<div class='font-bold text-xl mb-2'>Details</div>
				<div class='shadow-md'>
					<div class='tab w-full overflow-hidden border-t'>
						<input
							class='absolute opacity-0 '
							id='tab-multi-one'
							type='checkbox'
							name='tabs'
						/>
						<label
							class='block p-5 leading-normal cursor-pointer'
							for='tab-multi-one'>
							Label One
						</label>
						<div class='tab-content overflow-hidden border-l-2 bg-gray-100 border-indigo-500 leading-normal'>
							<p class='p-5'>
								Lorem ipsum dolor sit amet, consectetur adipisicing elit.
								Tenetur, architecto, explicabo perferendis nostrum, maxime
								impedit atque odit sunt pariatur illo obcaecati soluta molestias
								iure facere dolorum adipisci eum? Saepe, itaque.
							</p>
						</div>
					</div>
					<div class='tab w-full overflow-hidden border-t'>
						<input
							class='absolute opacity-0'
							id='tab-multi-two'
							type='checkbox'
							name='tabs'
						/>
						<label
							class='block p-5 leading-normal cursor-pointer'
							for='tab-multi-two'>
							Label Two
						</label>
						<div class='tab-content overflow-hidden border-l-2 bg-gray-100 border-indigo-500 leading-normal'>
							<p class='p-5'>
								Lorem ipsum dolor sit amet, consectetur adipisicing elit.
								Tenetur, architecto, explicabo perferendis nostrum, maxime
								impedit atque odit sunt pariatur illo obcaecati soluta molestias
								iure facere dolorum adipisci eum? Saepe, itaque.
							</p>
						</div>
					</div>
					<div class='tab w-full overflow-hidden border-t'>
						<input
							class='absolute opacity-0'
							id='tab-multi-three'
							type='checkbox'
							name='tabs'
						/>
						<label
							class='block p-5 leading-normal cursor-pointer'
							for='tab-multi-three'>
							Label Three
						</label>
						<div class='tab-content overflow-hidden border-l-2 bg-gray-100 border-indigo-500 leading-normal'>
							<p class='p-5'>
								Lorem ipsum dolor sit amet, consectetur adipisicing elit.
								Tenetur, architecto, explicabo perferendis nostrum, maxime
								impedit atque odit sunt pariatur illo obcaecati soluta molestias
								iure facere dolorum adipisci eum? Saepe, itaque.
							</p>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
