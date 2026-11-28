# Upmukhiya Chai website (Next.js)

## Run locally
```
npm install
npm run dev
```
Open http://localhost:3000

## Deploy
Push this folder to GitHub, then import it in Vercel (framework: Next.js, no settings needed).
Every `git push` redeploys automatically.

## Easy edits (no coding needed)
Almost everything is in ONE file: **`components/data.js`**
- Domain name (`SITE.url`) – set to your real domain for SEO
- Phone numbers, email, address
- Instagram link (`SOCIAL`)
- Menu items (`TEAS`, `SNACKS`)
- Inauguration photos (`LAUNCHES`) – upload the photo to `public/images/launches/`, then add one line
- Why-partner points (`WHY`), franchise benefits, steps and FAQ

## Page text
- Home: `app/page.js` | About: `app/about/page.js` | Menu: `app/menu/page.js`
- Franchise: `app/franchise/page.js` | Contact: `app/contact/page.js`

## Images
- Replace a photo by uploading a new file with the SAME name into `public/images/...`
- Keep photos under ~400 KB (JPG) so the site stays fast on mobile.
- Team photos: `public/images/team/` (Haider Ali photo is 4:5 portrait)

## Colors and fonts
Top of `app/globals.css` (`--maroon`, `--saffron`, ...). Fonts are set in `app/layout.js`.

## SEO checklist after going live
1. Make sure `SITE.url` in `components/data.js` is your real domain.
2. Add the site to Google Search Console and submit `https://yourdomain/sitemap.xml`.
3. Paste the Search Console verification code in `app/layout.js` (the commented `verification` line).
4. Create / claim your Google Business Profile with the same name, phone and address as the Contact page.
