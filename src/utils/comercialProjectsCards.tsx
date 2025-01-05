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
  year?: string;
  description?: string;
};

export const ComercialProjectsCards: ComercialProjectsCardsProps[] = [
  {
    id: 1,
    title: "Aquidabã Mall",
    location: "Campinas, SP",
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
      "O Aquidabã Mall é um moderno complexo comercial localizado em Campinas, SP. O projeto conta com uma variedade de espaços comerciais, opções de alimentação e instalações de entretenimento, projetados para proporcionar uma experiência de compras completa. A arquitetura do shopping enfatiza espaços abertos e luz natural, criando uma atmosfera convidativa para os visitantes. Previsto para ser concluído em 2024, o Aquidabã Mall pretende se tornar um ponto central para a comunidade local, oferecendo uma combinação de conveniência e lazer.",
    vertical: true,
  },
  {
    id: 2,
    title: "Nambi",
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
    year: "2024",
    description:
      "O Nambi é um empreendimento residencial localizado em Jundiaí, SP. O projeto foi concebido para oferecer uma experiência de vida moderna e confortável, com uma variedade de opções de lazer e espaços verdes. O condomínio conta com apartamentos de diferentes tamanhos e configurações, atendendo às necessidades de diversos perfis de moradores. A arquitetura do Nambi é marcada por linhas limpas e materiais naturais, criando uma atmosfera acolhedora e contemporânea. Com previsão de entrega para 2024, o Nambi promete ser um refúgio urbano para seus futuros moradores.",
    vertical: true,
  },
];
