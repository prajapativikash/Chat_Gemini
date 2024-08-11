import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/Gemini_App/', // Set this to your GitHub repository name
  plugins: [react()]
});
