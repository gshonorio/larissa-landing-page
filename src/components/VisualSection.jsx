import { useEffect, useMemo, useState } from 'react'
import vinculoImage from '../assets/images/consultorio-vinculo.jpeg'
import livroImage from '../assets/images/consultorio-livro.jpeg'
import acolhimentoImage from '../assets/images/consultorio-acolhimento.jpeg'
import bolaImage from '../assets/images/consultorio-bola.jpeg'
import brinquedoImage from '../assets/images/consultorio-brinquedo.jpeg'
import blocosImage from '../assets/images/consultorio-blocos.jpeg'

const visualItems = [
  {
    image: vinculoImage,
    title: 'Vínculo e acolhimento',
    text: 'A escuta e a presença constroem um espaço seguro para expressão, confiança e desenvolvimento.',
    alt: 'Atendimento infantil com recursos lúdicos e vínculo terapêutico',
    width: 1086,
    height: 1448,
  },
  {
    image: livroImage,
    title: 'Ciência e desenvolvimento',
    text: 'Observação, estudo e estratégias individualizadas orientam cada etapa do cuidado.',
    alt: 'Larissa estudando recursos de psicologia para desenvolvimento infantil',
    width: 1086,
    height: 1448,
  },
  {
    image: acolhimentoImage,
    title: 'Ambiente preparado',
    text: 'Um consultório pensado para receber crianças, adolescentes e famílias com cuidado e sensibilidade.',
    alt: 'Consultório preparado para acolhimento infantil e familiar',
    width: 924,
    height: 1600,
  },
  {
    image: bolaImage,
    title: 'Regulação emocional',
    text: 'Atividades corporais e lúdicas favorecem expressão emocional, organização e confiança.',
    alt: 'Recurso lúdico corporal usado em atendimento infantil',
    width: 1086,
    height: 1448,
  },
  {
    image: brinquedoImage,
    title: 'Recursos terapêuticos',
    text: 'Jogos, brinquedos e materiais são usados com intenção clínica para estimular comunicação e aprendizagem.',
    alt: 'Brinquedos e recursos terapêuticos no consultório infantil',
    width: 1220,
    height: 1600,
  },
  {
    image: blocosImage,
    title: 'Autonomia e habilidades',
    text: 'Cada atividade pode apoiar repertórios, habilidades adaptativas, convivência e desenvolvimento.',
    alt: 'Blocos e materiais lúdicos para desenvolvimento de habilidades',
    width: 1086,
    height: 1448,
  },
]

function getVisibleCount() {
  if (typeof window === 'undefined') {
    return 3
  }

  return window.matchMedia('(max-width: 980px)').matches ? 1 : 3
}

function VisualSection() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [visibleCount, setVisibleCount] = useState(getVisibleCount)
  const [isPaused, setIsPaused] = useState(false)

  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 980px)')
    const updateVisibleCount = () => setVisibleCount(mediaQuery.matches ? 1 : 3)

    updateVisibleCount()
    mediaQuery.addEventListener('change', updateVisibleCount)

    return () => mediaQuery.removeEventListener('change', updateVisibleCount)
  }, [])

  useEffect(() => {
    if (isPaused) {
      return undefined
    }

    const interval = window.setInterval(() => {
      setActiveIndex((currentIndex) => (currentIndex + 1) % visualItems.length)
    }, 6500)

    return () => window.clearInterval(interval)
  }, [isPaused])

  const visibleItems = useMemo(
    () =>
      Array.from({ length: visibleCount }, (_, offset) => {
        const itemIndex = (activeIndex + offset) % visualItems.length
        return { ...visualItems[itemIndex], itemIndex }
      }),
    [activeIndex, visibleCount]
  )

  const goToPrevious = () => {
    setActiveIndex((currentIndex) =>
      currentIndex === 0 ? visualItems.length - 1 : currentIndex - 1
    )
  }

  const goToNext = () => {
    setActiveIndex((currentIndex) => (currentIndex + 1) % visualItems.length)
  }

  return (
    <section className="visual-section section-container" aria-labelledby="visual-title">
      <div className="visual-intro">
        <span className="section-kicker">Ambiente terapêutico</span>
        <h2 id="visual-title">Cuidado também se constrói nos detalhes do encontro.</h2>
        <p>
          Recursos lúdicos, vínculo e observação clínica caminham juntos para favorecer
          expressão emocional, autonomia, aprendizagem e confiança.
        </p>
      </div>

      <div
        className="visual-carousel"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        onFocus={() => setIsPaused(true)}
        onBlur={() => setIsPaused(false)}
      >
        <div className="visual-grid" aria-live="polite">
          {visibleItems.map((item) => (
            <article className="visual-card" key={`${item.title}-${item.itemIndex}`}>
              <img
                src={item.image}
                alt={item.alt}
                width={item.width}
                height={item.height}
                sizes="(max-width: 640px) calc(100vw - 24px), 360px"
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

        <div className="visual-controls" aria-label="Controles das imagens do consultório">
          <button type="button" onClick={goToPrevious} aria-label="Imagem anterior">
            <span aria-hidden="true">‹</span>
          </button>
          <div className="visual-dots" aria-label="Selecionar imagem inicial">
            {visualItems.map((item, index) => (
              <button
                type="button"
                key={item.title}
                className={index === activeIndex ? 'is-active' : ''}
                onClick={() => setActiveIndex(index)}
                aria-label={`Mostrar ${item.title}`}
                aria-current={index === activeIndex ? 'true' : undefined}
              />
            ))}
          </div>
          <button type="button" onClick={goToNext} aria-label="Próxima imagem">
            <span aria-hidden="true">›</span>
          </button>
        </div>
      </div>
    </section>
  )
}

export default VisualSection
