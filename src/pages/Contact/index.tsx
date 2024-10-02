import { FormContact } from "../../components/FormContact";

import image from "../../assets/interiorDesigns/IMAGEM TOTAL2.png";
import { Container } from "../../components/Container";

export const Contact = () => {
  return (
    <Container>
      <div className="w-full p-8">
        <h1 className="text-[40px] mb-4">Contato</h1>
        <hr />
        <div className="mt-8">
          <div className="flex gap-6">
            <div className="w-[30%]">
              <img src={image} alt="" className="h-full object-cover" />
            </div>
            <div className="w-[70%]">
              <FormContact />
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};
