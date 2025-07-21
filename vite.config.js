import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/clinica-vet-react/', // ← ¡Muy importante para GitHub Pages!
  plugins: [react()]
})
