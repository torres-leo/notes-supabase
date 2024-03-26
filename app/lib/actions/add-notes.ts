'use server';
import { createClient } from '@/utils/supabase/server';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';

export async function addNote(formData: FormData) {
	const title = formData.get('title');
	const content = formData.get('content');

	const supabase = createClient();
	const {
		data: { session },
	} = await supabase.auth.getSession();
	const user = session?.user;

	if (!user) {
		console.error('User is not authenticated');
		return;
	}

	let { data, error } = await supabase.from('notes').select('title').eq('title', [title]).single();
	console.log(data);

	if (data?.title) {
		throw new Error('Title already exist');
	}

	await supabase.from('notes').insert([
		{
			title,
			content,
			userId: user.id,
		},
	]);

	if (error) {
		console.error('Error inserting data', error);
		return;
	}

	revalidatePath('/notes');
	redirect('/notes');

	// return { message: 'Success' };
}
