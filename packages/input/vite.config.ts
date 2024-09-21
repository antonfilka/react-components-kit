import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import dts from 'vite-plugin-dts';
import { resolve } from 'path';

export default defineConfig({
    plugins: [react(), dts({ include: ['src'] })],
    build: {
        lib: {
            entry: resolve(__dirname, 'src/index.ts'),
            name: 'Input',
            formats: ['es'],
            fileName: (format) => `index.${format}.js`,
        },
        rollupOptions: {
            external: ['react', 'react-dom', '@nextui-org/react'],
        },
    },
});
