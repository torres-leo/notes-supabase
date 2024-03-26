'use server';
import { createClient } from '@/utils/supabase/server';
import { revalidatePath } from 'next/cache';

export async function updateNote(formData: FormData) {
	const id = formData.get('id');
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

	const { data, error } = await supabase
		.from('notes')
		.update({
			title,
			content,
		})
		.match({ id, userId: user.id });

	if (error) {
		console.error('Error updating data', error);
		return;
	}

	revalidatePath('/notes');

	return { message: 'Success' };
}
