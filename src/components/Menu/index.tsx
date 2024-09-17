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

// const components: { title: string; href: string; description: string }[] = [
//   {
//     title: "Alert Dialog",
//     href: "/docs/primitives/alert-dialog",
//     description:
//       "A modal dialog that interrupts the user with important content and expects a response.",
//   },
//   {
//     title: "Hover Card",
//     href: "/docs/primitives/hover-card",
//     description:
//       "For sighted users to preview content available behind a link.",
//   },
//   {
//     title: "Progress",
//     href: "/docs/primitives/progress",
//     description:
//       "Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.",
//   },
//   {
//     title: "Scroll-area",
//     href: "/docs/primitives/scroll-area",
//     description: "Visually or semantically separates content.",
//   },
//   {
//     title: "Tabs",
//     href: "/docs/primitives/tabs",
//     description:
//       "A set of layered sections of content—known as tab panels—that are displayed one at a time.",
//   },
//   {
//     title: "Tooltip",
//     href: "/docs/primitives/tooltip",
//     description:
//       "A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.",
//   },
// ];

export function Menu() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger className="text-white hover:text-white">
            Projetos
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <Link to="/portfolio/comercial">
              <NavigationMenuLink
                className={`${navigationMenuTriggerStyle()} cursor-pointer`}
              >
                Projetos Comerciais
              </NavigationMenuLink>
            </Link>
            <Link to="/">
              <NavigationMenuLink
                className={`${navigationMenuTriggerStyle()} cursor-pointer`}
              >
                Projetos Residenciais
              </NavigationMenuLink>
            </Link>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger className="text-white hover:text-white">
            Escritório
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <NavigationMenuLink
              className={`${navigationMenuTriggerStyle()} cursor-pointer w-[100%]`}
            >
              Escritório
            </NavigationMenuLink>
            <NavigationMenuLink
              className={`${navigationMenuTriggerStyle()} cursor-pointer`}
            >
              Projetos Residenciais
            </NavigationMenuLink>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link to="/contact">
            <NavigationMenuLink
              className={`${navigationMenuTriggerStyle()} cursor-pointer text-white hover:text-white`}
            >
              Contato
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}
