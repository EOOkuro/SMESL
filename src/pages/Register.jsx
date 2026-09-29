import { useState } from "react";

const schools = [
  { id: "stethelreda", abbr: "SE", name: "St. Ethelreda School", neighborhood: "Auburn Gresham", address: "8734 S Paulina St", url: "https://www.stethelreda.org/" },
  { id: "cambridge", abbr: "CCA", name: "Cambridge Classical Academy", neighborhood: "Bridgeport", address: "4650 S Dearborn St", url: "https://www.cambridgeclassicalacademy.com/" },
  { id: "stbenedict", abbr: "ASBA", name: "Academy of St. Benedict the African", neighborhood: "West Englewood", address: "6020 S Laflin St", url: "https://www.academystbenedict.org/" },
  { id: "stthomas", abbr: "STA", name: "St. Thomas the Apostle School", neighborhood: "Hyde Park", address: "5467 S Woodlawn Ave", url: "https://www.stthomashydepark.org/" },
  { id: "stailbe", abbr: "SAC", name: "St. Ailbe Catholic School", neighborhood: "Calumet Heights", address: "9037 S Harper Ave", url: "https://www.stailbeschool.org/" },
];

const plans = [
  {
    id: "one",
    label: "One Player",
    price: "$75",
    desc: "Register one player for the full season.",
    features: ["1 registered player", "Full season league play", "Jersey included", "Player insurance coverage"],
    url: "https://buy.stripe.com/9B600icmC9fyffg3wQgrS09",
    featured: false,
  },
  {
    id: "two",
    label: "Two Players",
    price: "$150",
    desc: "Register two players and save $25.",
    features: ["2 registered players", "Full season league play", "Jerseys included", "Player insurance coverage", "Save $25 vs. individual"],
    url: "https://buy.stripe.com/9B6fZgaeudvO4AC4AUgrS0a",
    featured: true,
  },
];

const faqs = [
  { q: "What ages are eligible?", a: "SMESL is open to middle and elementary school students. Contact the league with age questions." },
  { q: "Can I register more than two players?", a: "Yes — submit multiple registrations. Reach out directly for larger rosters." },
  { q: "Where are games played?", a: "All matches are at Tuley Park, Chicago. Accessible by CTA with parking available." },
  { q: "What if a player needs to withdraw?", a: "Contact the league as soon as possible. Refund eligibility depends on timing relative to season start." },
  { q: "Is there a registration deadline?", a: "Spots are limited. Register early to secure your school's place in the 2025 season." },
];

const s = {
  page: {
    fontFamily: "'Archivo', 'Helvetica Neue', Arial, sans-serif",
    background: "#F1EEE6",
    color: "#111111",
    minHeight: "100vh",
  },
  nav: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "16px 32px",
    borderBottom: "1px solid #111111",
    background: "#F1EEE6",
    position: "sticky",
    top: 0,
    zIndex: 100,
  },
  navLogo: {
    fontWeight: 900,
    fontSize: "1.1rem",
    letterSpacing: "0.08em",
    textTransform: "uppercase",
    color: "#111111",
    textDecoration: "none",
  },
  navLogoAccent: { color: "#8C52FF" },
  navBack: {
    fontSize: "0.8rem",
    color: "#555555",
    textDecoration: "none",
    letterSpacing: "0.04em",
    textTransform: "uppercase",
  },
  hero: {
    padding: "72px 32px 56px",
    maxWidth: 860,
    margin: "0 auto",
  },
  badge: {
    display: "inline-block",
    fontSize: "0.68rem",
    fontWeight: 700,
    letterSpacing: "0.14em",
    textTransform: "uppercase",
    color: "#8C52FF",
    border: "1px solid #8C52FF",
    padding: "4px 12px",
    marginBottom: 28,
  },
  h1: {
    fontWeight: 900,
    fontSize: "clamp(2.6rem, 7vw, 5rem)",
    lineHeight: 0.93,
    textTransform: "uppercase",
    letterSpacing: "-0.01em",
    color: "#111111",
    marginBottom: 20,
  },
  h1Accent: { color: "#8C52FF", display: "block" },
  heroSub: {
    fontSize: "0.95rem",
    color: "#555555",
    maxWidth: 480,
    lineHeight: 1.65,
    marginBottom: 0,
  },
  rule: {
    border: "none",
    borderTop: "1px solid #111111",
    margin: "0 32px 48px",
  },
  sectionLabel: {
    display: "block",
    fontSize: "0.68rem",
    fontWeight: 700,
    letterSpacing: "0.14em",
    textTransform: "uppercase",
    color: "#8C52FF",
    marginBottom: 24,
  },
  section: {
    maxWidth: 860,
    margin: "0 auto",
    padding: "0 32px 64px",
  },
  schoolsGrid: {
    display: "flex",
    flexDirection: "column",
    gap: 0,
    border: "1px solid #111111",
  },
  schoolCard: (hover) => ({
    display: "flex",
    alignItems: "center",
    gap: 20,
    padding: "16px 20px",
    borderBottom: "1px solid #111111",
    textDecoration: "none",
    background: hover ? "#E8E4D8" : "#F1EEE6",
    transition: "background 0.12s",
    cursor: "pointer",
  }),
  schoolCardLast: (hover) => ({
    display: "flex",
    alignItems: "center",
    gap: 20,
    padding: "16px 20px",
    textDecoration: "none",
    background: hover ? "#E8E4D8" : "#F1EEE6",
    transition: "background 0.12s",
    cursor: "pointer",
  }),
  schoolAbbr: {
    fontWeight: 900,
    fontSize: "0.72rem",
    letterSpacing: "0.06em",
    color: "#8C52FF",
    minWidth: 48,
    textTransform: "uppercase",
  },
  schoolName: {
    fontWeight: 700,
    fontSize: "0.95rem",
    color: "#111111",
    textTransform: "uppercase",
    letterSpacing: "0.02em",
  },
  schoolNeighborhood: {
    fontSize: "0.78rem",
    color: "#777777",
    marginTop: 2,
  },
  schoolArrow: { marginLeft: "auto", color: "#8C52FF", fontSize: "1rem" },
  pricingGrid: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: 0,
    border: "1px solid #111111",
  },
  plan: (featured) => ({
    padding: "36px 32px 32px",
    borderRight: featured ? "none" : "1px solid #111111",
    background: featured ? "#111111" : "#F1EEE6",
    display: "flex",
    flexDirection: "column",
  }),
  planLabel: (featured) => ({
    fontSize: "0.68rem",
    fontWeight: 700,
    letterSpacing: "0.14em",
    textTransform: "uppercase",
    color: featured ? "#8C52FF" : "#777777",
    marginBottom: 12,
  }),
  planPrice: (featured) => ({
    fontWeight: 900,
    fontSize: "4rem",
    lineHeight: 1,
    color: featured ? "#F1EEE6" : "#111111",
    marginBottom: 6,
  }),
  planDesc: (featured) => ({
    fontSize: "0.85rem",
    color: featured ? "#AAAAAA" : "#555555",
    marginBottom: 28,
    lineHeight: 1.5,
  }),
  planFeatures: {
    listStyle: "none",
    padding: 0,
    margin: "0 0 32px",
    flex: 1,
  },
  planFeatureItem: (featured) => ({
    fontSize: "0.85rem",
    color: featured ? "#CCCCCC" : "#333333",
    padding: "8px 0",
    borderBottom: `1px solid ${featured ? "rgba(255,255,255,0.08)" : "rgba(0,0,0,0.08)"}`,
    display: "flex",
    alignItems: "center",
    gap: 10,
  }),
  planDot: (featured) => ({
    width: 5,
    height: 5,
    background: "#8C52FF",
    flexShrink: 0,
  }),
  btnPrimary: {
    display: "block",
    textAlign: "center",
    padding: "14px 24px",
    background: "#8C52FF",
    color: "#F1EEE6",
    fontWeight: 900,
    fontSize: "0.85rem",
    letterSpacing: "0.1em",
    textTransform: "uppercase",
    textDecoration: "none",
    border: "none",
    cursor: "pointer",
  },
  btnSecondary: {
    display: "block",
    textAlign: "center",
    padding: "14px 24px",
    background: "transparent",
    color: "#111111",
    fontWeight: 900,
    fontSize: "0.85rem",
    letterSpacing: "0.1em",
    textTransform: "uppercase",
    textDecoration: "none",
    border: "1px solid #111111",
    cursor: "pointer",
  },
  includesGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gap: 0,
    border: "1px solid #111111",
  },
  includeItem: (i, total) => ({
    padding: "24px 22px",
    borderRight: (i + 1) % 3 === 0 ? "none" : "1px solid #111111",
    borderBottom: i < total - 3 ? "1px solid #111111" : "none",
  }),
  includeIcon: { fontSize: "1.2rem", marginBottom: 10 },
  includeTitle: {
    fontWeight: 900,
    fontSize: "0.85rem",
    textTransform: "uppercase",
    letterSpacing: "0.06em",
    color: "#111111",
    marginBottom: 6,
  },
  includeDesc: { fontSize: "0.8rem", color: "#555555", lineHeight: 1.5 },
  stepsGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(4, 1fr)",
    gap: 0,
    border: "1px solid #111111",
  },
  step: (last) => ({
    padding: "24px 20px",
    borderRight: last ? "none" : "1px solid #111111",
  }),
  stepNum: {
    fontWeight: 900,
    fontSize: "2rem",
    color: "rgba(0,0,0,0.12)",
    lineHeight: 1,
    marginBottom: 10,
    fontVariantNumeric: "tabular-nums",
  },
  stepTitle: {
    fontWeight: 900,
    fontSize: "0.85rem",
    textTransform: "uppercase",
    letterSpacing: "0.06em",
    color: "#111111",
    marginBottom: 6,
  },
  stepDesc: { fontSize: "0.8rem", color: "#555555", lineHeight: 1.5 },
  faqList: { border: "1px solid #111111" },
  faqItem: { borderBottom: "1px solid #111111" },
  faqSummary: {
    padding: "16px 20px",
    fontWeight: 700,
    fontSize: "0.88rem",
    cursor: "pointer",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    textTransform: "uppercase",
    letterSpacing: "0.04em",
    color: "#111111",
    userSelect: "none",
    listStyle: "none",
  },
  faqBody: {
    padding: "0 20px 16px",
    fontSize: "0.85rem",
    color: "#555555",
    lineHeight: 1.65,
  },
  ctaBar: {
    background: "#111111",
    padding: "56px 32px",
    textAlign: "center",
    marginTop: 32,
  },
  ctaH2: {
    fontWeight: 900,
    fontSize: "clamp(1.8rem, 5vw, 3rem)",
    textTransform: "uppercase",
    letterSpacing: "-0.01em",
    color: "#F1EEE6",
    marginBottom: 10,
  },
  ctaP: { color: "#777777", fontSize: "0.9rem", marginBottom: 32 },
  ctaButtons: { display: "flex", gap: 14, justifyContent: "center", flexWrap: "wrap" },
  footer: {
    padding: "20px 32px",
    borderTop: "1px solid #111111",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    flexWrap: "wrap",
    gap: 10,
    background: "#F1EEE6",
  },
  footerText: { fontSize: "0.75rem", color: "#777777" },
  footerLink: { fontSize: "0.75rem", color: "#777777", textDecoration: "none" },
};

function SchoolCard({ school, isLast }) {
  const [hover, setHover] = useState(false);
  return (
    <a
      href={school.url}
      target="_blank"
      rel="noopener noreferrer"
      style={isLast ? s.schoolCardLast(hover) : s.schoolCard(hover)}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <span style={s.schoolAbbr}>{school.abbr}</span>
      <span>
        <div style={s.schoolName}>{school.name}</div>
        <div style={s.schoolNeighborhood}>{school.neighborhood} · {school.address}</div>
      </span>
      <span style={s.schoolArrow}>↗</span>
    </a>
  );
}

function FaqItem({ q, a, isLast }) {
  const [open, setOpen] = useState(false);
  return (
    <div style={isLast ? {} : s.faqItem}>
      <div
        style={s.faqSummary}
        onClick={() => setOpen(!open)}
        role="button"
        tabIndex={0}
        onKeyDown={e => e.key === "Enter" && setOpen(!open)}
      >
        {q}
        <span style={{ color: "#8C52FF", fontWeight: 400, fontSize: "1.2rem" }}>{open ? "−" : "+"}</span>
      </div>
      {open && <div style={s.faqBody}>{a}</div>}
    </div>
  );
}

export default function Register() {
  const includes = [
    { icon: "⚽", title: "Full Season Schedule", desc: "Structured match days at Tuley Park, organized by age group." },
    { icon: "👕", title: "Player Jersey", desc: "Every registered player receives an official SMESL jersey." },
    { icon: "🛡️", title: "Player Coverage", desc: "All players covered under the league's protection policy." },
    { icon: "📋", title: "League Admin", desc: "Refs, scheduling, standings, and results — all handled." },
    { icon: "🏆", title: "End-of-Season Playoff", desc: "Top teams advance to the SMESL playoff." },
    { icon: "📍", title: "South Side Venue", desc: "All games at Tuley Park — central, accessible, safe." },
  ];

  const steps = [
    { num: "01", title: "Choose a Plan", desc: "Select one or two players and complete payment via Stripe." },
    { num: "02", title: "Confirm Players", desc: "After payment you'll be contacted to submit player names and school info." },
    { num: "03", title: "Receive Jersey", desc: "Jerseys distributed before the first match day." },
    { num: "04", title: "Play the Season", desc: "Show up, compete, and track standings on the league site." },
  ];

  return (
    <div style={s.page}>
      {/* NAV */}
      <nav style={s.nav}>
        <a href="https://smesl.vercel.app/" style={s.navLogo}>
          SM<span style={s.navLogoAccent}>E</span>SL
        </a>
        <a href="https://smesl.vercel.app/" style={s.navBack}>← Back to League Site</a>
      </nav>

      {/* HERO */}
      <div style={s.hero}>
        <span style={s.badge}>2025 Season Registration</span>
        <h1 style={s.h1}>
          Bring Your School
          <em style={s.h1Accent}>to the Pitch.</em>
        </h1>
        <p style={s.heroSub}>
          Register your school for the Southside Middle & Elementary School Soccer League — structured, safe, and built for Chicago's South Side.
        </p>
      </div>

      <hr style={s.rule} />

      {/* SCHOOLS */}
      <div style={s.section}>
        <span style={s.sectionLabel}>Participating Schools</span>
        <div style={s.schoolsGrid}>
          {schools.map((school, i) => (
            <SchoolCard key={school.id} school={school} isLast={i === schools.length - 1} />
          ))}
        </div>
      </div>

      <hr style={s.rule} />

      {/* PRICING */}
      <div style={s.section}>
        <span style={s.sectionLabel}>Choose Your Plan</span>
        <div style={s.pricingGrid}>
          {plans.map(plan => (
            <div key={plan.id} style={s.plan(plan.featured)}>
              <div style={s.planLabel(plan.featured)}>{plan.label}</div>
              <div style={s.planPrice(plan.featured)}>{plan.price}</div>
              <p style={s.planDesc(plan.featured)}>{plan.desc}</p>
              <ul style={s.planFeatures}>
                {plan.features.map(f => (
                  <li key={f} style={s.planFeatureItem(plan.featured)}>
                    <span style={s.planDot(plan.featured)} />
                    {f}
                  </li>
                ))}
              </ul>
              <a
                href={plan.url}
                target="_blank"
                rel="noopener noreferrer"
                style={plan.featured ? s.btnPrimary : s.btnSecondary}
              >
                Register — {plan.price}
              </a>
            </div>
          ))}
        </div>
      </div>

      <hr style={s.rule} />

      {/* WHAT'S INCLUDED */}
      <div style={s.section}>
        <span style={s.sectionLabel}>What's Included</span>
        <div style={s.includesGrid}>
          {includes.map((item, i) => (
            <div key={item.title} style={s.includeItem(i, includes.length)}>
              <div style={s.includeIcon}>{item.icon}</div>
              <div style={s.includeTitle}>{item.title}</div>
              <div style={s.includeDesc}>{item.desc}</div>
            </div>
          ))}
        </div>
      </div>

      <hr style={s.rule} />

      {/* HOW IT WORKS */}
      <div style={s.section}>
        <span style={s.sectionLabel}>How It Works</span>
        <div style={s.stepsGrid}>
          {steps.map((step, i) => (
            <div key={step.num} style={s.step(i === steps.length - 1)}>
              <div style={s.stepNum}>{step.num}</div>
              <div style={s.stepTitle}>{step.title}</div>
              <div style={s.stepDesc}>{step.desc}</div>
            </div>
          ))}
        </div>
      </div>

      <hr style={s.rule} />

      {/* FAQ */}
      <div style={s.section}>
        <span style={s.sectionLabel}>Common Questions</span>
        <div style={s.faqList}>
          {faqs.map((faq, i) => (
            <FaqItem key={faq.q} q={faq.q} a={faq.a} isLast={i === faqs.length - 1} />
          ))}
        </div>
      </div>

      {/* CTA */}
      <div style={s.ctaBar}>
        <h2 style={s.ctaH2}>Ready to Register?</h2>
        <p style={s.ctaP}>Secure your school's spot in the 2025 SMESL season.</p>
        <div style={s.ctaButtons}>
          <a href="https://buy.stripe.com/9B600icmC9fyffg3wQgrS09" target="_blank" rel="noopener noreferrer" style={{ ...s.btnSecondary, color: "#F1EEE6", borderColor: "#555555", minWidth: 200 }}>
            One Player — $75
          </a>
          <a href="https://buy.stripe.com/9B6fZgaeudvO4AC4AUgrS0a" target="_blank" rel="noopener noreferrer" style={{ ...s.btnPrimary, minWidth: 200 }}>
            Two Players — $150
          </a>
        </div>
      </div>

      {/* FOOTER */}
      <footer style={s.footer}>
        <p style={s.footerText}>© 2025 Southside Middle & Elementary School Soccer League · MegCity Soccer / Tekkerz LLC</p>
        <a href="https://smesl.vercel.app/" style={s.footerLink}>smesl.vercel.app</a>
      </footer>
    </div>
  );
}
