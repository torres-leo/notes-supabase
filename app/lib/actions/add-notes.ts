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

	const { data, error } = await supabase.from('notes').insert([
		{
			title,
			content,
			userId: user.id,
		},
	]);

	if (error) {
		if (error.code === '23505') throw new Error('Title already exist');
		throw new Error(error.message);
	}

	revalidatePath('/notes');
	// redirect('/notes');

	return { message: 'Success' };
}
