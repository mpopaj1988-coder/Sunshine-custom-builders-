import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import KitchenRemodeling from "./pages/KitchenRemodeling";
import BathroomRemodeling from "./pages/BathroomRemodeling";

// When the app is built to be served from a /kitchen-remodeling/ or
// /bathroom-remodeling/ subfolder (the drop-in build for the existing
// sunshinecustom.homes host), the router's basename already consumes that
// segment — so the matching landing page is what lives at the internal root.
// See DEPLOY-TO-HOSTINGER.md.
const base = import.meta.env.BASE_URL.replace(/\/$/, "");
const rootLandingPage = base.endsWith("/kitchen-remodeling")
  ? "kitchen"
  : base.endsWith("/bathroom-remodeling")
    ? "bathroom"
    : null;

export default function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          rootLandingPage === "kitchen" ? (
            <KitchenRemodeling />
          ) : rootLandingPage === "bathroom" ? (
            <BathroomRemodeling />
          ) : (
            <Home />
          )
        }
      />
      <Route path="/kitchen-remodeling" element={<KitchenRemodeling />} />
      <Route path="/bathroom-remodeling" element={<BathroomRemodeling />} />
    </Routes>
  );
}
