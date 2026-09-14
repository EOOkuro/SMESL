import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { DIVISIONS } from "../data/divisions.js";
import { useResults, toResultsFile } from "../lib/store.js";
import { weeksFor } from "../lib/standings.js";
import { BYES } from "../data/fixtures.js";
import LeagueTable from "../components/LeagueTable.jsx";

function niceDate(iso) {
  if (!iso) return "";
  const [y, m, d] = iso.split("-").map(Number);
  return new Date(y, m - 1, d).toLocaleDateString("en-US", { month: "short", day: "numeric" });
}

function ScoreRow({ match, score, onChange }) {
  const [h, a] = score || ["", ""];

  if (match.tbd || !match.home || !match.away) {
    return (
      <li className="score-row is-tbd">
        <span className="sr-time">{match.time}</span>
        <span className="sr-pending">
          {match.gameTag ? `${match.gameTag}: ` : ""}
          {match.label || `${match.home} v ${match.away}`}
          <em>Opponents set by results</em>
        </span>
      </li>
    );
  }

  return (
    <li className={`score-row ${score ? "is-done" : ""}`}>
      <span className="sr-time">{match.time}</span>
      <label className="sr-side">
        <span className="sr-team">{match.home}</span>
        <input
          type="number"
          min="0"
          max="99"
          inputMode="numeric"
          value={h}
          aria-label={`${match.home} goals`}
          onChange={(e) => onChange(e.target.value, a)}
        />
      </label>
      <span className="sr-dash">–</span>
      <label className="sr-side sr-side-right">
        <input
          type="number"
          min="0"
          max="99"
          inputMode="numeric"
          value={a}
          aria-label={`${match.away} goals`}
          onChange={(e) => onChange(h, e.target.value)}
        />
        <span className="sr-team">{match.away}</span>
      </label>
      {score && (
        <button className="sr-clear" onClick={() => onChange("", "")} aria-label={`Clear ${match.home} v ${match.away}`}>
          Clear
        </button>
      )}
    </li>
  );
}

export default function Scores() {
  const { results, local, unpublishedCount, setScore, replaceAll, clearLocal } = useResults();
  const [key, setKey] = useState(DIVISIONS.find((d) => d.standings).key);
  const [flash, setFlash] = useState("");
  const fileRef = useRef(null);

  const division = DIVISIONS.find((d) => d.key === key);
  const weeks = weeksFor(division.key);

  function say(msg) {
    setFlash(msg);
    window.setTimeout(() => setFlash(""), 4000);
  }

  function handleChange(id, h, a) {
    if (h === "" || a === "") setScore(id, "", "");
    else setScore(id, Math.max(0, Number(h)), Math.max(0, Number(a)));
  }

  async function copyForFile() {
    try {
      await navigator.clipboard.writeText(toResultsFile(local));
      say("Copied. Paste it inside RESULTS in src/data/results.js, then redeploy.");
    } catch {
      say("Couldn't reach the clipboard. Use Download instead.");
    }
  }

  function download() {
    const blob = new Blob([JSON.stringify(local, null, 2)], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `smesl-scores-${new Date().toISOString().slice(0, 10)}.json`;
    a.click();
    URL.revokeObjectURL(url);
    say("Downloaded.");
  }

  function importFile(e) {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => {
      try {
        const data = JSON.parse(String(reader.result));
        replaceAll({ ...local, ...data });
        say("Scores loaded from file.");
      } catch {
        say("That file isn't valid score JSON.");
      }
      e.target.value = "";
    };
    reader.readAsText(file);
  }

  function reset() {
    if (window.confirm("Clear every score typed on this device? Published results stay.")) {
      clearLocal();
      say("Cleared.");
    }
  }

  return (
    <>
      <div className="pagehead">
        <div className="pagehead-in">
          <h1>Enter scores</h1>
          <p>
            Type a final score and the table recalculates straight away. Scores save to this device
            as you go — publish them when the match day is done.
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
        <div className="publish">
          <div>
            <h2 className="publish-count">
              {unpublishedCount} unpublished score{unpublishedCount === 1 ? "" : "s"}
            </h2>
            <p>
              Everyone else sees the results committed in <code>src/data/results.js</code>. Copy
              yours in there to make them official.
            </p>
          </div>
          <div className="publish-actions">
            <button className="btn" onClick={copyForFile} disabled={unpublishedCount === 0}>
              Copy for results.js
            </button>
            <button className="btn btn-quiet" onClick={download} disabled={unpublishedCount === 0}>
              Download JSON
            </button>
            <button className="btn btn-quiet" onClick={() => fileRef.current?.click()}>
              Load JSON
            </button>
            <button className="btn btn-quiet btn-danger" onClick={reset} disabled={unpublishedCount === 0}>
              Clear device
            </button>
            <input ref={fileRef} type="file" accept="application/json" onChange={importFile} hidden />
          </div>
        </div>

        {flash && <p className="flash" role="status">{flash}</p>}

        {!division.standings && (
          <p className="notice">
            {division.label} doesn't keep a table, so scores here won't appear anywhere public. You
            can still record them for your own reference.
          </p>
        )}

        <div className="score-weeks">
          {weeks.map((w) => {
            const bye = BYES[`${division.key}-${w.week}`];
            return (
              <section className="score-week" key={w.week}>
                <div className="week-head">
                  <h3>Week {w.week}</h3>
                  <span className="week-date">
                    {niceDate(w.date)}
                    {w.matches[0]?.stage === "playoff" ? " · playoff" : ""}
                  </span>
                </div>
                <ul className="score-rows">
                  {w.matches.map((m) => (
                    <ScoreRow
                      key={m.id}
                      match={m}
                      score={results[m.id]}
                      onChange={(h, a) => handleChange(m.id, h, a)}
                    />
                  ))}
                </ul>
                {bye && <p className="week-bye">{/^St\./.test(bye) ? `Bye: ${bye}` : bye}</p>}
              </section>
            );
          })}
        </div>

        {division.standings && (
          <section className="section">
            <div className="section-head">
              <h2>Table as it stands</h2>
              <Link className="more" to="/table">All divisions</Link>
            </div>
            <LeagueTable division={division} results={results} />
          </section>
        )}
      </div>
    </>
  );
}
