# Hauswerk — Hauswerk

Bilingual (DE/EN) landing page for a home & garden help service in Saarbrücken.

## Tech stack
- React 19 + React Router 7
- Tailwind CSS 3 + shadcn/ui
- CRACO build config
- (FastAPI + MongoDB backend included but unused — pure static frontend)

## Run locally

```bash
cd frontend
yarn install
yarn start          # http://localhost:3000
```

For a production build:

```bash
yarn build          # outputs ./build
```

You can host the contents of `frontend/build/` on any static host (Vercel, Netlify, Cloudflare Pages, GitHub Pages, etc.).

## Environment

`frontend/.env`:
```
REACT_APP_BACKEND_URL=https://example.com   # not used by this landing page
WDS_SOCKET_PORT=443
```

## Editing content

- **Texts (DE/EN):** `frontend/src/lib/translations.js`
- **Contact info (phone, email, address):** same file, `CONTACT` object
- **Images:** `frontend/src/pages/Landing.jsx` → `IMAGES` constant
- **Colors / fonts:** `frontend/src/index.css`

## Contact
Hauswerk — Saarbrücker Straße 59, Saarbrücken
Tel: +49 1590 6184755 · mohamadj5924@gmail.com
