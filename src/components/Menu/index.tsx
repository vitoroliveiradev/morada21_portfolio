import { Link } from "react-router-dom";
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarSub,
  MenubarSubContent,
  MenubarSubTrigger,
  MenubarTrigger,
} from "../ui/menubar";

export const Menu = () => {
  return (
    <Menubar className="bg-transparent border-none">
      <MenubarMenu>
        <MenubarTrigger className="text-white text-md font-bold hover:bg-primaryOrange cursor-pointer">
          Portifólio
        </MenubarTrigger>
        <MenubarContent>
          <MenubarItem className="hover:bg-primaryOrange cursor-pointer">
            <Link to="/portfolio/comercial">Projetos Comerciais</Link>
          </MenubarItem>
          <MenubarSeparator />
          <MenubarSub>
            <MenubarSubTrigger className="cursor-pointer">
              Projetos Residenciais
            </MenubarSubTrigger>
            <MenubarSubContent>
              <MenubarItem>
                <Link to="/portfolio/residencial/arquitetônico">
                  Arquitetônicos
                </Link>
              </MenubarItem>
              <MenubarItem>
                <Link to="/portfolio/residencial/designInteriores">
                  Design de Interiores
                </Link>
              </MenubarItem>
            </MenubarSubContent>
          </MenubarSub>
          <MenubarSeparator />
        </MenubarContent>
      </MenubarMenu>
      <MenubarMenu>
        <MenubarTrigger className="text-md text-white font-bold hover:bg-primaryOrange">
          <Link to="/contact" target="_parent">
            Contato
          </Link>
        </MenubarTrigger>
      </MenubarMenu>
    </Menubar>
  );
};
