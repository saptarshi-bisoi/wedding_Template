import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    // Optimize chunks for better caching
    rollupOptions: {
      output: {
        manualChunks: {
          'gsap': ['gsap'],
          'lenis': ['lenis', '@studio-freight/react-lenis'],
          'confetti': ['canvas-confetti']
        }
      }
    },
    // Compress assets
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true
      }
    },
    // Image optimization
    assetsInlineLimit: 4096,
    reportCompressedSize: false
  },
  // Optimize for production
  server: {
    headers: {
      'Cache-Control': 'public, max-age=31536000, immutable'
    }
  }
})
