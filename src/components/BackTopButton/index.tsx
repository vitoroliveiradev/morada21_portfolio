import { ArrowBigUp } from "lucide-react";
import { useEffect, useState } from "react";

export const BackTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Mostra o botão ao rolar a página para baixo
  useEffect(() => {
    const toggleVisibility = () => {
      console.log(window.scrollY);
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const handleBackToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    isVisible && (
      <button
        className="w-[32px] h-[32px] rounded-full bg-primaryGreen text-gray-400 hover:text-white flex justify-center items-center"
        onClick={handleBackToTop}
      >
        <ArrowBigUp />
      </button>
    )
  );
};
