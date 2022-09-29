import { defineConfig } from 'vite';
import { createVuePlugin } from 'vite-plugin-vue2';
import legacy from '@vitejs/plugin-legacy';

export default defineConfig({
  root: 'src',
  build: {
    outDir: '../dist',
    emptyOutDir: true,
  },
  plugins: [
    createVuePlugin(),
    legacy({
      targets: ['ie >= 11'],
      additionalLegacyPolyfills: ['regenerator-runtime/runtime'],
    }),
  ],
  resolve: {
    alias: {
      'vue$': 'vue/dist/vue.esm.js',
      'Components': `${__dirname}/src/components/`,
    },
  },
  css: {
    postcss: {
      plugins: [
        require('autoprefixer'),
      ],
    },
  },
  server: {
    open: true,
  },
});
