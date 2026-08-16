import b1_1600 from "./bathroom-01-1600.jpg";
import b1_1600w from "./bathroom-01-1600.webp";
import b1_800 from "./bathroom-01-800.jpg";
import b1_800w from "./bathroom-01-800.webp";
import b2_1600 from "./bathroom-02-1600.jpg";
import b2_1600w from "./bathroom-02-1600.webp";
import b2_800 from "./bathroom-02-800.jpg";
import b2_800w from "./bathroom-02-800.webp";
import b3_1600 from "./bathroom-03-1600.jpg";
import b3_1600w from "./bathroom-03-1600.webp";
import b3_800 from "./bathroom-03-800.jpg";
import b3_800w from "./bathroom-03-800.webp";
import b4_1600 from "./bathroom-04-1600.jpg";
import b4_1600w from "./bathroom-04-1600.webp";
import b4_800 from "./bathroom-04-800.jpg";
import b4_800w from "./bathroom-04-800.webp";
import type { GalleryImage } from "@/components/ui/ResponsiveImage";

export const bathroomImages: GalleryImage[] = [
  {
    id: "bathroom-01",
    alt: "Custom bathroom remodel with round mirror, warm wood accent wall, brass sconces, and a waterfall marble vanity",
    jpg1600: b1_1600,
    webp1600: b1_1600w,
    jpg800: b1_800,
    webp800: b1_800w,
  },
  {
    id: "bathroom-02",
    alt: "Curbless walk-in shower with marble accents, dual shower heads, and a built-in marble bench",
    jpg1600: b2_1600,
    webp1600: b2_1600w,
    jpg800: b2_800,
    webp800: b2_800w,
  },
  {
    id: "bathroom-03",
    alt: "Freestanding soaking tub against a ribbed wood accent wall with a black floor-mount faucet",
    jpg1600: b3_1600,
    webp1600: b3_1600w,
    jpg800: b3_800,
    webp800: b3_800w,
  },
  {
    id: "bathroom-04",
    alt: "Double vanity bathroom remodel with warm wood cabinetry, marble countertop, and brass-lit mirror wall",
    jpg1600: b4_1600,
    webp1600: b4_1600w,
    jpg800: b4_800,
    webp800: b4_800w,
  },
];
