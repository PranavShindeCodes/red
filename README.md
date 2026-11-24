# CafeOS Redirect

A minimal React + Vite site whose only purpose is to redirect visitors to:

`https://cafe-frontend-2qax.vercel.app/login`

It shows a small orange/white loading screen with a spinner and a fallback link while the redirect happens.

## Local development

```bash
npm install
npm run dev
```

Open the local URL printed by Vite (usually `http://localhost:5173`).

## Production build

```bash
npm run build
```

The static output is written to `dist/`. To preview it locally:

```bash
npm run preview
```

## Deploy to Vercel

### Option 1 — Import from Git (recommended)

1. Push this folder to a GitHub/GitLab/Bitbucket repository.
2. Go to [vercel.com/new](https://vercel.com/new) and import that repository.
3. Vercel detects Vite automatically. Leave the default settings:
   - Framework preset: **Vite**
   - Build command: `npm run build`
   - Output directory: `dist`
4. Click **Deploy**.

### Option 2 — Deploy from the CLI

```bash
npm install -g vercel
vercel login
vercel          # for a preview deployment
vercel --prod   # for a production deployment
```

No environment variables, backend, or database are required.

## Project structure

```text
.
├── index.html
├── package.json
├── vercel.json
├── vite.config.js
└── src
    ├── App.css
    ├── App.jsx
    └── main.jsx
```
