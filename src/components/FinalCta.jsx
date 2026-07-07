import { instagramUrl, whatsappUrl } from '../constants/links'
import { trackWhatsAppClick } from '../utils/analytics'

function FinalCta() {
  return (
    <section className="final-cta section-container" aria-labelledby="final-cta-title">
      <div className="final-cta-inner">
        <span className="section-kicker">Primeiro passo</span>
        <h2 id="final-cta-title">
          Quando uma criança é escutada com cuidado, toda a família encontra novos caminhos.
        </h2>
        <p>Um convite para iniciar esse processo com calma, clareza e presença.</p>
        <a
          className="button-primary"
          href={whatsappUrl}
          target="_blank"
          rel="noreferrer"
          aria-label="Falar com Larissa Vilela Resende pelo WhatsApp"
          onClick={() => trackWhatsAppClick('final_cta')}
        >
          Falar com Larissa pelo WhatsApp
        </a>
        <p className="instagram-note">
          Acompanhe conteúdos sobre desenvolvimento infantil e saúde emocional no{' '}
          <a
            href={instagramUrl}
            target="_blank"
            rel="noreferrer"
            aria-label="Abrir Instagram profissional de Larissa Vilela Resende"
          >
            Instagram
          </a>
          .
        </p>
      </div>
    </section>
  )
}

export default FinalCta
