import Logo from "../../assets/logo.jpeg";
import { Menu } from "../Menu";
import { Slider } from "../Slider";

export const Header = () => {
  return (
    <header className="p-3">
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
      <div className="mt-4">
        <Slider />
      </div>
    </header>
  );
};
