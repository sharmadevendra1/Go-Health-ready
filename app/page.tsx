const needs = [
  ['🧭','Find care','Hospitals, PHCs & Arogya Mandirs'],['🧪','Find a test','Diagnostics and screening'],['👶','Pregnancy & ANC','Care for mother and baby'],['💉','Vaccination','Find immunisation services'],['🫁','TB services','Testing, treatment & follow-up'],['🩺','Diabetes & BP','Screening and primary care'],['👁️','Eye care','Vision and basic eye services'],['🦷','Dental care','Nearby public dental services'],
]

export default function Home(){
 return <main className="shell">
  <header className="topbar"><div className="logo"><span className="logo-mark">+</span> Go Health</div><button className="lang">English ▾</button></header>
  <section className="hero">
   <div><div className="eyebrow">PUBLIC HEALTHCARE, MADE SIMPLE</div><h1>Find the right care. Near you.</h1><p>Go Health helps you understand where to go, what to ask for, and which government benefit may help — without needing to know the system first.</p>
    <div className="search"><input aria-label="Search healthcare" placeholder="Try “I need a TB test” or “nearest PHC”"/><button>Search</button></div>
   </div>
   <div className="hero-card"><div className="pill">● Navigation, not diagnosis</div><div className="big">Know what to do next.</div><p>Find an appropriate facility, understand the service, check possible benefits, and get directions.</p><div className="trust"><span className="pill">📍 Nearby</span><span className="pill">✓ Source-aware</span><span className="pill">भाषा • भाषा • भाषा</span></div></div>
  </section>
  <section className="section"><h2>What do you need today?</h2><div className="grid">{needs.map(([i,t,d])=><div className="tile" key={t}><div className="icon">{i}</div><strong>{t}</strong><span>{d}</span></div>)}</div></section>
  <section className="section"><div className="benefit"><div className="benefit-card"><div className="icon">💰</div><h3>Find government benefits</h3><p>Explore schemes you may qualify for and go to the official source for verification.</p><button className="cta">Explore schemes</button></div><div className="benefit-card"><div className="icon">🚨</div><h3>Need urgent care?</h3><p>Get a simple route to nearby emergency-capable care. If it is an emergency, seek immediate local emergency help.</p><button className="cta">Find emergency care</button></div></div></section>
  <footer className="footer">Go Health is a healthcare navigation service. It does not diagnose, prescribe, or replace a qualified healthcare professional. Service availability and scheme eligibility should be confirmed with official sources or the facility.</footer>
 </main>
}