import React, { useState } from "react";
import { Link } from "react-router-dom";
import { DIVISIONS, SEASON } from "../data/divisions.js";
import { useResults } from "../lib/store.js";
import { weeksFor } from "../lib/standings.js";
import MatchList from "../components/MatchList.jsx";

export default function Schedule() {
  const { results } = useResults();
  const [key, setKey] = useState(DIVISIONS[0].key);
  const division = DIVISIONS.find((d) => d.key === key);
  const regular = weeksFor(division.key, "regular");
  const playoff = weeksFor(division.key, "playoff");

  return (
    <>
      <div className="pagehead">
        <div className="pagehead-in">
          <h1>Schedule</h1>
          <p>
            {SEASON.label}, {SEASON.start} – {SEASON.end}. Every match at {SEASON.venue}, {SEASON.address}.
          </p>
        </div>
      </div>

      <div className="switch" role="tablist" aria-label="Division">
        <div className="switch-in">
          {DIVISIONS.map((d) => (
            <button
              key={d.key}
              role="tab"
              aria-selected={key === d.key}
              className={key === d.key ? "is-active" : ""}
              onClick={() => setKey(d.key)}
            >
              {d.navLabel}
            </button>
          ))}
        </div>
      </div>

      <div className="page">
        <div className="section-head">
          <h2>Regular season</h2>
          <Link className="more" to={`/divisions/${division.slug}`}>Division page</Link>
        </div>
        <MatchList weeks={regular} division={division} results={results} />

        {playoff.length > 0 && (
          <>
            <div className="section-head sh-gap">
              <h2>{division.key === "middle" ? "Placement bracket" : "Playoffs"}</h2>
            </div>
            <MatchList weeks={playoff} division={division} results={results} />
          </>
        )}
      </div>
    </>
  );
}
