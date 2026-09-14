# SMESL

Site for the Southside Middle & Elementary School Soccer League — 2026 fall season.

```
npm install
npm run dev      # local
npm run build    # production build into dist/
```

## Pages

| Route | What's there |
| --- | --- |
| `/` | Hero, top three in each division, latest results, next match day |
| `/table` | Full league table for every division that keeps one |
| `/schedule` | All ten weeks, by division |
| `/divisions` | Index of the three divisions |
| `/divisions/pre-k`, `/divisions/1st-4th`, `/divisions/middle-school` | Roster, table, schedule, playoff bracket, rules |
| `/scores` | Score entry |
| `/schools`, `/rules`, `/guides`, `/contact` | Directory, formats and conduct, cleat guide, contacts |

## How scores work

There are two layers.

**Published** — `src/data/results.js`. Committed to the repo, so every visitor sees it.

**Local** — whatever you type on `/scores`. Saved in that browser only. Nobody else sees it.

Local wins over published for the same match, so you can type a score, check the table, and fix it
before anyone else sees anything.

### Publishing a match day

1. Go to `/scores`, pick the division, type the finals.
2. Press **Copy for results.js**.
3. Open `src/data/results.js` and paste inside the `RESULTS` object, replacing what's there.
4. Commit and redeploy. The banner on `/table` disappears once the local copy matches.

**Download JSON** and **Load JSON** move scores between devices — useful if a coach enters scores on
a phone at the field and you publish from a laptop later.

### If you'd rather not paste files

This is a static site, so a shared score requires a backend. The smallest upgrade: a Vercel KV or
Supabase table keyed by fixture id, read in `src/lib/store.js` where `readLocal()` currently sits.
Nothing else in the app needs to change — every other file reads scores through `useResults()`.

## Changing the season

- **Fixtures** live in `src/data/fixtures.js`. Each has a stable `id` that scores key off — if you
  edit a fixture, keep its id, or its score gets orphaned.
  - `stage: "regular"` counts toward the table. `stage: "playoff"` doesn't.
  - `tbd: true` means opponents depend on seeding, so no score can be entered yet.
- **Divisions, rosters, rules, quick facts** live in `src/data/divisions.js`.
  - `standings: false` hides the table for a division (Pre-K is set this way today — flip it to
    `true` to publish one).
- **Points** are `POINTS` at the bottom of `divisions.js`. Tiebreakers are points, then goal
  difference, then goals scored, then wins — in `src/lib/standings.js`.

## School logos

Drop files into `public/logos/`, then set the path in the `SCHOOLS` array in `src/data/divisions.js`:

```js
{ name: "St. Ailbe", logo: "/logos/st-ailbe.png" },
```

Schools without a logo show an initials badge.

## Design

Carried over from chicagosuperleague.com: cream paper `#F1EEE6`, one purple `#8C52FF`, Archivo in
heavy uppercase for display, hairline rules, no rounded corners. Tokens are at the top of
`src/styles.css`.
