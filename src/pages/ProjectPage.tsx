import {
  customerSegments,
  projectBenefits,
  projectPainPoints,
  relationshipPoints,
  valuePropositions,
} from "../data/siteContent";

function ProjectPage() {
  return (
    <section className="screen-page">
      <div className="screen-head" data-reveal>
        <div>
          <p className="eyebrow">Progetto</p>
          <h1>Il problema non e solo medico: e economico, emotivo e organizzativo.</h1>
          <p className="lead">
            Questa pagina chiarisce subito perche il concept ha senso: intercetta un bisogno
            forte, concreto e facilmente percepibile da chi vive il percorso PMA.
          </p>
        </div>

        <div className="chip-strip">
          {projectBenefits.map((item) => (
            <span key={item}>{item}</span>
          ))}
        </div>
      </div>

      <div className="screen-layout split-layout">
        <article className="feature-card emphasis-card" data-reveal>
          <span className="tag">Perche conta</span>
          <h2>Chi affronta la fertilita assistita cerca protezione, non solo informazioni.</h2>
          <p>
            Time2Born parte dal vissuto della coppia: paura del fallimento, pressione dei costi
            e bisogno di sentirsi seguiti da qualcuno che capisca davvero il momento.
          </p>

          <ul className="bullet-list">
            {projectPainPoints.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </article>

        <div className="canvas-grid canvas-grid-2">
          <article className="canvas-card" data-reveal>
            <h3>Value proposition</h3>
            <ul className="compact-list">
              {valuePropositions.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>

          <article className="canvas-card" data-reveal>
            <h3>Customer relationship</h3>
            <ul className="compact-list">
              {relationshipPoints.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>

          <article className="canvas-card" data-reveal>
            <h3>Customer segments</h3>
            <ul className="compact-list">
              {customerSegments.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>

          <article className="canvas-card accent-card" data-reveal>
            <h3>Percezione finale</h3>
            <p>
              Il concept funziona quando il cliente capisce in pochi secondi che qui non si
              parla di una polizza generica, ma di una protezione costruita sul suo percorso.
            </p>
          </article>
        </div>
      </div>
    </section>
  );
}

export default ProjectPage;
