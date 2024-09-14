import { useState } from "react";
import LogoImage from "../../../assets/logo-transparent.png";
import LogoText from "../../../assets/logo2-transparent.png";

export const Logo = () => {
  const [image, setImage] = useState(LogoImage);
  const handleChangeImage = () => setImage(LogoText);
  const handleRemoveImage = () => setImage(LogoImage);

  return (
    <div>
      <a
        href="/"
        onMouseOver={handleChangeImage}
        onMouseOut={handleRemoveImage}
      >
        <img className="w-20 h-20 rounded-full" src={image} alt="Logo morada 21" />
      </a>
    </div>
  );
};
