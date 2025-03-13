import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': '/src',
      '@components': '/src/components',
      '@assets': '/src/assets',
      '@store': '/src/store',
      '@utils': '/src/utils',
      '@constants': '/src/constants',
      '@pages': '/src/pages',
      '@styles': '/src/styles',
      '@router': '/src/router',
      '@actions': '/src/store/actions',
      '@reducers': '/src/store/reducers',
    },
  },
});
