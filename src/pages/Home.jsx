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

  // Weather cancellation state
  const isCancelled = true; 
  const cancellationNotice = "MATCHES CANCELLED TODAY: Unplayable field conditions due to heavy rain and waterlogging. All scheduled fixtures for today will be rescheduled. Stay tuned for update details!";

  return (
    <>
      {/* Weather Cancellation Banner */}
      {isCancelled && (
        <div className="alert-banner alert-cancellation" role="alert">
          <div className="alert-in">
            <span className="alert-badge">FIELD STATUS ALERT</span>
            <p className="alert-message">{cancellationNotice}</p>
          </div>
        </div>
      )}

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
