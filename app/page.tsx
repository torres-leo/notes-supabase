import Header from '@/components/Header/Header';
import { Hero } from '@/components/Hero';
import { Meteors } from '@/components/Meteors';
import { createClient } from '@/utils/supabase/server';
import { redirect } from 'next/navigation';

export default async function Index() {
	const supabase = createClient();

	const {
		data: { session },
	} = await supabase.auth.getSession();

	return session ? (
		<div className=''>
			<Header />
			<div className='relative p-4 rounded-md h-auto'>
				<div className='absolute overflow-hidden inset-0 h-auto -z-10'>
					<Meteors number={20} />
				</div>
				<div className='pointer-events-none absolute inset-0 h-auto bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(120,119,198,0.15),rgba(255,255,255,0.2))] dark:bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(120,119,198,0.15),rgba(255,255,255,0.0))]'></div>

				<Hero />
			</div>
		</div>
	) : (
		redirect('/login')
	);
}
