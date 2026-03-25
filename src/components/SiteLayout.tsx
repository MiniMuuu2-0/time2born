import { useEffect, useState } from "react";
import { NavLink, Outlet, useLocation } from "react-router-dom";

const navItems = [
  { to: "/", label: "Home", end: true },
  { to: "/progetto", label: "Progetto" },
  { to: "/servizi", label: "Servizi" },
  { to: "/modello", label: "Modello" },
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

          <NavLink className="nav-cta" to="/modello" onClick={() => setMenuOpen(false)}>
            Vedi il canvas
          </NavLink>
        </div>
      </header>

      <main className="site-main">
        <Outlet />
      </main>

      <footer className="site-footer">
        <p>time2born</p>
        <p>Concept assicurativo per PMA, supporto e primi anni della famiglia.</p>
        <p>&copy; {year} Time2Born</p>
      </footer>
    </div>
  );
}

export default SiteLayout;
