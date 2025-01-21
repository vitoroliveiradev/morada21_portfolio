import { useState } from "react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";

import emailjs from "@emailjs/browser";
import { Loading } from "../ui/components/Loading";
import { useToast } from "../../hooks/use-toast";

type FormInputType = {
  name: string;
  email: string;
  message: string;
};

export const FormContact = () => {
  const { toast } = useToast();
  const [formInputs, setFormInputs] = useState<FormInputType>({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (
      formInputs.name === "" ||
      formInputs.email === "" ||
      formInputs.message === ""
    ) {
      alert("Preencha todos os campos");
      return;
    }

    const template = {
      name: formInputs.name,
      email: formInputs.email,
      message: formInputs.message,
    };

    try {
      setLoading(true);
      const res = await emailjs.send(
        "service_5be2n2o",
        "template_cf90wsq",
        template,
        "xe9XiLdo1GPxUn2vy"
      );

      if (res.status === 200) {
        toast({
          title: "E-mail enviado com sucesso!",
          description: "Entraremos em contato em breve.",
          variant: "default",
          duration: 1000,
        });
      }
    } catch (error) {
      toast({
        title: "Erro ao enviar e-mail",
        description: "Tente novamente!",
        variant: "destructive",
        duration: 1000,
      });
      console.log(error);
    } finally {
      setLoading(false);
      setFormInputs({
        name: "",
        email: "",
        message: "",
      });
    }
  };

  return (
    <section className="relative">
      <form onSubmit={handleSubmit} className="flex flex-col gap-8">
        <h2 className="text-[40px]">Formulário de contato</h2>
        <Input
          required
          placeholder="Digite o seu nome"
          value={formInputs.name}
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
          value={formInputs.email}
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
          value={formInputs.message}
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
            disabled={loading}
          >
            Enviar
          </Button>
        </div>
      </form>
      {loading && (
        <div className="absolute top-[30%] left-[30%]">
          <Loading />
        </div>
      )}
    </section>
  );
};
