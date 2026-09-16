# Amira Boubaker Portfolio

Animated React/Vite portfolio for Amira Boubaker. It uses Framer Motion for scroll reveals, parallax, animated project cards, and responsive interaction states.

## Run locally

Install dependencies and start the Vite server:

```bash
npm install
npm run dev
```

Then visit the local URL printed by Vite.

## Customize

- Update CV-derived copy and links in `src/main.jsx`.
- Tune the visual system and responsive breakpoints in `src/styles.css`.
- Replace `Amira_Boubaker_CV.pdf` with an updated PDF while keeping the same filename, or update the download link.
- Add the personal portrait as `public/amira-photo.jpg`. Until then, the hero deliberately shows a styled initials fallback.
- The contact form uses EmailJS and sends through its configured email service. Copy `.env.example` to `.env` or `.env.local`, then set `VITE_EMAILJS_SERVICE_ID`, `VITE_EMAILJS_TEMPLATE_ID`, and `VITE_EMAILJS_PUBLIC_KEY` from your EmailJS dashboard. Vite does not load values from `.env.example`.
- Configure the EmailJS template using the ready-to-copy specification in `docs/EMAILJS_TEMPLATE.md`. The public key is intended for browser use; never put a private API key in the frontend.
- The form validates inputs client-side and includes a honeypot. Keep provider-side validation, rate limits, and spam protection enabled.

## Deploy

Run `npm run build`, then deploy the generated `dist` folder to Netlify, Vercel, GitHub Pages, or another static host. `_headers` contains compatible security headers for hosts that support it. Enforce HTTPS at the host level. Run `npm audit` before shipping.