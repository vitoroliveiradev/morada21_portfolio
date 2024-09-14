import { Menu } from "../Menu";
import { Logo } from "../ui/components/Logo";

export const Header = () => {
  return (
    <header className="p-3 bg-primaryGreen px-[70px]">
      <nav className="flex justify-between items-center">
        <div>
          <Logo />
        </div>
        <div>
          <Menu />
        </div>
      </nav>
    </header>
  );
};
