export const GOOD_TO_KNOW_STANDARD = [
  "Arrive 10–15 minutes before your kickoff time for warm-up and check-in.",
  "Scores aren't posted for this division — the focus is skill-building, not standings.",
  "Bring water — no water fountain guarantees on-site.",
];

export const DIVISIONS = [
  {
    key: "prek",
    slug: "pre-k",
    label: "Pre-K & Kindergarten",
    navLabel: "Pre-K & K",
    // Scores stay off the board for this age group — flip to true to publish a table.
    standings: false,
    slots: ["9:00 AM", "9:30 AM"],
    tag: "3v3",
    description: "No hands, no goalies — kick-ins restart play after every goal.",
    teams: ["St. Benedict 1", "St. Benedict 2", "St. Ailbe 1", "St. Ailbe 2"],
    quickfacts: [
      { label: "Format", value: "4 quarters, 6 minutes each" },
      { label: "Officiating", value: "1 referee per field" },
      { label: "Kickoff times", value: "9:00 AM & 9:30 AM" },
      { label: "Location", value: "Tuley Park, 501 E 90th Pl" },
    ],
    goodToKnow: [...GOOD_TO_KNOW_STANDARD, "Games proceed in light rain; check email game-day mornings for weather cancellations."],
    contact: "Questions? Contact your team coach.",
  },
  {
    key: "early",
    slug: "1st-4th",
    label: "1st – 4th Grade",
    navLabel: "1st – 4th",
    standings: true,
    slots: ["9:00 AM", "9:45 AM", "10:30 AM"],
    tag: "7 teams",
    description: "Regular season weeks 1–7, playoffs and loser bracket weeks 8–10.",
    teams: ["St. Ailbe 1", "St. Ailbe 2", "St. Benedict 1", "St. Benedict 2", "St. Thomas", "St. Ethelreda", "St. Margaret"],
    quickfacts: [
      { label: "Format", value: "4 quarters, 8 minutes each (~32 min game time)" },
      { label: "Kickoff times", value: "9:00, 9:45 & 10:30 AM — one field, one bye each week" },
      { label: "Location", value: "Tuley Park, 501 E 90th Pl" },
      { label: "Playoffs", value: "Weeks 8–10, all 7 teams seeded by standings" },
    ],
    goodToKnow: [...GOOD_TO_KNOW_STANDARD, "Games proceed in light rain; check email game-day mornings for severe-weather cancellations."],
    contact: "Questions? Contact your team coach.",
  },
  {
    key: "middle",
    slug: "middle-school",
    label: "Middle School (5th – 8th)",
    navLabel: "Middle School",
    standings: true,
    slots: ["11:00 AM", "12:15 PM", "1:30 PM"],
    tag: "Grades 5–8 · 6 teams",
    description: "Single round-robin plus rematches, weeks 1–7. Placement bracket, weeks 8–10 — every team qualifies.",
    teams: ["St. Thomas", "St. Ailbe", "St. Ethelreda", "St. Margaret", "St. Benedict", "Chicago Collegiate"],
    quickfacts: [
      { label: "Kickoff times", value: "11:00 AM, 12:15 PM & 1:30 PM" },
      { label: "Location", value: "Tuley Park, 501 E 90th Pl" },
      { label: "Format", value: "Flexible 5v5 or 9v9, agreed at check-in based on attendance" },
      { label: "Playoffs", value: "Weeks 8–10, all 6 teams seeded by standings" },
    ],
    flexFormat: [
      {
        title: "Head-to-head agreement",
        items: [
          "Coaches agree on format at pre-match check-in based on available players.",
          "9v9 standard — if both teams have 11–12+ players, play standard 9v9 (8 field players + goalkeeper).",
          "5v5 flex — if either team has 8 or fewer players, drop to 5v5 (4 field players + goalkeeper) on a smaller field so both teams play maximum minutes without burnout.",
        ],
      },
      {
        title: "Game durations",
        items: ["9v9 — two 25-minute halves, 5-minute halftime.", "5v5 — futsal rules, two 20-minute halves."],
      },
      {
        title: "Equipment & field setup",
        items: [
          "Cones mark the 9v9 outer boundary; inside corner cones let coaches quickly contract the field for 5v5.",
          "Standard 6x18 goals for 9v9; 5v5 plays futsal-style on the same goals — no second set needed.",
        ],
      },
    ],
    goodToKnow: [
      "Arrive 15 minutes before kickoff so coaches can confirm attendance and agree on match format.",
      "Bring both light and dark jerseys or pinnies, in case of a color clash.",
      "Bring water — no water fountain guarantees on-site.",
      "Games proceed rain or shine unless a cancellation is announced; check for updates game-day mornings.",
    ],
    contact: "Questions? Contact your team coordinator.",
  },
];

// School directory for the Schools page. Add a `logo` path (e.g. "/logos/st-ailbe.png")
// once logo files are dropped into the public/logos folder — see README.
export const SCHOOLS = [
  { name: "St. Benedict", logo: null },
  { name: "St. Ailbe", logo: null },
  { name: "St. Thomas the Apostle", logo: null },
  { name: "St. Ethelreda", logo: null },
  { name: "St. Margaret of Scotland", logo: null },
  { name: "Chicago Collegiate", logo: null },
];

export const UPCOMING = [
  { date: "9/12", label: "Week 1 — Game Day" },
  { date: "9/19", label: "Week 2 — Game Day" },
  { date: "9/26", label: "Week 3 — Game Day" },
  { date: "10/3", label: "Week 4 — Game Day" },
];

export const SEASON = {
  year: 2026,
  label: "2026 Fall Season",
  start: "September 12",
  end: "November 14",
  venue: "Tuley Park",
  address: "501 E 90th Pl, Chicago, IL 60619",
  regularSeasonWeeks: 7,
  totalWeeks: 10,
};

// 3 for a win, 1 for a draw. Change here and the whole table follows.
export const POINTS = { win: 3, draw: 1, loss: 0 };

export function divisionBySlug(slug) {
  return DIVISIONS.find((d) => d.slug === slug);
}
