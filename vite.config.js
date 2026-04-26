import path from "path"
import { fileURLToPath } from "url"
import react from "@vitejs/plugin-react"
import { defineConfig } from "vite"

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    target: 'esnext',
    // Increase inline limit so small assets don't create extra requests
    assetsInlineLimit: 4096,
    // Enable CSS code splitting for faster page loads
    cssCodeSplit: true,
    // Better source maps for prod debugging (optional, remove to save size)
    sourcemap: false,
    rollupOptions: {
      output: {
<<<<<<< HEAD
        // Smart chunk splitting — heavy libs load separately (parallel)
        manualChunks(id) {
          if (id.includes('node_modules/three') ||
              id.includes('node_modules/@react-three') ||
              id.includes('node_modules/ogl')) {
            return 'three-vendor'
          }
          if (id.includes('node_modules/motion') ||
              id.includes('node_modules/framer-motion')) {
            return 'motion-vendor'
          }
          if (id.includes('node_modules/react-dom') ||
              id.includes('node_modules/react/')) {
            return 'react-vendor'
          }
        },
        // Hashed filenames for cache busting
        chunkFileNames: 'assets/[name]-[hash].js',
        assetFileNames: 'assets/[name]-[hash][extname]',
        entryFileNames: 'assets/[name]-[hash].js',
=======
        manualChunks(id) {
          if (id.includes('node_modules')) {
            if (id.includes('react')) return 'react-vendor';
            if (id.includes('three')) return 'three-vendor';
            if (id.includes('motion')) return 'motion-vendor';
            if (id.includes('ogl')) return 'ogl-vendor';
            return 'vendor';
          }
        }
>>>>>>> 515bbd8998361535f45e3d4685a8d65bbcfa048f
      },
    },
  },
})
