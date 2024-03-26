import Header from '@/components/Header/Header';
import NoteComponent from '@/components/Note';
import AddNote from '@/components/Note/AddNote';
import { Note } from '@/models/interfaces/note';
import { createClient } from '@/utils/supabase/server';
import { redirect } from 'next/navigation';

export default async function Notes() {
	const supabase = createClient();
	const {
		data: { session },
	} = await supabase.auth.getSession();
	const user = session?.user;

	if (!user) return redirect('/login');

	const { data: notes, error } = await supabase.from('notes').select('*').eq('userId', user.id);

	if (error) {
		console.error('Error fetching watches');
	}

	const renderNotes = () => {
		return notes?.map((note: Note) => (
			<li className='max-w-[360px] w-full' key={note.id}>
				<NoteComponent note={note} key={note.id} />
			</li>
		));
	};

	return (
		<>
			<Header />
			<AddNote />

			<section className='mb-20'>
				<h2 className='text-3xl text-center xl:text-left font-semibold tracking-wide mb-10'>My Notes</h2>

				<ul className='grid grid-cols-1 place-items-center md:grid-cols-2 xl:grid-cols-3 gap-14'>{renderNotes()}</ul>
			</section>
		</>
	);
}
