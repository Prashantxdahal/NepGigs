<<<<<<< HEAD
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
})
=======
import { defineConfig } from 'vite';
import path from 'path';

export default defineConfig({
  resolve: {
    alias: {
      '@Nepgigs': path.resolve(__dirname, 'src'),
    },
  },
});
>>>>>>> 8e2f909 (Adding Gig Posting page)
