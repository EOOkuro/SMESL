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

const CHECKIN =
