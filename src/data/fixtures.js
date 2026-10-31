// OFFICIAL RESULTS — this is what every visitor to the site sees.
//
// Scores typed on the /scores page are saved in that person's browser only.
// To publish them for everyone: open /scores, press "Copy for results.js",
// paste the copied block in below, commit, and redeploy.
//
// Keys are fixture ids from fixtures.js. Values are [homeGoals, awayGoals].
// Forfeits are recorded as 3–0 wins for the other team.

export const RESULTS = {
  // 1st–4th
  "early-w1-1": [0, 6],   // Benedict A 0–6 Ailbe A
  "early-w1-2": [1, 4],   // Benedict B 1–4 Ailbe B
  "early-w2-1": [6, 0],   // Thomas 6–0 Benedict A
  "early-w2-2": [3, 0],   // Benedict A 3–0 Ailbe A (makeup doubleheader)
  "early-w3-2": [1, 8],   // Ailbe A 1–8 Thomas
  "early-w3-3": [3, 2],   // Ailbe B 3–2 Ethelreda A
  "early-w4-1": [8, 0],   // Thomas 8–0 Ethelreda A
  "early-w4-2": [0, 6],   // Benedict A 0–6 Ethelreda B
  "early-w5-1": [12, 5],  // Thomas 12–5 Ailbe B (Oct 10)
  "early-w7-1": [1, 2],   // Ailbe A 1–2 Ethelreda B (Oct 24)
  "early-w7-2": [3, 0],   // Thomas 3–0 Benedict B (Benedict forfeit)
  "early-w7-3": [0, 1],   // Ailbe B 0–1 Ethelreda B
  "early-w7-4": [0, 3],   // Benedict A 0–3 Ethelreda A (Benedict forfeit)

  // Middle (5th–8th)
  "middle-w1-1": [3, 0],  // Benedict 3–0 Ailbe (Sep 12)
  "middle-w4-1": [8, 3],  // Thomas 8–3 Ethelreda (Oct 3)
  "middle-w2-1": [0, 0],  // Thomas 0–0 Benedict (Oct 4)
};
