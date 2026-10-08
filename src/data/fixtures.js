// Auto-generated from the 2026 season schedule. Every match has a stable `id`
// that score entries key off — if you edit a fixture, keep its id.
//
//   stage:  "regular" counts toward the league table. "playoff" does not.
//           "festival" is a non-competitive Skills Festival day (PreK only) — not a game, no score.
//   tbd:    true when the opponents depend on seeding or a prior result,
//           so there's nothing to enter a score against yet.
//
// CHANGE LOG:
//   - Week 1: unchanged, Sat 9/12.
//   - Week 2: rescheduled to Sun 10/4 (weather) for ALL divisions, played at Kenwood Community Park.
//   - Week 3: Sat 9/26 (played before Week 2's makeup date — "week" is a schedule slot,
//     not strict chronological order).
//   - PreK only: Week 4 is a Skills Festival Day (Sat 10/3).
//   - 1st-4th (early): 7 teams — St. Ailbe A/B, St. Benedict A/B, St. Ethelreda A/B, St. Thomas.
//     Cambridge removed. No Skills Festival. Weeks 1-8 regular season, weeks 9-10 playoffs.
//   - 1st-4th (early) catch-up: Weeks 1-4 now hold only games that were actually played
//     (5 never-scored games removed). Weeks 5-8 rebuilt with doubleheaders so every team
//     finishes the regular season with exactly 6 games.
//   - Middle division: Week 2 date change only, plus Week 3 pairings restored.

export const BYES = {
  "prek-2": "Played at Kenwood Community Park, 1330 E 50th St, Chicago, IL 60615 (weather makeup)",
  "early-2": "Played at Kenwood Community Park, 1330 E 50th St, Chicago, IL 60615 (weather makeup)",
  "early-9": "#7 seed has a bye",
  "early-10": "Finals Day — Championship, 3rd Place & 5th Place",
  "middle-2": "Played at Kenwood Community Park, 1330 E 50th St, Chicago, IL 60615 (weather makeup)"
};

export const FIXTURES = [
  // ── PreK ──────────────────────────────────────────────────────────────
  {"id":"prek-w1-1","division":"prek","week":1,"date":"2026-09-12","time":"9:00 AM","stage":"regular","gameTag":null,"home":"St. Benedict 1","away":"St. Ailbe 1","label":null,"tbd":false},
  {"id":"prek-w1-2","division":"prek","week":1,"date":"2026-09-12","time":"9:30 AM","stage":"regular","gameTag":null,"home":"St. Benedict 2","away":"St. Ailbe 2","label":null,"tbd":false},
  // Week 1 (9/12) predates the roster change and stays as played, above.
  // From Week 2 on, the division has grown to 8 teams: St. Ailbe 1 & 2, St. Benedict 1 & 2,
  // St. Ethelreda 1 & 2, St. Thomas, and Cambridge Classical Academy.
  {"id":"prek-w2-1","division":"prek","week":2,"date":"2026-10-04","time":"9:00 AM","stage":"regular","gameTag":null,"home":"St. Ailbe 1","away":"Cambridge Classical Academy","label":null,"tbd":false},
  {"id":"prek-w2-2","division":"prek","week":2,"date":"2026-10-04","time":"9:30 AM","stage":"regular","gameTag":null,"home":"St. Ailbe 2","away":"St. Thomas","label":null,"tbd":false},
  {"id":"prek-w2-3","division":"prek","week":2,"date":"2026-10-04","time":"10:00 AM","stage":"regular","gameTag":null,"home":"St. Benedict 1","away":"St. Ethelreda 2","label":null,"tbd":false},
  {"id":"prek-w2-4","division":"prek","week":2,"date":"2026-10-04","time":"10:30 AM","stage":"regular","gameTag":null,"home":"St. Benedict 2","away":"St. Ethelreda 1","label":null,"tbd":false},
  {"id":"prek-w3-1","division":"prek","week":3,"date":"2026-09-26","time":"9:00 AM","stage":"regular","gameTag":null,"home":"St. Benedict 1","away":"St. Thomas","label":null,"tbd":false},
  {"id":"prek-w3-2","division":"prek","week":3,"date":"2026-09-26","time":"9:30 AM","stage":"regular","gameTag":null,"home":"St. Benedict 2","away":"St. Ethelreda 2","label":null,"tbd":false},
  {"id":"prek-w3-3","division":"prek","week":3,"date":"2026-09-26","time":"10:00 AM","stage":"regular","gameTag":null,"home":"St. Ailbe 2","away":"St. Ethelreda 1","label":null,"tbd":false},
  {"id":"prek-w3-4","division":"prek","week":3,"date":"2026-09-26","time":"10:30 AM","stage":"regular","gameTag":null,"home":"Cambridge Classical Academy","away":"St. Ailbe 1","label":null,"tbd":false},
  {"id":"prek-w4-1","division":"prek","week":4,"date":"2026-10-03","time":"9:00 AM","stage":"festival","gameTag":null,"home":null,"away":null,"label":"Skills Festival Day","tbd":false},
  {"id":"prek-w5-1","division":"prek","week":5,"date":"2026-10-10","time":"9:00 AM","stage":"regular","gameTag":null,"home":"St. Ailbe 1","away":"St. Ethelreda 2","label":null,"tbd":false},
  {"id":"prek-w5-2","division":"prek","week":5,"date":"2026-10-10","time":"9:30 AM","stage":"regular","gameTag":null,"home":"St. Thomas","away":"St. Ethelreda 1","label":null,"tbd":false},
  {"id":"prek-w5-3","division":"prek","week":5,"date":"2026-10-10","time":"10:00 AM","stage":"regular","gameTag":null,"home":"Cambridge Classical Academy","away":"St. Benedict 2","label":null,"tbd":false},
  {"id":"prek-w5-4","division":"prek","week":5,"date":"2026-10-10","time":"10:30 AM","stage":"regular","gameTag":null,"home":"St. Ailbe 2","away":"St. Benedict 1","label":null,"tbd":false},
  {"id":"prek-w6-1","division":"prek","week":6,"date":"2026-10-17","time":"9:00 AM","stage":"regular","gameTag":null,"home":"St. Ailbe 1","away":"St. Ethelreda 1","label":null,"tbd":false},
  {"id":"prek-w6-2","division":"prek","week":6,"date":"2026-10-17","time":"9:30 AM","stage":"regular","gameTag":null,"home":"St. Ethelreda 2","away":"St. Benedict 2","label":null,"tbd":false},
  {"id":"prek-w6-3","division":"prek","week":6,"date":"2026-10-17","time":"10:00 AM","stage":"regular","gameTag":null,"home":"St. Thomas","away":"St. Benedict 1","label":null,"tbd":false},
  {"id":"prek-w6-4","division":"prek","week":6,"date":"2026-10-17","time":"10:30 AM","stage":"regular","gameTag":null,"home":"Cambridge Classical Academy","away":"St. Ailbe 2","label":null,"tbd":false},
  {"id":"prek-w7-1","division":"prek","week":7,"date":"2026-10-24","time":"9:00 AM","stage":"regular","gameTag":null,"home":"St. Ailbe 1","away":"St. Benedict 2","label":null,"tbd":false},
  {"id":"prek-w7-2","division":"prek","week":7,"date":"2026-10-24","time":"9:30 AM","stage":"regular","gameTag":null,"home":"St. Ethelreda 1","away":"St. Benedict 1","label":null,"tbd":false},
  {"id":"prek-w7-3","division":"prek","week":7,"date":"2026-10-24","time":"10:00 AM","stage":"regular","gameTag":null,"home":"St. Ethelreda 2","away":"St. Ailbe 2","label":null,"tbd":false},
  {"id":"prek-w7-4","division":"prek","week":7,"date":"2026-10-24","time":"10:30 AM","stage":"regular","gameTag":null,"home":"St. Thomas","away":"Cambridge Classical Academy","label":null,"tbd":false},
  {"id":"prek-w8-1","division":"prek","week":8,"date":"2026-10-31","time":"9:00 AM","stage":"regular","gameTag":null,"home":"St. Ailbe 1","away":"St. Benedict 1","label":null,"tbd":false},
  {"id":"prek-w8-2","division":"prek","week":8,"date":"2026-10-31","time":"9:30 AM","stage":"regular","gameTag":null,"home":"St. Benedict 2","away":"St. Ailbe 2","label":null,"tbd":false},
  {"id":"prek-w8-3","division":"prek","week":8,"date":"2026-10-31","time":"10:00 AM","stage":"regular","gameTag":null,"home":"St. Ethelreda 1","away":"Cambridge Classical Academy","label":null,"tbd":false},
  {"id":"prek-w8-4","division":"prek","week":8,"date":"2026-10-31","time":"10:30 AM","stage":"regular","gameTag":null,"home":"St. Ethelreda 2","away":"St. Thomas","label":null,"tbd":false},
  {"id":"prek-w9-1","division":"prek","week":9,"date":"2026-11-07","time":"9:00 AM","stage":"regular","gameTag":null,"home":"St. Ailbe 1","away":"St. Ailbe 2","label":null,"tbd":false},
  {"id":"prek-w9-2","division":"prek","week":9,"date":"2026-11-07","time":"9:30 AM","stage":"regular","gameTag":null,"home":"St. Benedict 1","away":"Cambridge Classical Academy","label":null,"tbd":false},
  {"id":"prek-w9-3","division":"prek","week":9,"date":"2026-11-07","time":"10:00 AM","stage":"regular","gameTag":null,"home":"St. Benedict 2","away":"St. Thomas","label":null,"tbd":false},
  {"id":"prek-w9-4","division":"prek","week":9,"date":"2026-11-07","time":"10:30 AM","stage":"regular","gameTag":null,"home":"St. Ethelreda 1","away":"St. Ethelreda 2","label":null,"tbd":false},
  {"id":"prek-w10-1","division":"prek","week":10,"date":"2026-11-14","time":"9:00 AM","stage":"regular","gameTag":null,"home":"St. Ailbe 1","away":"Cambridge Classical Academy","label":null,"tbd":false},
  {"id":"prek-w10-2","division":"prek","week":10,"date":"2026-11-14","time":"9:30 AM","stage":"regular","gameTag":null,"home":"St. Ailbe 2","away":"St. Thomas","label":null,"tbd":false},
  {"id":"prek-w10-3","division":"prek","week":10,"date":"2026-11-14","time":"10:00 AM","stage":"regular","gameTag":null,"home":"St. Benedict 1","away":"St. Ethelreda 2","label":null,"tbd":false},
  {"id":"prek-w10-4","division":"prek","week":10,"date":"2026-11-14","time":"10:30 AM","stage":"regular","gameTag":null,"home":"St. Benedict 2","away":"St. Ethelreda 1","label":null,"tbd":false},
  {"id":"prek-w11-1","division":"prek","week":11,"date":"2026-11-21","time":"9:00 AM","stage":"regular","gameTag":null,"home":null,"away":null,"label":"Championship Tournament — all eight teams","tbd":true},

  // ── Early (1st–4th) — 7 teams, A/B naming, Cambridge removed ──────────
  // Weeks 1–4: only games that were actually played (all have scores in results.js).
  // Weeks 5–8: doubleheaders allowed, so every team ends the regular season on exactly 6 games.
  {"id":"early-w1-1","division":"early","week":1,"date":"2026-09-12","time":"9:00 AM","stage":"regular","gameTag":null,"home":"St. Benedict A","away":"St. Ailbe A","label":null,"tbd":false},
  {"id":"early-w1-2","division":"early","week":1,"date":"2026-09-12","time":"9:45 AM","stage":"regular","gameTag":null,"home":"St. Benedict B","away":"St. Ailbe B","label":null,"tbd":false},

  {"id":"early-w2-1","division":"early","week":2,"date":"2026-10-04","time":"9:00 AM","stage":"regular","gameTag":null,"home":"St. Thomas","away":"St. Benedict A","label":null,"tbd":false},
  {"id":"early-w2-2","division":"early","week":2,"date":"2026-10-04","time":"9:45 AM","stage":"regular","gameTag":null,"home":"St. Benedict A","away":"St. Ailbe A","label":null,"tbd":false},

  {"id":"early-w3-2","division":"early","week":3,"date":"2026-09-26","time":"9:45 AM","stage":"regular","gameTag":null,"home":"St. Ailbe A","away":"St. Thomas","label":null,"tbd":false},
  {"id":"early-w3-3","division":"early","week":3,"date":"2026-09-26","time":"10:30 AM","stage":"regular","gameTag":null,"home":"St. Ailbe B","away":"St. Ethelreda A","label":null,"tbd":false},

  {"id":"early-w4-1","division":"early","week":4,"date":"2026-10-03","time":"9:00 AM","stage":"regular","gameTag":null,"home":"St. Thomas","away":"St. Ethelreda A","label":null,"tbd":false},
  {"id":"early-w4-2","division":"early","week":4,"date":"2026-10-03","time":"9:45 AM","stage":"regular","gameTag":null,"home":"St. Benedict A","away":"St. Ethelreda B","label":null,"tbd":false},

  // Week 5 — Oct 10 (4 games; Benedict B and Ethelreda B double up to catch up)
  {"id":"early-w5-1","division":"early","week":5,"date":"2026-10-10","time":"9:00 AM","stage":"regular","gameTag":null,"home":"St. Thomas","away":"St. Ailbe B","label":null,"tbd":false},
  {"id":"early-w5-2","division":"early","week":5,"date":"2026-10-10","time":"9:45 AM","stage":"regular","gameTag":null,"home":"St. Ethelreda B","away":"St. Thomas","label":null,"tbd":false},
  {"id":"early-w5-3","division":"early","week":5,"date":"2026-10-10","time":"10:30 AM","stage":"regular","gameTag":null,"home":"St. Benedict A","away":"St. Ethelreda A","label":null,"tbd":false},
  {"id":"early-w5-4","division":"early","week":5,"date":"2026-10-10","time":"11:15 AM","stage":"regular","gameTag":null,"home":"St. Benedict B","away":"St. Ethelreda B","label":null,"tbd":false},

  // Week 6 — Oct 17 (Ailbe B doubles up)
  {"id":"early-w6-1","division":"early","week":6,"date":"2026-10-17","time":"9:00 AM","stage":"regular","gameTag":null,"home":"St. Benedict A","away":"St. Ailbe B","label":null,"tbd":false},
  {"id":"early-w6-2","division":"early","week":6,"date":"2026-10-17","time":"9:45 AM","stage":"regular","gameTag":null,"home":"St. Ailbe A","away":"St. Ethelreda A","label":null,"tbd":false},
  {"id":"early-w6-3","division":"early","week":6,"date":"2026-10-17","time":"10:30 AM","stage":"regular","gameTag":null,"home":"St. Ailbe B","away":"St. Benedict B","label":null,"tbd":false},

  // Week 7 — Oct 24 (Ethelreda B doubles up)
  {"id":"early-w7-1","division":"early","week":7,"date":"2026-10-24","time":"9:00 AM","stage":"regular","gameTag":null,"home":"St. Ailbe A","away":"St. Ethelreda B","label":null,"tbd":false},
  {"id":"early-w7-2","division":"early","week":7,"date":"2026-10-24","time":"9:45 AM","stage":"regular","gameTag":null,"home":"St. Thomas","away":"St. Benedict B","label":null,"tbd":false},
  {"id":"early-w7-3","division":"early","week":7,"date":"2026-10-24","time":"10:30 AM","stage":"regular","gameTag":null,"home":"St. Ailbe B","away":"St. Ethelreda B","label":null,"tbd":false},

  // Week 8 — Oct 31 (Ethelreda A doubles up)
  {"id":"early-w8-1","division":"early","week":8,"date":"2026-10-31","time":"9:00 AM","stage":"regular","gameTag":null,"home":"St. Benedict B","away":"St. Ethelreda A","label":null,"tbd":false},
  {"id":"early-w8-2","division":"early","week":8,"date":"2026-10-31","time":"9:45 AM","stage":"regular","gameTag":null,"home":"St. Benedict B","away":"St. Ailbe A","label":null,"tbd":false},
  {"id":"early-w8-3","division":"early","week":8,"date":"2026-10-31","time":"10:30 AM","stage":"regular","gameTag":null,"home":"St. Ethelreda A","away":"St. Ethelreda B","label":null,"tbd":false},

  {"id":"early-w9-1","division":"early","week":9,"date":"2026-11-07","time":"9:00 AM","stage":"playoff","gameTag":"G1","home":"#1","away":"#4","label":null,"tbd":true},
  {"id":"early-w9-2","division":"early","week":9,"date":"2026-11-07","time":"9:45 AM","stage":"playoff","gameTag":"G2","home":"#2","away":"#3","label":null,"tbd":true},
  {"id":"early-w9-3","division":"early","week":9,"date":"2026-11-07","time":"10:30 AM","stage":"playoff","gameTag":"G3","home":"#5","away":"#6","label":null,"tbd":true},

  {"id":"early-w10-1","division":"early","week":10,"date":"2026-11-14","time":"9:00 AM","stage":"playoff","gameTag":"5th Place","home":"Winner G3","away":"#7","label":null,"tbd":true},
  {"id":"early-w10-2","division":"early","week":10,"date":"2026-11-14","time":"9:45 AM","stage":"playoff","gameTag":"3rd Place","home":"Loser G1","away":"Loser G2","label":null,"tbd":true},
  {"id":"early-w10-3","division":"early","week":10,"date":"2026-11-14","time":"10:30 AM","stage":"playoff","gameTag":"Championship","home":"Winner G1","away":"Winner G2","label":null,"tbd":true},

  // ── Middle (no Skills Festival, no renumbering — Week 2 date, Week 3 restored) ─────
  {"id":"middle-w1-1","division":"middle","week":1,"date":"2026-09-12","time":"11:00 AM","stage":"regular","gameTag":null,"home":"St. Thomas","away":"St. Ailbe","label":null,"tbd":false},
  {"id":"middle-w1-2","division":"middle","week":1,"date":"2026-09-12","time":"12:15 PM","stage":"regular","gameTag":null,"home":"St. Ethelreda","away":"St. Margaret","label":null,"tbd":false},
  {"id":"middle-w1-3","division":"middle","week":1,"date":"2026-09-12","time":"1:30 PM","stage":"regular","gameTag":null,"home":"St. Benedict","away":"Chicago Collegiate","label":null,"tbd":false},
  {"id":"middle-w2-1","division":"middle","week":2,"date":"2026-10-04","time":"11:00 AM","stage":"regular","gameTag":null,"home":"St. Thomas","away":"St. Margaret","label":null,"tbd":false},
  {"id":"middle-w2-2","division":"middle","week":2,"date":"2026-10-04","time":"12:15 PM","stage":"regular","gameTag":null,"home":"St. Ailbe","away":"Chicago Collegiate","label":null,"tbd":false},
  {"id":"middle-w2-3","division":"middle","week":2,"date":"2026-10-04","time":"1:30 PM","stage":"regular","gameTag":null,"home":"St. Ethelreda","away":"St. Benedict","label":null,"tbd":false},
  {"id":"middle-w3-1","division":"middle","week":3,"date":"2026-09-26","time":"11:00 AM","stage":"regular","gameTag":null,"home":"St. Thomas","away":"Chicago Collegiate","label":null,"tbd":false},
  {"id":"middle-w3-2","division":"middle","week":3,"date":"2026-09-26","time":"12:15 PM","stage":"regular","gameTag":null,"home":"St. Ailbe","away":"St. Ethelreda","label":null,"tbd":false},
  {"id":"middle-w3-3","division":"middle","week":3,"date":"2026-09-26","time":"1:30 PM","stage":"regular","gameTag":null,"home":"St. Margaret","away":"St. Benedict","label":null,"tbd":false},
  {"id":"middle-w4-1","division":"middle","week":4,"date":"2026-10-03","time":"11:00 AM","stage":"regular","gameTag":null,"home":"St. Thomas","away":"St. Benedict","label":null,"tbd":false},
  {"id":"middle-w4-2","division":"middle","week":4,"date":"2026-10-03","time":"12:15 PM","stage":"regular","gameTag":null,"home":"Chicago Collegiate","away":"St. Ethelreda","label":null,"tbd":false},
  {"id":"middle-w4-3","division":"middle","week":4,"date":"2026-10-03","time":"1:30 PM","stage":"regular","gameTag":null,"home":"St. Margaret","away":"St. Ailbe","label":null,"tbd":false},
  {"id":"middle-w5-1","division":"middle","week":5,"date":"2026-10-10","time":"11:00 AM","stage":"regular","gameTag":null,"home":"St. Thomas","away":"St. Ethelreda","label":null,"tbd":false},
  {"id":"middle-w5-2","division":"middle","week":5,"date":"2026-10-10","time":"12:15 PM","stage":"regular","gameTag":null,"home":"St. Benedict","away":"St. Ailbe","label":null,"tbd":false},
  {"id":"middle-w5-3","division":"middle","week":5,"date":"2026-10-10","time":"1:30 PM","stage":"regular","gameTag":null,"home":"Chicago Collegiate","away":"St. Margaret","label":null,"tbd":false},
  {"id":"middle-w6-1","division":"middle","week":6,"date":"2026-10-17","time":"11:00 AM","stage":"regular","gameTag":null,"home":"St. Ailbe","away":"St. Thomas","label":null,"tbd":false},
  {"id":"middle-w6-2","division":"middle","week":6,"date":"2026-10-17","time":"12:15 PM","stage":"regular","gameTag":null,"home":"St. Margaret","away":"St. Ethelreda","label":null,"tbd":false},
  {"id":"middle-w6-3","division":"middle","week":6,"date":"2026-10-17","time":"1:30 PM","stage":"regular","gameTag":null,"home":"Chicago Collegiate","away":"St. Benedict","label":null,"tbd":false},
  {"id":"middle-w7-1","division":"middle","week":7,"date":"2026-10-24","time":"11:00 AM","stage":"regular","gameTag":null,"home":"St. Margaret","away":"St. Thomas","label":null,"tbd":false},
  {"id":"middle-w7-2","division":"middle","week":7,"date":"2026-10-24","time":"12:15 PM","stage":"regular","gameTag":null,"home":"Chicago Collegiate","away":"St. Ailbe","label":null,"tbd":false},
  {"id":"middle-w7-3","division":"middle","week":7,"date":"2026-10-24","time":"1:30 PM","stage":"regular","gameTag":null,"home":"St. Benedict","away":"St. Ethelreda","label":null,"tbd":false},
  {"id":"middle-w8-1","division":"middle","week":8,"date":"2026-10-31","time":"11:00 AM","stage":"playoff","gameTag":"G1","home":"#1","away":"#6","label":null,"tbd":true},
  {"id":"middle-w8-2","division":"middle","week":8,"date":"2026-10-31","time":"12:15 PM","stage":"playoff","gameTag":"G2","home":"#2","away":"#5","label":null,"tbd":true},
  {"id":"middle-w8-3","division":"middle","week":8,"date":"2026-10-31","time":"1:30 PM","stage":"playoff","gameTag":"G3","home":"#3","away":"#4","label":null,"tbd":true},
  {"id":"middle-w9-1","division":"middle","week":9,"date":"2026-11-07","time":"11:00 AM","stage":"playoff","gameTag":"G4","home":"Winner G1","away":"Winner G2","label":null,"tbd":true},
  {"id":"middle-w9-2","division":"middle","week":9,"date":"2026-11-07","time":"12:15 PM","stage":"playoff","gameTag":"G5","home":"Winner G3","away":"Loser G1","label":null,"tbd":true},
  {"id":"middle-w9-3","division":"middle","week":9,"date":"2026-11-07","time":"1:30 PM","stage":"playoff","gameTag":"G6 (5th/6th)","home":"Loser G2","away":"Loser G3","label":null,"tbd":true},
  {"id":"middle-w10-1","division":"middle","week":10,"date":"2026-11-14","time":"11:00 AM","stage":"playoff","gameTag":"Championship (1st/2nd)","home":"Winner G4","away":"Winner G5","label":null,"tbd":true},
  {"id":"middle-w10-2","division":"middle","week":10,"date":"2026-11-14","time":"12:15 PM","stage":"playoff","gameTag":"3rd/4th Place","home":"Loser G4","away":"Loser G5","label":null,"tbd":true},
  {"id":"middle-w10-3","division":"middle","week":10,"date":"2026-11-14","time":"1:30 PM","stage":"playoff","gameTag":"5th/6th Place","home":"Winner G6","away":"Loser G6","label":null,"tbd":true},
];

// ── MATCH_DATA ────────────────────────────────────────────────────────────
// Groups FIXTURES into { [divisionKey]: { regular: [week...], playoff: [week...] } }
// for Schedule.jsx. Each week object: { week, date, bye, matches: [fixture...] }
function groupByWeek(list, divKey) {
  const byWeek = {};
  for (const f of list) {
    (byWeek[f.week] ||= {
      week: f.week,
      date: f.date,
      bye: BYES[`${divKey}-${f.week}`] || null,
      matches: [],
    }).matches.push(f);
  }
  return Object.values(byWeek).sort((a, b) => a.week - b.week);
}

export const MATCH_DATA = Object.fromEntries(
  ["prek", "early", "middle"].map((key) => {
    const mine = FIXTURES.filter((f) => f.division === key);
    return [key, {
      regular: groupByWeek(mine.filter((f) => f.stage !== "playoff"), key),
      playoff: groupByWeek(mine.filter((f) => f.stage === "playoff"), key),
    }];
  })
);
