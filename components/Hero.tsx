import { AuthButton } from './AuthButton';
import SupIcon from './SupabaseIcon';
import ReactIcon from './ReactIcon';
import Link from 'next/link';

export const Hero = () => {
	return (
		<section className='flex flex-col justify-center items-center gap-y-8'>
			<h3 className='text-6xl font-bold w-full flex justify-center items-center gap-x-6'>
				<span className='flex items-center gap-2'>
					<ReactIcon customClass='size-14 animate-[spin_14s_linear_infinite]' />
					NEXT14
				</span>
				<span>&</span>
				<span className='text-transparent gradient font-bold animate-gradient uppercase flex items-center gap-2'>
					supabase
					<SupIcon customClass='size-14' />
				</span>
			</h3>
			<h4 className='text-5xl font-bold text-center'>Notes App</h4>

			<Link
				href='/notes'
				className='relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-green-400 to-blue-600 focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 hover:opacity-80'>
				<span className='relative px-5 py-2.5 transition-all ease-in duration-75 text-white bg-gray-950 rounded-md text-base'>
					Check Notes
				</span>
			</Link>
		</section>
	);
};
