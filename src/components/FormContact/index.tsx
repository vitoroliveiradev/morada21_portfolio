import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";

export const FormContact = () => {
  return (
    <div className="flex flex-col gap-8">
      <h2 className="text-[40px]">Formulário de contato</h2>
      <Input placeholder="Digite o seu nome" />
      <Input placeholder="Digite o seu e-mail" />
      <Textarea className="resize-none " placeholder="Digite a mensagem" />
      <Button
        variant="none"
        className="bg-primaryOrange w-[200px] text-white hover:brightness-95"
      >
        Enviar
      </Button>
    </div>
  );
};
