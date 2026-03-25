import { useEffect, useState } from "react";
import { NavLink, Outlet, useLocation } from "react-router-dom";

const navItems = [
  { to: "/", label: "Home", end: true },
  { to: "/progetto", label: "Progetto" },
  { to: "/servizi", label: "Servizi" },
  { to: "/modello", label: "Copertura" },
  { to: "/team", label: "Team" },
];

function SiteLayout() {
  const { pathname } = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);
  const year = new Date().getFullYear();
  const logoPath = `${import.meta.env.BASE_URL}assets/logo-time2born-mark.svg`;

  useEffect(() => {
    setMenuOpen(false);
    window.scrollTo(0, 0);
  }, [pathname]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 760) {
        setMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

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
      { threshold: 0.16 }
    );

    revealNodes.forEach((node) => {
      node.classList.remove("is-visible");
      observer.observe(node);
    });

    return () => {
      observer.disconnect();
    };
  }, [pathname]);

  return (
    <div className="page-shell">
      <header className="site-header">
        <div className="brand-lockup">
          <NavLink className="brand" to="/" aria-label="Time2Born home">
            <img src={logoPath} alt="Logo Time2Born" />
          </NavLink>
        </div>

        <button
          className={`nav-toggle${menuOpen ? " is-open" : ""}`}
          type="button"
          aria-expanded={menuOpen}
          aria-controls="primary-navigation"
          onClick={() => setMenuOpen((current) => !current)}
        >
          <span />
          <span />
          <span />
        </button>

        <div className={`nav-shell${menuOpen ? " is-open" : ""}`}>
          <nav
            className="site-nav"
            id="primary-navigation"
            aria-label="Navigazione principale"
          >
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.end}
                className={({ isActive }) => (isActive ? "is-active" : "")}
                onClick={() => setMenuOpen(false)}
              >
                {item.label}
              </NavLink>
            ))}
          </nav>

          <NavLink className="nav-cta" to="/consulenza" onClick={() => setMenuOpen(false)}>
            Richiedi una consulenza
          </NavLink>
        </div>
      </header>

      <main className="site-main">
        <Outlet />
      </main>

      <footer className="site-footer">
        <div className="footer-grid">
          <div className="footer-column">
            <p className="footer-brand">time2born</p>
            <p>
              Protezione economica e supporto dedicato per chi affronta un percorso PMA.
            </p>
          </div>

          <div className="footer-column">
            <p className="footer-title">Percorso</p>
            <div className="footer-links">
              {navItems.map((item) => (
                <NavLink key={item.to} to={item.to} end={item.end}>
                  {item.label}
                </NavLink>
              ))}
            </div>
          </div>

          <div className="footer-column">
            <p className="footer-title">Prossimo passo</p>
            <p>
              La consulenza iniziale serve a capire il bisogno della coppia e il possibile
              perimetro del servizio.
            </p>
            <NavLink className="footer-cta" to="/consulenza">
              Richiedi una consulenza
            </NavLink>
          </div>
        </div>
        <p className="footer-bottom">&copy; {year} Time2Born</p>
      </footer>
    </div>
  );
}

export default SiteLayout;
