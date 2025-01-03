import { CardAbout } from "./CardAbout";

export const AboutCompany = () => {
  return (
    <div className="w-full p-8">
      <h1 className="text-[40px] mb-4">Nossa História</h1>
      <hr />
      <p className="text-[25px] max-w-[80%] mt-4">
        O Morada 21, fundado em 2023, é uma associação de arquitetas, liderada
        pelas sócias fundadoras Thais Galvão, Ana Silveira, e Talita Brito,
        todas formadas pela Universidade Paulista, localizada em Campinas.
      </p>
      <div className="mt-[64px] grid grid-cols-2 gap-4">
        <div className="w-[90%]">
          <h3 className="text-[20px]">
            O Morada 21 surgiu de um propósito em comum: criação e reprodução de
            arquitetura com essência, utilizando das técnicas da
            psicoarquitetura, design biofílico e feng shui, a fim de
            proporcionar bem estar e transformar o cotidiano e a vida das
            pessoas por meio dos espaços.
          </h3>
          <p className="mt-2 text-[15px]">
            Desenvolvemos novos projetos arquitetônicos e comerciais com
            aprovações em condomínios e prefeituras em Indaiatuba e Campinas/SP.
            Design de interiores com proposta contemporânea com foco no bem
            estar e realização pessoal dos nossos clientes, utilizamos dos
            benefícios cientificamente comprovados do contato do ser humano com
            elementos da natureza, sintetizando cada cenário particular em um
            projeto único. Utilizamos softwares que centralizam informações e
            dados do projeto, bem como alterações, mitigando erros de projeto,
            e, consequentemente, retrabalhos na obra.
          </p>
          <div className="pr-8 border-r border-primaryGray">
            <CardAbout />
            <CardAbout />
            <CardAbout />
            <CardAbout />
            <CardAbout />
          </div>
        </div>
        <div className="w-[90%]">
          <CardAbout />
          <CardAbout />
          <CardAbout />
          <CardAbout />
          <CardAbout />
        </div>
      </div>
    </div>
  );
};
