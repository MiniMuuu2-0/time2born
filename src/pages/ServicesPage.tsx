import { Link } from "react-router-dom";
import {
  serviceAdoptionSupport,
  serviceDetailBlocks,
  serviceExtras,
  servicePillars,
} from "../data/siteContent";

function ServicesPage() {
  return (
    <section className="screen-page">
      <div className="screen-head" data-reveal>
        <div>
          <p className="eyebrow">Servizi</p>
          <h1>Un supporto che accompagna la coppia prima, durante e dopo la PMA.</h1>
          <p className="lead">
            Time2Born combina tutela economica, assistenza pratica e supporto specialistico
            per rendere il percorso piu chiaro, piu sostenibile e meno solitario.
          </p>
        </div>

        <div className="chip-strip">
          {serviceExtras.map((item) => (
            <span key={item}>{item}</span>
          ))}
        </div>
      </div>

      <div className="screen-layout stack-layout">
        <div className="canvas-grid canvas-grid-4">
          {servicePillars.map((service) => (
            <article className="canvas-card service-card" key={service.title} data-reveal>
              <h3>{service.title}</h3>
              <p>{service.text}</p>
            </article>
          ))}
        </div>

        <div className="canvas-grid canvas-grid-2">
          {serviceDetailBlocks.map((block) => (
            <article className="canvas-card accent-card" key={block.title} data-reveal>
              <h3>{block.title}</h3>
              <ul className="compact-list">
                {block.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        <article className="feature-card emphasis-card" data-reveal>
          <span className="tag">Orientamento dedicato</span>
          <h2>{serviceAdoptionSupport.title}</h2>
          <p>{serviceAdoptionSupport.text}</p>
        </article>

        <article className="feature-card service-cta-card" data-reveal>
          <span className="tag">Consulenza</span>
          <h2>Le tutele si capiscono meglio quando vengono lette sul percorso reale della coppia.</h2>
          <p>
            La consulenza iniziale serve proprio a questo: chiarire cosa puo rientrare nel
            servizio, cosa va definito meglio e quale impostazione ha piu senso.
          </p>
          <div className="hero-actions">
            <Link className="button button-primary" to="/consulenza">
              Richiedi una consulenza
            </Link>
            <Link className="button button-secondary" to="/modello">
              Vedi copertura e sostenibilita
            </Link>
          </div>
        </article>
      </div>
    </section>
  );
}

export default ServicesPage;
