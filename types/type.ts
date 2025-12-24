import { StaticImageData } from "next/image";


// types/services.ts
export type HomeServiceItem = {
  id: number;
  title: string;
  description: string;
  slug: string;
  image: StaticImageData;          // service image path / URL
  isOptional?: boolean;
};
