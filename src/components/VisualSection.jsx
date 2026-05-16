import formasImage from '../assets/images/atividade-formas.jpeg.jpeg'
import desenhoImage from '../assets/images/atividade-desenho.jpeg.jpeg'
import brinquedosImage from '../assets/images/atividade-brinquedos.jpeg.jpeg'

const visualItems = [
  {
    image: formasImage,
    title: 'Recursos para desenvolvimento',
    text: 'Materiais pensados para observação, vínculo, aprendizagem e expressão emocional.',
  },
  {
    image: desenhoImage,
    title: 'Expressão e escuta',
    text: 'Atividades que favorecem comunicação, criatividade e elaboração de experiências.',
  },
  {
    image: brinquedosImage,
    title: 'Ambiente acolhedor',
    text: 'Um espaço preparado para a criança se sentir segura, respeitada e acompanhada.',
  },
]

function VisualSection() {
  return (
    <section className="visual-section section-container" aria-labelledby="visual-title">
      <div className="visual-intro">
        <span className="section-kicker">Ambiente terapêutico</span>
        <h2 id="visual-title">Cuidado também se constrói nos detalhes do encontro.</h2>
        <p>
          Recursos lúdicos e observação clínica caminham juntos para favorecer
          desenvolvimento infantil, expressão emocional e construção de vínculo.
        </p>
      </div>

      <div className="visual-grid">
        {visualItems.map((item) => (
          <article className="visual-card" key={item.title}>
            <img
              src={item.image}
              alt={item.title}
              width="720"
              height="1280"
              sizes="(max-width: 980px) calc(100vw - 32px), 360px"
              loading="lazy"
              decoding="async"
            />
            <div>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

export default VisualSection
