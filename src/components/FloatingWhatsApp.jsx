import whatsappButton from '../assets/images/whatsapp-button-round.png'
import { whatsappUrl } from '../constants/links'
import { trackWhatsAppClick } from '../utils/analytics'

function FloatingWhatsApp() {
  return (
    <a
      className="floating-whatsapp"
      href={whatsappUrl}
      target="_blank"
      rel="noreferrer"
      aria-label="Falar com Larissa Vilela Resende pelo WhatsApp"
      onClick={() => trackWhatsAppClick('floating')}
    >
      <img src={whatsappButton} alt="" aria-hidden="true" />
    </a>
  )
}

export default FloatingWhatsApp
