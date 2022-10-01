import React, { useRef, useState } from 'react';
import Modal from './Modal.js';
import Backdrop from './Backdrop.js';

function Todo({ title, removeTodoFromList }) {
	const h2 = useRef(null);
	const [modalIsOpen, setModalIsOpen] = useState(false);


	function openModalHandler() {
	
		setModalIsOpen(true);
	}

	function closeModalHandler() {
		setModalIsOpen(false);
	}

	return (
		<>
			<div>
				<div className='card'>
					<h2 ref={h2}>{title}</h2>
					<div className='actions'>
						<button onClick={openModalHandler} className='btn'>
							delete
						</button>
					</div>
				</div>
			</div>
			{modalIsOpen && (
				<Modal
					onCancel={closeModalHandler}
					onConfirm={() => removeTodoFromList(h2.current.innerText)}
				/>
			)}
			{modalIsOpen && <Backdrop onCancel={closeModalHandler} />}
		</>
	);
}

export default Todo;
