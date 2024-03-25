/** @type {import('tailwindcss').Config} */

module.exports = {
	content: ['./app/**/*.{js,ts,jsx,tsx,mdx}', './components/**/*.{js,ts,jsx,tsx,mdx}'],
	theme: {
		extend: {
			animation: {
				'meteor-effect': 'meteor 5s linear infinite',
				gradient: 'gradient 6s linear infinite',
			},
			keyframes: {
				meteor: {
					'0%': { transform: 'rotate(215deg) translateX(0)', opacity: 1 },
					'70%': { opacity: 1 },
					'100%': {
						transform: 'rotate(215deg) translateX(-500px)',
						opacity: 0,
					},
				},
				gradient: {
					'0%': { backgroundPosition: '0% 50%' },
					'100%': { backgroundPosition: '100% 50%' },
				},
			},
			colors: {
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				btn: {
					background: 'hsl(var(--btn-background))',
					'background-hover': 'hsl(var(--btn-background-hover))',
				},
			},
		},
	},
	plugins: [],
};
