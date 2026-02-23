# Portfolio ko Git se Live kaise karein

Aapka project already GitHub par hai: **https://github.com/abhishekanand-123/Abhishek_Anand_Portfolio**

## Option 1: GitHub Pages (free, Git se direct)

### Step 1: Code push karein

```bash
cd "C:\Users\ASD\Desktop\Abhishek Anand\portfolio"

git add .
git commit -m "Update portfolio"
git push origin main
```

### Step 2: GitHub Pages enable karein

1. Browser mein jayein: **https://github.com/abhishekanand-123/Abhishek_Anand_Portfolio**
2. **Settings** → left side **Pages**
3. **Source**: "Deploy from a branch" choose karein
4. **Branch**: `main` (ya `gh-pages` agar aap `npm run deploy` use karte hain)
5. **Folder**: `/ (root)` ya **/docs** — agar aap **gh-pages** branch use karte hain to folder **/ (root)** choose karein
6. **Save**

### Step 3: Site build karke gh-pages par deploy (recommended)

Pehle ek baar install karein:

```bash
npm install -D gh-pages
```

Phir deploy run karein:

```bash
npm run deploy
```

Ye command `dist` folder build karke **gh-pages** branch par push karegi. Phir GitHub **Settings → Pages** mein **Branch: gh-pages**, **Folder: / (root)** select karein.

**Live URL (kuch minutes baad):**  
**https://abhishekanand-123.github.io/Abhishek_Anand_Portfolio/**

---

## Option 2: Netlify (bhi free, Git connect)

1. **https://netlify.com** par jayein, GitHub se login karein
2. **Add new site** → **Import an existing project** → **GitHub** → **Abhishek_Anand_Portfolio** choose karein
3. Settings:
   - **Build command:** `npm run build`
   - **Publish directory:** `dist`
4. **Deploy** click karein  
5. Netlify apna URL dega (e.g. `something.netlify.app`). Har baar `git push` par auto-deploy hoga.

Netlify use karte waqt `vite.config.js` mein `base: '/'` kar dena (GitHub Pages wala base comment out karke).

---

## Short summary

| Step | Command / Action |
|------|------------------|
| 1. Changes push | `git add .` → `git commit -m "message"` → `git push origin main` |
| 2. GitHub Pages | Repo → Settings → Pages → Branch `main` ya `gh-pages`, Save |
| 3. Deploy (gh-pages) | `npm run deploy` (pehle `npm install -D gh-pages`) |

Live link (GitHub Pages): **https://abhishekanand-123.github.io/Abhishek_Anand_Portfolio/**
