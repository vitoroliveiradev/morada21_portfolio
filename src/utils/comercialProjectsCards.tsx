import aquidaban01 from "../assets/ComercialProjects/aquidaba/01.jpg";
import aquidaban02 from "../assets/ComercialProjects/aquidaba/02.jpg";
import aquidaban03 from "../assets/ComercialProjects/aquidaba/03.jpg";
import aquidaban04 from "../assets/ComercialProjects/aquidaba/04.jpg";
import aquidaban05 from "../assets/ComercialProjects/aquidaba/05.jpg";
import aquidaban06 from "../assets/ComercialProjects/aquidaba/06.jpg";
import aquidaban07 from "../assets/ComercialProjects/aquidaba/07.jpg";
import aquidaban08 from "../assets/ComercialProjects/aquidaba/08.jpg";
import aquidaban09 from "../assets/ComercialProjects/aquidaba/09.jpg";
import aquidaban10 from "../assets/ComercialProjects/aquidaba/10.jpg";

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

type ComercialProjectsCardsProps = {
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

export const ComercialProjectsCards: ComercialProjectsCardsProps[] = [
  {
    id: 1,
    title: "Aquidaban Mall",
    location: "Campinas, SP",
    landArea: "2.500 m²",
    image: [
      aquidaban01,
      aquidaban02,
      aquidaban03,
      aquidaban04,
      aquidaban05,
      aquidaban06,
      aquidaban07,
      aquidaban08,
      aquidaban09,
      aquidaban10,
    ],
    year: "2024",
    description:
      "Este projeto contribui para a revitalização de uma área urbana obsoleta. A construção deste Mall irá garantir maior movimentação e presença de pessoas na área, promovendo imediatamente segurança e mudança de atmosfera da área. Com a oferta de comércios e serviços, este espaço trará facilidade para os que frequentam esta área central de Campinas, além de conter espaços para o pedestre, como mobiliário urbano e espaços de permanência de qualidade.",
    vertical: false,
  },
  {
    id: 2,
    title: "Vila Nambi",
    location: "Jundiai, SP",
    image: [
      nambi01,
      nambi02,
      nambi03,
      nambi04,
      nambi05,
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
];
