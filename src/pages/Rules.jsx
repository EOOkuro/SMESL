import React, { useState } from "react";
import { Link } from "react-router-dom";
import { DIVISIONS } from "../data/divisions.js";

const CONDUCT = [
  {
    title: "On the sideline",
    items: [
      "Spectators sit on the sideline opposite the team benches.",
      "Coaching from the spectator sideline isn't allowed.",
      "Arrive 15–20 minutes before kickoff so warmups and check-in stay on schedule.",
    ],
  },
  {
    title: "With officials",
    items: [
      "Referee decisions are final.",
      "Arguing with or approaching a referee on the field means immediate removal from the field area.",
    ],
  },
  {
    title: "The 24-hour rule",
    items: [
      "Concerns about playing time, officiating or coaching wait 24 hours after the final whistle before you contact a coach or league manager.",
      "It works. Saturday feelings rarely survive Sunday.",
    ],
  },
];

const KIT = [
  { label: "Uniform", value: "Gold shirts, navy shorts, navy socks — or your team-assigned kit." },
  { label: "Shin guards", value: "Required at every game and practice, fully covered by socks. $10–$20." },
  { label: "Cleats", value: "Firm ground or turf, short conical studs. $25–$50 does the job for growing feet." },
  { label: "Keeper gloves", value: "Basic pairs at $12–$25 are fine for young keepers." },
  { label: "Not allowed", value: "Baseball cleats — the toe stud makes them unsafe for soccer." },
];

export default function Rules() {
  const [key, setKey] = useState(DIVISIONS[0].key);
  const division = DIVISIONS.find((d) => d.key === key);

  return (
    <>
      <div className="pagehead">
        <div className="pagehead-in">
          <h1>Rules &amp; format</h1>
          <p>Match formats by division, what to bring, and how we behave on a Saturday.</p>
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
          <h2>{division.label}</h2>
          <Link className="more" to={`/divisions/${division.slug}`}>Division page</Link>
        </div>
        <p className="lede">{division.description}</p>

        <dl className="facts">
          {division.quickfacts.map((f) => (
            <div key={f.label}>
              <dt>{f.label}</dt>
              <dd>{f.value}</dd>
            </div>
          ))}
        </dl>

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
        </section>

        <section className="section">
          <div className="section-head">
            <h2>What to bring</h2>
          </div>
          <dl className="facts">
            {KIT.map((k) => (
              <div key={k.label}>
                <dt>{k.label}</dt>
                <dd>{k.value}</dd>
              </div>
            ))}
          </dl>
        </section>

        <section className="section">
          <div className="section-head">
            <h2>Code of conduct</h2>
            <span className="section-note">Players, coaches and parents alike</span>
          </div>
          <div className="cards">
            {CONDUCT.map((c) => (
              <article className="card" key={c.title}>
                <h3>{c.title}</h3>
                <ul>
                  {c.items.map((i) => (
                    <li key={i}>{i}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>
      </div>
    </>
  );
}
