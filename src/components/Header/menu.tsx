import { Sheet } from "../ui/sheet";
import { Link } from "react-router-dom";
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarTrigger,
} from "../ui/menubar";
import { Logo } from "../ui/components/Logo";
import { MenuMobile } from "./menu-mobile";

export default function MenuComponent() {
  return (
    <header className="flex h-20 w-full shrink-0 items-center px-4 md:px-6">
      <Sheet>
        <div className="flex items-center w-full justify-between">
          <Logo />
          <MenuMobile />
        </div>
      </Sheet>
      <nav className="ml-auto hidden lg:flex gap-6">
        <Menubar>
          <MenubarMenu>
            <MenubarTrigger className="cursor-pointer text-white text-lg">
              Projetos
            </MenubarTrigger>
            <MenubarContent>
              <Link to="/projetos/arquitetonicos">
                <MenubarItem className="cursor-pointer">
                  Projetos Arquitetônicos
                </MenubarItem>
              </Link>
              <Link to="/projetos/designInteriores">
                <MenubarItem className="cursor-pointer">
                  Projetos de Design de Interiores
                </MenubarItem>
              </Link>
              <Link to="/projetos/comercial">
                <MenubarItem className="cursor-pointer">
                  Projetos Comerciais
                </MenubarItem>
              </Link>
            </MenubarContent>
          </MenubarMenu>
          <MenubarMenu>
            <MenubarTrigger className="cursor-pointer text-white text-lg">
              Escritório
            </MenubarTrigger>
            <MenubarContent>
              <Link to="/sobre/empresa">
                <MenubarItem className="cursor-pointer">História</MenubarItem>
              </Link>
              <Link to="/sobre/equipe">
                <MenubarItem className="cursor-pointer">Equipe</MenubarItem>
              </Link>
            </MenubarContent>
          </MenubarMenu>
          <MenubarMenu>
            <Link to="/contact">
              <MenubarTrigger className="cursor-pointer text-white text-lg">
                Contato
              </MenubarTrigger>
            </Link>
          </MenubarMenu>
        </Menubar>
      </nav>
    </header>
  );
}
