import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: { host: true, port: 3000, allowedHosts: ['13b51b1d953dd4.lhr.life'] }
})
