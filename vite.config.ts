import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import {resolve} from 'path';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server:{
    hmr: {
      overlay: false
    }
  },
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        home: resolve(__dirname, 'Home.html'),
        test: resolve(__dirname, 'test.html'),
      },
    },
  },
})
