import Link from 'next/link';
import User from '../User';
import styles from './Header.module.css';
import { createClient } from '@/utils/supabase/server';

export default async function Header() {
	const supabase = createClient();

	const {
		data: { session },
	} = await supabase.auth.getSession();

	return (
		<div className={styles.header}>
			<Link href='/' className='font-bold text-lg text-white/80'>
				Notes App
			</Link>
			<User />

			{!session && (
				<Link
					href='/'
					className='py-2 px-4 rounded-md no-underline text-foreground bg-btn-background hover:bg-btn-background-hover text-sm m-4'>
					Home
				</Link>
			)}
		</div>
	);
}
