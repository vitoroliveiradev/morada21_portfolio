import { useLocation, useParams } from "react-router-dom";
import { InteriorDesignCards } from "../../utils/interiorDesignCards";
import { CardTitle } from "../../components/ui/card";
import { useEffect } from "react";

export const InteriorDesignPage = () => {
  const { pathname } = useLocation();
  const { id } = useParams();
  const card = InteriorDesignCards.filter((item) => item.id === Number(id))[0];

  console.log("card", card);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="px-[120px] max-md:px-10">
      <div className="flex flex-col gap-4 my-16 max-md:my-8">
        <CardTitle className="text-5xl">{card.title}</CardTitle>
        <p className="text-xl text-primaryOrange">{card.location}</p>
      </div>
      <div className="flex gap-8 max-md:flex-col-reverse">
        <div className="flex flex-col gap-8">
          {card.video ? (
            <video
              src={card.video}
              autoPlay
              loop
              muted
              className={`${
                card.vertical
                  ? "h-[400px] w-[550px] max-md:w-[600px]"
                  : "w-[350px] h-[250px] max-md:w-[600px]"
              }  object-cover rounded-sm cursor-pointer hover:shadow-lg hover:scale-105 transition-all duration-300 ease-in-out`}
            />
          ) : (
            card.image &&
            card.image.map((img) => (
              <img
                src={img}
                alt=""
                className="rounded-md h-[400px] w-[600px] object-cover "
              />
            ))
          )}
        </div>
        <div className="flex flex-col gap-8">
          <div>
            <h2 className="font-bold text-xl text-primaryGreen pb-4">
              Sobre o projeto
            </h2>
            <hr />
          </div>
          <p>
            <strong>Ano: </strong>
            {card.year}
          </p>
          <p>
            <strong>Área: </strong>
            {card.area}
          </p>
          <p>
            <strong>Equipe: </strong> Ana Silveira, Thaís Galvão, Talita Brito
          </p>
          <div>
            <h3 className="font-bold mb-2">Descrição</h3>
            <p>{card.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};