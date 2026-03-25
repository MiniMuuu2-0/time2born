import { serviceExtras, serviceJourney, servicePillars } from "../data/siteContent";

function ServicesPage() {
  return (
    <section className="screen-page">
      <div className="screen-head" data-reveal>
        <div>
          <p className="eyebrow">Servizi</p>
          <h1>Copertura, supporto e continuita: la proposta va oltre il trattamento.</h1>
          <p className="lead">
            La pagina servizi deve mostrare subito cosa si ottiene davvero, senza testo
            dispersivo: quattro pilastri chiari e un percorso leggibile dall'inizio alla
            crescita della famiglia.
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

        <div className="journey-grid">
          {serviceJourney.map((item) => (
            <article className="journey-card" key={item.step} data-reveal>
              <span>{item.step}</span>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ServicesPage;
