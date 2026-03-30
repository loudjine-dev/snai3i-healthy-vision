import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/snai3i-healthy-vision/', // للـ Vercel أو localhost
  // base: '/snai3i-healthy-vision/', // لـ GitHub Pages فقط
})