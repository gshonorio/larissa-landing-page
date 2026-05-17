import brandImage from '../assets/images/marca.png'
import { instagramUrl } from '../constants/links'

const navItems = [
  { label: 'Sobre', href: '#sobre' },
  { label: 'Especialidades', href: '#especialidades' },
  { label: 'Contato', href: '#contato' },
]

function Header() {
  return (
    <header className="header">
      <a className="brand" href="#inicio" aria-label="Início - Larissa Vilela Resende">
        <img className="brand-mark" src={brandImage} alt="Marca Larissa Vilela" />
        <span>
          <strong>Larissa Vilela Resende</strong>
          <small>Psicóloga | CRP 04/43206</small>
        </span>
      </a>

      <nav className="header-nav" aria-label="Navegação principal">
        {navItems.map((item) => (
          <a key={item.href} href={item.href}>
            {item.label}
          </a>
        ))}
        <a
          href={instagramUrl}
          target="_blank"
          rel="noreferrer"
          aria-label="Abrir Instagram profissional de Larissa Vilela Resende"
        >
          Instagram
        </a>
      </nav>

      <a
        className="header-cta"
        href={instagramUrl}
        target="_blank"
        rel="noreferrer"
        aria-label="Abrir Instagram profissional"
      >
        Instagram
      </a>
    </header>
  )
}

export default Header
