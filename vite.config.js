import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: { host: true, port: 3000, allowedHosts: ['7b5ecb01e26d10.lhr.life'] }
})
