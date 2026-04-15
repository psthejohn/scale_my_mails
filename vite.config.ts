import { defineConfig } from 'vite'
import react, { reactCompilerPreset } from '@vitejs/plugin-react'
import babel from '@rolldown/plugin-babel'

// https://vite.dev/config/
export default defineConfig({
  base: '/scale_my_mails/',
  plugins: [
    react(),
    babel({ presets: [reactCompilerPreset()] })
  ],
})
