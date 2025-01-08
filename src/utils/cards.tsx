import casa088 from "../assets/ArchitecturalProjects/CASA 028/M21_CASA088.mp4";

import bareli01 from "../assets/interiorDesigns/bareli/01.jpg";
import bareli02 from "../assets/interiorDesigns/bareli/02.jpg";
import bareli03 from "../assets/interiorDesigns/bareli/03.jpg";
import bareli04 from "../assets/interiorDesigns/bareli/04.jpg";
import bareli05 from "../assets/interiorDesigns/bareli/05.jpg";
import bareli06 from "../assets/interiorDesigns/bareli/06.jpg";
import bareli07 from "../assets/interiorDesigns/bareli/07.jpg";
import bareli08 from "../assets/interiorDesigns/bareli/08.jpg";
import bareli09 from "../assets/interiorDesigns/bareli/09.jpg";
import bareli10 from "../assets/interiorDesigns/bareli/10.jpg";
import bareli11 from "../assets/interiorDesigns/bareli/11.jpg";
import bareli12 from "../assets/interiorDesigns/bareli/12.jpg";

import casa02101 from "../assets/ArchitecturalProjects/CASA 021/01.jpg";
import casa02102 from "../assets/ArchitecturalProjects/CASA 021/02.jpg";
import casa02103 from "../assets/ArchitecturalProjects/CASA 021/03.jpg";
import casa02104 from "../assets/ArchitecturalProjects/CASA 021/04.jpg";
import casa02105 from "../assets/ArchitecturalProjects/CASA 021/05.jpg";
import casa02106 from "../assets/ArchitecturalProjects/CASA 021/06.jpg";
import casa02107 from "../assets/ArchitecturalProjects/CASA 021/07.jpg";
import casa02108 from "../assets/ArchitecturalProjects/CASA 021/08.jpg";
import casa02109 from "../assets/ArchitecturalProjects/CASA 021/09.jpg";

import guimaraes01 from "../assets/interiorDesigns/guimaraes/01.jpg";
import guimaraes02 from "../assets/interiorDesigns/guimaraes/02.jpg";
import guimaraes03 from "../assets/interiorDesigns/guimaraes/03.jpg";
import guimaraes04 from "../assets/interiorDesigns/guimaraes/04.jpg";
import guimaraes05 from "../assets/interiorDesigns/guimaraes/05.jpg";
import guimaraes06 from "../assets/interiorDesigns/guimaraes/06.jpg";
import guimaraes07 from "../assets/interiorDesigns/guimaraes/07.jpg";
import guimaraes08 from "../assets/interiorDesigns/guimaraes/08.jpg";
import guimaraes09 from "../assets/interiorDesigns/guimaraes/09.jpg";
import guimaraes10 from "../assets/interiorDesigns/guimaraes/10.jpg";

import nascimento01 from "../assets/interiorDesigns/nascimento/01.jpg";
import nascimento02 from "../assets/interiorDesigns/nascimento/02.jpg";
import nascimento03 from "../assets/interiorDesigns/nascimento/03.jpg";
import nascimento04 from "../assets/interiorDesigns/nascimento/04.jpg";
import nascimento05 from "../assets/interiorDesigns/nascimento/05.jpg";
import nascimento06 from "../assets/interiorDesigns/nascimento/06.jpg";
import nascimento07 from "../assets/interiorDesigns/nascimento/07.jpg";
import nascimento08 from "../assets/interiorDesigns/nascimento/08.jpg";
import nascimento09 from "../assets/interiorDesigns/nascimento/09.jpg";
import nascimento10 from "../assets/interiorDesigns/nascimento/10.jpg";
import nascimento11 from "../assets/interiorDesigns/nascimento/11.jpg";

type CardsProps = {
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

export const cards: CardsProps[] = [
  {
    id: 1,
    image: [
      casa02108 ,
      casa02101,
      casa02102,
      casa02103,
      casa02104,
      casa02105,
      casa02106,
      casa02107,
      casa02109,
    ],
    title: "Casa 021",
    location: "Indaiatuba, SP",
    year: "2024",
    area: "500 m²",
    description:
      "Residência unifamiliar localizada em Indaiatuba, interior de São Paulo, projetada em um terreno em aclive que resultou em uma fachada linear, rica em elementos modernistas, e materiais naturais nobres, contemplada com aberturas generosas para a área externa, para recebimento do melhor da ventilação e iluminação naturais.",
    vertical: false,
  },
  {
    id: 2,
    video: casa088,
    title: "Casa 088",
    location: "Indaiatuba, SP",
    year: "2024",
    area: "500 m²",
    description:
      "Residência unifamiliar localizada em Indaiatuba, interior de São Paulo, projetada em um terreno em aclive que resultou em uma fachada linear, rica em elementos modernistas, e materiais naturais nobres, contemplada com aberturas generosas para a área externa, para recebimento do melhor da ventilação e iluminação naturais.",
    vertical: true,
  },
  {
    id: 3,
    image: [
      bareli01,
      bareli02,
      bareli03,
      bareli04,
      bareli05,
      bareli06,
      bareli07,
      bareli08,
      bareli09,
      bareli10,
      bareli11,
      bareli12,
    ],
    title: "Casa Bareli",
    location: "Indaiatuba, SP",
    year: "2024",
    area: "15 m²",
    description:
      "Local amplo com cores claras e diferentes texturas de materiais. O projeto foi pensado para ser um ambiente de trabalho agradável e confortável.",
    vertical: false,
  },
  {
    id: 4,
    image: [
      casa02108,
      casa02101,
      casa02102,
      casa02103,
      casa02104,
      casa02107,
      casa02109,
    ],
    title: "Casa 021",
    location: "Indaiatuba, SP",
    year: "2024",
    area: "15 m²",
    description:
      "Local amplo com cores claras e diferentes texturas de materiais. O projeto foi pensado para ser um ambiente de trabalho agradável e confortável.",
    vertical: true,
  },
  {
    id: 5,
    image: [
      guimaraes01,
      guimaraes02,
      guimaraes03,
      guimaraes04,
      guimaraes05,
      guimaraes06,
      guimaraes07,
      guimaraes08,
      guimaraes09,
      guimaraes10,
    ],
    title: "Casa Guimarães",
    location: "Indaiatuba, SP",
    year: "2024",
    area: "15 m²",
    description:
      "Local amplo com cores claras e diferentes texturas de materiais. O projeto foi pensado para ser um ambiente de trabalho agradável e confortável.",
    vertical: false,
  },
  {
    id: 6,
    image: [
      nascimento01,
      nascimento02,
      nascimento03,
      nascimento04,
      nascimento05,
      nascimento06,
      nascimento07,
      nascimento08,
      nascimento09,
      nascimento10,
      nascimento11,
    ],
    title: "Casa Nascimento",
    location: "Indaiatuba, SP",
    year: "2024",
    area: "15 m²",
    description:
      "Local amplo com cores claras e diferentes texturas de materiais. O projeto foi pensado para ser um ambiente de trabalho agradável e confortável.",
    vertical: true,
  },
];
