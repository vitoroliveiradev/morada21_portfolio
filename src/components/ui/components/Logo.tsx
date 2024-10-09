import { useState } from "react";
import Logo1 from "../../../assets/logo/02 - SIMBOLOGIA.png";
import Logo2 from "../../../assets/logo/01 - LOGO.png";

export const Logo = () => {
  const [image, setImage] = useState(Logo1);
  const handleChangeImage = () => setImage(Logo2);
  const handleRemoveImage = () => setImage(Logo1);

  return (
    <div>
      <a
        href="/"
        onMouseOver={handleChangeImage}
        onMouseOut={handleRemoveImage}
      >
        <img
          className="w-[150px] h-[150px] rounded-full"
          src={image}
          alt="Logo morada 21"
        />
      </a>
    </div>
  );
};
