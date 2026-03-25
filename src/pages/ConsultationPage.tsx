import { ChangeEvent, FormEvent, useState } from "react";
import { Link } from "react-router-dom";
import { consultationFaq } from "../data/siteContent";

type ConsultationFormState = {
  fullName: string;
  email: string;
  phone: string;
  city: string;
  profile: string;
  timeline: string;
  contactPreference: string;
  message: string;
  consent: boolean;
};

const initialFormState: ConsultationFormState = {
  fullName: "",
  email: "",
  phone: "",
  city: "",
  profile: "",
  timeline: "",
  contactPreference: "Telefono",
  message: "",
  consent: false,
};

function ConsultationPage() {
  const [formState, setFormState] = useState<ConsultationFormState>(initialFormState);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const target = event.target;
    const { name } = target;

    if (target instanceof HTMLInputElement && target.type === "checkbox") {
      setFormState((current) => ({ ...current, [name]: target.checked }));
      return;
    }

    setFormState((current) => ({ ...current, [name]: target.value }));
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitted(true);
    setFormState(initialFormState);
  };

  return (
    <section className="screen-page consultation-page">
      <div className="screen-head consultation-head" data-reveal>
        <div>
          <p className="eyebrow">Richiedi una consulenza</p>
          <h1>Parliamo del percorso piu adatto per capire come funziona Time2Born.</h1>
          <p className="lead">
            Compila il modulo per essere ricontattato da un consulente e ricevere una prima
            valutazione orientativa sulle tutele e sul servizio.
          </p>
        </div>

        <div className="chip-strip consultation-strip">
          <span>Primo contatto orientativo senza impegno.</span>
          <span>Richiesta guidata in meno di due minuti.</span>
          <span>Riscontro previsto entro un giorno lavorativo.</span>
        </div>
      </div>

      <div className="screen-layout consultation-layout">
        <article className="feature-card consultation-intro" data-reveal>
          <span className="tag">Cosa succede dopo</span>
          <h2>Una richiesta semplice, con un percorso chiaro fin dal primo contatto.</h2>
          <p>
            Dopo l'invio della richiesta, il team ricontatta la coppia per raccogliere il
            contesto iniziale, chiarire il bisogno e spiegare come puo essere impostata una
            consulenza dedicata.
          </p>

          <ul className="bullet-list">
            <li>Contatto iniziale per comprendere fase del percorso e priorita.</li>
            <li>Indicazioni sulle coperture e sul livello di supporto piu adatto.</li>
            <li>Possibilita di approfondire il modello in una consulenza dedicata.</li>
          </ul>

          <div className="consultation-note">
            <strong>Preferisci leggere prima?</strong>
            <p>
              Puoi comunque visitare la pagina dedicata a{" "}
              <Link to="/modello">copertura e sostenibilita di Time2Born</Link>.
            </p>
            <p>
              Durante la consulenza vengono condivise anche le prime indicazioni orientative
              su copertura e impostazione economica del servizio.
            </p>
          </div>
        </article>

        <article className="canvas-card consultation-form-card" data-reveal>
          <div className="consultation-card-head">
            <span className="tag">Modulo di richiesta</span>
            <h3>Richiedi una consulenza</h3>
            <p>
              Inserisci i dati essenziali per essere ricontattato da un referente Time2Born.
            </p>
          </div>

          {submitted ? (
            <div className="consultation-success" aria-live="polite">
              <strong>Richiesta inviata</strong>
              <p>
                Abbiamo registrato la tua richiesta di consulenza. Un referente Time2Born ti
                contattera entro un giorno lavorativo tramite il canale indicato.
              </p>
              <button
                className="button button-primary"
                type="button"
                onClick={() => setSubmitted(false)}
              >
                Invia una nuova richiesta
              </button>
            </div>
          ) : (
            <form className="consultation-form" onSubmit={handleSubmit}>
              <div className="form-grid">
                <label className="field">
                  <span>Nome e cognome</span>
                  <input
                    required
                    type="text"
                    name="fullName"
                    autoComplete="name"
                    placeholder="Es. Giulia Rossi"
                    value={formState.fullName}
                    onChange={handleChange}
                  />
                </label>

                <label className="field">
                  <span>Email</span>
                  <input
                    required
                    type="email"
                    name="email"
                    autoComplete="email"
                    placeholder="nome@email.it"
                    value={formState.email}
                    onChange={handleChange}
                  />
                </label>

                <label className="field">
                  <span>Telefono</span>
                  <input
                    required
                    type="tel"
                    name="phone"
                    autoComplete="tel"
                    placeholder="+39 333 1234567"
                    value={formState.phone}
                    onChange={handleChange}
                  />
                </label>

                <label className="field">
                  <span>Citta</span>
                  <input
                    type="text"
                    name="city"
                    autoComplete="address-level2"
                    placeholder="Es. Milano"
                    value={formState.city}
                    onChange={handleChange}
                  />
                </label>

                <label className="field">
                  <span>Profilo</span>
                  <select name="profile" required value={formState.profile} onChange={handleChange}>
                    <option value="" disabled>
                      Seleziona un'opzione
                    </option>
                    <option value="Stiamo valutando la PMA">Stiamo valutando la PMA</option>
                    <option value="Abbiamo gia iniziato il percorso">
                      Abbiamo gia iniziato il percorso
                    </option>
                    <option value="Cerchiamo una copertura dedicata">
                      Cerchiamo una copertura dedicata
                    </option>
                    <option value="Vogliamo capire il servizio">Vogliamo capire il servizio</option>
                  </select>
                </label>

                <label className="field">
                  <span>Quando preferite essere contattati</span>
                  <select
                    name="timeline"
                    required
                    value={formState.timeline}
                    onChange={handleChange}
                  >
                    <option value="" disabled>
                      Scegli una fascia
                    </option>
                    <option value="Entro 24 ore">Entro 24 ore</option>
                    <option value="Entro questa settimana">Entro questa settimana</option>
                    <option value="Non abbiamo urgenza">Non abbiamo urgenza</option>
                  </select>
                </label>
              </div>

              <label className="field">
                <span>Canale di contatto preferito</span>
                <div className="choice-row" role="radiogroup" aria-label="Canale di contatto">
                  {["Telefono", "Email", "WhatsApp"].map((option) => (
                    <label className="choice-pill" key={option}>
                      <input
                        checked={formState.contactPreference === option}
                        type="radio"
                        name="contactPreference"
                        value={option}
                        onChange={handleChange}
                      />
                      <span>{option}</span>
                    </label>
                  ))}
                </div>
              </label>

              <label className="field">
                <span>Messaggio</span>
                <textarea
                  name="message"
                  rows={5}
                  placeholder="Raccontaci in breve in che fase del percorso vi trovate o cosa volete capire meglio."
                  value={formState.message}
                  onChange={handleChange}
                />
              </label>

              <label className="consent-row">
                <input
                  required
                  type="checkbox"
                  name="consent"
                  checked={formState.consent}
                  onChange={handleChange}
                />
                <span>
                  Confermo di voler essere ricontattato per una consulenza informativa su
                  Time2Born.
                </span>
              </label>

              <div className="form-actions">
                <button className="button button-primary" type="submit">
                  Invia richiesta
                </button>
                <p className="form-disclaimer">Ti ricontatteremo tramite il canale indicato.</p>
              </div>
            </form>
          )}
        </article>
      </div>

      <div className="faq-grid" data-reveal>
        {consultationFaq.map((item) => (
          <details className="faq-card" key={item.question}>
            <summary>{item.question}</summary>
            <p>{item.answer}</p>
          </details>
        ))}
      </div>
    </section>
  );
}

export default ConsultationPage;
