import typography from '@tailwindcss/typography';
const defaultTheme = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
export default {
	darkMode: 'class',
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			boxShadow: {
				encore: '5px 5px 1px #011627'
			},
			fontFamily: {
				sans: ['roboto', ...defaultTheme.fontFamily.sans],
				serif: [
					'ui-serif',
					'Georgia',
					'Cambria',
					'Times New Roman',
					'Times',
					...defaultTheme.fontFamily.serif
				]
			},
			fontSize: {
				base: ''
			},
			colors: {
				background: '#FDFDF9',
				'text-primary': '#011627',
				links: '#3E885B',
				tag: '#FF9F1C'
			},
			typography: {
				DEFAULT: {
					css: {
						color: '#011627',
						a: {
							color: '#3E885B',
							'&:hover': {
								filter: 'brightness(1.5)'
							}
						},
						'blockquote p:first-of-type::before': false,
						'blockquote p:last-of-type::after': false
					}
				}
			}
		}
	},
	plugins: [typography]
};
