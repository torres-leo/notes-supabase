'use client';

import { useEffect, useState } from 'react';

function Alert({ message }: { message: string | undefined }) {
	const [showMessage, setShowMessage] = useState(false);

	useEffect(() => {
		if (message) {
			setShowMessage((val) => true);
			const timer = setTimeout(() => {
				setShowMessage((val) => false);
				message = '';
			}, 3000);
			return () => clearTimeout(timer);
		}
	}, [message]);

	return (
		<>
			{showMessage && (
				<p className='animate-in mt-4 p-4 bg-foreground/10 text-foreground text-center text-red-400'>{message}</p>
			)}
		</>
	);
}

export default Alert;
