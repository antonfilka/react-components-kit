import { defineConfig } from 'vite';
import { resolve } from 'path';
import dts from 'vite-plugin-dts';
import react from '@vitejs/plugin-react';
import { libInjectCss } from 'vite-plugin-lib-inject-css';

export default defineConfig({
    plugins: [react(), libInjectCss(), dts({ include: ['src'] })],
    build: {
        copyPublicDir: false,
        rollupOptions: {
            external: ['react', 'react/jsx-runtime', 'antd'],
        },
        lib: {
            entry: resolve(__dirname, 'src/index.ts'),
            formats: ['es'],
        },
    },
});
