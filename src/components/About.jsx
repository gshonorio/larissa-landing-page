import aboutImage from '../assets/images/larissa-sobre-nova.jpeg'

function About() {
  return (
    <section className="about section-container" id="sobre">
      <div className="about-grid">
        <figure className="about-image">
          <img
            src={aboutImage}
            alt="Retrato profissional da psicóloga Larissa Vilela Resende"
            width="1122"
            height="1402"
            sizes="(max-width: 640px) 330px, (max-width: 980px) 480px, 420px"
            loading="lazy"
            decoding="async"
          />
        </figure>

        <div className="about-copy">
          <div className="section-kicker">Sobre Larissa</div>
          <h2>Uma escuta que acolhe a criança e orienta a família com cuidado.</h2>
          <div className="about-text">
            <p>
              Larissa Vilela Resende é psicóloga, CRP 04/43206, com 11 anos de
              experiência no atendimento clínico de crianças, adolescentes e famílias.
              Em Campo Belo, Minas Gerais, seu trabalho integra ABA, desenvolvimento
              infantil, orientação parental, transtornos do neurodesenvolvimento e
              saúde mental com ética, clareza e presença.
            </p>
            <p>
              Como mãe do Henrique, Larissa também carrega uma sensibilidade ampliada
              para o cotidiano do cuidado: os vínculos, os ritmos de crescimento, as
              pequenas conquistas e as necessidades emocionais que nem sempre chegam
              em palavras.
            </p>
            <p>
              A proposta é construir um espaço seguro para expressão, elaboração e
              desenvolvimento, com atendimento presencial e online para que os
              responsáveis encontrem orientação para cuidar com mais confiança.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
