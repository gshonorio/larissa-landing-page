import brandImage from '../assets/images/marca.png'
import { instagramUrl } from '../constants/links'
import { clinicLocation } from '../constants/location'

function Footer() {
  return (
    <footer className="footer" id="contato">
      <div className="footer-inner section-container">
        <div className="footer-brand">
          <img className="brand-mark" src={brandImage} alt="Marca Larissa Vilela" />
          <div>
            <strong>Larissa Vilela Resende</strong>
            <p>Psicóloga | CRP 04/43206</p>
          </div>
        </div>

        <div className="footer-location">
          <span className="footer-label">Onde atendemos</span>
          <address>
            <strong>{clinicLocation.clinicName}</strong>
            <span>{clinicLocation.streetAddress}</span>
            <span>{clinicLocation.cityAddress}</span>
          </address>
          <a
            href={clinicLocation.mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Abrir endereço dos atendimentos no Google Maps"
          >
            Abrir no Google Maps
          </a>
        </div>

        <div className="footer-details">
          <p>
            Psicologia infantil, adolescentes, ABA, neurodesenvolvimento e orientação
            parental em Campo Belo, MG.
          </p>
          <div className="footer-links">
            <a href="mailto:larissavilelapsi@gmail.com">larissavilelapsi@gmail.com</a>
            <a
              href={instagramUrl}
              target="_blank"
              rel="noreferrer"
              aria-label="Abrir Instagram profissional de Larissa Vilela Resende"
            >
              Instagram
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
