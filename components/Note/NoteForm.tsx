'use client';

import { addNote } from '@/app/lib/actions/add-notes';
import { ToastContainer, toast } from 'react-toastify';
import styles from './Note.module.css';
import { useState } from 'react';

export default function WatchForm() {
	const notify = () => toast.success('Note Added');

	const handleSubmit = async (event: FormData) => {
		try {
			await addNote(event);
			toast.success('Note Added');
		} catch (error: any) {
			console.log(error);
			toast.error(error.message);
		}
	};

	return (
		<form action={(event) => handleSubmit(event)} className='mb-6 max-w-[400px]'>
			<ToastContainer autoClose={2500} position='top-right' />

			<div className='mb-4'>
				<label htmlFor='title' className='block text-white mb-2'>
					Title
				</label>
				<input
					type='text'
					id='title'
					name='title'
					className='shadow appearance-none border border-gray-600 bg-gray-700 rounded w-full py-2 px-3 text-white'
					required
				/>
			</div>
			<div className='mb-4'>
				<label htmlFor='content' className='block text-white mb-2'>
					Content
				</label>
				<textarea
					id='content'
					name='content'
					className={`shadow appearance-none border border-gray-600 bg-gray-700 rounded w-full py-2 px-3 text-white resize-none min-h-[150px] ${styles.scrollbar}`}
					required></textarea>
			</div>

			<button
				type='submit'
				className='bg-gray-600 hover:bg-gray-300/95 text-white hover:text-black font-medium py-2 px-4 rounded'>
				Add Note
			</button>
		</form>
	);
}
