import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'

export default defineConfig({
  plugins: [
    vue(),
    vueJsx(),
  ],
  server: {
    proxy: {
      '/api': {
        target: 'https://localhost:7051', // Cambia esto a la URL de tu API local
        changeOrigin: true,
        secure: false // Esto es necesario si estás usando un certificado SSL autofirmado
      }
    }
  },
  resolve: {
    alias: {
      '@': new URL('./src', import.meta.url).pathname
    }
  }
})
