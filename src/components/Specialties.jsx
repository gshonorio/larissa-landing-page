const specialties = [
  {
    title: 'Atendimento infantil',
    text: 'Desenvolvimento, comportamento, emoções e contexto familiar.',
  },
  {
    title: 'Atendimento de adolescentes',
    text: 'Autoestima, relações, escola, ansiedade e transições da fase.',
  },
  {
    title: 'Transtornos do neurodesenvolvimento',
    text: 'Autonomia, comunicação, repertórios, TDAH, deficiência intelectual e habilidades adaptativas.',
  },
  {
    title: 'Regulação emocional',
    text: 'Ansiedade, segurança emocional e recursos de enfrentamento.',
  },
  {
    title: 'Dificuldades escolares',
    text: 'Rotina, adaptação, aprendizagem e questões emocionais associadas.',
  },
  {
    title: 'Habilidades sociais',
    text: 'Comunicação, convivência, autonomia e relações saudáveis.',
  },
  {
    title: 'Orientação parental',
    text: 'Manejo, limites, vínculo, rotina e segurança no cuidado.',
  },
  {
    title: 'Avaliação psicossocial',
    text: 'Atuação técnica, ética e criteriosa para contextos empresariais.',
  },
]

function Specialties() {
  return (
    <section className="specialties section-container" id="especialidades">
      <div className="section-heading">
        <span className="section-kicker">Especialidades</span>
        <h2>Linhas de cuidado para infância, adolescência, famílias e contextos institucionais.</h2>
      </div>

      <div className="specialty-grid">
        {specialties.map((item, index) => (
          <article className="specialty-card" key={item.title}>
            <span className="card-number">{String(index + 1).padStart(2, '0')}</span>
            <h3>{item.title}</h3>
            <p>{item.text}</p>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Specialties
