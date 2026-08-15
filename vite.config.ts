import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "node:path";

// Where the built site will be served from:
//   DEPLOY_BASE=/kitchen-remodeling/  → drop-in subfolder on sunshinecustom.homes
//   GITHUB_PAGES=true                 → GitHub Pages project site (/<repo-name>/)
//   neither                           → domain root
const base =
  process.env.DEPLOY_BASE || (process.env.GITHUB_PAGES ? "/Sunshine-custom-builders-/" : "/");

export default defineConfig({
  base,
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
