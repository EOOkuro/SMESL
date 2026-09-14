import React from "react";
import { Link } from "react-router-dom";
import { DIVISIONS } from "../data/divisions.js";
import { useResults } from "../lib/store.js";
import { progress } from "../lib/standings.js";

export default function Divisions() {
  const { results } = useResults();

  return (
    <>
      <div className="pagehead">
        <div className="pagehead-in">
          <h1>Divisions</h1>
          <p>Three age groups, three formats, one field. Pick yours for schedule, table and rules.</p>
        </div>
      </div>

      <div className="page">
        <div className="div-cards">
          {DIVISIONS.map((d) => {
            const { played, total } = progress(d.key, results);
            return (
              <Link className="div-card" to={`/divisions/${d.slug}`} key={d.key}>
                <h2>{d.label}</h2>
                <p className="dc-desc">{d.description}</p>
                <dl className="dc-facts">
                  <div>
                    <dt>Teams</dt>
                    <dd>{d.teams.length}</dd>
                  </div>
                  <div>
                    <dt>Kickoffs</dt>
                    <dd>{d.slots.join(", ")}</dd>
                  </div>
                  <div>
                    <dt>Table</dt>
                    <dd>{d.standings ? `${played}/${total} played` : "Not kept"}</dd>
                  </div>
                </dl>
              </Link>
            );
          })}
        </div>
      </div>
    </>
  );
}
