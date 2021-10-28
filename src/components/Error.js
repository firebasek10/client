import React from 'react';

export default function Error({ error }) {
	return (
		<div>
			<div className='alert alert-danger m-5' role='alert'>
				{error}
			</div>
		</div>
	);
}
