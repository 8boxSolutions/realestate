import path from 'path';
import tailwindcss from '@tailwindcss/vite';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr';

// https://vite.dev/config/
export default defineConfig({
	plugins: [react(), tailwindcss(), svgr({})],
	resolve: {
		alias: {
			'@': path.resolve(__dirname, './src'),
			'@emotion/styled': path.resolve(__dirname, 'node_modules/@emotion/styled'),
			'@emotion/react': path.resolve(__dirname, 'node_modules/@emotion/react'),
		},
	},
});
