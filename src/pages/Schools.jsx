import React from "react";
import { Link } from "react-router-dom";
import { SCHOOLS, DIVISIONS } from "../data/divisions.js";

function initials(name) {
  return name
    .replace(/^St\.\s*/, "")
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((w) => w[0])
    .join("")
    .toUpperCase();
}

// Which divisions a school fields a team in, matched loosely on the school name.
function divisionsFor(name) {
  const short = name.replace(/^St\.\s*/, "").split(" ")[0];
  return DIVISIONS.filter((d) => d.teams.some((t) => t.includes(short)));
}

export default function Schools() {
  return (
    <>
      <div className="pagehead">
        <div className="pagehead-in">
          <h1>Schools</h1>
          <p>Six South Side schools field teams this fall. Want in next season? <Link to="/contact">Get in touch</Link>.</p>
        </div>
      </div>

      <div className="page">
        <div className="school-grid">
          {SCHOOLS.map((s) => {
            const divs = divisionsFor(s.name);
            return (
              <article className="school" key={s.name}>
                {s.logo ? (
                  <img className="school-logo" src={s.logo} alt="" />
                ) : (
                  <span className="school-logo school-logo-fallback" aria-hidden="true">{initials(s.name)}</span>
                )}
                <h2>{s.name}</h2>
                <p className="school-divs">
                  {divs.length ? divs.map((d) => d.navLabel).join(" · ") : "Roster to be confirmed"}
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </>
  );
}
