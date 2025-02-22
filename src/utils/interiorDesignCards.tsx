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

import casa02101 from "../assets/interiorDesigns/casa021/01.png";
import casa02102 from "../assets/interiorDesigns/casa021/02.png";
import casa02103 from "../assets/interiorDesigns/casa021/03.png";
import casa02104 from "../assets/interiorDesigns/casa021/04.png";
import casa02107 from "../assets/interiorDesigns/casa021/07.png";
import casa02108 from "../assets/interiorDesigns/casa021/08.png";
import casa02109 from "../assets/interiorDesigns/casa021/09.png";
import casa02110 from "../assets/interiorDesigns/casa021/10.png";
import casa02111 from "../assets/interiorDesigns/casa021/11.png";

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

type InteriorDesignCardsProps = {
  id: number;
  image?: string[];
  title: string;
  location: string;
  vertical: boolean;
  video?: string;
  area?: string;
  landArea?: string;
  year?: string;
  description?: string;
};

export const InteriorDesignCards: InteriorDesignCardsProps[] = [
  {
    id: 1,
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
    location: "Campinas, SP",
    year: "2024",
    landArea: "54,00 m²",
    description:
      "O desafio deste projeto foi conciliar todas as necessidades da cliente, de forma a integrar os ambientes do térreo de forma harmônica (salas de estar, jantar e cozinha), e que proporcionasse interação aos usuários quando estivessem todos reunidos.",
    vertical: false,
  },
  {
    id: 2,
    image: [
      casa02101,
      casa02102,
      casa02103,
      casa02104,
      casa02107,
      casa02108,
      casa02109,
      casa02110,
      casa02111,
    ],
    title: "Casa 021",
    location: "Indaiatuba, SP",
    year: "2024",
    area: "990 m²",
    landArea: "421,74 m²",
    description:
      " Design de interiores sofisticado, que conversa com os elementos externos da residência, trazendo a mesma linguagem do externo para o interno, preservando a elegância e a sofisticação como um todo.",
    vertical: false,
  },
  {
    id: 3,
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
    title: "Apartamento Guimarães",
    location: "Indaiatuba, SP",
    year: "2024",
    landArea: "43,16 m²",
    description:
      "O foco da criação deste projeto foi a praticidade que o cliente necessitava em seu dia-a-dia; superfícies de fácil limpeza, espaços de armazenamento e possibilidade de automação dos equipamentos comoaspirador robô, alexa e projetores foram as exigências que nos preocupamos em cumprir para atender ao morador deste apartamento.",
    vertical: false,
  },
  {
    id: 4,
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
      "Este projeto de reforma consistiu em ampliar os espaços de armazenamento para melhor atender os moradores desta residência; o espaço abaixo da escada foi o maior protagonista desta ampliação, pois, anteriormente, encontrava-se vazio, e agora, oferecerá amplo espaço de armazenamento para despensa, louças (cristaleira), e também um espaço de bar, para as bebidas, e adega climatizada.",
    vertical: false,
  },
];
