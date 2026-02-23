import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
// base: for GitHub Pages use repo name; for Netlify/Vercel use '/'
export default defineConfig({
  plugins: [react(), tailwindcss()],
  base: '/Abhishek_Anand_Portfolio/',
})
