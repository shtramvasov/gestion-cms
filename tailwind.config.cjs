/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			colors: {
				'gest-slate': {
					800: '#171C29',
					700: '#191F2D',
					600: '#202739',
				},
				'gest-accent': {
					green: '#65D599',
					lemon: '#DDF493',
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
