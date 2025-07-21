import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/clinica-vet-react/', // nombre exacto del repositorio
  plugins: [react()]
})
