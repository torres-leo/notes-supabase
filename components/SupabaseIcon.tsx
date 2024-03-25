function supIcon({ customClass }: { customClass: string }) {
	return (
		<svg
			viewBox='0 0 24 24'
			fill='none'
			stroke='#41b883'
			strokeWidth='1.5'
			strokeLinecap='round'
			strokeLinejoin='round'
			className={`icon icon-tabler icons-tabler-outline icon-tabler-brand-supabase ${customClass}`}>
			<path stroke='none' d='M0 0h24v24H0z' fill='none' />
			<path d='M4 14h8v7l8 -11h-8v-7z' />
		</svg>
	);
}

export default supIcon;
