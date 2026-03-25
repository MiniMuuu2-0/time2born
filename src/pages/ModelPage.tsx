import {
  costStructure,
  modelBlocks,
  modelSignals,
  pricingEstimate,
  pricingHighlights,
  pricingMetrics,
  pricingNotes,
  pricingPathway,
  revenueStream,
} from "../data/siteContent";

function ModelPage() {
  return (
    <section className="screen-page">
      <div className="screen-head" data-reveal>
        <div>
          <p className="eyebrow">Copertura</p>
          <h1>Come puo essere impostato il servizio, tra tutele, limiti e sostenibilita.</h1>
          <p className="lead">
            La pagina riassume come Time2Born puo essere costruito come estensione
            assicurativa dedicata, con una copertura da leggere in modo concreto e non come
            simulazione teorica.
          </p>
        </div>

        <div className="chip-strip">
          {modelSignals.map((item) => (
            <span key={item}>{item}</span>
          ))}
        </div>
      </div>

      <div className="screen-layout stack-layout">
        <div className="canvas-grid canvas-grid-4">
          {modelBlocks.map((block) => (
            <article className="canvas-card" key={block.title} data-reveal>
              <h3>{block.title}</h3>
              <ul className="compact-list">
                {block.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        <div className="economics-grid">
          <article className="canvas-card accent-card" data-reveal>
            <h3>Struttura dei costi</h3>
            <ul className="compact-list">
              {costStructure.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>

          <article className="canvas-card accent-card" data-reveal>
            <h3>Flussi di ricavo</h3>
            <ul className="compact-list">
              {revenueStream.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
        </div>

        <section className="pricing-section">
          <article className="feature-card pricing-highlight-card" data-reveal>
            <span className="tag">Impostazione del servizio</span>
            <h2>Una copertura da leggere come struttura di servizio, non come listino standard.</h2>
            <p>
              Le indicazioni economiche presenti qui servono a spiegare il perimetro della
              proposta: come si inserisce su una copertura esistente, quale ordine di
              grandezza affronta la coppia e perche la consulenza resta il passaggio corretto
              per definire il caso reale.
            </p>

            <ul className="bullet-list">
              {pricingHighlights.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>

          <div className="pricing-grid">
            {pricingMetrics.map((item) => (
              <article className="canvas-card pricing-card" key={item.label} data-reveal>
                <span>{item.label}</span>
                <strong>{item.value}</strong>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </section>

        <div className="pricing-path-grid">
          {pricingPathway.map((item) => (
            <article className="journey-card pricing-step-card" key={item.title} data-reveal>
              <span>{item.value}</span>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>

        <article className="canvas-card pricing-note-card" data-reveal>
          <h3>{pricingEstimate.title}</h3>
          <p>
            {pricingEstimate.text} Per questo la sezione presenta le cifre come scenario
            orientativo, non come tariffario finale.
          </p>
          <ul className="compact-list">
            {pricingNotes.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </article>

        <article className="feature-card service-cta-card" data-reveal>
          <span className="tag">Approfondimento</span>
          <h2>Se vuoi capire il perimetro reale del servizio, il passaggio corretto e la consulenza.</h2>
          <p>
            La pagina mostra la logica generale. La consulenza serve invece a contestualizzare
            tutele, condizioni e possibili scenari economici sul caso concreto.
          </p>
        </article>
      </div>
    </section>
  );
}

export default ModelPage;
