'use client';

import { useState } from 'react';
import { updateNote } from '@/app/lib/actions/update-note';
import { Note } from '@/models/interfaces/note';
import styles from './Note.module.css';
import EditIcon from '../EditIcon';

export default function EditNote({ note }: { note: Note }) {
	const [showModal, setShowModal] = useState(false);
	const [formData, setFormData] = useState({
		title: note.title,
		content: note.content,
	});

	const handleChange = (e: any) => setFormData({ ...formData, [e.target.name]: e.target.value });

	const renderModal = () => {
		if (!showModal) return;

		return (
			<div className=' w-full bg-gray-800 bg-opacity-75 flex justify-center items-center px-4 overflow-visible'>
				<div className='bg-gray-900 p-6 rounded-lg w-full'>
					<span
						className='text-white text-xl leading-none hover:text-gray-300 cursor-pointer float-right'
						onClick={() => setShowModal(false)}>
						&times;
					</span>
					<form action={updateNote} onSubmit={() => setShowModal(false)} className='mt-4'>
						<input type='hidden' name='id' value={note.id} />
						<div className='mb-4'>
							<label htmlFor='title' className='block text-gray-300 mb-2'>
								Title
							</label>
							<input
								type='text'
								id='title'
								name='title'
								value={formData.title}
								onChange={handleChange}
								className='w-full p-2 rounded bg-gray-800 text-white border border-gray-700 focus:border-blue-500'
							/>
						</div>
						<div className='mb-4'>
							<label htmlFor='content' className='block text-white mb-2'>
								Content
							</label>
							<textarea
								id='content'
								name='content'
								value={formData.content}
								onChange={handleChange}
								className={`shadow appearance-none border border-gray-600 bg-gray-700 rounded w-full py-2 px-3 text-white resize-none min-h-[150px] ${styles.scrollbar}`}
								required></textarea>
						</div>

						<button
							type='submit'
							className='w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>
							Update Note
						</button>
					</form>
				</div>
			</div>
		);
	};

	return (
		<div className={`${showModal ? '' : ''}`}>
			<button onClick={() => setShowModal(true)} className=''>
				<EditIcon customClass='size-6 hover:text-blue-300 hover:scale-110 transition-all' />
			</button>

			{renderModal()}
		</div>
	);
}
