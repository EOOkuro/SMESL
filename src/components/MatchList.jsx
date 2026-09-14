import React from "react";
import { BYES } from "../data/fixtures.js";

function niceDate(iso) {
  if (!iso) return "";
  const [y, m, d] = iso.split("-").map(Number);
  return new Date(y, m - 1, d).toLocaleDateString("en-US", {
    weekday: "short",
    month: "short",
    day: "numeric",
  });
}

function Fixture({ match, score }) {
  const decided = Array.isArray(score);
  const homeWin = decided && score[0] > score[1];
  const awayWin = decided && score[1] > score[0];

  return (
    <li className={`fixture ${decided ? "is-played" : ""}`}>
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
