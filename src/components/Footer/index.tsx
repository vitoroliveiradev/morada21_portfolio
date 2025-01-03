import { Instagram } from "lucide-react";
import WhatsApp from "../../assets/icons/whatsapp.png";
import TikTok from "../../assets/icons/tik-tok.png";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer className="mt-8 bg-primaryGreen h-auto text-[#cfcfcf] pt-8 relative">
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
          className="rounded-full bg-[#e6e5e5] text-black p-1 hover:scale-110 transition-all"
        >
          <Instagram />
        </Link>
        <Link
          to="https://api.whatsapp.com/send/?phone=5519992044443&text&type=phone_number&app_absent=0"
          target="_blank"
          rel="noreferrer"
          className="rounded-full bg-[#e6e5e5] p-1 hover:scale-110 transition-all"
        >
          <img
            src={WhatsApp}
            alt="WhatsApp"
            className="w-[25px] h-[25px] rounded-full"
          />
        </Link>
        <Link
          to="https://www.tiktok.com/@morada21.arq"
          target="_blank"
          rel="noreferrer"
          className="rounded-full bg-[#e6e5e5] p-1 hover:scale-110 transition-all"
        >
          <img
            src={TikTok}
            alt="TikTok"
            className="w-[25px] h-[25px] rounded-full"
          />
        </Link>
      </div>
      <div className="px-[90px] flex items-center justify-center  max-md:w-full max-md:text-sm">
        <span>©Copyright 2025 Morada 21 - Todos os direitos reservados</span>
      </div>
    </footer>
  );
};
