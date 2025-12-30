import react from '@vitejs/plugin-react'
import tailwind from '@tailwindcss/vite'

/** @type {import('vite').UserConfig} */
export default {
  plugins: [react(), tailwind()],
}
