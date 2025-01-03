import image01 from "../assets/interiorDesigns/01.png";
import image02 from "../assets/interiorDesigns/02.png";
import image03 from "../assets/interiorDesigns/03.png";
import image04 from "../assets/interiorDesigns/04.png";

type InteriorDesignCardsProps = {
  id: number;
  image?: string[];
  title: string;
  location: string;
  vertical: boolean;
  video?: string;
  area?: string;
  year?: string;
  description?: string;
};

export const InteriorDesignCards: InteriorDesignCardsProps[] = [
  {
    id: 1,
    image: [image01, image02, image03, image04],
    title: "Escritório Casa 021",
    location: "Indaiatuba, SP",
    year: "2024",
    area: "15 m²",
    description:
      "Local amplo com cores claras e diferentes texturas de materiais. O projeto foi pensado para ser um ambiente de trabalho agradável e confortável.",
    vertical: true,
  },
];
