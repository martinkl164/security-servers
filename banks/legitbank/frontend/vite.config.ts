import react from '@vitejs/plugin-react';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { defineConfig } from 'vitest/config';

function httpsConfig() {
  const here = path.dirname(fileURLToPath(import.meta.url));
  const certFile =
    process.env.SSL_CRT_FILE ?? path.resolve(here, 'certs', 'localhost.pem');
  const keyFile =
    process.env.SSL_KEY_FILE ??
    path.resolve(here, 'certs', 'localhost-key.pem');

  if (!fs.existsSync(certFile) || !fs.existsSync(keyFile)) {
    return undefined;
  }

  return {
    cert: fs.readFileSync(certFile),
    key: fs.readFileSync(keyFile),
  };
}

export default defineConfig({
  plugins: [react()],
  server: {
    https: httpsConfig(),
    port: 5173,
    strictPort: true,
  },
  test: {
    environment: 'jsdom',
    setupFiles: ['./src/test/setup.ts'],
  },
});
