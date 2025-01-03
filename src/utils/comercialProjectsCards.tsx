import reformaJundiai from "../assets/ComercialProjects/video1.mp4";

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
    title: "Reforma cidade Jundiai",
    location: "Jundiai, SP",
    year: "2024",
    description:
      "Realizamos esse projeto de reforma na cidade de jundiai e em breve postaremos mais imagens desse projeto lindo!.",
    vertical: true,
    video: reformaJundiai,
  },
];
