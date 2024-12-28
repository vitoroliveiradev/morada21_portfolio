import { useNavigate } from "react-router-dom";
import { Container } from "../../components/Container";
import { Architecturalcards } from "../../utils/architecturalCards";

export const ArchitecturalProjects = () => {
  const navigate = useNavigate();

  return (
    <Container>
      <div className="p-0 mt-5 mb-5">
        <div className="mb-6">
          <h1 className="text-[30px]">Projetos Arquitetônicos</h1>
          <hr />
        </div>
        <div className="flex gap-4 flex-wrap justify-center items-center">
          {Architecturalcards.map((item) => (
            <div
              className="bg-white shadow-2xl h-[28 0px] w-[350px] rounded-sm"
              onClick={() => navigate(`/projetos-arquitetonicos/${item.id}`)}
            >
              {item.video ? (
                <video
                  src={item.video}
                  autoPlay
                  loop
                  muted
                  className={`${
                    item.vertical
                      ? "h-[600px] w-[350px]"
                      : "w-[350px] h-[250px]"
                  }  object-cover rounded-sm cursor-pointer hover:shadow-lg hover:scale-105 transition-all duration-300 ease-in-out`}
                />
              ) : (
                <>
                  <img
                    src={item.image && item.image[0]}
                    alt="Imagem 2"
                    className="w-100 rounded-sm"
                  />
                </>
              )}
              <div className="p-2">
                <h3 className="text-xl">{item.title}</h3>
                <p className="text-xs mt-3">{item.location}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
};
