import { Note } from '@/models/interfaces/note';
import styles from './Note.module.css';

function Note({ note }: { note: Note }) {
	console.log(note);

	return (
		<div
			className={`relative p-6 border rounded-lg shadow bg-gray-900 border-gray-700 hover:bg-gray-800 overflow-y-auto max-h-[300px] min-h-[300px] ${styles.scrollbar}`}>
			<h5 id='title-note' className='mb-2 text-xl font-bold tracking-tight text-white/90 sticky top-0 text-balance'>
				{note.title}
			</h5>
			<p className='text-base leading-5 text-pretty text-gray-400'>{note.content}</p>
		</div>
	);
}

export default Note;
