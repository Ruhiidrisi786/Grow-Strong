import { FaWhatsapp } from "react-icons/fa";

function WhatsappButton() {
  const phoneNumber = "917715823336"; // apna number

  return (
    <a
      href={`https://wa.me/${phoneNumber}`}
      className="whatsapp-btn"
      target="_blank"
      rel="noopener noreferrer"
    >
      <FaWhatsapp />
    </a>
  );
}

export default WhatsappButton;
