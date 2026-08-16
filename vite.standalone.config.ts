import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "node:path";

// Produces a fully isolated single-page export for handing off to a
// third-party web company — e.g. the Bathroom page with zero trace of
// Kitchen (or any other page) in the output, since Rollup only bundles what
// this one entry point actually imports. Not used for our own deployments
// (those use the regular multi-page build in vite.config.ts).
//
// Usage: vite build --config vite.standalone.config.ts
// To add another page later (e.g. Kitchen), duplicate
// main-bathroom-standalone.tsx / index.bathroom-standalone.html for it and
// point rollupOptions.input at the new html file.

export default defineConfig({
  base: "/bathroom-remodeling/",
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    outDir: "dist-standalone",
    rollupOptions: {
      input: path.resolve(__dirname, "index.bathroom-standalone.html"),
    },
  },
});
