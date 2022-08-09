import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'
import { sass } from 'svelte-preprocess-sass';
import * as path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [svelte({
    preprocess: {
      style: sass(),
    },
  })],
  resolve: {
    alias: {
      'api': path.resolve('./src/api'),
      'components': path.resolve('./src/components'),
      'stores': path.resolve('./src/stores'),
      'icons': path.resolve('./src/icons')
    }
  }
})
