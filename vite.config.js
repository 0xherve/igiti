import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    exclude: ['chunk-WVNNIVP5', 'chunk-3T3MI7EL'], // Add the problematic dependencies here
  },
})
