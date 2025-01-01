import { Link } from "react-router-dom";
import { Button } from "../ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuPortal,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { MenuIcon } from "lucide-react";

export function MenuMobile() {
  return (
    <div className="lg:hidden md:visible">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline">
            <MenuIcon />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-56">
          <DropdownMenuGroup>
            <DropdownMenuSub>
              <DropdownMenuSubTrigger>Projetos</DropdownMenuSubTrigger>
              <DropdownMenuPortal>
                <DropdownMenuSubContent>
                  <Link to="/projetos/arquitetonicos">
                    <DropdownMenuItem>Projetos Arquitetônicos</DropdownMenuItem>
                  </Link>
                  <Link to="/projetos/designInteriores">
                    <DropdownMenuItem>
                      Projetos de Design de Interiores
                    </DropdownMenuItem>
                  </Link>
                  <Link to="/projetos/comercial">
                    <DropdownMenuItem>Projetos Comerciais</DropdownMenuItem>
                  </Link>
                </DropdownMenuSubContent>
              </DropdownMenuPortal>
            </DropdownMenuSub>
            <DropdownMenuSub>
              <DropdownMenuSubTrigger>Escritório</DropdownMenuSubTrigger>
              <DropdownMenuPortal>
                <DropdownMenuSubContent>
                  <Link to="/sobre/empresa">
                    <DropdownMenuItem>História</DropdownMenuItem>
                  </Link>
                  <Link to="/sobre/equipe">
                    <DropdownMenuItem>Equipe</DropdownMenuItem>
                  </Link>
                </DropdownMenuSubContent>
              </DropdownMenuPortal>
            </DropdownMenuSub>
            <Link to="/contact">
              <DropdownMenuItem>Contato</DropdownMenuItem>
            </Link>
          </DropdownMenuGroup>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}
