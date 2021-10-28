import React from 'react';

export default function Loader() {
	return (
		<div className='mt-5'>
			<div
				className='spinner-border m-5'
				role='status'
				style={{ width: '70px', height: '70px' }}
			>
				<span className='visually-hidden'>Loading...</span>
			</div>
		</div>
	);
}
