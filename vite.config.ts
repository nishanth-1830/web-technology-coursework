import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import fs from 'fs';
import {defineConfig} from 'vite';

function getHtmlEntries() {
  const entries: Record<string, string> = {
    main: path.resolve(__dirname, 'index.html'),
  };
  ['html', 'css', 'javascript', 'mysql', 'nodejs', 'supabase'].forEach((dir) => {
    const dirPath = path.resolve(__dirname, dir);
    if (fs.existsSync(dirPath)) {
      fs.readdirSync(dirPath).forEach((file) => {
        if (file.endsWith('.html')) {
          const key = `${dir}_${file.replace(/\.html$/, '')}`;
          entries[key] = path.resolve(dirPath, file);
        }
      });
    }
  });
  return entries;
}

export default defineConfig(() => {
  return {
    plugins: [react(), tailwindcss()],
    publicDir: 'public',
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
    },
    build: {
      rollupOptions: {
        input: getHtmlEntries(),
      },
    },
    server: {
      port: 3000,
      host: '0.0.0.0',
      hmr: process.env.DISABLE_HMR !== 'true',
      watch: process.env.DISABLE_HMR === 'true' ? null : {},
    },
  };
});
