import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `
        $primary-color: #3498db;
        $secondary-color: #2ecc71;
        $text-color: #333333;
        `,
      },
    },
  },
})
