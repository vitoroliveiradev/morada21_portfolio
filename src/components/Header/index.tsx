import { Menu } from "../Menu";
import { Logo } from "../ui/components/Logo";

type HeaderProps = {
  isFooter?: boolean;
};

export const Header = ({ isFooter }: HeaderProps) => {
  return (
    <header
      className={`p-3 ${
        !isFooter ? "bg-primaryGreen z-50 w-full" : "bg-primaryGreen"
      } px-[70px] `}
    >
      <nav className="flex justify-between items-center ">
        <Logo />
        <Menu />
      </nav>
    </header>
  );
};
