import { Link } from "react-router-dom";
import { homeHighlights, homeMetrics, pagePreviews } from "../data/siteContent";

const heroSignals = [
  "Consulenza iniziale dedicata",
  "Riscontro orientativo entro 24h",
  "Supporto pensato per la coppia",
];

const supportSignals = [
  "Esami e visite selezionati",
  "Supporto psicologico dedicato",
  "Continuita dopo la nascita",
];

function HomePage() {
  return (
    <section className="screen-page home-screen">
      <div className="screen-head" data-reveal>
        <div className="hero-copy">
          <p className="eyebrow">Time2Born</p>
          <h1>Protezione e supporto per chi affronta un percorso PMA.</h1>
          <p className="lead">
            Time2Born nasce per aiutare le coppie che affrontano la fertilita assistita con
            una proposta chiara: tutela economica, orientamento pratico e continuita anche
            dopo la nascita.
          </p>

          <div className="hero-pill-row" aria-label="Punti chiave">
            {heroSignals.map((signal) => (
              <span className="hero-pill" key={signal}>
                {signal}
              </span>
            ))}
          </div>

          <div className="hero-actions">
            <Link className="button button-primary" to="/consulenza">
              Richiedi una consulenza
            </Link>
            <Link className="button button-secondary" to="/progetto">
              Scopri Time2Born
            </Link>
          </div>

          <p className="hero-secondary-link">
            Preferisci vedere prima la struttura del servizio?{" "}
            <Link to="/modello">Apri copertura e sostenibilita</Link>.
          </p>
        </div>

        <div className="metric-row">
          {homeMetrics.map((metric, index) => (
            <article
              className={`metric-card${index === 0 ? " metric-card-highlight" : ""}`}
              key={metric.label}
            >
              <span>{metric.label}</span>
              <strong>{metric.value}</strong>
              <p>{metric.text}</p>
            </article>
          ))}
        </div>
      </div>

      <div className="screen-layout home-layout">
        <article className="feature-card feature-home" data-reveal>
          <span className="tag">Colpo d'occhio</span>
          <h2>Un aiuto concreto in uno dei percorsi piu delicati per una coppia.</h2>
          <p>
            Il servizio unisce protezione economica, supporto specialistico e accompagnamento
            operativo per rendere il percorso piu sostenibile e meno dispersivo.
          </p>

          <ul className="bullet-list">
            {homeHighlights.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>

          <div className="home-support-strip" aria-label="Motivi per scegliere Time2Born">
            {supportSignals.map((signal) => (
              <div className="support-chip" key={signal}>
                {signal}
              </div>
            ))}
          </div>
        </article>

        <div className="nav-card-grid">
          {pagePreviews.map((page) => (
            <Link className="nav-card" key={page.href} to={page.href} data-reveal>
              <span className="tag">{page.label}</span>
              <h3>{page.title}</h3>
              <p>{page.text}</p>
              <strong>Scopri di piu</strong>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

export default HomePage;
