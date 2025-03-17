import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@components': '/src/components',
      '@assets': '/src/assets',
      '@store': '/src/store',
      '@utils': '/src/utils',
      '@constants': '/src/constants',
      '@pages': '/src/pages',
      '@styles': '/src/styles',
      '@router': '/src/router',
      '@ui': '/src/ui',
      '@hooks': '/src/hooks',
      '@api': '/src/api',
    },
  },
  base: '/ModsenGalleryTest',
});
