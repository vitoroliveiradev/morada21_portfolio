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
            <a href="https://morada21-portfolio-irux-oaqsiizny.vercel.app/portfolio/comercial">
              Projetos Comerciais
            </a>
          </MenubarItem>
          <MenubarSeparator />
          <MenubarSub>
            <MenubarSubTrigger className="cursor-pointer">
              Projetos Residenciais
            </MenubarSubTrigger>
            <MenubarSubContent>
              <MenubarItem>
                <a href="https://morada21-portfolio-irux-oaqsiizny.vercel.app/portfolio/residencial/arquitetônico">
                  Arquitetônicos
                </a>
              </MenubarItem>
              <MenubarItem>
                <a href="https://morada21-portfolio-irux-oaqsiizny.vercel.app/portfolio/residencial/designInteriores">
                  Design de Interiores
                </a>
              </MenubarItem>
            </MenubarSubContent>
          </MenubarSub>
          <MenubarSeparator />
        </MenubarContent>
      </MenubarMenu>
      <MenubarMenu>
        <MenubarTrigger className="text-md text-white font-bold hover:bg-primaryOrange">
          <a
            href="https://morada21-portfolio-irux-oaqsiizny.vercel.app/contact"
            target="_parent"
          >
            Contato
          </a>
        </MenubarTrigger>
      </MenubarMenu>
    </Menubar>
  );
};
