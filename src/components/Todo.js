import React, { useRef, useState } from 'react';
import Modal from './Modal.js';
import Backdrop from './Backdrop.js';

function Todo({ title, removeTodoFromList }) {
	const h2 = useRef(null);
	const [modalIsOpen, setModalIsOpen] = useState(false);

	return (
		<>
			<div>
				<div className='card'>
					<h2 ref={h2}>{title}</h2>
					<div className='actions'>
						<button onClick={() => 	setModalIsOpen(true)} className='btn'>
							delete
						</button>
					</div>
				</div>
			</div>
			{modalIsOpen && (
				<Modal
					onCancel={() => setModalIsOpen(false)}
					onConfirm={() => removeTodoFromList(h2.current.innerText)}
				/>
			)}
			{modalIsOpen && <Backdrop onCancel={() => setModalIsOpen(false)} />}
		</>
	);
}

export default Todo;
