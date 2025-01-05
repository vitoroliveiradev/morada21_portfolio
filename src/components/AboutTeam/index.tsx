import { cardItems } from "../../utils/cardItems";
import { Container } from "../Container";
import { CardTeam } from "./CardTeam";

export const AboutTeam = () => {
  return (
    <Container>
      <h1 className="text-[30px] my-4">Sobre a equipe</h1>
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
    </Container>
  );
};
