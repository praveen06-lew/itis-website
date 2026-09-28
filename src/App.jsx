
import { useState } from "react";
import { motion } from "framer-motion";
import {
  Activity, ArrowRight, Bot, CheckCircle2, ChevronRight,
  Cloud, DatabaseBackup, Menu, Network, Phone, Server,
  ShieldCheck, X, Mail, MapPin, Gauge,
} from "lucide-react";

const services = [
  { icon: Network, title: "Network Infrastructure", text: "Design, deploy and manage reliable wired and wireless networks." },
  { icon: ShieldCheck, title: "Cybersecurity", text: "Protect your systems with practical security and access controls." },
  { icon: Cloud, title: "Cloud Infrastructure", text: "Build scalable cloud environments for modern organizations." },
  { icon: Server, title: "Server Management", text: "Keep servers, operating systems and services running smoothly." },
  { icon: Activity, title: "Network Monitoring", text: "Monitor infrastructure health and identify issues early." },
  { icon: Bot, title: "IT Automation", text: "Automate repetitive infrastructure tasks and workflows." },
  { icon: DatabaseBackup, title: "Backup & Recovery", text: "Plan backups and recovery processes to protect important data." },
  { icon: Gauge, title: "IT Support", text: "Troubleshoot technical issues and support daily IT operations." },
];

const projects = [
  { number: "01", title: "Campus Network Infrastructure", tag: "NETWORKING", text: "A scalable campus network concept with VLANs, routing, DHCP, DNS and access control." },
  { number: "02", title: "Infrastructure Automation", tag: "AUTOMATION", text: "A Python-based approach to simplify network configuration and routine tasks." },
  { number: "03", title: "Infrastructure Monitoring", tag: "MONITORING", text: "A monitoring concept for tracking network status, availability and performance." },
];

const steps = ["Discover", "Design", "Deploy", "Monitor", "Automate"];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const navItems = ["Home", "Services", "Solutions", "Projects", "About", "Contact"];

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thanks! This demo form is not connected to a backend yet.");
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <div className="site-shell">
      <nav className="navbar">
        <a className="brand" href="#home">
          <span className="brand-icon"><Network size={22} /></span>
          <span>INFRANOVA<span className="brand-dot">.</span></span>
        </a>
        <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">
          {menuOpen ? <X /> : <Menu />}
        </button>
        <div className={`nav-links ${menuOpen ? "nav-open" : ""}`}>
          {navItems.map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`} onClick={() => setMenuOpen(false)}>{item}</a>
          ))}
          <a className="nav-cta" href="#contact" onClick={() => setMenuOpen(false)}>Let's Talk <ArrowRight size={15} /></a>
        </div>
      </nav>

      <main>
        <section className="hero section" id="home">
          <div className="hero-copy">
            <div className="eyebrow"><span className="pulse-dot" /> IT INFRASTRUCTURE & SERVICES</div>
            <h1>Building the<br />future of <span>IT.</span></h1>
            <p className="hero-description">We connect, secure and automate the infrastructure that keeps businesses moving forward.</p>
            <div className="hero-actions">
              <a className="button button-primary" href="#services">Explore Services <ArrowRight size={17} /></a>
              <a className="button button-ghost" href="#projects">View Our Work <ChevronRight size={17} /></a>
            </div>
            <div className="hero-note"><CheckCircle2 size={16} /> Reliable systems. Smarter operations.</div>
          </div>

          <div className="hero-visual">
            <div className="visual-glow" />
            <div className="orbit orbit-one" /><div className="orbit orbit-two" />
            <div className="network-card">
              <div className="network-card-top"><span><span className="pulse-dot" /> LIVE INFRASTRUCTURE</span><span className="live-label">● ACTIVE</span></div>
              <div className="network-center"><div className="center-icon"><Network size={32} /></div><strong>CORE NETWORK</strong><small>Infrastructure online</small></div>
              <div className="node node-one"><Cloud /><span>Cloud</span></div>
              <div className="node node-two"><Server /><span>Servers</span></div>
              <div className="node node-three"><ShieldCheck /><span>Security</span></div>
              <div className="node node-four"><Activity /><span>Monitoring</span></div>
              <div className="network-line line-one" /><div className="network-line line-two" /><div className="network-line line-three" /><div className="network-line line-four" />
              <div className="network-card-bottom"><span>NETWORK STATUS</span><strong><span className="status-dot" /> ALL SYSTEMS OPERATIONAL</strong></div>
            </div>
            <div className="floating-chip chip-top"><Activity size={15} /> Smart Monitoring</div>
            <div className="floating-chip chip-bottom"><Bot size={15} /> Automation Ready</div>
          </div>
        </section>

        <section className="stats-strip">
          <div><strong>01</strong><span>Connected thinking</span></div>
          <div><strong>02</strong><span>Secure by design</span></div>
          <div><strong>03</strong><span>Automation focused</span></div>
          <div><strong>∞</strong><span>Built to scale</span></div>
        </section>

        <section className="section services-section" id="services">
          <div className="section-heading">
            <div><div className="eyebrow">WHAT WE DO</div><h2>Infrastructure,<br /><span>without limits.</span></h2></div>
            <p>From network foundations to intelligent automation, we help make IT simpler, safer and more dependable.</p>
          </div>
          <div className="services-grid">
            {services.map(({ icon: Icon, title, text }, i) => (
              <motion.article className="service-card" key={title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.06 }}>
                <div className="service-icon"><Icon size={23} /></div>
                <span className="card-number">0{i + 1}</span>
                <h3>{title}</h3><p>{text}</p>
                <a href="#contact" aria-label={`Ask about ${title}`}><ArrowRight size={18} /></a>
              </motion.article>
            ))}
          </div>
        </section>

        <section className="solutions-section section" id="solutions">
          <div className="eyebrow">HOW WE WORK</div>
          <div className="section-heading"><h2>From complexity<br />to <span>clarity.</span></h2><p>A practical process designed to understand your needs, build the right solution and keep improving it.</p></div>
          <div className="process-line">
            {steps.map((step, i) => <div className="process-step" key={step}><div className="process-number">0{i + 1}</div><strong>{step}</strong>{i < steps.length - 1 && <ArrowRight className="process-arrow" size={18} />}</div>)}
          </div>
          <div className="solution-banner"><div><span className="eyebrow">THE NEXT STEP IN IT</span><h3>Make your infrastructure<br />work smarter.</h3></div><a className="button button-primary" href="#contact">Start a Conversation <ArrowRight size={17} /></a></div>
        </section>

        <section className="section projects-section" id="projects">
          <div className="section-heading"><div><div className="eyebrow">SELECTED WORK</div><h2>Ideas into<br /><span>infrastructure.</span></h2></div><p>Concepts and practical work exploring reliable networks, automation and infrastructure operations.</p></div>
          <div className="projects-grid">
            {projects.map((project) => <article className="project-card" key={project.number}><div className="project-art"><div className="project-art-grid" /><Network size={55} /><span>{project.number}</span></div><div className="project-info"><span className="project-tag">{project.tag}</span><h3>{project.title}</h3><p>{project.text}</p><a href="#contact">Discuss a project <ArrowRight size={15} /></a></div></article>)}
          </div>
        </section>

        <section className="about-section section" id="about">
          <div className="about-copy"><div className="eyebrow">ABOUT INFRANOVA</div><h2>Technology should<br />move you <span>forward.</span></h2><p>We are building an IT Infrastructure & Services company focused on connecting systems, strengthening security and making everyday IT operations more efficient.</p><p>Our approach combines practical infrastructure knowledge with a curiosity for automation and emerging technology.</p><a className="text-link" href="#contact">Let's build something <ArrowRight size={17} /></a></div>
          <div className="terminal-card"><div className="terminal-header"><div><i /><i /><i /></div><span>infra_status.sh</span></div><div className="terminal-content"><p><span>$</span> initializing infrastructure...</p><p className="terminal-green">✓ Network connectivity <b>READY</b></p><p className="terminal-green">✓ Security controls <b>ENABLED</b></p><p className="terminal-green">✓ Monitoring systems <b>ACTIVE</b></p><p className="terminal-green">✓ Automation workflows <b>STANDBY</b></p><br /><p><span>$</span> status --all</p><h3>ALL SYSTEMS GO<span className="cursor">_</span></h3><div className="terminal-bars"><i /><i /><i /><i /><i /><i /><i /><i /><i /><i /><i /><i /></div></div></div>
        </section>

        <section className="contact-section section" id="contact">
          <div className="contact-copy"><div className="eyebrow">LET'S CONNECT</div><h2>Have a challenge?<br /><span>Let's solve it.</span></h2><p>Tell us what you're building, what needs fixing or where your infrastructure could work smarter.</p><div className="contact-detail"><Mail size={18} /><span>Let's connect through the form</span></div><div className="contact-detail"><MapPin size={18} /><span>Coimbatore, Tamil Nadu, India</span></div></div>
          <form className="contact-form" onSubmit={handleSubmit}><label>Your name<input required value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} placeholder="Enter your name" /></label><label>Email address<input required type="email" value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} placeholder="you@example.com" /></label><label>Tell us about your project<textarea required rows="4" value={form.message} onChange={e => setForm({ ...form, message: e.target.value })} placeholder="How can we help?" /></label><button className="button button-primary" type="submit">Send Message <ArrowRight size={17} /></button><small>Demo form — backend connection will be added later.</small></form>
        </section>
      </main>

      <footer className="footer"><a className="brand" href="#home"><span className="brand-icon"><Network size={20} /></span><span>INFRANOVA<span className="brand-dot">.</span></span></a><p>Build. Connect. Secure. Automate.</p><span>© 2026 Infranova. Built for what’s next.</span></footer>
    </div>
  );
}
export default App;