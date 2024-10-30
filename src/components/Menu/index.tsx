import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarTrigger,
} from "../../components/ui/menubar";
import { Link } from "react-router-dom";

export function Menu() {
  return (
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
  );
}
