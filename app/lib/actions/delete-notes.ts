'use server';
import { createClient } from '@/utils/supabase/server';
import { revalidatePath } from 'next/cache';

export async function deleteNote(formData: FormData) {
	const noteId = formData.get('id');

	const supabase = createClient();
	const {
		data: { session },
	} = await supabase.auth.getSession();
	const user = session?.user;

	if (!user) {
		console.error('User is not authenticated');
		return;
	}

	const { error } = await supabase.from('notes').delete().match({ id: noteId, userId: user.id });

	if (error) {
		console.error('Error deleting data', error);
		return;
	}

	revalidatePath('/notes');

	return { message: 'Success' };
}
