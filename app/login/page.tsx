import Header from '@/components/Header/Header';
import { createClient } from '@/utils/supabase/server';
import Link from 'next/link';
import { redirect } from 'next/navigation';

export default async function Login({ searchParams }: { searchParams: { message: string } }) {
	const supabase = createClient();

	const {
		data: { session },
	} = await supabase.auth.getSession();

	if (session) {
		return redirect('/');
	}

	const signIn = async (formData: FormData) => {
		'use server';

		const email = formData.get('email') as string;
		const password = formData.get('password') as string;
		const supabase = createClient();

		const { error } = await supabase.auth.signInWithPassword({
			email,
			password,
		});

		if (error) {
			return redirect('/login?message=Could not authenticate user');
		}

		return redirect('/');
	};

	return (
		<div>
			<Header />

			<div className='w-full px-8 sm:max-w-md mx-auto mt-4'>
				<form
					className='animate-in flex-1 flex flex-col w-full justify-center gap-2 text-foreground mb-4'
					action={signIn}>
					<label className='text-md' htmlFor='email'>
						Email
					</label>
					<input
						className='rounded-md px-4 py-2 bg-inherit border mb-6'
						name='email'
						placeholder='you@example.com'
						required
					/>
					<label className='text-md' htmlFor='password'>
						Password
					</label>
					<input
						className='rounded-md px-4 py-2 bg-inherit border mb-6'
						type='password'
						name='password'
						placeholder='••••••••'
						required
					/>
					<button className='rounded-md px-4 font-medium bg-gradient-to-r from-green-400/50 to-sky-400/50 py-2 mb-2 hover:opacity-90 tracking-wide'>
						Login
					</button>

					{searchParams?.message && (
						<p className='mt-4 p-4 bg-foreground/10 text-foreground text-center'>{searchParams.message}</p>
					)}
				</form>

				<br />
				<br />

				<p className='text-gray-200/90'>
					Don't have an Account?{' '}
					<Link href='/signup' className='hover:text-emerald-400 underline underline-offset-4'>
						Sign Up
					</Link>
				</p>
			</div>
		</div>
	);
}
