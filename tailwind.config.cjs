import { join } from 'path'
import typography from '@tailwindcss/typography'
import { skeleton } from '@skeletonlabs/tw-plugin'

import { myTheme } from './custom-theme.ts'

/** @type {import('tailwindcss').Config} */
export default {
	darkMode: 'class',
	content: ['./src/**/*.{html,js,svelte,ts}',
		join(require.resolve('@skeletonlabs/skeleton'), '../**/*.{html,js,svelte,ts}')],
	theme: {
		extend: {
			boxShadow: {
				'encore': '5px 5px 0 0 black'
			}
		},
	},
	plugins: [typography,
		skeleton({
			themes: {
				preset: ["skeleton", 'crimson', 'modern'],
				custom: [myTheme],
			}
		})
	],
}
