import { useState } from "react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";

type FormInputType = {
  name: string;
  email: string;
  message: string;
};

export const FormContact = () => {
  const [formInputs, setFormInputs] = useState<FormInputType>({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    console.log(formInputs);
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-8 ">
      <h2 className="text-[40px]">Formulário de contato</h2>
      <Input
        required
        placeholder="Digite o seu nome"
        onChange={(e) =>
          setFormInputs((prevState) => {
            return {
              ...prevState,
              name: e.target.value,
            };
          })
        }
      />
      <Input
        required
        placeholder="Digite o seu e-mail"
        onChange={(e) =>
          setFormInputs((prevState) => {
            return {
              ...prevState,
              email: e.target.value,
            };
          })
        }
      />
      <Textarea
        required
        className="resize-none "
        placeholder="Digite a mensagem"
        onChange={(e) =>
          setFormInputs((prevState) => {
            return {
              ...prevState,
              message: e.target.value,
            };
          })
        }
      />
      <div className="max-md:flex max-md:items-center max-md:justify-center">
        <Button
          variant="none"
          className="bg-primaryOrange w-[200px] text-white hover:brightness-95"
          type="submit"
        >
          Enviar
        </Button>
      </div>
    </form>
  );
};
