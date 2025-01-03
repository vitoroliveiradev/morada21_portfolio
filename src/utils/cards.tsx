import casa088 from "../assets/ArchitecturalProjects/CASA 028/M21_CASA088.mp4";

import casa02101 from "../assets/ArchitecturalProjects/CASA 021/01.jpg";
import casa02102 from "../assets/ArchitecturalProjects/CASA 021/02.jpg";
import casa02103 from "../assets/ArchitecturalProjects/CASA 021/03.jpg";
import casa02104 from "../assets/ArchitecturalProjects/CASA 021/04.jpg";
import casa02105 from "../assets/ArchitecturalProjects/CASA 021/05.jpg";
import casa02106 from "../assets/ArchitecturalProjects/CASA 021/06.jpg";
import casa02107 from "../assets/ArchitecturalProjects/CASA 021/07.jpg";
import casa02108 from "../assets/ArchitecturalProjects/CASA 021/08.jpg";
import casa02109 from "../assets/ArchitecturalProjects/CASA 021/09.jpg";

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
      casa02101,
      casa02102,
      casa02103,
      casa02104,
      casa02105,
      casa02106,
      casa02107,
      casa02108,
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
];
