import { Slider } from "../../components/Slider";
import video from "../../assets/videos/video1.mp4";
import image1 from "../../assets/ArchitecturalProjects/RENDER POSTAGEM 4.jpg";
import image2 from "../../assets/ArchitecturalProjects/RENDER POSTAGEM 5.jpg";
import image3 from "../../assets/ArchitecturalProjects/render total.jpg";
import { Container } from "../../components/Container";

const cards = [
  {
    image: image1,
    title: "Casa Monte Mor",
    location: "Recife, PE",
    vertical: true,
    video,
  },
  {
    image: image2,
    title: "Casa Campinas",
    location: "Recife, PE",
    vertical: false,
  },
  {
    image: image1,
    title: "Casa Vinhedo",
    location: "Recife, PE",
    vertical: false,
  },
  {
    image: image3,
    title: "Casa Campos do Jordão",
    location: "Recife, PE",
    vertical: false,
  },
  {
    image: image2,
    title: "Teatro Boas Artes",
    location: "Recife, PE",
    vertical: false,
  },
  {
    image: image1,
    title: "Teatro São Paulo",
    location: "Recife, PE",
    vertical: true,
    video,
  },
  {
    image: image2,
    title: "Concerto Bela Guanabara",
    location: "Recife, PE",
    vertical: true,
  },
  {
    image: image3,
    title: "Monumental de São Paulo",
    location: "Recife, PE",
    vertical: false,
  },
  {
    image: image1,
    title: "Aparecida de Goiânia",
    location: "Recife, PE",
    vertical: false,
  },
  {
    image: image2,
    title: "Pedreira de São Gonçalo",
    location: "Recife, PE",
    vertical: true,
    video,
  },
  {
    image: image3,
    title: "Monte de Vilas Boas",
    location: "Recife, PE",
    vertical: false,
  },
  {
    image: image1,
    title: "Card 1",
    location: "Recife, PE",
    vertical: false,
  },
  {
    image: image2,
    title: "Concerto de Piracicaba",
    location: "Recife, PE",
    vertical: false,
  },
  {
    image: image3,
    title: "Cordilheiras de Manreza",
    location: "Recife, PE",
    vertical: false,
  },
  {
    image: image1,
    title: "Casa de Maringá",
    location: "Recife, PE",
    vertical: true,
  },
];

export const Home = () => {
  return (
    <>
      <Slider />
      <Container>
        <section className="mt-12">
          <div className="flex items-center flex-wrap">
            {cards.map((card, index) => (
              <div key={index} className="mx-4 mt-4">
                {card.video ? (
                  <video
                    src={card.video}
                    autoPlay
                    loop
                    muted
                    className={`${
                      card.vertical
                        ? "h-[600px] w-[350px]"
                        : "w-[350px] h-[250px]"
                    }  object-cover rounded-sm`}
                  />
                ) : (
                  <img
                    src={card.image}
                    alt={card.title}
                    className={`${
                      card.vertical
                        ? "h-[600px] w-[350px]"
                        : "w-[350px] h-[400px]"
                    }  object-cover cursor-pointer rounded-sm hover:shadow-lg hover:scale-105 transition-all duration-300 ease-in-out`}
                  />
                )}
                <div className="mt-2">
                  <h3 className="font-bold text-lg">{card.title}</h3>
                  <p className="text-sm text-primaryOrange">{card.location}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </Container>
    </>
  );
};
