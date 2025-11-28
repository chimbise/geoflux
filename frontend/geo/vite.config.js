import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    // Optimize chunk size
    chunkSizeWarningLimit: 1000,
    rollupOptions: {
      output: {
        manualChunks: {
          'react-vendor': ['react', 'react-dom'],
          'icons': ['lucide-react']
        }
      }
    },
    // Minify for production
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true, // Remove console.logs in production
        drop_debugger: true
      }
    }
  },
  // Development server configuration
  server: {
    port: 3000,
    open: true,
    cors: true,
    allowedHosts: [
      'glycolytically-sombre-destinee.ngrok-free.dev',
      '.ngrok-free.app',
      '.ngrok-free.dev',
      '.ngrok.io'
    ]
  },
  // Preview server configuration
  preview: {
    port: 4173,
    open: true
  }
})
