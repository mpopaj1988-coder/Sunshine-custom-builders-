import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "node:path";

// GitHub Pages serves project sites from a /<repo-name>/ subpath. Once this
// is deployed to sunshinecustom.homes directly, set this back to "/".
const base = process.env.GITHUB_PAGES ? "/Sunshine-custom-builders-/" : "/";

export default defineConfig({
  base,
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
