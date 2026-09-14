import React from "react";
import { buildTable, progress } from "../lib/standings.js";

const FORM_WORD = { W: "Won", D: "Drew", L: "Lost" };

export default function LeagueTable({ division, results, compact = false }) {
  const table = buildTable(division, results);
  const { played, total } = progress(division.key, results);
  const anyPlayed = played > 0;

  return (
    <div className="table-block">
      <div className="table-scroll">
        <table className="ltable">
          <caption className="vh">
            {division.label} league table — {played} of {total} regular season matches played
          </caption>
          <thead>
            <tr>
              <th scope="col" className="c-pos">#</th>
              <th scope="col" className="c-team">Team</th>
              <th scope="col" title="Played">P</th>
              <th scope="col" title="Won">W</th>
              <th scope="col" title="Drawn">D</th>
              <th scope="col" title="Lost">L</th>
              <th scope="col" title="Goals for">GF</th>
              <th scope="col" title="Goals against">GA</th>
              <th scope="col" title="Goal difference">GD</th>
              <th scope="col" className="c-pts" title="Points">Pts</th>
              {!compact && <th scope="col" className="c-form">Last 5</th>}
            </tr>
          </thead>
          <tbody>
            {table.map((row) => (
              <tr key={row.team} className={anyPlayed && row.position === 1 ? "is-top" : ""}>
                <td className="c-pos">{row.position}</td>
                <th scope="row" className="c-team">{row.team}</th>
                <td>{row.played}</td>
                <td>{row.won}</td>
                <td>{row.drawn}</td>
                <td>{row.lost}</td>
                <td>{row.goalsFor}</td>
                <td>{row.goalsAgainst}</td>
                <td>{row.goalDiff > 0 ? `+${row.goalDiff}` : row.goalDiff}</td>
                <td className="c-pts">{row.points}</td>
                {!compact && (
                  <td className="c-form">
                    {row.form.length === 0 ? (
                      <span className="form-none">—</span>
                    ) : (
                      <span className="form-strip">
                        {row.form.map((f, i) => (
                          <span key={i} className={`form-chip f-${f}`}>
                            <span aria-hidden="true">{f}</span>
                            <span className="vh">{FORM_WORD[f]}</span>
                          </span>
                        ))}
                      </span>
                    )}
                  </td>
                )}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <p className="table-foot">
        {anyPlayed
          ? `${played} of ${total} regular season matches played. Ties broken by goal difference, then goals scored.`
          : `No scores in yet. The table fills in as results are entered — ${total} regular season matches to play.`}
      </p>
    </div>
  );
}
