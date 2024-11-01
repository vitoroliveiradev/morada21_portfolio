import { useParams } from "react-router-dom";
import { cards } from "../../utils/cards";
import { CardTitle } from "../../components/ui/card";

export const ProjectPage = () => {
  const { id } = useParams();
  const card = cards.filter((item) => item.id === Number(id))[0];
  console.log(card);

  return (
    <div className="px-[120px]">
      <div>
        <img src={card.image} alt="" className="rounded-md" />
      </div>
      <div className="flex flex-col gap-4 my-16">
        <CardTitle className="text-5xl">{card.title}</CardTitle>
        <p className="text-xl text-primaryOrange">{card.location}</p>
      </div>
      <div className="flex gap-8">
        <div className="flex flex-col gap-8">
          <img src={card.image} alt="" className="rounded-md" />
          <img src={card.image} alt="" />
          <img src={card.image} alt="" />
          <img src={card.image} alt="" />
          <img src={card.image} alt="" />
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
            2022
          </p>
          <p>
            <strong>Área: </strong>
            7.000m²
          </p>
          <p>
            <strong>Equipe: </strong> Ana Silveira, Thaís Galvão, Talita Brito
          </p>
          <div>
            <h3 className="font-bold mb-2">Descrição</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque
              dolore officia deleniti ipsum numquam sed similique aut error fuga
              natus eius culpa saepe minus ab earum quidem esse, laborum alias.
              <br />
              <br />
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatibus vel necessitatibus explicabo eius accusamus facere
              veniam inventore, voluptatum porro similique recusandae impedit?
              <br />
              <br />
              Ad quidem adipisci at fuga ipsum veritatis est! Lorem ipsum dolor
              sit amet consectetur adipisicing elit. Beatae consectetur eos
              repudiandae, ex sit nisi ut magni nam, iste quasi corrupti
              voluptatibus sunt eius perspiciatis eveniet corporis dolorem et
              pariatur.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
