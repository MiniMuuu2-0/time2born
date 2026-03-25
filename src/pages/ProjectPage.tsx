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
          <h1>La PMA mette alla prova non solo il corpo, ma anche equilibrio e stabilita.</h1>
          <p className="lead">
            Time2Born parte da un bisogno concreto: aiutare chi affronta la fertilita
            assistita a gestire costi, incertezza e carico emotivo con un supporto dedicato.
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
          <span className="tag">Il bisogno</span>
          <h2>Bisogno di sicurezza e certezza di essere protetti in caso di problemi.</h2>
          <p>
            Il progetto parte da qui: dare maggiore serenita a chi vuole iniziare a cercare
            una gravidanza, offrendo una protezione leggibile e un supporto piu chiaro fin
            dall'inizio del percorso.
          </p>

          <ul className="bullet-list">
            {projectPainPoints.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </article>

        <div className="canvas-grid canvas-grid-2">
          <article className="canvas-card" data-reveal>
            <h3>Valore offerto</h3>
            <ul className="compact-list">
              {valuePropositions.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>

          <article className="canvas-card" data-reveal>
            <h3>Relazione con il cliente</h3>
            <ul className="compact-list">
              {relationshipPoints.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>

          <article className="canvas-card" data-reveal>
            <h3>Persone a cui si rivolge</h3>
            <ul className="compact-list">
              {customerSegments.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>

          <article className="canvas-card accent-card" data-reveal>
            <h3>Perche funziona</h3>
            <p>
              Time2Born risponde a un bisogno specifico con un servizio piu leggibile di una
              polizza generica: dedicato, comprensibile e costruito attorno al percorso reale
              della coppia.
            </p>
          </article>
        </div>
      </div>
    </section>
  );
}

export default ProjectPage;
