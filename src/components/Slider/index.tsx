import { Card } from "../ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";

import image1 from "../../assets/ArchitecturalProjects/RENDER POSTAGEM 4.jpg";
import image2 from "../../assets/ArchitecturalProjects/RENDER POSTAGEM 5.jpg";
import image3 from "../../assets/ArchitecturalProjects/render total.jpg";

const cardsSlides = [
  {
    image: image1,
  },
  {
    image: image2,
  },
  {
    image: image3,
  },
];

export const Slider = () => {
  return (
    <Carousel className="w-full border-none">
      <CarouselContent className="h-[80vh] border-none">
        {cardsSlides.map((card, index) => (
          <CarouselItem key={index}>
            <Card>
              <img
                src={card.image}
                alt="Imagem de um prédio"
                className="w-full h-full object-cover rounded-sm"
              />
            </Card>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
};