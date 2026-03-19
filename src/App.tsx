import { useEffect } from "react";

const heroPoints = [
  "Copertura per trattamenti PMA/FIV",
  "Supporto psicologico incluso",
  "Estensione ai primi anni del bambino",
];

const heroTiles = [
  {
    number: "01",
    title: "Tutela economica",
    text: "Rimborsi parziali, copertura base e pacchetti modulari.",
  },
  {
    number: "02",
    title: "Supporto umano",
    text: "Psicologo incluso e canale dedicato per domande e accompagnamento.",
  },
  {
    number: "03",
    title: "Visione estesa",
    text: "Dal percorso di fertilita ai primi anni del bambino con servizi extra.",
  },
];

const problems = [
  "Fallimento del ciclo e costi elevati senza garanzia di successo.",
  "Tempi lunghi, burocrazia e bisogno di coordinare visite e lavoro.",
  "Stress di coppia e impatto emotivo durante tutto il percorso.",
];

const benefits = [
  "Piu serenita grazie a una protezione presente fin dall'inizio.",
  "Trasparenza su costi, percentuali e supporti disponibili.",
  "Piu vicinanza al momento desiderato: vedere finalmente un test positivo.",
];

const services = [
  {
    title: "Copertura PMA/FIV",
    text: "Protezione per parte del trattamento e delle principali spese mediche di base.",
  },
  {
    title: "Rimborso in caso di insuccesso",
    text: "Pacchetti di rimborso parziale per ridurre l'impatto economico del fallimento.",
  },
  {
    title: "Supporto psicologico",
    text: "Accesso a figure specialistiche integrate nel percorso, senza attrito operativo.",
  },
  {
    title: "Assistenza dedicata",
    text: "Un punto di contatto per chiarimenti, gestione pratica e accompagnamento.",
  },
  {
    title: "Orari flessibili",
    text: "Servizi pensati per non aggravare l'impatto sulle routine di lavoro e famiglia.",
  },
  {
    title: "Estensione post nascita",
    text: "Coperture e servizi per i primi anni: assistenza medica, babysitter e sostegno.",
  },
];

const timeline = [
  {
    number: "01",
    title: "Valutazione iniziale",
    text: "Screening, orientamento, chiarimento dei costi e dei possibili scenari.",
  },
  {
    number: "02",
    title: "Trattamento",
    text: "Supporto durante esami, monitoraggio, somministrazioni e visite ricorrenti.",
  },
  {
    number: "03",
    title: "Esito del percorso",
    text: "Protezione economica e sostegno emotivo sia in caso di successo sia di insuccesso.",
  },
  {
    number: "04",
    title: "Primi anni",
    text: "Servizi aggiuntivi per accompagnare la nuova famiglia anche dopo la nascita.",
  },
];

const strengths = [
  "Alto valore percepito in un evento di vita ad altissima intensita emotiva.",
  "Target preciso e facilmente segmentabile.",
  "Forte leva distintiva per assicurazioni, broker e network salute.",
];

const constraints = [
  "Rischio tecnico e prezzo complesso da costruire attuarialmente.",
  "Scalabilita limitata se il prodotto viene pensato come standalone.",
  "Mercato di nicchia, regolato e con forte bisogno di partner clinici.",
];

const channels = [
  "Compagnie assicurative",
  "Broker e consulenti",
  "Centri PMA/FIV",
  "Welfare aziendale",
];

const team = [
  {
    role: "Direzione generale",
    name: "Anna Celeste",
    text: "Coordinamento del progetto e visione complessiva del servizio.",
    featured: true,
  },
  {
    role: "Sviluppo e ricerca",
    name: "Noemi, Riccardo",
    text: "Definizione del prodotto, validazione e partnership operative.",
  },
  {
    role: "Finanza",
    name: "Deea",
    text: "Struttura economica, sostenibilita e ipotesi di pricing.",
  },
  {
    role: "Clienti",
    name: "Senuka",
    text: "Esperienza utente, contatto diretto e accompagnamento.",
  },
  {
    role: "Vendite",
    name: "Nicole",
    text: "Attivazione del go-to-market e sviluppo dei canali commerciali.",
  },
  {
    role: "Marketing",
    name: "Tobias",
    text: "Narrazione del brand, posizionamento e acquisizione qualificata.",
  },
  {
    role: "Acquisti",
    name: "Salvatore",
    text: "Selezione dei fornitori e gestione delle componenti di servizio.",
  },
];

function App() {
  useEffect(() => {
    const revealNodes = document.querySelectorAll<HTMLElement>("[data-reveal]");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.18 }
    );

    revealNodes.forEach((node) => observer.observe(node));

    return () => {
      observer.disconnect();
    };
  }, []);

  const year = new Date().getFullYear();

  return (
    <div className="page-shell">
      <header className="site-header">
        <a className="brand" href="#top" aria-label="Time2Born home">
          <img src="/assets/logo-time2born.svg" alt="Logo Time2Born" />
        </a>
        <nav className="site-nav" aria-label="Navigazione principale">
          <a href="#progetto">Progetto</a>
          <a href="#servizi">Servizi</a>
          <a href="#modello">Modello</a>
          <a href="#team">Team</a>
        </nav>
      </header>

      <main id="top">
        <section className="hero section">
          <div className="hero-copy" data-reveal>
            <p className="eyebrow">Concept assicurativo premium per PMA, FIV e famiglia</p>
            <h1>Proteggere il percorso verso la nascita, non solo il risultato.</h1>
            <p className="lead">
              Time2Born immagina una copertura complementare che unisce tutela economica,
              supporto psicologico e servizi concreti per chi affronta un percorso di
              procreazione medicalmente assistita.
            </p>
            <div className="hero-actions">
              <a className="button button-primary" href="#servizi">
                Scopri la proposta
              </a>
              <a className="button button-secondary" href="#modello">
                Vedi il modello
              </a>
            </div>
            <ul className="hero-points" aria-label="Punti chiave">
              {heroPoints.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
          </div>

          <div className="hero-panel" data-reveal>
            <div className="hero-card spotlight">
              <span className="tag">Value proposition</span>
              <h2>Una risposta integrata a costi, attesa e pressione emotiva.</h2>
              <p>
                Il concept nasce per ridurre l&apos;incertezza vissuta dalle coppie durante i
                trattamenti: spese impreviste, visite frequenti, dubbi clinici e impatto
                psicologico.
              </p>
            </div>

            <div className="hero-grid">
              {heroTiles.map((tile) => (
                <article className="info-tile" key={tile.number}>
                  <span>{tile.number}</span>
                  <h3>{tile.title}</h3>
                  <p>{tile.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section section-alt" id="progetto">
          <div className="section-heading" data-reveal>
            <p className="eyebrow">Il bisogno che affronta</p>
            <h2>Un momento ad alto valore emotivo, ma spesso scoperto sul piano pratico.</h2>
          </div>

          <div className="problem-grid">
            <article className="problem-card" data-reveal>
              <h3>Difficolta principali</h3>
              <ul>
                {problems.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
            <article className="problem-card" data-reveal>
              <h3>Vantaggi percepiti</h3>
              <ul>
                {benefits.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          </div>
        </section>

        <section className="section" id="servizi">
          <div className="section-heading" data-reveal>
            <p className="eyebrow">Cosa include</p>
            <h2>Non una semplice polizza: un ecosistema di coperture e servizi.</h2>
          </div>

          <div className="service-grid">
            {services.map((service) => (
              <article className="service-card" key={service.title} data-reveal>
                <h3>{service.title}</h3>
                <p>{service.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section timeline-section">
          <div className="section-heading" data-reveal>
            <p className="eyebrow">Percorso coperto</p>
            <h2>Una linea continua: dalla ricerca di gravidanza ai primi anni del bambino.</h2>
          </div>

          <div className="timeline">
            {timeline.map((item) => (
              <article className="timeline-step" key={item.number} data-reveal>
                <span>{item.number}</span>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section section-alt" id="modello">
          <div className="section-heading" data-reveal>
            <p className="eyebrow">Posizionamento</p>
            <h2>Un concept da valorizzare come copertura complementare, non come prodotto isolato.</h2>
          </div>

          <div className="model-grid">
            <article className="model-card emphasis" data-reveal>
              <span className="tag">Lettura strategica</span>
              <p>
                Il materiale di progetto suggerisce una direzione chiara: Time2Born funziona
                meglio come polizza aggiuntiva o servizio premium integrato in offerte gia
                esistenti, con un forte focus su target specifici.
              </p>
            </article>
            <article className="model-card" data-reveal>
              <h3>Punti di forza</h3>
              <ul>
                {strengths.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
            <article className="model-card" data-reveal>
              <h3>Vincoli da gestire</h3>
              <ul>
                {constraints.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          </div>

          <div className="audience-strip" data-reveal>
            <p>Canali naturali di vendita</p>
            <div>
              {channels.map((channel) => (
                <span key={channel}>{channel}</span>
              ))}
            </div>
          </div>
        </section>

        <section className="section" id="team">
          <div className="section-heading" data-reveal>
            <p className="eyebrow">Organizzazione</p>
            <h2>Una squadra multidisciplinare per trasformare il concept in offerta.</h2>
          </div>

          <div className="team-grid">
            {team.map((member) => (
              <article
                className={`team-card${member.featured ? " lead-card" : ""}`}
                key={member.name}
                data-reveal
              >
                <span>{member.role}</span>
                <h3>{member.name}</h3>
                <p>{member.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section cta-section">
          <div className="cta-card" data-reveal>
            <p className="eyebrow">Next step</p>
            <h2>Una base pronta per presentare Time2Born a partner, investitori o stakeholder.</h2>
            <p>
              La pagina racconta il progetto in modo veloce e credibile. Da qui si puo
              evolvere verso sito definitivo, deck commerciale o MVP digitale.
            </p>
            <a className="button button-primary" href="#top">
              Torna all&apos;inizio
            </a>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <p>time2born</p>
        <p>Concept vetrina per progetto PMA/FIV e supporto famiglia.</p>
        <p>&copy; {year} Time2Born</p>
      </footer>
    </div>
  );
}

export default App;
