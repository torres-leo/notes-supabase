import Link from 'next/link';
import { headers } from 'next/headers';
import { createClient } from '@/utils/supabase/server';
import { redirect } from 'next/navigation';
import Header from '@/components/Header/Header';
import Alert from '@/components/Alert';

export default async function Signup({ searchParams }: { searchParams: { message: string } }) {
	const supabase = createClient();

	const {
		data: { session },
	} = await supabase.auth.getSession();

	if (session) {
		return redirect('/');
	}

	const signUp = async (formData: FormData) => {
		'use server';

		const origin = headers().get('origin');
		const email = formData.get('email') as string;
		const password = formData.get('password') as string;
		const confirmPassword = formData.get('confirmPassword') as string;
		const supabase = createClient();

		if (password !== confirmPassword) {
			return redirect('/signup?message=Passwords do not match');
		}

		const { error } = await supabase.auth.signUp({
			email,
			password,
			options: {
				emailRedirectTo: `${origin}/auth/callback`,
			},
		});

		if (error) {
			return redirect('/signup?message=Could not authenticate user');
		}

		return redirect(`/confirm?message=Check email(${email}) to continue sign in process`);
	};

	return (
		<div>
			<Header />

			<div className='w-full px-8 sm:max-w-md mx-auto mt-4'>
				<form
					className='animate-in flex-1 flex flex-col w-full justify-center gap-2 text-foreground mb-4'
					action={signUp}>
					<label className='text-md' htmlFor='email'>
						Email
					</label>
					<input
						className='rounded-md px-4 py-2 bg-inherit border mb-6'
						name='email'
						id='email	'
						placeholder='you@example.com'
						required
					/>
					<label className='text-md' htmlFor='password'>
						Password
					</label>
					<input
						className='rounded-md px-4 py-2 bg-inherit border mb-6'
						type='password'
						id='password'
						name='password'
						placeholder='••••••••'
						required
					/>
					<label className='text-md' htmlFor='confirm-password'>
						Confirm Password
					</label>
					<input
						className='rounded-md px-4 py-2 bg-inherit border mb-6'
						type='password'
						id='confirm-password'
						name='confirmPassword'
						placeholder='••••••••'
						required
					/>
					<button className='rounded-md px-4 font-medium bg-gradient-to-r from-green-400/50 to-sky-400/50 py-2 mb-2 hover:opacity-90 tracking-wide'>
						Sign up
					</button>

					<Alert message={searchParams.message} />
				</form>

				<p className='text-gray-200/90'>
					Already have an account?{' '}
					<Link href='/login' className='hover:text-emerald-400 underline underline-offset-4'>
						Sign in
					</Link>
				</p>
			</div>
		</div>
	);
}
