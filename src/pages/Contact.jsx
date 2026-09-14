import React from "react";
import { Link } from "react-router-dom";
import { SEASON } from "../data/divisions.js";

export default function Contact() {
  return (
    <>
      <div className="pagehead">
        <div className="pagehead-in">
          <h1>Contact</h1>
          <p>Registration, schedules, a specific match, or getting your school into next season.</p>
        </div>
      </div>

      <div className="page">
        <dl className="facts">
          <div>
            <dt>Registration &amp; new schools</dt>
            <dd>Email the league office and we'll walk you through the fall entry process.</dd>
          </div>
          <div>
            <dt>Game-day questions</dt>
            <dd>Your team coach or division coordinator is fastest on a Saturday morning.</dd>
          </div>
          <div>
            <dt>Reporting a score</dt>
            <dd>Coaches record finals on the <Link to="/scores">scores page</Link> right after the whistle.</dd>
          </div>
          <div>
            <dt>Concerns about a match</dt>
            <dd>The 24-hour rule applies — wait a day after the final whistle, then reach out.</dd>
          </div>
          <div>
            <dt>Where we play</dt>
            <dd>{SEASON.venue}, {SEASON.address}</dd>
          </div>
          <div>
            <dt>Season</dt>
            <dd>{SEASON.start} – {SEASON.end}, {SEASON.year}. Saturdays.</dd>
          </div>
        </dl>
      </div>
    </>
  );
}
