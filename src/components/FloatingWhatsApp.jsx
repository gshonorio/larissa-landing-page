import { whatsappUrl } from '../constants/links'

function FloatingWhatsApp() {
  return (
    <a
      className="floating-whatsapp"
      href={whatsappUrl}
      target="_blank"
      rel="noreferrer"
      aria-label="Falar com Larissa Vilela Resende pelo WhatsApp"
    >
      <span aria-hidden="true">WA</span>
    </a>
  )
}

export default FloatingWhatsApp
