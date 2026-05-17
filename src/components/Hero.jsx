import heroImage from '../assets/images/larissa-hero-nova.jpeg'
import { whatsappUrl } from '../constants/links'

function Hero() {
  return (
    <section className="hero section-container" id="inicio">
      <div className="hero-content reveal">
        <p className="eyebrow">Psicóloga há 11 anos em Campo Belo, MG</p>
        <h1>Cuidado clínico para crianças, adolescentes e famílias.</h1>

        <div className="hero-actions">
          <a
            className="button-primary"
            href={whatsappUrl}
            target="_blank"
            rel="noreferrer"
            aria-label="Agendar atendimento pelo WhatsApp com Larissa Vilela Resende"
          >
            Agendar pelo WhatsApp
          </a>
          <span className="hero-note">Atendimento presencial em Campo Belo e online</span>
        </div>

        <p className="hero-copy">
          Escuta qualificada, ciência e sensibilidade para apoiar desenvolvimento
          infantil, adolescência, saúde mental, ABA e transtornos do neurodesenvolvimento.
        </p>

        <div className="credential-list" aria-label="Áreas de atuação">
          <span>ABA</span>
          <span>Neurodesenvolvimento</span>
          <span>Desenvolvimento infantil</span>
          <span>Orientação parental</span>
          <span>Saúde mental</span>
        </div>
      </div>

      <div className="hero-visual reveal reveal-delay">
        <div className="portrait-shell">
          <div className="image-frame">
            <img
              src={heroImage}
              alt="Larissa Vilela Resende, psicóloga infantil em Campo Belo, Minas Gerais"
              width="1122"
              height="1402"
              sizes="(max-width: 640px) 330px, (max-width: 980px) 440px, 410px"
              decoding="async"
              fetchPriority="high"
            />
          </div>
        </div>
        <div className="hero-card">
          <span>Atuação integrada</span>
          <strong>clínica, família e desenvolvimento</strong>
        </div>
      </div>
    </section>
  )
}

export default Hero
