import { FIXTURES } from "../data/fixtures.js";
import { POINTS } from "../data/divisions.js";

/** Every fixture in a division, in kickoff order. */
export function fixturesFor(divisionKey) {
  return FIXTURES.filter((f) => f.division === divisionKey);
}

/** Fixtures grouped into weeks: [{ week, date, matches }]. */
export function weeksFor(divisionKey, stage) {
  const list = fixturesFor(divisionKey).filter((f) => !stage || f.stage === stage);
  const weeks = [];
  for (const f of list) {
    let w = weeks.find((x) => x.week === f.week);
    if (!w) {
      w = { week: f.week, date: f.date, matches: [] };
      weeks.push(w);
    }
    w.matches.push(f);
  }
  return weeks;
}

/**
 * Status of a single fixture, relative to today:
 *   "played"   — score recorded
 *   "tbd"      — opponents not yet set (depends on seeding/a prior result)
 *   "upcoming" — dated today or later, no score yet
 *   "overdue"  — date already passed, no score entered yet
 */
export function matchStatus(match, score, today = new Date()) {
  if (Array.isArray(score)) return "played";
  if (match.tbd || !match.home || !match.away) return "tbd";
  if (!match.date) return "upcoming";
  const [y, m, d] = match.date.split("-").map(Number);
  const matchDate = new Date(y, m - 1, d);
  const startOfToday = new Date(today.getFullYear(), today.getMonth(), today.getDate());
  return matchDate.getTime() >= startOfToday.getTime() ? "upcoming" : "overdue";
}

/** The next unplayed, dated, non-TBD fixture for a division (or null). */
export function nextFixture(divisionKey, results, today = new Date()) {
  const startOfToday = new Date(today.getFullYear(), today.getMonth(), today.getDate());
  const upcoming = fixturesFor(divisionKey)
    .filter((f) => f.home && f.away && !f.tbd && !Array.isArray(results[f.id]))
    .filter((f) => {
      if (!f.date) return true;
      const [y, m, d] = f.date.split("-").map(Number);
      return new Date(y, m - 1, d).getTime() >= startOfToday.getTime();
    })
    .sort((a, b) => (a.date || "").localeCompare(b.date || "") || a.week - b.week);
  return upcoming[0] || null;
}

function blankRow(team) {
  return {
    team,
    played: 0,
    won: 0,
    drawn: 0,
    lost: 0,
    goalsFor: 0,
    goalsAgainst: 0,
    goalDiff: 0,
    points: 0,
    form: [], // most recent last: "W" | "D" | "L"
  };
}

/**
 * Build the league table for a division.
 * Only regular-season fixtures with a recorded score count.
 */
export function buildTable(division, results) {
  const rows = new Map(division.teams.map((t) => [t, blankRow(t)]));

  const played = fixturesFor(division.key)
    .filter((f) => f.stage === "regular" && !f.tbd && f.home && f.away)
    .filter((f) => Array.isArray(results[f.id]));

  for (const f of played) {
    const [hg, ag] = results[f.id];
    const home = rows.get(f.home);
    const away = rows.get(f.away);
    if (!home || !away) continue; // fixture references a team not on this roster

    home.played++;
    away.played++;
    home.goalsFor += hg;
    home.goalsAgainst += ag;
    away.goalsFor += ag;
    away.goalsAgainst += hg;

    if (hg > ag) {
      home.won++, away.lost++;
      home.points += POINTS.win;
      away.points += POINTS.loss;
      home.form.push("W"), away.form.push("L");
    } else if (hg < ag) {
      away.won++, home.lost++;
      away.points += POINTS.win;
      home.points += POINTS.loss;
      away.form.push("W"), home.form.push("L");
    } else {
      home.drawn++, away.drawn++;
      home.points += POINTS.draw;
      away.points += POINTS.draw;
      home.form.push("D"), away.form.push("D");
    }
  }

  const table = [...rows.values()].map((r) => ({
    ...r,
    goalDiff: r.goalsFor - r.goalsAgainst,
    form: r.form.slice(-5),
  }));

  // Points, then goal difference, then goals scored, then wins, then A–Z.
  table.sort(
    (a, b) =>
      b.points - a.points ||
      b.goalDiff - a.goalDiff ||
      b.goalsFor - a.goalsFor ||
      b.won - a.won ||
      a.team.localeCompare(b.team)
  );

  return table.map((row, i) => ({ ...row, position: i + 1 }));
}

/** How far along the division is: { played, total }. */
export function progress(divisionKey, results) {
  const all = fixturesFor(divisionKey).filter((f) => f.stage === "regular" && !f.tbd && f.home);
  return { played: all.filter((f) => Array.isArray(results[f.id])).length, total: all.length };
}

/** Finished matches, most recent first. */
export function recentResults(results, limit = 6) {
  return FIXTURES.filter((f) => Array.isArray(results[f.id]))
    .sort((a, b) => (b.date || "").localeCompare(a.date || "") || b.week - a.week)
    .slice(0, limit)
    .map((f) => ({ ...f, score: results[f.id] }));
}
