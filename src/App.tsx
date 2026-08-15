import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import KitchenRemodeling from "./pages/KitchenRemodeling";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/kitchen-remodeling" element={<KitchenRemodeling />} />
    </Routes>
  );
}
