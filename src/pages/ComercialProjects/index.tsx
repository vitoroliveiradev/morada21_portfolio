import { useNavigate } from "react-router-dom";
import { Container } from "../../components/Container";
import { cards } from "../../utils/cards";

export const ComercialProjects = () => {
  const navigate = useNavigate();

  return (
    <Container>
      <h1 className="text-[30px] my-4">Projetos Comerciais</h1>
      <hr />
      <section className="mt-12">
        <div className="flex items-center flex-wrap">
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
                      ? "h-[600px] w-[350px]"
                      : "w-[350px] h-[250px]"
                  }  object-cover rounded-sm cursor-pointer hover:shadow-lg hover:scale-105 transition-all duration-300 ease-in-out`}
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
  );
};
