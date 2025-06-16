/// <reference types="vitest/config" /> 
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tsconfigPaths from 'vite-tsconfig-paths' // ✅ Import do plugin

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tsconfigPaths() // ✅ Adicionado para suportar `@/`
  ],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './src/setupTests.ts'
  }
})
