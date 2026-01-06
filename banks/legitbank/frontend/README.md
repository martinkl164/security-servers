# Super Legit Bank — Frontend

This frontend is a static Vite + React + TypeScript app styled with Tailwind CSS.

## Goals / Constraints
- Shared app shell (header/footer) with primary navigation (Home, Login)
- Greenery-toned brand accents and a text-based “cat in the bank” logo mark (no image assets)
- No API/DB dependencies for the core UX (no required network calls)
- Local dev can run on HTTPS using a trusted certificate
- Production builds to static assets for hosting (e.g. Cloudflare Pages)

## Local Development

### Install
```bash
npm ci
```

### Run (HTTP by default)
```bash
npm run dev
```

### Run with HTTPS (trusted dev certificate)
This repo does not include certificates or private keys.

Recommended approach: `mkcert`.

1) Install mkcert and create a local CA:
```bash
mkcert -install
```

2) Create a localhost certificate and key in `frontend/certs/`:
```bash
mkdir certs
mkcert -key-file certs/localhost-key.pem -cert-file certs/localhost.pem localhost 127.0.0.1 ::1
```

3) Start the dev server:
```bash
npm run dev
```

The dev server automatically enables HTTPS when it finds:
- `frontend/certs/localhost.pem`
- `frontend/certs/localhost-key.pem`

You can also override paths via env vars:
- `SSL_CRT_FILE`
- `SSL_KEY_FILE`

## Production (Static Hosting)

### Build
```bash
npm run build
```

This outputs static assets to `dist/`.

### Cloudflare Pages
- Build command: `npm ci && npm run build`
- Output directory: `dist`

HTTPS is terminated by the hosting platform (Cloudflare Pages).
