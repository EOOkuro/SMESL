import React from "react";
import { Link } from "react-router-dom";
import { DIVISIONS, SEASON, POINTS } from "../data/divisions.js";

const TIMELINE = [
  { time: "7:30 AM", what: "Staff arrive. Set up fields, goals, cones, water and the score table. Walk each field for hazards." },
  { time: "8:30 AM", what: "Pre-K & K and 1st–4th teams begin arriving, 10–15 minutes before their kickoff, for warm-up and check-in." },
  { time: "9:00 AM", what: "First kickoff for Pre-K & K and 1st–4th. Each division plays one field, back to back." },
  { time: "10:45 AM", what: "Middle School teams arrive 15 minutes before kickoff so coaches can confirm attendance and agree on format." },
  { time: "11:00 AM", what: "Middle School kickoffs at 11:00 AM, 12:15 PM and 1:30 PM." },
  { time: "After the last whistle", what: "Finals go to the score table, goals and cones come down, and volunteers confirm every child has left with a parent or guardian." },
];

const ROLES = [
  ["League Coordinator", "Runs the day. Final call on weather, disputes and safety."],
  ["Check-in Lead", "Confirms rosters, attendance and player ID."],
  ["Score Table Lead", "Records finals and enters them on the scores page."],
  ["Referees", "One per field. Decisions are final."],
  ["Field volunteers", "Set up fields, goals and cones; keep sidelines orderly; clean up."],
  ["First Aid Lead", "Keeps the kit stocked and files incident reports (recommended)."],
  ["Coaches", "Manage players and parents. Middle School coaches agree the format at check-in."],
];

const CHECKIN = [
  "Coach checks in with the Check-in Lead and confirms attendance.",
  "Middle School only: coaches agree 9v9 or 5v5 and tell the referee.",
  "Players have shin guards fully covered by socks, correct cleats and the team kit. Baseball cleats are not allowed.",
  "Teams warm up away from the game field. Middle School teams bring light and dark jerseys or pinnies.",
  "The referee checks the field, goals and ball, then starts the game on time.",
];

const CLOSEOUT = [
  "Teams line up for a handshake after the final whistle.",
  "Score Table Lead records finals and starts the publish steps.",
  "Volunteers collect cones, goals, bibs, balls and trash. Nothing is left on the field.",
  "Coordinator confirms every child has left with a parent or guardian.",
  "Equipment needs and incidents are logged for next week.",
];

function factOf(d, label) {
  const f = d.quickfacts.find((q) => q.label === label);
  return f ? f.value : null;
}

export default function Procedures() {
  return (
    <>
      <div className="pagehead">
        <div className="pagehead-in">
          <h1>Game day procedure</h1>
          <p>
            How every {SEASON.label} Saturday runs at {SEASON.venue}, from setup to cleanup, for all
            three divisions. Format and conduct rules are on the <Link to="/rules">rules page</Link>.
          </p>
        </div>
      </div>

      <div className="page">
        <section className="section">
          <div className="section-head">
            <h2>Divisions at a glance</h2>
          </div>
          <div className="table-scroll">
            <table className="ltable ltable-plain">
              <thead>
                <tr>
                  <th scope="col">Division</th>
                  <th scope="col">Teams</th>
                  <th scope="col">Format</th>
                  <th scope="col">Kickoffs</th>
                  <th scope="col">Standings</th>
                </tr>
              </thead>
              <tbody>
                {DIVISIONS.map((d) => (
                  <tr key={d.key}>
                    <th scope="row" className="c-team">
                      <Link to={`/divisions/${d.slug}`}>{d.navLabel}</Link>
                    </th>
                    <td>{d.teams.length}</td>
                    <td>{factOf(d, "Format") || d.description}</td>
                    <td>{d.slots.join(", ")}</td>
                    <td>{d.standings ? "Yes" : "Not posted"}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="section">
          <div className="section-head">
            <h2>Saturday timeline</h2>
          </div>
          <dl className="facts">
            {TIMELINE.map((t) => (
              <div key={t.time}>
                <dt>{t.time}</dt>
                <dd>{t.what}</dd>
              </div>
            ))}
          </dl>
        </section>

        <section className="section">
          <div className="section-head">
            <h2>Roles</h2>
          </div>
          <dl className="facts">
            {ROLES.map(([role, what]) => (
              <div key={role}>
                <dt>{role}</dt>
                <dd>{what}</dd>
              </div>
            ))}
          </dl>
        </section>

        <section className="section">
          <div className="section-head">
            <h2>Check-in and pre-game</h2>
          </div>
          <ol className="bullets">
            {CHECKIN.map((i) => (
              <li key={i}>{i}</li>
            ))}
          </ol>
        </section>

        <section className="section">
          <div className="section-head">
            <h2>Scores and standings</h2>
          </div>
          <ul className="bullets">
            <li>
              Points: win = {POINTS.win}, draw = {POINTS.draw}, loss = {POINTS.loss}. Tiebreakers in order:
              points, goal difference, goals scored, wins.
            </li>
            <li>Pre-K &amp; K scores are not posted.</li>
            <li>
              After each game the referee gives the final to the Score Table Lead, and coaches confirm it
              before leaving.
            </li>
            <li>
              The Score Table Lead enters finals on the <Link to="/scores">scores page</Link>. They save in that
              browser only until published.
            </li>
            <li>
              To publish: press <strong>Copy for results.js</strong>, paste into <code>src/data/results.js</code>,
              then commit and redeploy. Do it the same day or next morning.
            </li>
          </ul>
        </section>

        <section className="section">
          <div className="section-head">
            <h2>Playoffs</h2>
            <span className="section-note">Weeks 9–10</span>
          </div>
          <div className="cards">
            <article className="card">
              <h3>1st – 4th (7 teams)</h3>
              <ul>
                <li>Week 9: G1 #1 v #4, G2 #2 v #3, G3 #5 v #6. #7 seed has a bye.</li>
                <li>Week 10: Championship, 3rd Place and 5th Place, all on Finals Day.</li>
              </ul>
            </article>
            <article className="card">
              <h3>Middle School (6 teams)</h3>
              <ul>
                <li>Placement bracket, weeks 8–10. Every team qualifies, seeded by standings.</li>
              </ul>
            </article>
          </div>
        </section>

        <section className="section">
          <div className="section-head">
            <h2>Safety and weather</h2>
          </div>
          <ul className="bullets">
            <li>A First Aid Lead is on site with a stocked kit. An injured player leaves the field at once.</li>
            <li>Suspected head injury: the player sits out the rest of the day and a parent or guardian is told.</li>
            <li>Games go ahead in light rain. Severe-weather cancellations go out by email on game-day morning.</li>
            <li>Lightning: stop play, move to cars, and wait 30 minutes after the last strike.</li>
            <li>Makeups are played at Kenwood Community Park, 1330 E 50th St, and announced on the site.</li>
          </ul>
        </section>

        <section className="section">
          <div className="section-head">
            <h2>Close-out and cleanup</h2>
          </div>
          <ol className="bullets">
            {CLOSEOUT.map((i) => (
              <li key={i}>{i}</li>
            ))}
          </ol>
          <p className="aside">
            Concerns about a match? The 24-hour rule applies. See <Link to="/rules">rules</Link> and{" "}
            <Link to="/contact">contact</Link>.
          </p>
        </section>
      </div>
    </>
  );
}
