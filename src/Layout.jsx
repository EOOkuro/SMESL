import React, { useEffect, useState } from "react";
import { NavLink, Outlet, useLocation, Link } from "react-router-dom";
import { SEASON } from "./data/divisions.js";

const NAV_ITEMS = [
  { to: "/table", label: "Table" },
  { to: "/schedule", label: "Schedule" },
  { to: "/divisions", label: "Divisions" },
  { to: "/schools", label: "Schools" },
  { to: "/rules", label: "Rules" },
  { to: "/contact", label: "Contact" },
];

export default function Layout() {
  const [navOpen, setNavOpen] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    setNavOpen(false);
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="shell">
      <a className="skip" href="#main">Skip to content</a>

      <header className="masthead">
        <div className="masthead-in">
          <NavLink to="/" className="brand">
            <span className="brand-word">SMESL</span>
            <span className="brand-sub">Southside Middle &amp; Elementary School Soccer League</span>
          </NavLink>

          <button
            className="nav-toggle"
            aria-label={navOpen ? "Close menu" : "Open menu"}
            aria-expanded={navOpen}
            onClick={() => setNavOpen((o) => !o)}
          >
            <span />
            <span />
          </button>

          <nav className={`nav ${navOpen ? "is-open" : ""}`} aria-label="Main">
            {NAV_ITEMS.map((item) => (
              <NavLink key={item.to} to={item.to} className={({ isActive }) => (isActive ? "is-active" : "")}>
                {item.label}
              </NavLink>
            ))}
            <NavLink to="/scores" className="nav-cta">
              Enter scores
            </NavLink>
          </nav>
        </div>
      </header>

      <main id="main">
        <Outlet />
      </main>

      <footer className="foot">
        <div className="foot-in">
          <div className="foot-brand">
            <p className="foot-word">SMESL</p>
            <p>Southside Middle &amp; Elementary School Soccer League</p>
          </div>
          <div className="foot-cols">
            <div>
              <h4>Season</h4>
              <p>{SEASON.label}</p>
              <p>{SEASON.start} – {SEASON.end}</p>
            </div>
            <div>
              <h4>Where we play</h4>
              <p>{SEASON.venue}</p>
              <p>{SEASON.address}</p>
            </div>
            <div>
              <h4>Pages</h4>
              <p><Link to="/table">League table</Link></p>
              <p><Link to="/schedule">Full schedule</Link></p>
              <p><Link to="/guides">Cleat guide</Link></p>
              <p><Link to="/scores">Enter scores</Link></p>
            </div>
          </div>
        </div>
        <p className="foot-fine">© {SEASON.year} SMESL · Part of the South Side soccer pyramid</p>
      </footer>
    </div>
  );
}
