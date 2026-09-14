import React, { useState } from "react";

const CSS = `
:root {
  --pitch: #5B21B6;
  --pitch-dark: #2E1065;
  --chalk: #FAF8FD;
  --panel: #FFFFFF;
  --ink: #211A2E;
  --ink-soft: #5D5570;
  --gold: #A78BFA;
  --tint: #EFE9FB;
  --line: #E1D9F0;
  --radius: 3px;
}
.smesl * { box-sizing: border-box; }
.smesl {
  margin: 0;
  background: var(--chalk);
  color: var(--ink);
  font-family: "Work Sans", -apple-system, BlinkMacSystemFont, sans-serif;
  font-size: 16px;
  line-height: 1.5;
}
.smesl h1, .smesl h2, .smesl h3, .smesl h4 {
  font-family: "Big Shoulders Display", "Work Sans", sans-serif;
  margin: 0;
  color: var(--pitch-dark);
}
.topnav {
  position: sticky; top: 0; z-index: 20; height: 60px;
  display: flex; align-items: center;
  background: var(--pitch-dark);
  border-bottom: 1px solid rgba(255,255,255,0.12);
}
.topnav-inner {
  width: 100%; max-width: 1040px; margin: 0 auto; padding: 0.85rem 1.5rem;
  display: flex; align-items: center; justify-content: space-between;
}
.brand { display: flex; align-items: center; gap: 0.5rem; text-decoration: none; color: #fff; cursor: pointer; border: none; background: none; }
.brand-mark {
  display: inline-flex; align-items: center; justify-content: center;
  width: 1.9rem; height: 1.9rem; background: var(--gold); color: var(--pitch-dark);
  font-family: "Big Shoulders Display", sans-serif; font-weight: 800; font-size: 1.15rem;
  border-radius: var(--radius);
}
.brand-word { font-family: "Big Shoulders Display", sans-serif; font-weight: 700; font-size: 1.3rem; letter-spacing: 0.03em; }
.nav-links { display: flex; gap: 1.75rem; }
.nav-links a {
  color: #D9CCF2; text-decoration: none; font-size: 0.9rem; font-weight: 600;
  letter-spacing: 0.02em; transition: color 0.15s ease; cursor: pointer; background: none; border: none;
}
.nav-links a:hover { color: #fff; }
.nav-toggle {
  display: none; flex-direction: column; justify-content: center; gap: 4px;
  width: 2rem; height: 2rem; background: none; border: none; cursor: pointer;
}
.nav-toggle span { display: block; height: 2px; background: #fff; border-radius: 2px; }
.hero {
  background:
    repeating-linear-gradient(90deg, rgba(255,255,255,0.05) 0 2px, transparent 2px 96px),
    linear-gradient(180deg, var(--pitch) 0%, var(--pitch-dark) 100%);
  color: #EFF3EC; padding: 3.5rem 1.5rem 3rem;
}
.hero-inner { max-width: 880px; margin: 0 auto; }
.hero-eyebrow { margin: 0 0 0.25rem; font-size: 0.95rem; color: #B9CBB9; font-weight: 500; }
.hero-title { font-size: clamp(2.6rem, 9vw, 4.5rem); font-weight: 800; line-height: 0.95; color: #FFFFFF; letter-spacing: 0.01em; }
.hero-dates { font-family: "Big Shoulders Display", sans-serif; font-weight: 700; font-size: clamp(1.4rem, 4vw, 2rem); color: var(--gold); margin: 0.2rem 0 0; }
.hero-sub { margin: 0.75rem 0 2rem; font-size: 1.15rem; max-width: 40ch; color: #E3D9F7; }
.hero-cta {
  display: inline-block; background: var(--gold); color: var(--pitch-dark); font-weight: 700;
  font-size: 0.95rem; text-decoration: none; padding: 0.75rem 1.5rem; border-radius: var(--radius);
  transition: transform 0.15s ease; cursor: pointer; border: none;
}
.hero-cta:hover { transform: translateY(-1px); }
.about { background: var(--panel); border-bottom: 1px solid var(--line); }
.about-inner { max-width: 880px; margin: 0 auto; padding: 3rem 1.5rem; text-align: center; }
.about-inner h2 { font-size: 1.8rem; margin-bottom: 0.9rem; }
.about-inner p { color: var(--ink-soft); max-width: 64ch; margin: 0 auto; font-size: 1.02rem; }
.about-link { display: inline-block; margin-top: 1.25rem; color: var(--pitch); font-weight: 700; text-decoration: none; border-bottom: 2px solid var(--gold); padding-bottom: 0.15rem; cursor: pointer; background: none; border-top: none; border-left: none; border-right: none; }
.upcoming { background: var(--tint); border-bottom: 1px solid var(--line); }
.upcoming-inner { max-width: 880px; margin: 0 auto; padding: 2.75rem 1.5rem; text-align: center; }
.upcoming-inner h3 { font-size: 1.5rem; margin-bottom: 1.5rem; }
.upcoming-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(120px, 1fr)); gap: 1px; background: var(--line); border: 1px solid var(--line); }
.upcoming-card { background: var(--panel); padding: 1.25rem 0.5rem; display: flex; flex-direction: column; gap: 0.3rem; }
.upcoming-card .date { font-family: "Big Shoulders Display", sans-serif; font-weight: 700; font-size: 1.6rem; color: var(--pitch); }
.upcoming-card .label { font-size: 0.8rem; color: var(--ink-soft); text-transform: uppercase; letter-spacing: 0.03em; }
.upcoming-link { display: inline-block; margin-top: 1.5rem; color: var(--pitch); font-weight: 700; text-decoration: none; cursor: pointer; background: none; border: none; }
.tabs { position: sticky; top: 60px; z-index: 15; display: flex; background: var(--panel); border-bottom: 1px solid var(--line); max-width: 880px; margin: 0 auto; overflow-x: auto; }
.tab-btn { flex: 1 1 auto; white-space: nowrap; border: none; background: none; font-family: "Work Sans", sans-serif; font-weight: 600; font-size: 0.95rem; color: var(--ink-soft); padding: 1rem 1.25rem; cursor: pointer; border-bottom: 3px solid transparent; transition: color 0.15s ease, border-color 0.15s ease; }
.tab-btn:hover { color: var(--pitch-dark); }
.tab-btn.is-active { color: var(--pitch-dark); border-bottom-color: var(--gold); }
main.smesl-main { max-width: 880px; margin: 0 auto; padding: 2.5rem 1.5rem 4rem; }
.panel { display: none; }
.panel.is-active { display: block; }
.division-head h2 { font-size: 2.1rem; font-weight: 700; display: flex; align-items: baseline; gap: 0.6rem; flex-wrap: wrap; }
.division-head .tag { font-family: "Work Sans", sans-serif; font-size: 0.85rem; font-weight: 600; color: var(--pitch); background: #E7EEE3; padding: 0.2rem 0.6rem; border-radius: 999px; }
.division-head p { margin: 0.4rem 0 1.5rem; color: var(--ink-soft); max-width: 55ch; }
.teams-row { display: flex; flex-wrap: wrap; gap: 0.5rem; margin-bottom: 1.5rem; }
.team-chip { font-size: 0.9rem; font-weight: 500; padding: 0.4rem 0.8rem; background: var(--panel); border: 1px solid var(--line); border-left: 3px solid var(--pitch); border-radius: var(--radius); }
.quickfacts { display: grid; grid-template-columns: repeat(2, 1fr); gap: 1px; background: var(--line); border: 1px solid var(--line); margin-bottom: 2.25rem; }
.quickfacts div { background: var(--panel); padding: 0.9rem 1rem; font-size: 0.92rem; color: var(--ink); }
.quickfacts strong { display: block; font-size: 0.78rem; text-transform: uppercase; letter-spacing: 0.03em; color: var(--ink-soft); font-weight: 600; margin-bottom: 0.15rem; }
.section-label { font-size: 1.3rem; font-weight: 700; margin: 2.25rem 0 0.75rem; padding-bottom: 0.5rem; border-bottom: 2px solid var(--pitch-dark); }
.table-note { margin: -0.4rem 0 0.9rem; color: var(--ink-soft); font-size: 0.9rem; }
.table-wrap { overflow-x: auto; border: 1px solid var(--line); }
table.schedule { width: 100%; border-collapse: collapse; font-size: 0.88rem; min-width: 560px; }
table.schedule th { text-align: left; background: var(--pitch); color: #fff; font-weight: 600; padding: 0.65rem 0.85rem; white-space: nowrap; }
table.schedule td { padding: 0.65rem 0.85rem; border-top: 1px solid var(--line); vertical-align: top; }
table.schedule td:first-child { font-weight: 600; white-space: nowrap; color: var(--pitch-dark); }
table.schedule tbody tr:nth-child(even) { background: #FAF9F3; }
table.schedule tr.row-final td { background: #FBF0D6; font-weight: 600; }
.flex-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap: 1px; background: var(--line); border: 1px solid var(--line); margin-bottom: 1rem; }
.flex-card { background: var(--panel); padding: 1.1rem 1.2rem; }
.flex-card h4 { font-size: 1rem; font-weight: 700; margin-bottom: 0.5rem; }
.flex-card ul { margin: 0; padding-left: 1.1rem; font-size: 0.88rem; color: var(--ink); }
.flex-card li { margin-bottom: 0.45rem; }
.flex-card li:last-child { margin-bottom: 0; }
.good-to-know { margin: 0; padding-left: 1.2rem; color: var(--ink); }
.good-to-know li { margin-bottom: 0.5rem; }
.contact { margin-top: 1.5rem; font-size: 0.9rem; color: var(--ink-soft); border-top: 1px solid var(--line); padding-top: 1rem; }
.site-footer { background: var(--pitch-dark); color: #D9CCF2; text-align: center; padding: 2.25rem 1.5rem; font-size: 0.88rem; }
.site-footer p { margin: 0.25rem 0; }
.footer-brand { font-family: "Big Shoulders Display", sans-serif; font-weight: 800; font-size: 1.6rem; color: #fff; letter-spacing: 0.03em; }
.footer-fine { margin-top: 1rem !important; color: #9E8CC2; font-size: 0.78rem; }
@media (max-width: 640px) {
  .quickfacts { grid-template-columns: 1fr; }
  .hero { padding: 2.5rem 1.25rem 2rem; }
  main.smesl-main { padding: 2rem 1.25rem 3rem; }
  .nav-toggle { display: flex; }
  .nav-links {
    position: absolute; top: 100%; left: 0; right: 0; background: var(--pitch-dark);
    flex-direction: column; gap: 0; max-height: 0; overflow: hidden; transition: max-height 0.2s ease;
  }
  .nav-links.is-open { max-height: 20rem; }
  .nav-links a { padding: 0.9rem 1.5rem; border-top: 1px solid rgba(255,255,255,0.1); }
  .topnav { position: sticky; }
}
@media (prefers-reduced-motion: reduce) { .smesl * { transition: none !important; } }
`;

const UPCOMING = [
  { date: "9/12", label: "Week 1 — Game Day" },
  { date: "9/19", label: "Week 2 — Game Day" },
  { date: "9/26", label: "Week 3 — Game Day" },
  { date: "10/3", label: "Week 4 — Game Day" },
];

const GOOD_TO_KNOW_STANDARD = [
  "Arrive 10–15 minutes before your kickoff time for warm-up and check-in.",
  "Scores aren't posted for this division — the focus is skill-building, not standings.",
  "Bring water — no water fountain guarantees on-site.",
];

function ScheduleTable({ columns, rows }) {
  return (
    <div className="table-wrap">
      <table className="schedule">
        <thead>
          <tr>
            {columns.map((c) => (
              <th key={c}>{c}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr key={i} className={row.final ? "row-final" : ""}>
              {row.cells.map((cell, j) =>
                row.colspan && j === 1 ? (
                  <td key={j} colSpan={row.colspan}>
                    {cell}
                  </td>
                ) : (
                  <td key={j}>{cell}</td>
                )
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function PrekPanel({ active }) {
  const rows = [
    { cells: ["Week 1 — Sat, Sep 12", "St. Benedict 1 vs St. Ailbe 1", "St. Benedict 2 vs St. Ailbe 2"] },
    { cells: ["Week 2 — Sat, Sep 19", "St. Benedict 1 vs St. Ailbe 2", "St. Benedict 2 vs St. Ailbe 1"] },
    { cells: ["Week 3 — Sat, Sep 26", "St. Benedict 1 vs St. Benedict 2", "St. Ailbe 1 vs St. Ailbe 2"] },
    { cells: ["Week 4 — Sat, Oct 3", "St. Benedict 2 vs St. Ailbe 2", "St. Benedict 1 vs St. Ailbe 1"] },
    { cells: ["Week 5 — Sat, Oct 10", "St. Benedict 2 vs St. Ailbe 1", "St. Benedict 1 vs St. Ailbe 2"] },
    { cells: ["Week 6 — Sat, Oct 17", "St. Ailbe 1 vs St. Ailbe 2", "St. Benedict 1 vs St. Benedict 2"] },
    { cells: ["Week 7 — Sat, Oct 24", "St. Benedict 1 vs St. Ailbe 1", "St. Benedict 2 vs St. Ailbe 2"] },
    { cells: ["Week 8 — Sat, Oct 31", "St. Benedict 1 vs St. Ailbe 2", "St. Benedict 2 vs St. Ailbe 1"] },
    { cells: ["Week 9 — Sat, Nov 7", "St. Benedict 1 vs St. Benedict 2", "St. Ailbe 1 vs St. Ailbe 2"] },
    { cells: ["Week 10 — Sat, Nov 14", "Championship Tournament — all four teams"], colspan: 2, final: true },
  ];

  return (
    <section className={`panel ${active ? "is-active" : ""}`} id="prek">
      <div className="division-head">
        <h2>
          Pre-K &amp; Kindergarten <span className="tag">3v3</span>
        </h2>
        <p>No hands, no goalies — kick-ins restart play after every goal.</p>
      </div>

      <div className="teams-row">
        {["St. Benedict 1", "St. Benedict 2", "St. Ailbe 1", "St. Ailbe 2"].map((t) => (
          <span className="team-chip" key={t}>
            {t}
          </span>
        ))}
      </div>

      <div className="quickfacts">
        <div>
          <strong>Format</strong>4 quarters, 6 minutes each
        </div>
        <div>
          <strong>Officiating</strong>1 referee per field
        </div>
        <div>
          <strong>Kickoff times</strong>9:00 AM &amp; 9:30 AM
        </div>
        <div>
          <strong>Location</strong>Tuley Park, 501 E 90th Pl
        </div>
      </div>

      <h3 className="section-label">Season Schedule</h3>
      <ScheduleTable columns={["Week / Date", "9:00 AM", "9:30 AM"]} rows={rows} />

      <h3 className="section-label">Good to Know</h3>
      <ul className="good-to-know">
        {GOOD_TO_KNOW_STANDARD.map((item) => (
          <li key={item}>{item}</li>
        ))}
        <li>Games proceed in light rain; check email game-day mornings for weather cancellations.</li>
      </ul>
      <p className="contact">Questions? Contact your team coach.</p>
    </section>
  );
}

function EarlyPanel({ active }) {
  const regularRows = [
    { cells: ["Week 1 — Sep 12", "St. Benedict 1 vs St. Ailbe 1", "St. Benedict 2 vs St. Ailbe 2", "St. Thomas vs St. Ethelreda", "St. Margaret"] },
    { cells: ["Week 2 — Sep 19", "St. Benedict 1 vs St. Ailbe 2", "St. Benedict 2 vs St. Ailbe 1", "St. Thomas vs St. Margaret", "St. Ethelreda"] },
    { cells: ["Week 3 — Sep 26", "St. Benedict 1 vs St. Benedict 2", "St. Ailbe 1 vs St. Ailbe 2", "St. Ethelreda vs St. Margaret", "St. Thomas"] },
    { cells: ["Week 4 — Oct 3", "St. Benedict 1 vs St. Thomas", "St. Ailbe 1 vs St. Ethelreda", "St. Benedict 2 vs St. Margaret", "St. Ailbe 2"] },
    { cells: ["Week 5 — Oct 10", "St. Benedict 1 vs St. Ethelreda", "St. Ailbe 1 vs St. Margaret", "St. Ailbe 2 vs St. Thomas", "St. Benedict 2"] },
    { cells: ["Week 6 — Oct 17", "St. Benedict 1 vs St. Margaret", "St. Benedict 2 vs St. Thomas", "St. Ailbe 2 vs St. Ethelreda", "St. Ailbe 1"] },
    { cells: ["Week 7 — Oct 24", "St. Ailbe 1 vs St. Thomas", "St. Benedict 2 vs St. Ethelreda", "St. Ailbe 2 vs St. Margaret", "St. Benedict 1"] },
  ];

  const playoffRows = [
    { cells: ["Week 8 — Oct 31", "G1: #2 vs #7", "G2: #3 vs #6", "G3: #4 vs #5", "#1 Seed — bye"] },
    { cells: ["Week 9 — Nov 7", "G4: #1 vs Winner G3", "G5: Winner G1 vs Winner G2", "G6 (Losers): Loser G1 vs Loser G2", "Loser G3 drops to Week 10"] },
    { cells: ["Week 10 — Nov 14", "G7: Loser G4 vs Winner G6", "3rd Place: Loser G5 vs Winner G7", "Championship: Winner G4 vs Winner G5", "Finals Day"], final: true },
  ];

  return (
    <section className={`panel ${active ? "is-active" : ""}`} id="early">
      <div className="division-head">
        <h2>
          1st – 4th Grade <span className="tag">7 teams</span>
        </h2>
        <p>Regular season weeks 1–7, playoffs and loser bracket weeks 8–10.</p>
      </div>

      <div className="teams-row">
        {["St. Ailbe 1", "St. Ailbe 2", "St. Benedict 1", "St. Benedict 2", "St. Thomas the Apostle", "St. Ethelreda", "St. Margaret of Scotland"].map((t) => (
          <span className="team-chip" key={t}>
            {t}
          </span>
        ))}
      </div>

      <div className="quickfacts">
        <div>
          <strong>Format</strong>4 quarters, 8 minutes each (~32 min game time)
        </div>
        <div>
          <strong>Kickoff times</strong>9:00, 9:45 &amp; 10:30 AM — one field, one bye each week
        </div>
        <div>
          <strong>Location</strong>Tuley Park, 501 E 90th Pl
        </div>
        <div>
          <strong>Playoffs</strong>Weeks 8–10, all 7 teams seeded by standings
        </div>
      </div>

      <h3 className="section-label">Regular Season — Weeks 1–7</h3>
      <ScheduleTable columns={["Week / Date", "9:00 AM", "9:45 AM", "10:30 AM", "Bye"]} rows={regularRows} />

      <h3 className="section-label">Playoffs &amp; Loser Bracket — Weeks 8–10</h3>
      <p className="table-note">Seeded #1–#7 by regular season standings.</p>
      <ScheduleTable columns={["Week / Date", "9:00 AM", "9:45 AM", "10:30 AM", "Notes"]} rows={playoffRows} />

      <h3 className="section-label">Good to Know</h3>
      <ul className="good-to-know">
        {GOOD_TO_KNOW_STANDARD.map((item) => (
          <li key={item}>{item}</li>
        ))}
        <li>Games proceed in light rain; check email game-day mornings for severe-weather cancellations.</li>
      </ul>
      <p className="contact">Questions? Contact your team coach.</p>
    </section>
  );
}

function MiddlePanel({ active }) {
  const regularRows = [
    { cells: ["Week 1 — Sep 12", "St. Thomas vs St. Ailbe", "St. Ethelreda vs St. Margaret", "St. Benedict vs Chicago Collegiate"] },
    { cells: ["Week 2 — Sep 19", "St. Thomas vs St. Margaret", "St. Ailbe vs Chicago Collegiate", "St. Ethelreda vs St. Benedict"] },
    { cells: ["Week 3 — Sep 26", "St. Thomas vs Chicago Collegiate", "St. Margaret vs St. Benedict", "St. Ailbe vs St. Ethelreda"] },
    { cells: ["Week 4 — Oct 3", "St. Thomas vs St. Benedict", "Chicago Collegiate vs St. Ethelreda", "St. Margaret vs St. Ailbe"] },
    { cells: ["Week 5 — Oct 10", "St. Thomas vs St. Ethelreda", "St. Benedict vs St. Ailbe", "Chicago Collegiate vs St. Margaret"] },
    { cells: [<>Week 6 — Oct 17 <em>(rematch)</em></>, "St. Ailbe vs St. Thomas", "St. Margaret vs St. Ethelreda", "Chicago Collegiate vs St. Benedict"] },
    { cells: [<>Week 7 — Oct 24 <em>(rematch)</em></>, "St. Margaret vs St. Thomas", "Chicago Collegiate vs St. Ailbe", "St. Benedict vs St. Ethelreda"] },
  ];

  const placementRows = [
    { cells: ["Week 8 — Oct 31", "G1: #1 vs #6", "G2: #2 vs #5", "G3: #3 vs #4"] },
    { cells: ["Week 9 — Nov 7", "G4: Winner G1 vs Winner G2", "G5: Winner G3 vs Loser G1", "G6 (5th/6th): Loser G2 vs Loser G3"] },
    { cells: ["Week 10 — Nov 14", "Championship (1st/2nd): Winner G4 vs Winner G5", "3rd/4th Place: Loser G4 vs Loser G5", "5th/6th Place: Winner G6 vs Loser G6"], final: true },
  ];

  return (
    <section className={`panel ${active ? "is-active" : ""}`} id="middle">
      <div className="division-head">
        <h2>
          Middle School <span className="tag">Grades 5–8 · 6 teams</span>
        </h2>
        <p>Single round-robin plus rematches, weeks 1–7. Placement bracket, weeks 8–10 — every team qualifies.</p>
      </div>

      <div className="teams-row">
        {["St. Thomas", "St. Ailbe", "St. Ethelreda", "St. Margaret", "St. Benedict", "Chicago Collegiate"].map((t) => (
          <span className="team-chip" key={t}>
            {t}
          </span>
        ))}
      </div>

      <div className="quickfacts">
        <div>
          <strong>Kickoff times</strong>11:00 AM, 12:15 PM &amp; 1:30 PM
        </div>
        <div>
          <strong>Location</strong>Tuley Park, 501 E 90th Pl
        </div>
        <div>
          <strong>Format</strong>Flexible 5v5 or 9v9, agreed at check-in based on attendance
        </div>
        <div>
          <strong>Playoffs</strong>Weeks 8–10, all 6 teams seeded by standings
        </div>
      </div>

      <h3 className="section-label">Regular Season — Weeks 1–7</h3>
      <ScheduleTable columns={["Week / Date", "11:00 AM", "12:15 PM", "1:30 PM"]} rows={regularRows} />

      <h3 className="section-label">Placement Bracket — Weeks 8–10</h3>
      <p className="table-note">All six teams qualify, seeded #1–#6 by regular season standings. Everyone plays every week — no byes.</p>
      <ScheduleTable columns={["Week / Date", "11:00 AM", "12:15 PM", "1:30 PM"]} rows={placementRows} />

      <h3 className="section-label">Flex Match Format — 5v5 or 9v9</h3>
      <div className="flex-grid">
        <div className="flex-card">
          <h4>Head-to-head agreement</h4>
          <ul>
            <li>Coaches agree on format at pre-match check-in based on available players.</li>
            <li>
              <strong>9v9 standard</strong> — if both teams have 11–12+ players, play standard 9v9 (8 field players + goalkeeper).
            </li>
            <li>
              <strong>5v5 flex</strong> — if either team has 8 or fewer players, drop to 5v5 (4 field players + goalkeeper) on a smaller field so both teams play maximum minutes without burnout.
            </li>
          </ul>
        </div>
        <div className="flex-card">
          <h4>Game durations</h4>
          <ul>
            <li>
              <strong>9v9</strong> — two 25-minute halves, 5-minute halftime.
            </li>
            <li>
              <strong>5v5</strong> — futsal rules, two 20-minute halves.
            </li>
          </ul>
        </div>
        <div className="flex-card">
          <h4>Equipment &amp; field setup</h4>
          <ul>
            <li>Cones mark the 9v9 outer boundary; inside corner cones let coaches quickly contract the field for 5v5.</li>
            <li>Standard 6x18 goals for 9v9; 5v5 plays futsal-style on the same goals — no second set needed.</li>
          </ul>
        </div>
      </div>

      <h3 className="section-label">Good to Know</h3>
      <ul className="good-to-know">
        <li>Arrive 15 minutes before kickoff so coaches can confirm attendance and agree on match format.</li>
        <li>Bring both light and dark jerseys or pinnies, in case of a color clash.</li>
        <li>Bring water — no water fountain guarantees on-site.</li>
        <li>Games proceed rain or shine unless a cancellation is announced; check for updates game-day mornings.</li>
      </ul>
      <p className="contact">Questions? Contact your team coordinator.</p>
    </section>
  );
}

export default function SMESLSite() {
  const [navOpen, setNavOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("prek");

  const goTo = (id) => {
    setNavOpen(false);
    requestAnimationFrame(() => {
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    });
  };

  const goToSchedule = (tab) => {
    setActiveTab(tab || activeTab);
    goTo("schedule");
  };

  return (
    <div className="smesl">
      <style>{CSS}</style>
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Big+Shoulders+Display:wght@600;700;800&family=Work+Sans:wght@400;500;600;700&display=swap"
      />

      <nav className="topnav">
        <div className="topnav-inner">
          <button className="brand" onClick={() => goTo("top")}>
            <span className="brand-mark">S</span>
            <span className="brand-word">SMESL</span>
          </button>
          <button
            className="nav-toggle"
            aria-label="Menu"
            aria-expanded={navOpen}
            onClick={() => setNavOpen((o) => !o)}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
          <div className={`nav-links ${navOpen ? "is-open" : ""}`}>
            <a onClick={() => goTo("top")}>Home</a>
            <a onClick={() => goTo("schools")}>Schools</a>
            <a onClick={() => goTo("schedule")}>Schedule</a>
            <a onClick={() => goTo("format")}>Rules</a>
            <a onClick={() => goTo("contact")}>Contact</a>
          </div>
        </div>
      </nav>

      <header className="hero" id="top">
        <div className="hero-inner">
          <p className="hero-eyebrow">Official home of the Southside Middle &amp; Elementary School Soccer League</p>
          <h1 className="hero-title">2026 FALL SEASON</h1>
          <p className="hero-dates">SEPTEMBER 12 – NOVEMBER 14</p>
          <p className="hero-sub">Elementary &amp; middle school soccer league — weekend games @ Tuley Park</p>
          <button className="hero-cta" onClick={() => goTo("schedule")}>
            View Schedule
          </button>
        </div>
      </header>

      <section className="about" id="schools">
        <div className="about-inner">
          <h2>About SMESL</h2>
          <p>
            SMESL offers an organized soccer league to elementary and middle schools across the South Side of
            Chicago. This league offers recreational play that is fun, low cost, convenient and equal opportunity —
            available to Pre-K4 through 8th grade every fall season.
          </p>
          <button className="about-link" onClick={() => goTo("schedule")}>
            Find Your Division &gt;&gt;
          </button>
        </div>
      </section>

      <section className="upcoming">
        <div className="upcoming-inner">
          <h3>Upcoming Game Days</h3>
          <div className="upcoming-grid">
            {UPCOMING.map((u) => (
              <div className="upcoming-card" key={u.date}>
                <span className="date">{u.date}</span>
                <span className="label">{u.label}</span>
              </div>
            ))}
          </div>
          <button className="upcoming-link" onClick={() => goTo("schedule")}>
            Full Schedule &gt;
          </button>
        </div>
      </section>

      <nav className="tabs" id="schedule" aria-label="Division select">
        <button
          className={`tab-btn ${activeTab === "prek" ? "is-active" : ""}`}
          onClick={() => setActiveTab("prek")}
        >
          Pre-K &amp; Kindergarten
        </button>
        <button
          className={`tab-btn ${activeTab === "early" ? "is-active" : ""}`}
          onClick={() => setActiveTab("early")}
        >
          1st – 4th Grade
        </button>
        <button
          className={`tab-btn ${activeTab === "middle" ? "is-active" : ""}`}
          onClick={() => setActiveTab("middle")}
        >
          Middle School (5th – 8th)
        </button>
      </nav>

      <main className="smesl-main" id="format">
        <PrekPanel active={activeTab === "prek"} />
        <EarlyPanel active={activeTab === "early"} />
        <MiddlePanel active={activeTab === "middle"} />
      </main>

      <footer className="site-footer" id="contact">
        <p className="footer-brand">SMESL</p>
        <p>Southside Middle &amp; Elementary School Soccer League</p>
        <p>Tuley Park, 501 E 90th Pl, Chicago, IL 60619 · Season runs Sep 12 – Nov 14, 2026</p>
        <p className="footer-fine">&copy; 2026 SMESL</p>
      </footer>
    </div>
  );
}
