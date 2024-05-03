import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({

  server: {
    proxy: {
      '/api':'https://239dee69-9313-4d20-a40e-955b2462ed90-00-1sghpsceeag2g.sisko.replit.dev/'
    
    }
  },
  plugins: [react()],
})
