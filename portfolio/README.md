# Abhishek Anand — Portfolio

A modern, responsive portfolio website built with **React**, **Vite**, **Tailwind CSS**, and **Framer Motion**.

## Tech Stack

- **React** + **Vite**
- **Tailwind CSS** (v4)
- **React Router** (HashRouter for GitHub Pages compatibility)
- **Framer Motion** (animations)
- **react-icons** (tech badges & UI icons)

## Contact form — receive messages at abhi96anand@gmail.com

The contact form uses **Formspree** so submissions are emailed to you.

1. Go to **[https://formspree.io](https://formspree.io)** and sign up with **abhi96anand@gmail.com**.
2. Click **New form** and create a form (submissions will go to that email).
3. Copy your **form ID** from the form URL (e.g. `https://formspree.io/f/xyzabc` → the ID is `xyzabc`).
4. In the project folder, create a file named **`.env`** and add:
   ```env
   VITE_FORMSPREE_ID=xyzabc
   ```
   (Replace `xyzabc` with your actual form ID.)
5. Restart the dev server (`npm run dev`). When someone submits the form, you’ll get an email at **abhi96anand@gmail.com**.

For production (Netlify/Vercel), add the same `VITE_FORMSPREE_ID` in the site’s environment variables.

## Run Locally

```bash
# Install dependencies (if not already done)
npm install

# Start dev server
npm run dev
```

Open [http://localhost:5173](http://localhost:5173).

## Build

```bash
npm run build
```

Output is in `dist/`.

## Deployment

### Netlify

1. Push the repo to GitHub.
2. In Netlify: **Add new site** → **Import an existing project** → connect GitHub and select this repo.
3. Build command: `npm run build`
4. Publish directory: `dist`
5. Deploy.

No extra config needed; base URL is `/` by default.

### GitHub Pages

1. In `vite.config.js`, set:
   ```js
   base: '/your-repo-name/',  // e.g. base: '/portfolio/',
   ```
2. Push to GitHub and enable **GitHub Pages** for the repo (e.g. branch `main`, folder `/ (root)` or use `gh-pages`).
3. Build and deploy:
   ```bash
   npm run build
   npx gh-pages -d dist
   ```
   (Install `gh-pages`: `npm install -D gh-pages` and add a `"deploy": "vite build && gh-pages -d dist"` script if you like.)

### Vercel / Render

- **Vercel**: Import the GitHub repo; build command `npm run build`, output directory `dist`.
- **Render**: New Static Site; build command `npm run build`, publish directory `dist`.

## Project Structure

```
src/
├── components/
│   ├── Header.jsx    # Sticky nav
│   ├── Hero.jsx      # Hero section
│   ├── About.jsx     # About me
│   ├── Skills.jsx    # Tech stack & badges
│   ├── Projects.jsx  # Project cards
│   ├── Experience.jsx
│   ├── Contact.jsx   # Contact info + form
│   └── Footer.jsx
├── App.jsx
├── main.jsx
└── index.css
```

## Contact

- **Email:** abhi96anand@gmail.com  
- **Mobile:** 8770824752  
- **Company:** Avology Technology Pvt Ltd  

© 2026 Abhishek Anand. Previously at Shine Dezign Pvt Ltd.
