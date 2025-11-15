import { defineConfig } from 'vitepress';
import { fileURLToPath, URL } from 'node:url';

// https://vitepress.dev/reference/site-config
export default defineConfig(({ mode }) => {
	return {
		title: 'Vuepak docs',
		description: '',
		base: mode === 'production' ? '/vuepak/' : '/',
		vite: {
			resolve: {
				alias: {
					'@parsehex/vuepak': fileURLToPath(
						new URL('../../src', import.meta.url)
					),
				},
			},
		},
		themeConfig: {
			// https://vitepress.dev/reference/default-theme-config
			nav: [
				{ text: 'Home', link: '/' },
				{ text: 'Dev Docs', link: '/dev' },
			],
			outline: 'deep',

			sidebar: [],

			socialLinks: [
				{ icon: 'github', link: 'https://github.com/parsehex/vuepak' },
			],
		},
	};
});
