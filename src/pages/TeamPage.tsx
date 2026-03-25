import { teamLead, teamMembers, teamWorkflow } from "../data/siteContent";

function TeamPage() {
  return (
    <section className="screen-page">
      <div className="screen-head" data-reveal>
        <div>
          <p className="eyebrow">Team</p>
          <h1>Dietro il concept c'e una squadra che copre visione, execution e relazione.</h1>
          <p className="lead">
            La pagina team deve trasmettere affidabilita: non solo idee, ma ruoli chiari per
            costruire prodotto, canali, sostenibilita economica e gestione clienti.
          </p>
        </div>

        <div className="chip-strip">
          {teamWorkflow.map((item) => (
            <span key={item}>{item}</span>
          ))}
        </div>
      </div>

      <div className="screen-layout split-layout">
        <article className="feature-card lead-feature" data-reveal>
          <span className="tag">{teamLead.role}</span>
          <h2>{teamLead.name}</h2>
          <p>{teamLead.text}</p>

          <div className="lead-note">
            <strong>Ruolo della pagina</strong>
            <p>
              Rafforza la credibilita del progetto e fa vedere che il modello puo essere
              attivato davvero, non solo raccontato bene.
            </p>
          </div>
        </article>

        <div className="team-card-grid">
          {teamMembers.map((member) => (
            <article className="team-panel" key={member.name} data-reveal>
              <span>{member.role}</span>
              <h3>{member.name}</h3>
              <p>{member.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default TeamPage;
