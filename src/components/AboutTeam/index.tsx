import { cardItems } from "../../utils/cardItems";
import { CardTeam } from "./CardTeam";

export const AboutTeam = () => {
  return (
    <div className="w-full h-[100vh] p-8">
      <h1 className="text-[40px] mb-4">Sobre a equipe</h1>
      <hr />
      <div className="mt-8 flex  justify-center flex-wrap gap-8 h-fit max-md:flex-col max-md:items-center ">
        {cardItems.map((item) => (
          <CardTeam
            key={item.id}
            image={item.image}
            position={item.position}
            name={item.name}
            description={item.description}
          />
        ))}
      </div>
    </div>
  );
};
