import { teamLead, teamMembers, teamWorkflow } from "../data/siteContent";

function TeamPage() {
  const teamRoster = [
    {
      role: teamLead.role,
      name: teamLead.name,
      text: teamLead.text,
    },
    ...teamMembers,
  ];

  return (
    <section className="screen-page">
      <div className="screen-head" data-reveal>
        <div>
          <p className="eyebrow">Team</p>
          <h1>Un team multidisciplinare per trasformare Time2Born in un servizio concreto.</h1>
          <p className="lead">
            Il progetto riunisce competenze diverse per sviluppare il prodotto, costruire le
            partnership, seguire i clienti e sostenere la crescita del servizio.
          </p>
        </div>

        <div className="chip-strip">
          {teamWorkflow.map((item) => (
            <span key={item}>{item}</span>
          ))}
        </div>
      </div>

      <div className="screen-layout stack-layout">
        <article className="canvas-card accent-card" data-reveal>
          <h2>Competenze diverse, stesso livello di responsabilita nel progetto.</h2>
          <p>
            Time2Born cresce attraverso un lavoro condiviso tra sviluppo, finanza,
            clienti, marketing, vendite e coordinamento generale. La forza del team sta
            nella complementarita dei ruoli, non in una gerarchia esposta nella pagina.
          </p>
        </article>

        <div className="team-card-grid">
          {teamRoster.map((member) => (
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
