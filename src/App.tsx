import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import KitchenRemodeling from "./pages/KitchenRemodeling";

// When the app is built to be served from a /kitchen-remodeling/ subfolder
// (the drop-in build for the existing sunshinecustom.homes host), the router's
// basename already consumes that segment — so the landing page is what lives
// at the internal root. See DEPLOY-TO-HOSTINGER.md.
const landingIsRoot = import.meta.env.BASE_URL.replace(/\/$/, "").endsWith("/kitchen-remodeling");

export default function App() {
  return (
    <Routes>
      <Route path="/" element={landingIsRoot ? <KitchenRemodeling /> : <Home />} />
      <Route path="/kitchen-remodeling" element={<KitchenRemodeling />} />
    </Routes>
  );
}
