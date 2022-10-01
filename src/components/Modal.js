import React from 'react';

function Modal({ onCancel, onConfirm }) {

  function actionHandler(action){
    if(action === 'confirm') onConfirm();
    
    onCancel();
  }

	return (
		<div className='modal'>
			<p className='card'>Are you sure?</p>
			<button className='btn btn--alt' onClick={() => actionHandler('confirm')}>
				confirm
			</button>
			<button className='btn' onClick={() => actionHandler('cancel')}>
				cancel
			</button>
		</div>
	);
}

export default Modal;
