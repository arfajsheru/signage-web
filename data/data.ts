// data/homeServices.ts

import { HomeServiceItem } from "@/types/type";
import image1 from "../assets/heroImage1.png"
import image2 from "../assets/heroImage2.png"
import image3 from "../assets/heroImage3.png"
import image4 from "../assets/heroImage1.png"
import image5 from "../assets/heroImage2.png"
import image6 from "../assets/heroImage3.png"


export const homeServices: HomeServiceItem[] = [
  {
    id: 1,
    title: "LED Sign Boards",
    description:
      "High-visibility sign boards for shops and commercial spaces.",
    slug: "led-sign-boards",
    image: image1,
  },
  {
    id: 2,
    title: "ACP / Facade Signage",
    description:
      "Modern exterior branding for buildings and showrooms.",
    slug: "acp-facade-signage",
    image: image2,
  },
  {
    id: 3,
    title: "Acrylic & SS Letters",
    description:
      "Premium 3D letters for a professional brand look.",
    slug: "acrylic-ss-letters",
    image: image3,
  },
  {
    id: 4,
    title: "Neon & Decorative Signage",
    description:
      "Eye-catching signage for cafés and creative spaces.",
    slug: "neon-decorative-signage",
    image: image4,
  },
  {
    id: 5,
    title: "Directional / Safety Signage",
    description:
      "Clear wayfinding and compliance signage.",
    slug: "directional-safety-signage",
    image: image5,
  },
  {
    id: 6,
    title: "Custom Branding Solutions",
    description:
      "Tailor-made signage solutions as per business needs.",
    slug: "custom-branding-solutions",
    image: image6,
  },
];
