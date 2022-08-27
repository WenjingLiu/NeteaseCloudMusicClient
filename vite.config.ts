import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: { // 设置'@'指向src目录
    alias: {
      '@': resolve(__dirname, 'src')
    }
  },
  base: './', // 设置打包路径
  server: {
    host: '0.0.0.0',
    port: 8000,
    open: true,
    cors: true, //允许跨域
    proxy: {
      '/api': {
         target: 'http://localhost:3000',
         changeOrigin: true,
         secure: false,
         rewrite: (path) => path.replace(/^\/api/, '')
      }
    }
  },
  css: {
      preprocessorOptions: {
          scss: {
              // 全局引入scss文件, 无需在每个组件中再次手动导入
              additionalData: '@use "@/style.scss" as *;'
          }
      }
  }
})
