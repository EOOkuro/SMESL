// Auto-generated from the 2026 season schedule. Every match has a stable `id`
// that score entries key off — if you edit a fixture, keep its id.
//
//   stage:  "regular" counts toward the league table. "playoff" does not.
//           "festival" is a non-competitive Skills Festival day (PreK/Early only) — not a game, no score.
//   tbd:    true when the opponents depend on seeding or a prior result,
//           so there's nothing to enter a score against yet.
//
// CHANGE LOG:
//   - Week 1: unchanged, Sat 9/12.
//   - Week 2: rescheduled to Sun 10/4 (weather) for ALL divisions. One-time exception to the
//     "games are always on Saturday" rule.
//   - Week 3: unchanged, Sat 9/26 (played before Week 2's makeup date — that's fine, "week"
//     is a schedule slot, not strict chronological order).
//   - PreK & Early only: Week 4 is now a Skills Festival Day (Sat 10/3), not games. Everything
//     that was Week 4 onward in these two divisions shifted back one slot (old W4 -> new W5,
//     old W5 -> new W6, ... old W10 Championship -> new W11). Dates cascade to the next Saturday
//     in sequence, with a new final Saturday (11/21) added to fit the extra week.
//   - Middle division: untouched except the Week 2 date change — no Skills Festival, no renumbering.

export const BYES = {
  "prek-2": "Played at Kenwood Community Park, 1330 E 50th St, Chicago, IL 60615 (weather makeup)",
  "early-1": "St. Margaret",
  "early-2": "Played at Kenwood Community Park, 1330 E 50th St, Chicago, IL 60615 (weather makeup)",
  "early-4": "Skills Festival Day — no bye",
  "early-9": "Quarterfinals — all 8 teams in action",
  "early-10": "Semifinals & Consolation",
  "early-11": "Finals Day — 3rd Place & Championship",
  "middle-2": "Played at Kenwood Community Park, 1330 E 50th St, Chicago, IL 60615 (weather makeup)"
};

export const FIXTURES = [
  // ── PreK ──────────────────────────────────────────────────────────────
  {"id":"prek-w1-1","division":"prek","week":1,"date":"2026-09-12","time":"9:00 AM","stage":"regular","gameTag":null,"home":"St. Benedict 1","away":"St. Ailbe 1","label":null,"tbd":false},
  {"id":"prek-w1-2","division":"prek","week":1,"date":"2026-09-12","time":"9:30 AM","stage":"regular","gameTag":null,"home":"St. Benedict 2","away":"St. Ailbe 2","label":null,"tbd":false},
  // Week 1 (9/12) predates the roster change and stays as played, above.
  // From Week 2 on, the division has grown to 8 teams: St. Ailbe 1 & 2, St. Benedict 1 & 2,
  // St. Ethelreda 1 & 2, St. Thomas, and Cambridge Classical Academy. Weeks 2–9 are a single
  // round robin (every team plays every other team once); Week 10 repeats Week 2's pairings
  // as a bonus round before the Week 11 finale.
  {"id":"prek-w2-1","division":"prek","week":2,"date":"2026-10-04","time":"9:00 AM","stage":"regular","gameTag":null,"home":"St. Ailbe 1","away":"Cambridge Classical Academy","label":null,"tbd":false},
  {"id":"prek-w2-2","division":"prek","week":2,"date":"2026-10-04","time":"9:30 AM","stage":"regular","gameTag":null,"home":"St. Ailbe 2","away":"St. Thomas","label":null,"tbd":false},
  {"id":"prek-w2-3","division":"prek","week":2,"date":"2026-10-04","time":"10:00 AM","stage":"regular","gameTag":null,"home":"St. Benedict 1","away":"St. Ethelreda 2","label":null,"tbd":false},
  {"id":"prek-w2-4","division":"prek","week":2,"date":"2026-10-04","time":"10:30 AM","stage":"regular","gameTag":null,"home":"St. Benedict 2","away":"St. Ethelreda 1","label":null,"tbd":false},
  {"id":"prek-w3-1","division":"prek","week":3,"date":"2026-09-26","time":"9:00 AM","stage":"regular","gameTag":null,"home":"St. Ailbe 1","away":"St. Thomas","label":null,"tbd":false},
  {"id":"prek-w3-2","division":"prek","week":3,"date":"2026-09-26","time":"9:30 AM","stage":"regular","gameTag":null,"home":"Cambridge Classical Academy","away":"St. Ethelreda 2","label":null,"tbd":false},
  {"id":"prek-w3-3","division":"prek","week":3,"date":"2026-09-26","time":"10:00 AM","stage":"regular","gameTag":null,"home":"St. Ailbe 2","away":"St. Ethelreda 1","label":null,"tbd":false},
  {"id":"prek-w3-4","division":"prek","week":3,"date":"2026-09-26","time":"10:30 AM","stage":"regular","gameTag":null,"home":"St. Benedict 1","away":"St. Benedict 2","label":null,"tbd":false},
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

  // ── Early (K) ─────────────────────────────────────────────────────────
  {"id":"early-w1-1","division":"early","week":1,"date":"2026-09-12","time":"9:00 AM","stage":"regular","gameTag":null,"home":"St. Benedict 1","away":"St. Ailbe 1","label":null,"tbd":false},
  {"id":"early-w1-2","division":"early","week":1,"date":"2026-09-12","time":"9:45 AM","stage":"regular","gameTag":null,"home":"St. Benedict 2","away":"St. Ailbe 2","label":null,"tbd":false},
  {"id":"early-w1-3","division":"early","week":1,"date":"2026-09-12","time":"10:30 AM","stage":"regular","gameTag":null,"home":"St. Thomas","away":"St. Ethelreda","label":null,"tbd":false},
  // Week 1 (9/12) predates the roster change and stays as played, above.
  // From Week 2 on: St. Margaret is out; Cambridge Classical Academy joins and St. Ethelreda
  // fields a 2nd team. With 8 teams, every week is a clean 4-game slate — no byes. Weeks
  // 2, 3, 5, 6, 7, 8 are the round robin (Skills Festival keeps Week 4 as a non-game day);
  // Weeks 9–11 are the 8-team playoff bracket.
  {"id":"early-w2-1","division":"early","week":2,"date":"2026-10-04","time":"9:00 AM","stage":"regular","gameTag":null,"home":"St. Benedict 1","away":"St. Ailbe 2","label":null,"tbd":false},
  {"id":"early-w2-2","division":"early","week":2,"date":"2026-10-04","time":"9:45 AM","stage":"regular","gameTag":null,"home":"St. Benedict 2","away":"St. Ailbe 1","label":null,"tbd":false},
  {"id":"early-w2-3","division":"early","week":2,"date":"2026-10-04","time":"10:30 AM","stage":"regular","gameTag":null,"home":"St. Ethelreda 1","away":"Cambridge Classical Academy","label":null,"tbd":false},
  {"id":"early-w2-4","division":"early","week":2,"date":"2026-10-04","time":"11:15 AM","stage":"regular","gameTag":null,"home":"St. Thomas","away":"St. Ethelreda 2","label":null,"tbd":false},
  {"id":"early-w3-1","division":"early","week":3,"date":"2026-09-26","time":"9:00 AM","stage":"regular","gameTag":null,"home":"St. Benedict 1","away":"St. Benedict 2","label":null,"tbd":false},
  {"id":"early-w3-2","division":"early","week":3,"date":"2026-09-26","time":"9:45 AM","stage":"regular","gameTag":null,"home":"St. Ailbe 1","away":"St. Ailbe 2","label":null,"tbd":false},
  {"id":"early-w3-3","division":"early","week":3,"date":"2026-09-26","time":"10:30 AM","stage":"regular","gameTag":null,"home":"St. Ethelreda 1","away":"St. Thomas","label":null,"tbd":false},
  {"id":"early-w3-4","division":"early","week":3,"date":"2026-09-26","time":"11:15 AM","stage":"regular","gameTag":null,"home":"St. Ethelreda 2","away":"Cambridge Classical Academy","label":null,"tbd":false},
  {"id":"early-w4-1","division":"early","week":4,"date":"2026-10-03","time":"9:00 AM","stage":"festival","gameTag":null,"home":null,"away":null,"label":"Skills Festival Day","tbd":false},
  {"id":"early-w5-1","division":"early","week":5,"date":"2026-10-10","time":"9:00 AM","stage":"regular","gameTag":null,"home":"St. Benedict 1","away":"St. Thomas","label":null,"tbd":false},
  {"id":"early-w5-2","division":"early","week":5,"date":"2026-10-10","time":"9:45 AM","stage":"regular","gameTag":null,"home":"St. Ailbe 1","away":"St. Ethelreda 1","label":null,"tbd":false},
  {"id":"early-w5-3","division":"early","week":5,"date":"2026-10-10","time":"10:30 AM","stage":"regular","gameTag":null,"home":"St. Benedict 2","away":"St. Ethelreda 2","label":null,"tbd":false},
  {"id":"early-w5-4","division":"early","week":5,"date":"2026-10-10","time":"11:15 AM","stage":"regular","gameTag":null,"home":"St. Ailbe 2","away":"Cambridge Classical Academy","label":null,"tbd":false},
  {"id":"early-w6-1","division":"early","week":6,"date":"2026-10-17","time":"9:00 AM","stage":"regular","gameTag":null,"home":"St. Benedict 1","away":"St. Ethelreda 1","label":null,"tbd":false},
  {"id":"early-w6-2","division":"early","week":6,"date":"2026-10-17","time":"9:45 AM","stage":"regular","gameTag":null,"home":"St. Ailbe 1","away":"St. Ethelreda 2","label":null,"tbd":false},
  {"id":"early-w6-3","division":"early","week":6,"date":"2026-10-17","time":"10:30 AM","stage":"regular","gameTag":null,"home":"St. Ailbe 2","away":"St. Thomas","label":null,"tbd":false},
  {"id":"early-w6-4","division":"early","week":6,"date":"2026-10-17","time":"11:15 AM","stage":"regular","gameTag":null,"home":"St. Benedict 2","away":"Cambridge Classical Academy","label":null,"tbd":false},
  {"id":"early-w7-1","division":"early","week":7,"date":"2026-10-24","time":"9:00 AM","stage":"regular","gameTag":null,"home":"St. Benedict 1","away":"Cambridge Classical Academy","label":null,"tbd":false},
  {"id":"early-w7-2","division":"early","week":7,"date":"2026-10-24","time":"9:45 AM","stage":"regular","gameTag":null,"home":"St. Benedict 2","away":"St. Thomas","label":null,"tbd":false},
  {"id":"early-w7-3","division":"early","week":7,"date":"2026-10-24","time":"10:30 AM","stage":"regular","gameTag":null,"home":"St. Ailbe 2","away":"St. Ethelreda 1","label":null,"tbd":false},
  {"id":"early-w7-4","division":"early","week":7,"date":"2026-10-24","time":"11:15 AM","stage":"regular","gameTag":null,"home":"St. Ailbe 1","away":"St. Ethelreda 2","label":null,"tbd":false},
  {"id":"early-w8-1","division":"early","week":8,"date":"2026-10-31","time":"9:00 AM","stage":"regular","gameTag":null,"home":"St. Ailbe 1","away":"St. Thomas","label":null,"tbd":false},
  {"id":"early-w8-2","division":"early","week":8,"date":"2026-10-31","time":"9:45 AM","stage":"regular","gameTag":null,"home":"St. Benedict 2","away":"St. Ethelreda 1","label":null,"tbd":false},
  {"id":"early-w8-3","division":"early","week":8,"date":"2026-10-31","time":"10:30 AM","stage":"regular","gameTag":null,"home":"St. Ailbe 2","away":"Cambridge Classical Academy","label":null,"tbd":false},
  {"id":"early-w8-4","division":"early","week":8,"date":"2026-10-31","time":"11:15 AM","stage":"regular","gameTag":null,"home":"St. Benedict 1","away":"St. Ethelreda 2","label":null,"tbd":false},
  {"id":"early-w9-1","division":"early","week":9,"date":"2026-11-07","time":"9:00 AM","stage":"playoff","gameTag":"G1","home":"#1","away":"#8","label":null,"tbd":true},
  {"id":"early-w9-2","division":"early","week":9,"date":"2026-11-07","time":"9:45 AM","stage":"playoff","gameTag":"G2","home":"#2","away":"#7","label":null,"tbd":true},
  {"id":"early-w9-3","division":"early","week":9,"date":"2026-11-07","time":"10:30 AM","stage":"playoff","gameTag":"G3","home":"#3","away":"#6","label":null,"tbd":true},
  {"id":"early-w9-4","division":"early","week":9,"date":"2026-11-07","time":"11:15 AM","stage":"playoff","gameTag":"G4","home":"#4","away":"#5","label":null,"tbd":true},
  {"id":"early-w10-1","division":"early","week":10,"date":"2026-11-14","time":"9:00 AM","stage":"playoff","gameTag":"G5 (Semis)","home":"Winner G1","away":"Winner G4","label":null,"tbd":true},
  {"id":"early-w10-2","division":"early","week":10,"date":"2026-11-14","time":"9:45 AM","stage":"playoff","gameTag":"G6 (Semis)","home":"Winner G2","away":"Winner G3","label":null,"tbd":true},
  {"id":"early-w10-3","division":"early","week":10,"date":"2026-11-14","time":"10:30 AM","stage":"playoff","gameTag":"G7 (Consolation)","home":"Loser G1","away":"Loser G4","label":null,"tbd":true},
  {"id":"early-w10-4","division":"early","week":10,"date":"2026-11-14","time":"11:15 AM","stage":"playoff","gameTag":"G8 (Consolation)","home":"Loser G2","away":"Loser G3","label":null,"tbd":true},
  {"id":"early-w11-1","division":"early","week":11,"date":"2026-11-21","time":"9:00 AM","stage":"playoff","gameTag":"3rd Place","home":"Loser G5","away":"Loser G6","label":null,"tbd":true},
  {"id":"early-w11-2","division":"early","week":11,"date":"2026-11-21","time":"9:45 AM","stage":"playoff","gameTag":"Championship","home":"Winner G5","away":"Winner G6","label":null,"tbd":true},

  // ── Middle (no Skills Festival, no renumbering — Week 2 date only) ─────
  {"id":"middle-w1-1","division":"middle","week":1,"date":"2026-09-12","time":"11:00 AM","stage":"regular","gameTag":null,"home":"St. Thomas","away":"St. Ailbe","label":null,"tbd":false},
  {"id":"middle-w1-2","division":"middle","week":1,"date":"2026-09-12","time":"12:15 PM","stage":"regular","gameTag":null,"home":"St. Ethelreda","away":"St. Margaret","label":null,"tbd":false},
  {"id":"middle-w1-3","division":"middle","week":1,"date":"2026-09-12","time":"1:30 PM","stage":"regular","gameTag":null,"home":"St. Benedict","away":"Chicago Collegiate","label":null,"tbd":false},
  {"id":"middle-w2-1","division":"middle","week":2,"date":"2026-10-04","time":"11:00 AM","stage":"regular","gameTag":null,"home":"St. Thomas","away":"St. Margaret","label":null,"tbd":false},
  {"id":"middle-w2-2","division":"middle","week":2,"date":"2026-10-04","time":"12:15 PM","stage":"regular","gameTag":null,"home":"St. Ailbe","away":"Chicago Collegiate","label":null,"tbd":false},
  {"id":"middle-w2-3","division":"middle","week":2,"date":"2026-10-04","time":"1:30 PM","stage":"regular","gameTag":null,"home":"St. Ethelreda","away":"St. Benedict","label":null,"tbd":false},
  {"id":"middle-w3-1","division":"middle","week":3,"date":"2026-09-26","time":"11:00 AM","stage":"regular","gameTag":null,"home":"St. Thomas","away":"Chicago Collegiate","label":null,"tbd":false},
  {"id":"middle-w3-2","division":"middle","week":3,"date":"2026-09-26","time":"12:15 PM","stage":"regular","gameTag":null,"home":"St. Margaret","away":"St. Benedict","label":null,"tbd":false},
  {"id":"middle-w3-3","division":"middle","week":3,"date":"2026-09-26","time":"1:30 PM","stage":"regular","gameTag":null,"home":"St. Ailbe","away":"St. Ethelreda","label":null,"tbd":false},
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