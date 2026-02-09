import { Slider } from "../../components/Slider";

import { Container } from "../../components/Container";
import { useNavigate } from "react-router-dom";
import { cards } from "../../utils/cards";
import { WhatsAppButton } from "../../components/WhatsAppButton";

export const Home = () => {
  const navigate = useNavigate();

  return (
    <>
      <Slider />
      <Container>
        <section className="mt-12">
          <div className="flex items-center flex-wrap max-md:justify-center">
            {cards.map((card, index) => (
              <div
                key={index}
                className="mx-4 mt-4"
                onClick={() => navigate(`/projetos/${card.id}`)}
              >
                {card.video ? (
                  <video
                    src={card.video}
                    autoPlay
                    loop
                    muted
                    className={`${
                      card.vertical
                        ? "h-[600px] w-[350px] max-md:w-[600px]"
                        : "w-[350px] h-[400px] max-md:w-[600px]"
                    }  object-cover rounded-sm cursor-pointer hover:shadow-lg hover:scale-105 transition-all duration-300 ease-in-out`}
                  />
                ) : (
                  <img
                    src={card.image && card.image[0]}
                    alt={card.title}
                    className={`${
                      card.vertical
                        ? "h-[600px] w-[350px] max-md:w-[600px]"
                        : "w-[350px] h-[400px] max-md:w-[600px]"
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
          <WhatsAppButton
            phoneNumber="5519992044443"
            message="Olá! Vi o site de vocês e gostaria de mais informações sobre projetos."
          />
        </section>
      </Container>
    </>
  );
};
