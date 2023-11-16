/** @type {import('tailwindcss').Config} */
module.exports = {
	mode: 'jit',
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			screens: {
				'3xl': '1920px',
				// => @media (min-width: 1920px) { ... }
			},
		},
	},
	plugins: [
		require('tailwindcss-animated'),
	],
}