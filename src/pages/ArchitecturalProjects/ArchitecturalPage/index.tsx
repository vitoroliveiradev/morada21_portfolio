import { useParams } from "react-router-dom";
import { Architecturalcards } from "../../../utils/architecturalCards";
import { CardTitle } from "../../../components/ui/card";

export const ArchitecturalPage = () => {
  const { id } = useParams();
  const card = Architecturalcards.filter((item) => item.id === Number(id))[0];

  return (
    <div className="px-[120px] max-md:px-10">
      <div className="flex flex-col gap-2 my-16 max-md:my-8">
        <CardTitle className="text-5xl">{card.title}</CardTitle>
        <p className="text-xl text-primaryOrange">{card.location}</p>
      </div>
      <div className="flex gap-8 max-md:flex-col-reverse">
        <div className="flex flex-col gap-8">
          {card.video ? (
            <video src={card.video} autoPlay loop muted />
          ) : (
            card.image?.map((img) => (
              <img src={img} alt="" className="rounded-md" />
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
            500m²
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
