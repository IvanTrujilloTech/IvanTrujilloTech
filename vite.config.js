import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
  // Si vas a desplegar en GitHub Pages en un subdirectorio (ej: /mi-portfolio/),
  // cambia '/' por el nombre de tu repositorio: '/mi-portfolio/'
  base: '/', 
  build: {
    outDir: 'dist',
  }
})
