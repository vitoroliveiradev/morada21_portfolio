import Logo from "../../assets/logo.jpeg";
import { Menu } from "../Menu";

export const Header = () => {
  return (
    <header className="p-3 bg-primaryGreen px-[70px]">
      <nav className="flex justify-between items-center">
        <div>
          <a href="/">
            <img
              className="w-16 rounded-full"
              src={Logo}
              alt="Logo morada 21"
            />
          </a>
        </div>
        <div>
          <Menu />
        </div>
      </nav>
    </header>
  );
};
