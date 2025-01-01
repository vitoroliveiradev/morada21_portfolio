import MenuComponent from "./menu";

type HeaderProps = {
  isFooter?: boolean;
};

export const Header = ({ isFooter }: HeaderProps) => {
  return (
    <header
      className={`p-3 ${
        !isFooter ? "bg-primaryGreen z-50 w-full" : "bg-primaryGreen"
      } px-[70px] max-sm:p-0 `}
    >
      <nav className="flex justify-between items-center">
        <MenuComponent />
      </nav>
    </header>
  );
};
