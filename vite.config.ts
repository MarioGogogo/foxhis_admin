/*
 * @Author: MarioGo
 * @Date: 2021-12-08 11:37:34
 * @LastEditTime: 2021-12-09 15:03:25
 * @LastEditors: MarioGo
 * @Description: 文件描述
 * @FilePath: /foxhis-Admin/vite.config.ts
 * 可以输入预定的版权声明、个性签名、空行等
 */
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'
//@ts-ignore
import viteCompression from 'vite-plugin-compression'
import WindiCSS from 'vite-plugin-windicss'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    WindiCSS(),
    viteCompression({
      verbose: true,
      disable: false,
      threshold: 10240,
      algorithm: 'gzip',
      ext: '.gz',
    }),
  ],
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
      '@views': resolve(__dirname, 'src/views'),
      '@assets': resolve(__dirname, 'src/assets'),
      '@components': resolve(__dirname, 'src/components'),
      '@common': resolve(__dirname, 'src/common'),
      '@utils': resolve(__dirname, 'src/utils'),
      '@store': resolve(__dirname, 'src/store'),
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import "@/assets/style/main.scss";`, //引用公共样式，使用vite搭建项目只安装sass即可，不需要安装node-sass,sass-loader
      },
    },
  },
  server: {
    host: '0.0.0.0',
    port: 3000,
    open: true,
    https: false,
    proxy: {},
  },
  build: {
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
      },
    },
  },
})
