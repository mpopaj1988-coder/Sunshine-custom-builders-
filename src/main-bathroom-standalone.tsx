import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { HelmetProvider } from "react-helmet-async";
import BathroomRemodeling from "./pages/BathroomRemodeling";
import { initAnalytics } from "./lib/analytics";
import "./index.css";

// Standalone entry for the third-party website-company handoff package.
// Renders only the Bathroom Remodeling page, with no dependency on
// react-router or any other page in this app, so Vite's build only pulls
// in bathroom assets — nothing from Kitchen or Home leaks into the export.

initAnalytics();

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <HelmetProvider>
      <BathroomRemodeling />
    </HelmetProvider>
  </StrictMode>,
);
