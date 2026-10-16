import { useState, useRef } from "react";

const FORM_ENDPOINT = "https://formspree.io/f/mjygwpdr";

const schools = [
  { id: "stethelreda", abbr: "SE", name: "St. Ethelreda School", neighborhood: "Auburn Gresham", address: "8734 S Paulina St", url: "https://www.stethelreda.org/" },
  { id: "cambridge", abbr: "CCA", name: "Cambridge Classical Academy", neighborhood: "Bronzeville", address: "4650 S Dearborn St", url: "https://www.cambridgeclassicalacademy.com/" },
  { id: "stbenedict", abbr: "ASBA", name: "Academy of St. Benedict the African", neighborhood: "West Englewood", address: "6020 S Laflin St", url: "https://www.academystbenedict.org/" },
  { id: "stthomas", abbr: "STA", name: "St. Thomas the Apostle School", neighborhood: "Hyde Park", address: "5467 S Woodlawn Ave", url: "https://www.stthomashydepark.org/" },
  { id: "stailbe", abbr: "SAC", name: "St. Ailbe Catholic School", neighborhood: "Calumet Heights", address: "9037 S Harper Ave", url: "https://www.stailbeschool.org/" },
];

const plans = [
  {
    id: "one",
    count: 1,
    label: "One Player",
    price: "$75",
    desc: "Register one player for the full season.",
    features: ["1 registered player", "Full season league play", "Jersey included", "Player insurance coverage"],
    url: "https://buy.stripe.com/9B600icmC9fyffg3wQgrS09",
    featured: false,
  },
  {
    id: "two",
    count: 2,
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
  { q: "Is there a registration deadline?", a: "Spots are limited. Register early to secure your school's place in the season." },
];

const gradeOptions = ["Pre-K", "K", "1st", "2nd", "3rd", "4th", "5th", "6th", "7th", "8th"];
const sizeOptions = ["Youth S", "Youth M", "Youth L", "Youth XL", "Adult S"];
const schoolOptions = [...schools.map((x) => x.name), "Other school", "Club / not in a school"];

const emptyChild = () => ({ name: "", birthdate: "", grade: "", school: "", team: "", jerseySize: "" });

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
  hero: { padding: "72px 32px 56px", maxWidth: 860, margin: "0 auto" },
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
  heroSub: { fontSize: "0.95rem", color: "#555555", maxWidth: 480, lineHeight: 1.65, marginBottom: 0 },
  rule: { border: "none", borderTop: "1px solid #111111", margin: "0 32px 48px" },
  sectionLabel: {
    display: "block",
    fontSize: "0.68rem",
    fontWeight: 700,
    letterSpacing: "0.14em",
    textTransform: "uppercase",
    color: "#8C52FF",
    marginBottom: 24,
  },
  section: { maxWidth: 860, margin: "0 auto", padding: "0 32px 64px" },
  schoolsGrid: { display: "flex", flexDirection: "column", gap: 0, border: "1px solid #111111" },
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
  schoolAbbr: { fontWeight: 900, fontSize: "0.72rem", letterSpacing: "0.06em", color: "#8C52FF", minWidth: 48, textTransform: "uppercase" },
  schoolName: { fontWeight: 700, fontSize: "0.95rem", color: "#111111", textTransform: "uppercase", letterSpacing: "0.02em" },
  schoolNeighborhood: { fontSize: "0.78rem", color: "#777777", marginTop: 2 },
  schoolArrow: { marginLeft: "auto", color: "#8C52FF", fontSize: "1rem" },
  pricingGrid: { display: "grid", gridTemplateColumns: "1fr 1fr", gap: 0, border: "1px solid #111111" },
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
  planPrice: (featured) => ({ fontWeight: 900, fontSize: "4rem", lineHeight: 1, color: featured ? "#F1EEE6" : "#111111", marginBottom: 6 }),
  planDesc: (featured) => ({ fontSize: "0.85rem", color: featured ? "#AAAAAA" : "#555555", marginBottom: 28, lineHeight: 1.5 }),
  planFeatures: { listStyle: "none", padding: 0, margin: "0 0 32px", flex: 1 },
  planFeatureItem: (featured) => ({
    fontSize: "0.85rem",
    color: featured ? "#CCCCCC" : "#333333",
    padding: "8px 0",
    borderBottom: `1px solid ${featured ? "rgba(255,255,255,0.08)" : "rgba(0,0,0,0.08)"}`,
    display: "flex",
    alignItems: "center",
    gap: 10,
  }),
  planDot: { width: 5, height: 5, background: "#8C52FF", flexShrink: 0 },
  btnPrimary: {
    display: "block",
    width: "100%",
    boxSizing: "border-box",
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
    fontFamily: "inherit",
  },
  btnSecondary: {
    display: "block",
    width: "100%",
    boxSizing: "border-box",
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
    fontFamily: "inherit",
  },
  includesGrid: { display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 0, border: "1px solid #111111" },
  includeItem: (i, total) => ({
    padding: "24px 22px",
    borderRight: (i + 1) % 3 === 0 ? "none" : "1px solid #111111",
    borderBottom: i < total - 3 ? "1px solid #111111" : "none",
  }),
  includeIcon: { fontSize: "1.2rem", marginBottom: 10 },
  includeTitle: { fontWeight: 900, fontSize: "0.85rem", textTransform: "uppercase", letterSpacing: "0.06em", color: "#111111", marginBottom: 6 },
  includeDesc: { fontSize: "0.8rem", color: "#555555", lineHeight: 1.5 },
  stepsGrid: { display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 0, border: "1px solid #111111" },
  step: (last) => ({ padding: "24px 20px", borderRight: last ? "none" : "1px solid #111111" }),
  stepNum: { fontWeight: 900, fontSize: "2rem", color: "rgba(0,0,0,0.12)", lineHeight: 1, marginBottom: 10, fontVariantNumeric: "tabular-nums" },
  stepTitle: { fontWeight: 900, fontSize: "0.85rem", textTransform: "uppercase", letterSpacing: "0.06em", color: "#111111", marginBottom: 6 },
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
  faqBody: { padding: "0 20px 16px", fontSize: "0.85rem", color: "#555555", lineHeight: 1.65 },
  ctaBar: { background: "#111111", padding: "56px 32px", textAlign: "center", marginTop: 32 },
  ctaH2: { fontWeight: 900, fontSize: "clamp(1.8rem, 5vw, 3rem)", textTransform: "uppercase", letterSpacing: "-0.01em", color: "#F1EEE6", marginBottom: 10 },
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

  /* registration form */
  formBox: { border: "1px solid #111111", background: "#F1EEE6" },
  formHead: {
    padding: "20px 24px",
    borderBottom: "1px solid #111111",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    flexWrap: "wrap",
    gap: 12,
  },
  formTitle: { fontWeight: 900, fontSize: "1.1rem", textTransform: "uppercase", letterSpacing: "0.04em" },
  planToggle: { display: "flex", border: "1px solid #111111" },
  planToggleBtn: (active) => ({
    padding: "8px 16px",
    fontFamily: "inherit",
    fontWeight: 700,
    fontSize: "0.75rem",
    letterSpacing: "0.08em",
    textTransform: "uppercase",
    background: active ? "#111111" : "transparent",
    color: active ? "#F1EEE6" : "#111111",
    border: "none",
    cursor: "pointer",
  }),
  fieldset: { padding: "24px", borderBottom: "1px solid #111111", margin: 0, border: "none", borderBottomWidth: 1, borderBottomStyle: "solid", borderBottomColor: "#111111" },
  legend: { fontWeight: 900, fontSize: "0.8rem", textTransform: "uppercase", letterSpacing: "0.08em", color: "#8C52FF", padding: 0, marginBottom: 16 },
  row: { display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: 16, marginBottom: 16 },
  label: { display: "block", fontSize: "0.75rem", fontWeight: 700, color: "#333333", marginBottom: 6 },
  input: {
    width: "100%",
    boxSizing: "border-box",
    padding: "11px 12px",
    fontFamily: "inherit",
    fontSize: "1rem",
    background: "#FFFFFF",
    color: "#111111",
    border: "1px solid #111111",
    borderRadius: 0,
  },
  hint: { fontSize: "0.72rem", color: "#777777", marginTop: 4 },
  formFoot: { padding: "24px" },
  error: { background: "#FDE8E8", border: "1px solid #B42318", color: "#B42318", padding: "10px 14px", fontSize: "0.85rem", marginBottom: 16 },
  note: { fontSize: "0.78rem", color: "#555555", marginTop: 12, lineHeight: 1.5 },
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
        onKeyDown={(e) => e.key === "Enter" && setOpen(!open)}
      >
        {q}
        <span style={{ color: "#8C52FF", fontWeight: 400, fontSize: "1.2rem" }}>{open ? "−" : "+"}</span>
      </div>
      {open && <div style={s.faqBody}>{a}</div>}
    </div>
  );
}

function Field({ label, hint, children }) {
  return (
    <div>
      <label style={s.label}>{label}</label>
      {children}
      {hint && <div style={s.hint}>{hint}</div>}
    </div>
  );
}

function RegistrationForm({ planId, setPlanId, formRef }) {
  const plan = plans.find((p) => p.id === planId);
  const [parent, setParent] = useState({ name: "", email: "", phone: "", emergencyName: "", emergencyPhone: "" });
  const [kids, setKids] = useState([emptyChild(), emptyChild()]);
  const [status, setStatus] = useState("idle"); // idle | sending | error
  const [errorMsg, setErrorMsg] = useState("");

  const setP = (k) => (e) => setParent({ ...parent, [k]: e.target.value });
  const setK = (i, k) => (e) => setKids(kids.map((c, idx) => (idx === i ? { ...c, [k]: e.target.value } : c)));

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (status === "sending") return;
    setStatus("sending");
    setErrorMsg("");

    const children = kids.slice(0, plan.count);
    const payload = {
      _subject: `SMESL registration: ${parent.name} (${plan.price})`,
      _gotcha: "",
      email: parent.email,
      plan: `${plan.label} — ${plan.price}`,
      parent_name: parent.name,
      parent_email: parent.email,
      parent_phone: parent.phone,
      emergency_contact_name: parent.emergencyName,
      emergency_contact_phone: parent.emergencyPhone,
    };
    children.forEach((c, i) => {
      const n = i + 1;
      payload[`child${n}_name`] = c.name;
      payload[`child${n}_birthdate`] = c.birthdate;
      payload[`child${n}_grade`] = c.grade;
      payload[`child${n}_school_or_club`] = c.school;
      payload[`child${n}_team`] = c.team;
      payload[`child${n}_jersey_size`] = c.jerseySize;
    });

    try {
      const res = await fetch(FORM_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(payload),
      });
      if (!res.ok) throw new Error("Form failed");
      // Registration saved — now send them to pay, with their email prefilled so it matches.
      window.location.href = `${plan.url}?prefilled_email=${encodeURIComponent(parent.email)}`;
    } catch (err) {
      setStatus("error");
      setErrorMsg("We couldn't save your registration. Check your connection and try again. Nothing was charged.");
    }
  };

  return (
    <div ref={formRef} style={s.formBox}>
      <div style={s.formHead}>
        <div style={s.formTitle}>Player registration</div>
        <div style={s.planToggle}>
          {plans.map((p) => (
            <button key={p.id} type="button" style={s.planToggleBtn(p.id === planId)} onClick={() => setPlanId(p.id)}>
              {p.count} {p.count === 1 ? "player" : "players"} · {p.price}
            </button>
          ))}
        </div>
      </div>

      <form onSubmit={handleSubmit}>
        <fieldset style={s.fieldset}>
          <legend style={s.legend}>Parent / guardian</legend>
          <div style={s.row}>
            <Field label="Full name">
              <input style={s.input} required value={parent.name} onChange={setP("name")} autoComplete="name" />
            </Field>
            <Field label="Email" hint="Use the email you'll pay with.">
              <input style={s.input} required type="email" value={parent.email} onChange={setP("email")} autoComplete="email" />
            </Field>
            <Field label="Phone">
              <input style={s.input} required type="tel" value={parent.phone} onChange={setP("phone")} autoComplete="tel" />
            </Field>
          </div>
          <div style={s.row}>
            <Field label="Emergency contact name">
              <input style={s.input} required value={parent.emergencyName} onChange={setP("emergencyName")} />
            </Field>
            <Field label="Emergency contact phone">
              <input style={s.input} required type="tel" value={parent.emergencyPhone} onChange={setP("emergencyPhone")} />
            </Field>
          </div>
        </fieldset>

        {kids.slice(0, plan.count).map((c, i) => (
          <fieldset key={i} style={s.fieldset}>
            <legend style={s.legend}>Player {i + 1}</legend>
            <div style={s.row}>
              <Field label="Player full name">
                <input style={s.input} required value={c.name} onChange={setK(i, "name")} />
              </Field>
              <Field label="Date of birth">
                <input style={s.input} required type="date" value={c.birthdate} onChange={setK(i, "birthdate")} />
              </Field>
              <Field label="Grade">
                <select style={s.input} required value={c.grade} onChange={setK(i, "grade")}>
                  <option value="">Select</option>
                  {gradeOptions.map((g) => <option key={g}>{g}</option>)}
                </select>
              </Field>
            </div>
            <div style={s.row}>
              <Field label="School or club">
                <select style={s.input} required value={c.school} onChange={setK(i, "school")}>
                  <option value="">Select</option>
                  {schoolOptions.map((x) => <option key={x}>{x}</option>)}
                </select>
              </Field>
              <Field label="Team name (if known)">
                <input style={s.input} value={c.team} onChange={setK(i, "team")} />
              </Field>
              <Field label="Jersey size">
                <select style={s.input} required value={c.jerseySize} onChange={setK(i, "jerseySize")}>
                  <option value="">Select</option>
                  {sizeOptions.map((x) => <option key={x}>{x}</option>)}
                </select>
              </Field>
            </div>
          </fieldset>
        ))}

        {/* honeypot for bots */}
        <input type="text" name="_gotcha" tabIndex={-1} autoComplete="off" style={{ display: "none" }} />

        <div style={s.formFoot}>
          {status === "error" && <div style={s.error} role="alert">{errorMsg}</div>}
          <button type="submit" style={s.btnPrimary} disabled={status === "sending"}>
            {status === "sending" ? "Saving…" : `Continue to payment — ${plan.price}`}
          </button>
          <div style={s.note}>
            Step 1 of 2. After you continue, you'll be sent to Stripe to pay. Your registration isn't complete until payment goes through.
          </div>
        </div>
      </form>
    </div>
  );
}

export default function Register() {
  const [planId, setPlanId] = useState("one");
  const formRef = useRef(null);

  const choosePlan = (id) => {
    setPlanId(id);
    setTimeout(() => formRef.current?.scrollIntoView({ behavior: "smooth", block: "start" }), 50);
  };

  const includes = [
    { icon: "⚽", title: "Full Season Schedule", desc: "Structured match days at Tuley Park, organized by age group." },
    { icon: "👕", title: "Player Jersey", desc: "Every registered player receives an official SMESL jersey." },
    { icon: "🛡️", title: "Player Coverage", desc: "All players covered under the league's protection policy." },
    { icon: "📋", title: "League Admin", desc: "Refs, scheduling, standings, and results — all handled." },
    { icon: "🏆", title: "End-of-Season Playoff", desc: "Top teams advance to the SMESL playoff." },
    { icon: "📍", title: "South Side Venue", desc: "All games at Tuley Park — central, accessible, safe." },
  ];

  const steps = [
    { num: "01", title: "Choose a Plan", desc: "Select one or two players." },
    { num: "02", title: "Fill Out Player Info", desc: "Tell us who's playing: names, grade, school or club, jersey size." },
    { num: "03", title: "Pay on Stripe", desc: "You're sent to secure checkout right after the form." },
    { num: "04", title: "Play the Season", desc: "Jerseys are handed out before the first match day." },
  ];

  return (
    <div style={s.page}>
      <nav style={s.nav}>
        <a href="https://smesl.vercel.app/" style={s.navLogo}>
          SM<span style={s.navLogoAccent}>E</span>SL
        </a>
        <a href="https://smesl.vercel.app/" style={s.navBack}>← Back to League Site</a>
      </nav>

      <div style={s.hero}>
        <span style={s.badge}>Season Registration</span>
        <h1 style={s.h1}>
          Bring Your School
          <em style={s.h1Accent}>to the Pitch.</em>
        </h1>
        <p style={s.heroSub}>
          Register your school for the Southside Middle & Elementary School Soccer League — structured, safe, and built for Chicago's South Side.
        </p>
      </div>

      <hr style={s.rule} />

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
          {plans.map((plan) => (
            <div key={plan.id} style={s.plan(plan.featured)}>
              <div style={s.planLabel(plan.featured)}>{plan.label}</div>
              <div style={s.planPrice(plan.featured)}>{plan.price}</div>
              <p style={s.planDesc(plan.featured)}>{plan.desc}</p>
              <ul style={s.planFeatures}>
                {plan.features.map((f) => (
                  <li key={f} style={s.planFeatureItem(plan.featured)}>
                    <span style={s.planDot} />
                    {f}
                  </li>
                ))}
              </ul>
              <button type="button" onClick={() => choosePlan(plan.id)} style={plan.featured ? s.btnPrimary : s.btnSecondary}>
                Register — {plan.price}
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* FORM */}
      <div style={s.section}>
        <span style={s.sectionLabel}>Player Info</span>
        <RegistrationForm planId={planId} setPlanId={setPlanId} formRef={formRef} />
      </div>

      <hr style={s.rule} />

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

      <div style={s.section}>
        <span style={s.sectionLabel}>Common Questions</span>
        <div style={s.faqList}>
          {faqs.map((faq, i) => (
            <FaqItem key={faq.q} q={faq.q} a={faq.a} isLast={i === faqs.length - 1} />
          ))}
        </div>
      </div>

      <div style={s.ctaBar}>
        <h2 style={s.ctaH2}>Ready to Register?</h2>
        <p style={s.ctaP}>Secure your school's spot in the SMESL season.</p>
        <div style={s.ctaButtons}>
          <button type="button" onClick={() => choosePlan("one")} style={{ ...s.btnSecondary, color: "#F1EEE6", borderColor: "#555555", minWidth: 200, width: "auto" }}>
            One Player — $75
          </button>
          <button type="button" onClick={() => choosePlan("two")} style={{ ...s.btnPrimary, minWidth: 200, width: "auto" }}>
            Two Players — $150
          </button>
        </div>
      </div>

      <footer style={s.footer}>
        <p style={s.footerText}>© 2026 Southside Middle & Elementary School Soccer League · MegCity Soccer / Tekkerz LLC</p>
        <a href="https://smesl.vercel.app/" style={s.footerLink}>smesl.vercel.app</a>
      </footer>
    </div>
  );
}
