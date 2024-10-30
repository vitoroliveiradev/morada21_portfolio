import { Instagram } from "lucide-react";
import WhatsApp from "../../assets/icons/whatsapp.png";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer className="mt-8 bg-primaryGreen h-[450px] text-[#cfcfcf] pt-8 relative">
      <div className="px-[90px] flex flex-col gap-10 ">
        <div>
          <h2>Morada 21 Ltda</h2>
          <span>CAU PJ2030-0</span>
        </div>
        <h2>Responsáveis Técnicos</h2>
        <div className="flex gap-8">
          <div>
            <p>Lorem Ipsum</p>
            <span>arquiteto e urbanista</span>
            <span>CAU - A32302-4</span>
          </div>
          <div>
            <p>Lorem Ipsum</p>
            <span>arquiteto e urbanista</span>
            <span>CAU - A32302-4</span>
          </div>
        </div>
        <div>
          Tel: +55 (11) 939312716 | morada21@morada21.com Rua Teste 1421 CEP
          03201-000 Indaiatuba, SP Brasil
        </div>
      </div>
      <div className="px-[90px] mt-12 flex gap-4">
        <Link
          to="https://www.instagram.com/morada21.arq/"
          target="_blank"
          rel="noreferrer"
          className="rounded-full bg-[#e6e5e5] text-black p-1"
        >
          <Instagram />
        </Link>
        <Link
          to="https://web.whatsapp.com/send?phone=1999590-1020&text=Olá, tudo bem ?"
          target="_blank"
          rel="noreferrer"
          className="rounded-full bg-[#e6e5e5] p-1"
        >
          <img
            src={WhatsApp}
            alt="WhatsApp"
            className="w-[25px] h-[25px] rounded-full"
          />
        </Link>
      </div>
      <div className="px-[90px] flex items-center justify-center absolute bottom-0 left-[50%] translate-x-[-50%]">
        <span>©Copyright 2024 Morada 21 - Todos os direitos reservados</span>
      </div>
    </footer>
  );
};
