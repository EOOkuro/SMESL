import React from "react";
import { Link } from "react-router-dom";
import { DIVISIONS, SEASON } from "../data/divisions.js";
import { useResults } from "../lib/store.js";
import { buildTable, progress, recentResults, fixturesFor } from "../lib/standings.js";

function nextMatchDay(results) {
  const unplayed = DIVISIONS.flatMap((d) => fixturesFor(d.key))
    .filter((f) => !Array.isArray(results[f.id]) && f.date)
    .sort((a, b) => a.date.localeCompare(b.date));
  return unplayed[0] || null;
}

export default function Home() {
  const { results } = useResults();
  const ranked = DIVISIONS.filter((d) => d.standings);
  const recent = recentResults(results, 4);
  const next = nextMatchDay(results);

  return (
    <>
      <section className="hero">
        <div className="hero-in">
          <p className="hero-kicker">{SEASON.label}</p>
          <h1 className="hero-title">
            South Side<br />school soccer,<br />every Saturday.
          </h1>
          <div className="hero-meta">
            <div>
              <span className="hm-num">{SEASON.start} – {SEASON.end}</span>
              <span className="hm-lab">Ten weeks at {SEASON.venue}</span>
            </div>
            <div>
              <span className="hm-num">{DIVISIONS.reduce((n, d) => n + d.teams.length, 0)} teams</span>
              <span className="hm-lab">Across three divisions, Pre-K through 8th</span>
            </div>
          </div>
          <div className="hero-actions">
            <Link className="btn" to="/table">See the table</Link>
            <Link className="btn btn-quiet" to="/schedule">Full schedule</Link>
          </div>
        </div>
      </section>

      <section className="band">
        <div className="band-in">
          <div className="band-head">
            <h2>Where things stand</h2>
            <Link className="more" to="/table">All divisions</Link>
          </div>

          <div className="mini-tables">
            {ranked.map((d) => {
              const table = buildTable(d, results).slice(0, 3);
              const { played, total } = progress(d.key, results);
              return (
                <article className="mini" key={d.key}>
                  <h3>
                    <Link to={`/divisions/${d.slug}`}>{d.label}</Link>
                  </h3>
                  <p className="mini-sub">{played} of {total} matches played</p>
                  <ol className="mini-list">
                    {table.map((r) => (
                      <li key={r.team}>
                        <span className="mini-pos">{r.position}</span>
                        <span className="mini-team">{r.team}</span>
                        <span className="mini-pts">{r.points}</span>
                      </li>
                    ))}
                  </ol>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="band band-alt">
        <div className="band-in split">
          <div>
            <h2>Latest results</h2>
            {recent.length === 0 ? (
              <p className="empty">
                Nothing played yet. Once a match day wraps, scores go in on the{" "}
                <Link to="/scores">scores page</Link> and the table updates itself.
              </p>
            ) : (
              <ul className="result-list">
                {recent.map((r) => (
                  <li key={r.id}>
                    <span className="rl-teams">{r.home} v {r.away}</span>
                    <span className="rl-score">{r.score[0]}–{r.score[1]}</span>
                  </li>
                ))}
              </ul>
            )}
          </div>
          <div>
            <h2>Next up</h2>
            {next ? (
              <p className="next-line">
                <strong>Week {next.week}</strong> — {next.date}. First kickoff {next.time}
                {" "}at {SEASON.venue}.
              </p>
            ) : (
              <p className="empty">Season complete.</p>
            )}
            <p className="next-note">
              Gold shirts, navy shorts, navy socks. Shin guards required, fully covered by socks.
              Arrive 15 minutes before kickoff.
            </p>
            <Link className="more" to="/rules">Rules and format</Link>
          </div>
        </div>
      </section>
    </>
  );
}
