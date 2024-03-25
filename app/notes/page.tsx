import Header from '@/components/Header/Header';
import NoteComponent from '@/components/Note';
import { Note } from '@/models/interfaces/note';
import { createClient } from '@/utils/supabase/server';
// import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

export default async function Notes() {
	// const cookieStore = cookies();

	const supabase = createClient();
	const {
		data: { session },
	} = await supabase.auth.getSession();
	const user = session?.user;

	if (!user) return redirect('/login');
	console.log(user);

	const { data: notes, error } = await supabase.from('notes').select('*').eq('userId', user.id);

	console.log(notes);

	if (error) {
		console.error('Error fetching watches');
	}

	const renderNotes = () => {
		return notes?.map((note: Note) => (
			<li className='max-w-[360px]' key={note.id}>
				<NoteComponent note={note} key={note.id} />
			</li>
		));
	};

	return (
		<>
			<Header />
			<section>
				<h2 className='text-3xl text-center xl:text-left font-semibold tracking-wide mb-10'>My Notes</h2>

				<ul className='grid grid-cols-1 place-items-center md:grid-cols-2 xl:grid-cols-3 gap-14'>{renderNotes()}</ul>
			</section>
		</>
	);
}
