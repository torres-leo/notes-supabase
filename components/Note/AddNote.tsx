import NoteForm from './NoteForm';

function AddNote() {
	return (
		<section className='border-b border-b-gray-400 mb-10'>
			<h2 className='text-3xl text-center xl:text-left font-semibold tracking-wide mb-10'>Add new Note 🗒️</h2>

			<NoteForm></NoteForm>
		</section>
	);
}

export default AddNote;
