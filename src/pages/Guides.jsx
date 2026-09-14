import React from "react";
import { Link } from "react-router-dom";

const TIERS = [
  { tier: "Low", price: "$20 – $100", note: "Solid for recreational and competitive play. The right call for growing feet." },
  { tier: "Mid", price: "$100 – $200", note: "Better materials, more support, lasts longer." },
  { tier: "High", price: "$200+", note: "Premium build. Worth it once a player is in high-level competitive soccer." },
];

const SURFACES = [
  {
    title: "Firm ground / hybrid",
    sub: "Natural grass and artificial turf",
    body: "Short, rounded or conical studs that work on both without loading the knees and ankles.",
    budget: "Adidas Goletto or Copa Sense, Nike Jr. Tiempo Rio, Puma Rapido — $25–$50",
    upgrade: "Nike Phantom GX II Pro FG, Adidas Predator 24 Pro FG, Puma Future 7 Pro, New Balance Furon v7 — $100–$220",
  },
  {
    title: "Turf only",
    sub: "Short-blade artificial carpet",
    body: "Small rubber studs across the whole sole for grip without the joint stress.",
    budget: "Nike Jr. Mercurial Vortex TF, Adidas Predator Club TF — $30–$50",
    upgrade: "Nike Tiempo Legend 10 Pro TF, Adidas Mundial Team TF, Puma King Top TF, New Balance Tekela V4 Pro — $100–$160",
  },
];

export default function Guides() {
  return (
    <>
      <div className="pagehead">
        <div className="pagehead-in">
          <h1>Cleat &amp; gear guide</h1>
          <p>
            You do not need expensive boots. Here's what actually matters for a kid whose feet will
            be a size bigger by spring.
          </p>
        </div>
      </div>

      <div className="page">
        <section className="section">
          <div className="section-head">
            <h2>What you get at each price</h2>
          </div>
          <div className="table-scroll">
            <table className="ltable ltable-plain">
              <thead>
                <tr>
                  <th scope="col">Tier</th>
                  <th scope="col">Price</th>
                  <th scope="col">What you get</th>
                </tr>
              </thead>
              <tbody>
                {TIERS.map((t) => (
                  <tr key={t.tier}>
                    <th scope="row" className="c-team">{t.tier}</th>
                    <td className="nowrap">{t.price}</td>
                    <td>{t.note}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="section">
          <div className="section-head">
            <h2>Picking by surface</h2>
          </div>
          <div className="cards">
            {SURFACES.map((s) => (
              <article className="card" key={s.title}>
                <h3>{s.title}</h3>
                <p className="card-sub">{s.sub}</p>
                <p>{s.body}</p>
                <ul>
                  <li>Budget: {s.budget}</li>
                  <li>Step up: {s.upgrade}</li>
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section className="section">
          <div className="section-head">
            <h2>Everything else</h2>
          </div>
          <dl className="facts">
            <div>
              <dt>Shin guards</dt>
              <dd>Required every game and practice, $10–$20, fully covered by socks.</dd>
            </div>
            <div>
              <dt>Keeper gloves</dt>
              <dd>$12–$25 is plenty for young keepers. $40+ buys grip an experienced keeper will feel.</dd>
            </div>
            <div>
              <dt>Crossing over</dt>
              <dd>Molded soccer cleats work for football and lacrosse. Baseball cleats never work for soccer — the toe stud is unsafe.</dd>
            </div>
          </dl>
          <p className="aside">
            Division-specific kit rules live on the <Link to="/rules">rules page</Link>.
          </p>
        </section>
      </div>
    </>
  );
}
