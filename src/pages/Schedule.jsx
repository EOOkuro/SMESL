export const SEASON = {
  label: "Fall Season",
  start: "Sept 19",
  end: "Oct 17",
  venue: "Tuley Park",
  address: "501 E 90th St, Chicago, IL 60619",
};

export const DIVISIONS = [
  {
    key: "south",
    slug: "south",
    navLabel: "South Division",
    name: "South Division",
  },
];

// Match data structured by weeks reflecting the updated results
export const MATCH_DATA = {
  south: {
    regular: [
      {
        week: 1,
        date: "Sept 19th",
        matches: [
          { id: 1, home: "St Ailbe 1", away: "St Benedict 1", scoreHome: 6, scoreAway: 0 },
          { id: 2, home: "St Ailbe 2", away: "St Benedict 2", scoreHome: 4, scoreAway: 1 },
        ],
      },
      {
        week: 2,
        date: "Oct 4th (Weather)",
        matches: [
          { id: 3, home: "St Thomas", away: "St Benedict 1", scoreHome: 8, scoreAway: 0 },
        ],
      },
      {
        week: 3,
        date: "Sept 6th",
        matches: [
          { id: 4, home: "St Thomas", away: "St Ailbe 1", scoreHome: 8, scoreAway: 1 },
          { id: 5, home: "St Ailbe 2", away: "St Ethelreda 1", scoreHome: 3, scoreAway: 2 },
        ],
      },
      {
        week: 4,
        date: "Oct 3rd",
        matches: [
          { id: 6, home: "St Thomas", away: "St Ethelreda 1", scoreHome: 8, scoreAway: 0 },
        ],
      },
      {
        week: 5,
        date: "Oct 17th",
        matches: [
          { id: 7, home: "St Ailbe 2", away: "St Thomas", scoreHome: null, scoreAway: null },
        ],
      },
    ],
    playoff: [],
  },
};
