const TrashIcon = ({ customClass }: { customClass?: string }) => {
	return (
		<svg
			viewBox='0 0 24 24'
			fill='none'
			stroke='currentColor'
			strokeWidth='1.5'
			strokeLinecap='round'
			strokeLinejoin='round'
			className={`icon icon-tabler icons-tabler-outline icon-tabler-trash ${customClass}`}>
			<path stroke='none' d='M0 0h24v24H0z' fill='none' />
			<path d='M4 7l16 0' />
			<path d='M10 11l0 6' />
			<path d='M14 11l0 6' />
			<path d='M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12' />
			<path d='M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3' />
		</svg>
	);
};

export default TrashIcon;
