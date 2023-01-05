/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			colors: {
				'gest-slate': {
					800: '#2c2e31',
					700: '#323437',
					600: '#383b3f',
					500: '#d1d0c5',
				},
				'gest-accent': {
					indigo: '#BEA4F2',
					green: {
						500: '#2a9a5e',
						400: '#2EAA68',
						300: '#9FE5BF',
					},
					lemon: {
						500: '#E1D037',
						400: '#CAB81E',
						300: '#F2EFA6',
					},
					blue: {
						500: '#3386D7',
						400: '#207FD7 ',
						300: '#a6cef2',
					},
					rose: {
						500: '#e23636',
						400: '#E44646',
						300: '#F99898',
					},
				},
			},
		},
	},
	plugins: [],
	darkMode: ['class', ':global(.dark)'],
}
