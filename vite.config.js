import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/clinica-vet-react/', // ← Nombre exacto del repositorio de GitHub
  plugins: [react()]
})
