import React from "react";
import { Link } from "react-router-dom";
import { DIVISIONS } from "../data/divisions.js";
import { useResults } from "../lib/store.js";
import LeagueTable from "../components/LeagueTable.jsx";

export default function Table() {
  const { results, unpublishedCount } = useResults();
  const ranked = DIVISIONS.filter((d) => d.standings);
  const unranked = DIVISIONS.filter((d) => !d.standings);

  return (
    <>
      <div className="pagehead">
        <div className="pagehead-in">
          <h1>League Table</h1>
          <p>
            Three points for a win, one for a draw. Standings update automatically with match scores.
          </p>
        </div>
      </div>

      <div className="page">
        {unpublishedCount > 0 && (
          <p className="notice">
            {unpublishedCount} score{unpublishedCount === 1 ? "" : "s"} on this device haven't been
            published yet, so what you see here differs from what everyone else sees.{" "}
            <Link to="/scores">Publish them</Link>.
          </p>
        )}

        {ranked.map((d) => (
          <section className="section" key={d.key}>
            <div className="section-head">
              <h2>{d.label}</h2>
              <Link className="more" to={`/divisions/${d.slug}`}>Division page</Link>
            </div>
            <LeagueTable division={d} results={results} />
          </section>
        ))}

        {unranked.map((d) => (
          <section className="section" key={d.key}>
            <div className="section-head">
              <h2>{d.label}</h2>
              <Link className="more" to={`/divisions/${d.slug}`}>Division page</Link>
            </div>
            <p className="empty">
              No table for this division. Match times are available on the division page.
            </p>
          </section>
        ))}
      </div>
    </>
  );
}
