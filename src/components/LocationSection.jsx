import { clinicLocation } from '../constants/location'

function LocationSection() {
  return (
    <section
      className="location-section section-container"
      id="localizacao"
      aria-labelledby="location-title"
    >
      <div className="location-card">
        <div className="location-copy">
          <span className="section-kicker">Localização</span>
          <h2 id="location-title">Onde acontecem os atendimentos</h2>
          <p>
            Um espaço acolhedor, preparado para receber crianças, adolescentes e suas
            famílias.
          </p>
        </div>

        <div className="location-address-panel">
          <span className="address-location-icon" aria-hidden="true">⌖</span>
          <address className="address-details">
            <strong>{clinicLocation.clinicName}</strong>
            <span>{clinicLocation.streetAddress}</span>
            <span>{clinicLocation.cityAddress}</span>
          </address>
          <a
            className="button-primary"
            href={clinicLocation.mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            Abrir localização
          </a>
        </div>
      </div>
    </section>
  )
}

export default LocationSection
