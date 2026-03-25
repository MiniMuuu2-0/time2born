import { Link } from "react-router-dom";
import { homeHighlights, homeMetrics, pagePreviews } from "../data/siteContent";

function HomePage() {
  return (
    <section className="screen-page home-screen">
      <div className="screen-head" data-reveal>
        <div>
          <p className="eyebrow">Time2Born</p>
          <h1>Una proposta PMA che si capisce in una schermata.</h1>
          <p className="lead">
            Il sito ora mette in primo piano valore, target e utilita concreta: tutela
            economica, supporto umano e continuita fino ai primi anni del bambino.
          </p>
        </div>

        <div className="metric-row">
          {homeMetrics.map((metric) => (
            <article className="metric-card" key={metric.label}>
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
          <h2>Time2Born non vende solo una copertura. Vende sollievo, chiarezza e presenza.</h2>
          <p>
            Il messaggio centrale parte dal bisogno reale della coppia e lo traduce in una
            proposta piu leggibile, piu memorabile e piu facile da presentare.
          </p>

          <ul className="bullet-list">
            {homeHighlights.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>

          <div className="hero-actions">
            <Link className="button button-primary" to="/progetto">
              Scopri il progetto
            </Link>
            <Link className="button button-secondary" to="/modello">
              Apri il business model
            </Link>
          </div>
        </article>

        <div className="nav-card-grid">
          {pagePreviews.map((page) => (
            <Link className="nav-card" key={page.href} to={page.href} data-reveal>
              <span className="tag">{page.label}</span>
              <h3>{page.title}</h3>
              <p>{page.text}</p>
              <strong>Apri pagina</strong>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

export default HomePage;
