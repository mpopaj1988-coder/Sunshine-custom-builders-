import k1_1600 from "./kitchen-01-1600.jpg";
import k1_1600w from "./kitchen-01-1600.webp";
import k1_800 from "./kitchen-01-800.jpg";
import k1_800w from "./kitchen-01-800.webp";
import k2_1600 from "./kitchen-02-1600.jpg";
import k2_1600w from "./kitchen-02-1600.webp";
import k2_800 from "./kitchen-02-800.jpg";
import k2_800w from "./kitchen-02-800.webp";

export interface KitchenImage {
  id: string;
  alt: string;
  jpg1600: string;
  webp1600: string;
  jpg800: string;
  webp800: string;
}

export const kitchenImages: KitchenImage[] = [
  {
    id: "kitchen-01",
    alt: "Modern Tampa Bay kitchen remodel with white waterfall quartz island, fluted wood cabinetry, black pendant lighting, and wide-plank wood flooring",
    jpg1600: k1_1600,
    webp1600: k1_1600w,
    jpg800: k1_800,
    webp800: k1_800w,
  },
  {
    id: "kitchen-02",
    alt: "Custom kitchen renovation featuring a wood-paneled island, quartz countertops, tile backsplash, and an open-concept layout with natural light",
    jpg1600: k2_1600,
    webp1600: k2_1600w,
    jpg800: k2_800,
    webp800: k2_800w,
  },
];
