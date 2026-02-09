type WhatsAppButtonProps = {
  phoneNumber: string;
  message: string;
};

export const WhatsAppButton = ({
  phoneNumber,
  message,
}: WhatsAppButtonProps) => {
  const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    message
  )}`;

  return (
    <div className="fixed bottom-5 right-5 z-50 group">
      <a
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        className="
          flex
          items-center
          justify-center
          w-14
          h-14
          rounded-full
          bg-green-500
          shadow-lg
          hover:bg-green-600
          transition
          duration-300
          hover:scale-110
        "
      >
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
          alt="WhatsApp"
          className="w-7 h-7"
        />
      </a>
    </div>
  );
};
