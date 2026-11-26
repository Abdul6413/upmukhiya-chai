# Upmukhiya Chai website (Next.js)

## Run locally
```
npm install
npm run dev
```
## Deploy on Vercel
Push this folder to GitHub, then Import Project in Vercel (framework: Next.js, no settings needed).

## Edit content
- Phone, email, address, menu items: `components/data.js`
- Home page: `app/page.js` | About: `app/about/page.js` | Franchise: `app/franchise/page.js`
- Colors: top of `app/globals.css`
- After going live, update `metadataBase` in `app/layout.js` with your real domain.
