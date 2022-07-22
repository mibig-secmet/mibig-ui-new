import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import pages from 'vite-plugin-pages'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    pages(),
  ],
  server: {
    proxy: {
      '/api': 'http://localhost:6424',
      '/repository/': "http://localhost:6423",
      '/go': {
        target: "http://localhost:6423",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/go/, "/repository/")
      },
    },
  },
})
