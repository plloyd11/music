/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			colors: {
				'riffs-bg': '#1C1F21',
				'riffs-text': '#e6ab17',
				'riffs-card': '#2a2f32',
				'riffs-accent': '#34a0d4'
			}
		}
	},
	plugins: []
};
