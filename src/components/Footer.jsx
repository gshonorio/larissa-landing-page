import { instagramUrl } from '../constants/links'

function Footer() {
  return (
    <footer className="footer" id="contato">
      <div className="footer-inner section-container">
        <div className="footer-brand">
          <span className="brand-mark">LV</span>
          <div>
            <strong>Larissa Vilela Resende</strong>
            <p>Psicóloga | CRP 04/43206</p>
          </div>
        </div>

        <div className="footer-details">
          <p>Psicologia infantil, adolescentes, ABA, TEA e orientação parental em Campo Belo, MG.</p>
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
