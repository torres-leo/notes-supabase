const EditIcon = ({ customClass }: { customClass?: string }) => {
	return (
		<svg
			viewBox='0 0 24 24'
			fill='none'
			stroke='currentColor'
			strokeWidth='1.5'
			strokeLinecap='round'
			strokeLinejoin='round'
			className={`icon icon-tabler icons-tabler-outline icon-tabler-edit ${customClass}`}>
			<path stroke='none' d='M0 0h24v24H0z' fill='none' />
			<path d='M7 7h-1a2 2 0 0 0 -2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2 -2v-1' />
			<path d='M20.385 6.585a2.1 2.1 0 0 0 -2.97 -2.97l-8.415 8.385v3h3l8.385 -8.415z' />
			<path d='M16 5l3 3' />
		</svg>
	);
};

export default EditIcon;
