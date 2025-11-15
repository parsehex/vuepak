import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

export default defineConfig({
	plugins: [vue()],
	build: {
		lib: {
			entry: 'src/main.ts',
			name: 'vuepak',
			formats: ['es', 'cjs'],
			fileName: (format) => (format === 'cjs' ? 'vuepak.cjs' : 'vuepak.es.js'),
		},
		rollupOptions: {
			external: ['vue'],
			output: {
				globals: { vue: 'Vue' },
			},
		},
	},
});
