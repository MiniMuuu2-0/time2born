import {
  costStructure,
  modelBlocks,
  modelSignals,
  revenueStream,
} from "../data/siteContent";

function ModelPage() {
  return (
    <section className="screen-page">
      <div className="screen-head" data-reveal>
        <div>
          <p className="eyebrow">Business model</p>
          <h1>Il canvas diventa leggibile: partner, canali, costi e ricavi in un colpo solo.</h1>
          <p className="lead">
            Questa pagina prende il materiale che ti hanno mandato e lo trasforma in una
            schermata ordinata, utile per far capire rapidamente come il concept puo stare sul
            mercato.
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
            <h3>Cost structure</h3>
            <ul className="compact-list">
              {costStructure.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>

          <article className="canvas-card accent-card" data-reveal>
            <h3>Revenue stream</h3>
            <ul className="compact-list">
              {revenueStream.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
        </div>
      </div>
    </section>
  );
}

export default ModelPage;
