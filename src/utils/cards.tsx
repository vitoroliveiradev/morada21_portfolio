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
import bareli13 from "../assets/interiorDesigns/bareli/13.jpg";
import bareli14 from "../assets/interiorDesigns/bareli/14.jpg";
import bareli15 from "../assets/interiorDesigns/bareli/15.jpg";
import bareli16 from "../assets/interiorDesigns/bareli/16.jpg";
import bareli17 from "../assets/interiorDesigns/bareli/17.jpg";
import bareli18 from "../assets/interiorDesigns/bareli/18.jpg";
import bareli19 from "../assets/interiorDesigns/bareli/19.jpg";
import bareli20 from "../assets/interiorDesigns/bareli/20.jpg";
import bareli21 from "../assets/interiorDesigns/bareli/21.jpg";
import bareli22 from "../assets/interiorDesigns/bareli/22.jpg";

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
import guimaraes11 from "../assets/interiorDesigns/guimaraes/11.jpeg";

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

import nambi01 from "../assets/ComercialProjects/nambi/01.jpg";
import nambi02 from "../assets/ComercialProjects/nambi/02.jpg";
import nambi03 from "../assets/ComercialProjects/nambi/03.jpg";
import nambi04 from "../assets/ComercialProjects/nambi/04.jpg";
import nambi05 from "../assets/ComercialProjects/nambi/05.jpg";
import nambi06 from "../assets/ComercialProjects/nambi/06.jpg";
import nambi07 from "../assets/ComercialProjects/nambi/07.jpg";
import nambi08 from "../assets/ComercialProjects/nambi/08.jpg";
import nambi09 from "../assets/ComercialProjects/nambi/09.jpg";
import nambi10 from "../assets/ComercialProjects/nambi/10.jpg";

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
  landArea?: string;
};

export const cards: CardsProps[] = [
  {
    id: 1,
    image: [
      casa02108,
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
    vertical: false,
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
      bareli13,
      bareli14,
      bareli15,
      bareli16,
      bareli17,
      bareli18,
      bareli19,
      bareli20,
      bareli21,
      bareli22,
    ],
    title: "Casa Bareli",
    location: "Campinas, SP",
    year: "2024",
    area: "15 m²",
    description:
      "Local amplo com cores claras e diferentes texturas de materiais. O projeto foi pensado para ser um ambiente de trabalho agradável e confortável.",
    vertical: false,
  },
  {
    id: 4,
    title: "Vila Nambi",
    location: "Jundiai, SP",
    image: [
      nambi05,
      nambi01,
      nambi02,
      nambi03,
      nambi04,
      nambi06,
      nambi07,
      nambi08,
      nambi09,
      nambi10,
    ],
    landArea: "1.057,00 m²",
    year: "2024",
    description:
      "Empreendimento comercial, com estacionamento próprio, localizado na cidade de Jundiaí; o projeto oferece espaços como mini mercado, farmácia e pet shop, além de muitas outras lojas que podem ser alugadas para comércios e serviços para atender aos moradores e frequentadores da Vila Nambi.",
    vertical: false,
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
      guimaraes11,
    ],
    title: "Apartamento Guimarães",
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
    vertical: false,
  },
];
