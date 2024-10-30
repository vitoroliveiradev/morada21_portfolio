import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    navigationMenuTriggerStyle,
  } from "../ui/navigation-menu";
  import { Link } from "react-router-dom";
  
  export function Menu() {
    return (
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger className="text-white hover:text-white text-lg">
              Projetos
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              <Link to="/projetos/arquitetonicos">
                <NavigationMenuLink
                  className={`${navigationMenuTriggerStyle()} cursor-pointer `}
                >
                  Projetos Arquitetônicos
                </NavigationMenuLink>
              </Link>
              <Link to="/projetos/designInteriores">
                <NavigationMenuLink
                  className={`${navigationMenuTriggerStyle()} cursor-pointer`}
                >
                  Projetos de Design de Interiores
                </NavigationMenuLink>
              </Link>
              <Link to="/projetos/comercial">
                <NavigationMenuLink
                  className={`${navigationMenuTriggerStyle()} cursor-pointer`}
                >
                  Projetos Comerciais
                </NavigationMenuLink>
              </Link>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuTrigger className="text-white hover:text-white text-lg">
              Escritório
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              <Link to="/sobre/empresa">
                <NavigationMenuLink
                  className={`${navigationMenuTriggerStyle()} cursor-pointer w-[100%]`}
                >
                  História
                </NavigationMenuLink>
              </Link>
              <Link to="/sobre/equipe">
                <NavigationMenuLink
                  className={`${navigationMenuTriggerStyle()} cursor-pointer`}
                >
                  Equipe
                </NavigationMenuLink>
              </Link>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link to="/contact">
              <NavigationMenuLink
                className={`${navigationMenuTriggerStyle()} cursor-pointer text-white hover:text-white`}
              >
                <span className="text-lg">Contato</span>
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    );
  }
  