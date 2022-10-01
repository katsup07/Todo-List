import React from 'react';

function Backdrop({ onCancel }) {
	return <div onClick={onCancel} className='backdrop' />;
}

export default Backdrop;
