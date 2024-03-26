import { Note } from '@/models/interfaces/note';
import { deleteNote } from '@/app/lib/actions/delete-notes';
import styles from './Note.module.css';
import TrashIcon from '../TrashIcon';
import EditIcon from '../EditIcon';

function Note({ note }: { note: Note }) {
	return (
		<div
			className={`relative p-6 border rounded-lg shadow bg-gray-900 border-gray-700 hover:bg-gray-800 overflow-y-auto max-h-[300px] min-h-[320px] ${styles.scrollbar}`}>
			<header className='flex items-center justify-between gap-3 sticky top-0' id='title-note'>
				<h5 className='mb-2 text-lg font-semibold tracking-tight text-white/90  text-balance'>{note.title}</h5>

				<div className='flex items-center gap-x-2'>
					<span>
						<EditIcon customClass='size-6 hover:text-blue-300 hover:scale-110 transition-all' />
					</span>
					<form action={deleteNote}>
						<input type='hidden' name='id' value={note.id} />
						<button type='submit' className=''>
							<TrashIcon customClass='size-6 hover:text-red-400 hover:scale-110 transition-all' />
						</button>
					</form>
				</div>
			</header>
			<p className='text-base leading-[22px] text-pretty text-gray-400'>{note.content}</p>
		</div>
	);
}

export default Note;
