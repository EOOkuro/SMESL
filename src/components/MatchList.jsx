import React from "react";
import { BYES } from "../data/fixtures.js";
import { matchStatus } from "../lib/standings.js";

function niceDate(iso) {
  if (!iso) return "";
  const [y, m, d] = iso.split("-").map(Number);
  return new Date(y, m - 1, d).toLocaleDateString("en-US", {
    weekday: "short",
    month: "short",
    day: "numeric",
  });
}

const STATUS_LABEL = {
  upcoming: "Upcoming",
  overdue: "Result pending",
};

function Fixture({ match, score }) {
  const status = matchStatus(match, score);

  if (status === "tbd") {
    return (
      <li className="fixture is-tbd">
        <span className="fx-time">{match.time}</span>
        <span className="fx-teams">
          <span className="fx-label">
            {match.gameTag ? `${match.gameTag}: ` : ""}
            {match.label || `${match.home ?? "TBD"} v ${match.away ?? "TBD"}`}
          </span>
        </span>
        <span className="fx-status fx-status-tbd">Opponents set by results</span>
      </li>
    );
  }

  const decided = status === "played";
  const homeWin = decided && score[0] > score[1];
  const awayWin = decided && score[1] > score[0];

  return (
    <li className={`fixture is-${status}`}>
      <span className="fx-time">{match.time}</span>
      <span className="fx-teams">
        {match.label ? (
          <span className="fx-label">{match.label}</span>
        ) : (
          <>
            <span className={`fx-team ${homeWin ? "is-winner" : ""}`}>{match.home}</span>
            <span className="fx-score">
              {decided ? `${score[0]} – ${score[1]}` : <span className="fx-v">v</span>}
            </span>
            <span className={`fx-team fx-away ${awayWin ? "is-winner" : ""}`}>{match.away}</span>
          </>
        )}
      </span>
      {match.gameTag && <span className="fx-tag">{match.gameTag}</span>}
      {!decided && (
        <span className={`fx-status fx-status-${status}`}>{STATUS_LABEL[status]}</span>
      )}
    </li>
  );
}

export default function MatchList({ weeks, division, results }) {
  return (
    <div className="weeks">
      {weeks.map((w) => {
        const bye = BYES[`${division.key}-${w.week}`];
        return (
          <section className="week" key={w.week}>
            <div className="week-head">
              <h3>Week {w.week}</h3>
              <span className="week-date">{niceDate(w.date)}</span>
            </div>
            <ul className="fixtures">
              {w.matches.map((m) => (
                <Fixture key={m.id} match={m} score={results[m.id]} />
              ))}
            </ul>
            {bye && <p className="week-bye">{/^St\./.test(bye) ? `Bye: ${bye}` : bye}</p>}
          </section>
        );
      })}
    </div>
  );
}
