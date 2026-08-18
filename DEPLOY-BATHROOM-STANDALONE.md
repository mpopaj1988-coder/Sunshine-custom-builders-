# Deploying the Bathroom landing page to sunshinecustom.homes/bathroom-remodeling

This uses the **isolated standalone build** — a separate export that contains only the
Bathroom page (no Kitchen or Home code, no react-router). It's meant for exactly this:
dropping the page into its own folder on the existing site, or handing it to a
third-party host, without touching anything else already live.

## Build the files

```bash
npm run build:standalone-bathroom
```

This writes the finished site to `dist-standalone/`. The base path (`/bathroom-remodeling/`)
is already baked into `vite.standalone.config.ts`, so images, styles, and scripts all
point to the right place automatically — no extra flags needed.

## Prepare the files for upload

Vite names the built HTML file after its source (`index.bathroom-standalone.html`), but
the web server needs it named `index.html` to serve automatically at the folder URL.
Also drop `404.html` and `robots.txt` — those are copied in from the shared `public/`
folder but only apply to the GitHub Pages preview; the real site's versions already
live at the domain root.

```bash
cd dist-standalone
mv index.bathroom-standalone.html index.html
rm -f 404.html robots.txt
cd ..
```

After this, `dist-standalone/` should contain exactly:

```
dist-standalone/
├── index.html
├── favicon.svg
└── assets/
```

## Upload to Hostinger

1. Log in to Hostinger → **hPanel** → **File Manager**
2. Open the **`public_html`** folder (this is your website's root — the existing site
   lives here; leave everything in it alone)
3. Create a **new folder** inside `public_html` named exactly:
   ```
   bathroom-remodeling
   ```
   Lowercase, with the hyphen — the folder name becomes the URL.
4. Open that new folder and upload **the contents of `dist-standalone/`** (after the
   rename/cleanup above) into it — `index.html`, `favicon.svg`, and the whole `assets`
   folder.

   Upload what's *inside* `dist-standalone`, not the folder itself. When you're done:
   ```
   public_html/
   ├── (your existing site — untouched)
   └── bathroom-remodeling/
       ├── index.html
       ├── favicon.svg
       └── assets/
   ```

5. Visit `https://sunshinecustom.homes/bathroom-remodeling` — it should load the page.

## If you get a 404 after uploading

- Confirm the folder is directly inside `public_html`, not nested inside another folder
- Confirm the folder name is exactly `bathroom-remodeling` (lowercase, hyphenated)
- Confirm `index.html` (renamed from `index.bathroom-standalone.html`) sits directly
  inside that folder, not inside a `dist-standalone` subfolder

## Updating the page later

Rebuild with the same command, redo the rename/cleanup step, and re-upload the contents
of `dist-standalone/`, replacing the files in `public_html/bathroom-remodeling/`.

## Handing this off to a third party instead

If a web company is taking over hosting for this page, `dist-standalone/` (after the
rename/cleanup step) is the complete, self-contained deliverable — just the built
HTML/CSS/JS/images, no source code or build tooling required. If they'll host it at a
different path than `/bathroom-remodeling/` (e.g. their own domain root), the base path
needs to change first: edit `base: "/bathroom-remodeling/"` in `vite.standalone.config.ts`
to match (e.g. `"/"` for a domain root), then rebuild.
