import { Instagram } from "lucide-react";
import WhatsApp from "../../assets/icons/whatsapp.png";
import TikTok from "../../assets/icons/tik-tok.png";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer className="mt-8 bg-primaryGreen h-auto text-[#cfcfcf] pt-8 relative">
      <div className="px-[90px] flex flex-col gap-10 ">
        <div>
          <h2 className="text-lg">Morada 21 Ltda</h2>
        </div>
        <h2 className="text-lg">Responsáveis Técnicos</h2>
        <div className="flex gap-8">
          <div>
            <p className="text-md">Ana Silveira</p>
            <span className="text-sm">ARQUITETA E URBANISTA</span>
          </div>
          <div>
            <p className="text-md">Thais Galvão</p>
            <span className="text-sm">ARQUITETA E URBANISTA</span>
          </div>
          <div>
            <p className="text-md">Talita Brito</p>
            <span className="text-sm">ARQUITETA E URBANISTA</span>
          </div>
        </div>
        <div>
          Tel: +55 (19) 9 9204-4443 | morada21@morada21.com Indaiatuba, SP.
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
