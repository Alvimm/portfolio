/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors:{
				dark: '#030014',
				light: '#eaeaea',
			},
		},
		fontFamily: {
			'sans': ['Montserrat', 'ui-sans-serif', 'system-ui'],
			'logo': ['Rubik Doodle Shadow', 'system-ui']
		}
	},
	plugins: [],
	darkMode: 'class',
}