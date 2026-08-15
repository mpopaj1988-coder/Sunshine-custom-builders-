# Deploying the landing page to sunshinecustom.homes/kitchen-remodeling

This puts the landing page live at `https://sunshinecustom.homes/kitchen-remodeling`
**without touching the existing website.** The page goes into its own folder, so every
existing page, file, and URL on the site stays exactly as it is.

## Build the files

```bash
DEPLOY_BASE=/kitchen-remodeling/ npm run build
```

This writes the finished site to `dist/`. The `DEPLOY_BASE` part matters — it tells the
build that the page will live in a `/kitchen-remodeling/` folder rather than at the
domain root, so images, styles, and scripts all point to the right place.

Before uploading, delete these two files from `dist/` — they only apply to the
GitHub Pages preview and do nothing (or cause confusion) here:

```bash
rm -f dist/404.html dist/robots.txt
```

## Upload to Hostinger

1. Log in to Hostinger → **hPanel** → **File Manager**
2. Open the **`public_html`** folder (this is your website's root — the existing site
   lives here; leave everything in it alone)
3. Create a **new folder** inside `public_html` named exactly:
   ```
   kitchen-remodeling
   ```
   Lowercase, with the hyphen — the folder name becomes the URL.
4. Open that new folder and upload **the contents of `dist/`** into it — the
   `index.html`, the `favicon.svg`, and the whole `assets` folder.

   Upload what's *inside* `dist`, not the `dist` folder itself. When you're done the
   structure should be:
   ```
   public_html/
   ├── (your existing site — untouched)
   └── kitchen-remodeling/
       ├── index.html
       ├── favicon.svg
       └── assets/
   ```

5. Visit `https://sunshinecustom.homes/kitchen-remodeling` — it should load the page.
   (The server will add a trailing slash automatically; that's normal.)

## If you get a 404 after uploading

- Confirm the folder is directly inside `public_html`, not nested inside another folder
- Confirm the folder name is exactly `kitchen-remodeling` (lowercase, hyphenated)
- Confirm `index.html` sits directly inside that folder, not inside a `dist` subfolder

## Updating the page later

Rebuild with the same command and re-upload the contents of `dist/`, replacing the
files in `public_html/kitchen-remodeling/`.
