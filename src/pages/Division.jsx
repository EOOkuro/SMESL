import React from "react";
import { Link, useParams } from "react-router-dom";
import { divisionBySlug, SEASON } from "../data/divisions.js";
import { useResults } from "../lib/store.js";
import { weeksFor } from "../lib/standings.js";
import LeagueTable from "../components/LeagueTable.jsx";
import MatchList from "../components/MatchList.jsx";
import NotFound from "./NotFound.jsx";

export default function Division() {
  const { slug } = useParams();
  const division = divisionBySlug(slug);
  const { results } = useResults();

  if (!division) return <NotFound />;

  const regular = weeksFor(division.key, "regular");
  const playoff = weeksFor(division.key, "playoff");

  return (
    <>
      <div className="pagehead">
        <div className="pagehead-in">
          <p className="crumb">
            <Link to="/divisions">Divisions</Link>
          </p>
          <h1>{division.label}</h1>
          <p>{division.description}</p>
        </div>
      </div>

      <div className="page">
        <ul className="chips">
          {division.teams.map((t) => (
            <li className="chip" key={t}>{t}</li>
          ))}
        </ul>

        <dl className="facts">
          {division.quickfacts.map((f) => (
            <div key={f.label}>
              <dt>{f.label}</dt>
              <dd>{f.value}</dd>
            </div>
          ))}
        </dl>

        {division.standings && (
          <section className="section">
            <div className="section-head">
              <h2>Table</h2>
              <Link className="more" to="/scores">Enter a score</Link>
            </div>
            <LeagueTable division={division} results={results} />
          </section>
        )}

        <section className="section">
          <div className="section-head">
            <h2>Regular season</h2>
            <span className="section-note">All matches at {SEASON.venue}</span>
          </div>
          <MatchList weeks={regular} division={division} results={results} />
        </section>

        {playoff.length > 0 && (
          <section className="section">
            <div className="section-head">
              <h2>{division.key === "middle" ? "Placement bracket" : "Playoffs"}</h2>
              <span className="section-note">Seeded by the final table</span>
            </div>
            <MatchList weeks={playoff} division={division} results={results} />
          </section>
        )}

        {division.flexFormat && (
          <section className="section">
            <div className="section-head">
              <h2>Flex format — 5v5 or 9v9</h2>
            </div>
            <div className="cards">
              {division.flexFormat.map((card) => (
                <article className="card" key={card.title}>
                  <h3>{card.title}</h3>
                  <ul>
                    {card.items.map((i) => (
                      <li key={i}>{i}</li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </section>
        )}

        <section className="section">
          <div className="section-head">
            <h2>Good to know</h2>
          </div>
          <ul className="bullets">
            {division.goodToKnow.map((i) => (
              <li key={i}>{i}</li>
            ))}
          </ul>
          <p className="aside">{division.contact}</p>
        </section>
      </div>
    </>
  );
}
