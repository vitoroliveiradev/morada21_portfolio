import Image1 from "../../assets/ArchitecturalProjects/RENDER POSTAGEM 4.jpg";
import Image2 from "../../assets/ArchitecturalProjects/RENDER POSTAGEM 5.jpg";
import Image3 from "../../assets/ArchitecturalProjects/render total.jpg";

const cards = [
  {
    image: Image1,
    title: "Projeto 01",
    location: "CUNHA, SP",
  },
  {
    image: Image2,
    title: "Projeto 02",
    location: "MARINGÁ, PR",
  },
  {
    image: Image3,
    title: "Projeto 03",
    location: "SÃO BERNARDO DO CAMPO, SP",
  },
  {
    image: Image1,
    title: "Projeto 01",
    location: "CUNHA, SP",
  },
  {
    image: Image2,
    title: "Projeto 02",
    location: "MARINGÁ, PR",
  },
  {
    image: Image3,
    title: "Projeto 03",
    location: "SÃO BERNARDO DO CAMPO, SP",
  },
  {
    image: Image1,
    title: "Projeto 01",
    location: "CUNHA, SP",
  },
  {
    image: Image2,
    title: "Projeto 02",
    location: "MARINGÁ, PR",
  },
  {
    image: Image3,
    title: "Projeto 03",
    location: "SÃO BERNARDO DO CAMPO, SP",
  },
];

export const ArchitecturalProjects = () => {
  return (
    <div className="p-0 mt-5 mb-5">
      <div className="flex gap-4 flex-wrap justify-center items-center">
        {cards.map((item) => (
          <div className="bg-white shadow-2xl h-[28 0px] w-[350px] rounded-sm">
            <img src={item.image} alt="Imagem 2" className="w-100 rounded-sm" />
            <div className="p-2">
              <h3 className="text-xl">{item.title}</h3>
              <p className="text-xs mt-3">{item.location}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
