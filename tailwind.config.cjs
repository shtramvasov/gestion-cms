/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			colors: {
				'gest-slate': {
					800: '#2c2e31',
					700: '#323437',
					600: '#616366',
					500: '#d1d0c5',
				},
				'gest-accent': {
					green: '#65D599',
					lemon: '#d2ab17',
					indigo: '#BEA4F2',
					rose: '#F26DCB',
					blue: '#6FB2F0',
				},
			},
		},
	},
	plugins: [],
	darkMode: ['class', ':global(.dark)'],
}
