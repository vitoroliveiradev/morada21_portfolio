import { Container } from "../../components/Container";
import { InteriorDesignCards } from "../../utils/interiorDesignCards";
import { useNavigate } from "react-router-dom";

export const InteriorDesigns = () => {
  const navigate = useNavigate();
  return (
    <Container>
      <h1 className="text-[30px] my-4 max-md:text-center">
        Projetos Design de Interiores
      </h1>
      <hr />
      <section className="mt-12 max-md:mt-3">
        <div className="flex items-center flex-wrap max-md:justify-center">
          {InteriorDesignCards.map((card, index) => (
            <div
              key={index}
              className="mx-4 mt-4"
              onClick={() => navigate(`/projetos/designInteriores/${card.id}`)}
            >
              {card.video ? (
                <video
                  src={card.video}
                  autoPlay
                  loop
                  muted
                  className={`${
                    card.vertical
                      ? "h-[600px] w-[350px] max-md:w-[400px] max-md:h-[400px]"
                      : "w-[350px] h-[250px] max-md:w-[400px] max-md:h-[400px]"
                  }  object-cover rounded-sm cursor-pointer hover:shadow-lg hover:scale-105 transition-all duration-300 ease-in-out`}
                />
              ) : (
                <img
                  src={card.image && card.image[0]}
                  alt={card.title}
                  className={`${
                    card.vertical
                      ? "h-[300px] w-[350px] max-md:w-[400px] max-md:h-[400px]"
                      : "w-[350px] h-[400px] max-md:w-[400px] max-md:h-[400px]"
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
  );
};
