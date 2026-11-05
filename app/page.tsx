'use client'

import { useState } from 'react'
import {
  ArrowRight,
  BrainCircuit,
  Building2,
  Camera,
  Check,
  ChevronDown,
  CircleDot,
  Handshake,
  HeartPulse,
  Landmark,
  Menu,
  Microscope,
  MoveRight,
  ScanLine,
  ShieldCheck,
  Smartphone,
  Stethoscope,
  Users,
  X,
} from 'lucide-react'

const logo = 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-11-05%20at%202.54.06%20AM-QNBplxEKqoPnrJZBLRP9zvitJDLW2k.jpeg'
const showcase = 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Eagle%20Eye_%20AI-Powered%20Eye%20Care-3-gwLwPJONZFFuCCnmLtroTgbWxRJiax.png'
const retina = 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Eagle%20Eye%20AI-Powered%20Eye%20Care-2%20%281%29-V2mpBRgfkP9Z6283kI1fw12Jg0Wffs.png'

const navItems = [
  ['Home', '#home'],
  ['Eagle Lense', '#lense'],
  ['How It Works', '#how-it-works'],
  ['Our Impact', '#impact'],
  ['Who We Serve', '#serve'],
  ['About', '#about'],
]

const steps = [
  { number: '01', title: 'Optical Capture', text: 'Bring the retina into view through portable smartphone-based imaging.', icon: Camera },
  { number: '02', title: 'Computational Analysis', text: 'Analyze captured imagery for patterns relevant to glaucoma risk.', icon: BrainCircuit },
  { number: '03', title: 'Clinical Assessment', text: 'Place screening information in the hands of healthcare professionals.', icon: Stethoscope },
  { number: '04', title: 'Connected Care', text: 'Help patients move from an initial assessment to further examination and appropriate care.', icon: Users },
]

const benefits = [
  ['Portable by Design', 'A compact imaging setup that can travel between clinical and outreach settings.', Smartphone],
  ['Locally Manufactured Hardware', 'An adapter developed around accessible fabrication and practical deployment.', Landmark],
  ['AI-Assisted Screening', 'Computational support for identifying retinal findings that warrant further assessment.', BrainCircuit],
  ['Clinician-Guided Decisions', 'Healthcare professionals remain responsible for diagnosis, referral, and treatment.', Stethoscope],
  ['Designed Around Access', 'A development focus on affordability, usability, and integration into existing services.', ShieldCheck],
]

const audiences = [
  ['Hospitals and Eye Clinics', 'Expand access to retinal imaging and evaluate a practical screening workflow.', Building2],
  ['Community Healthcare Providers', 'Bring initial eye assessment closer to patients.', HeartPulse],
  ['NGOs and Outreach Programs', 'Explore portable screening backed by clinical referral partnerships.', Handshake],
  ['Research Institutions', 'Help build rigorous evidence across Nigerian patients, devices, and clinical environments.', Microscope],
]

export default function Page() {
  const [menuOpen, setMenuOpen] = useState(false)
  return (
    <main className="site-shell">
      <header className="site-header">
        <a href="#home" className="brand" aria-label="Eagle Eye home">
          <img src={logo} alt="Eagle Eye" className="brand-logo" />
        </a>
        <nav className="desktop-nav" aria-label="Primary navigation">
          {navItems.map(([label, href]) => <a key={label} href={href}>{label}</a>)}
        </nav>
        <a href="#contact" className="header-cta">Partner With Us <ArrowRight size={15} /></a>
        <button className="menu-button" aria-label={menuOpen ? 'Close menu' : 'Open menu'} onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X /> : <Menu />}
        </button>
        {menuOpen && <nav className="mobile-nav" aria-label="Mobile navigation">{navItems.map(([label, href]) => <a key={label} href={href} onClick={() => setMenuOpen(false)}>{label}</a>)}<a href="#contact" className="mobile-cta">Partner With Us <ArrowRight size={15} /></a></nav>}
      </header>

      <section id="home" className="hero section-wrap">
        <div className="hero-copy">
          <p className="eyebrow">AI-POWERED EYE CARE <span /></p>
          <h1>Bringing intelligent eye screening closer to the people who need it.</h1>
          <p className="lede">At Eagle Eye, we are combining precision optics, smartphone imaging, and artificial intelligence to help healthcare professionals identify signs of glaucoma and connect patients to further care.</p>
          <div className="button-row"><a className="button primary" href="#contact">Partner With Us <ArrowRight size={16} /></a><a className="button secondary" href="#lense">Explore Eagle Lense <MoveRight size={16} /></a></div>
          <p className="trust-line"><Check size={15} /> Locally driven innovation. Clinician-guided screening. Technology built for access.</p>
        </div>
        <div className="hero-visual">
          <div className="hero-orbit orbit-one" /><div className="hero-orbit orbit-two" />
          <div className="hero-image-card"><img src={showcase} alt="Eagle Lense smartphone retinal imaging concept" /></div>
          <div className="scan-badge"><ScanLine size={18} /><span>AI-assisted<br /><strong>retinal screening</strong></span></div>
          <div className="hero-caption"><span className="live-dot" /> Portable imaging, designed for the point of care</div>
        </div>
      </section>

      <section id="lense" className="intro section-wrap split-section">
        <div className="image-frame"><img src={retina} alt="Retinal imaging and Eagle Lense hardware concept" /><div className="image-label"><CircleDot size={14} /> Eagle Lense / optical capture</div></div>
        <div className="intro-copy"><p className="eyebrow">INTRODUCING EAGLE LENSE <span /></p><h2>Your retina holds a signal. <em>We help bring it into focus.</em></h2><p>Introducing Eagle Lense. A portable retinal imaging and screening platform designed for healthcare environments where specialist equipment is difficult to access.</p><p>We are connecting an affordable optical interface with computational image analysis—turning retinal imagery into information that supports clinical assessment and referral.</p><p className="signature">Precision imaging. Intelligent analysis. Human expertise.</p></div>
      </section>

      <section id="impact" className="impact-section">
        <div className="section-wrap"><div className="section-heading centered"><p className="eyebrow">THE DETECTION GAP</p><h2>Earlier visibility can change the care pathway.</h2><p>Glaucoma can progress without noticeable symptoms, making earlier assessment and access to eye care particularly important.</p></div>
          <div className="stat-grid">{[['5.02%', "Glaucoma prevalence among adults aged 40 and above examined in Nigeria's National Blindness and Visual Impairment Survey."], ['94.4%', 'Of participants with glaucoma were unaware they had the condition.'], ['1 IN 5', 'Participants with glaucoma were already blind.']].map(([stat, text]) => <div className="stat-card" key={stat}><strong>{stat}</strong><p>{text}</p></div>)}</div>
          <p className="source-note">Historical survey figures, not current prevalence estimates. <a href="https://pubmed.ncbi.nlm.nih.gov/26653326/" target="_blank" rel="noreferrer">Source: Nigeria National Blindness and Visual Impairment Survey (2015) ↗</a></p>
        </div>
      </section>

      <section id="how-it-works" className="workflow section-wrap"><div className="section-heading"><p className="eyebrow">CAPTURE. ANALYZE. CONNECT.</p><h2>From optical capture to clinical insight.</h2><p>A connected screening workflow designed to support healthcare professionals at the point of care.</p></div><div className="steps-grid">{steps.map(({ number, title, text, icon: Icon }) => <div className="step" key={number}><div className="step-top"><span className="step-number">{number}</span><Icon size={28} strokeWidth={1.5} /></div><h3>{title}</h3><p>{text}</p>{number !== '04' && <ArrowRight className="step-arrow" size={18} />}</div>)}</div></section>

      <section className="product-section section-wrap"><div className="section-heading centered"><p className="eyebrow">THE EAGLE LENSE</p><h2>One connected architecture. Built for access.</h2><p>Our imaging platform brings together optics, computation, and clinical expertise without inventing complexity.</p></div><div className="product-layout"><div className="product-art"><img src={showcase} alt="Eagle Lense product and retinal analysis visual" /><div className="product-pill pill-one"><Smartphone size={15} /> Smartphone</div><div className="product-pill pill-two"><BrainCircuit size={15} /> AI-assisted analysis</div><div className="product-pill pill-three"><ScanLine size={15} /> Retinal image</div></div><div className="product-notes"><div><span>01</span><h3>Capture with precision</h3><p>A purpose-built optical interface helps bring the retina into view through a familiar device.</p></div><div><span>02</span><h3>Surface useful signals</h3><p>Computational analysis supports the screening workflow by highlighting patterns for professional review.</p></div><div><span>03</span><h3>Connect the next step</h3><p>The goal is a clearer handoff between initial screening and further clinical assessment.</p></div></div></div></section>

      <section className="benefits section-wrap"><div className="section-heading"><p className="eyebrow">WHY EAGLE LENSE</p><h2>Engineered for the point of need.</h2></div><div className="benefit-grid">{benefits.map(([title, text, Icon]) => <div className="benefit-card" key={title as string}><Icon size={23} strokeWidth={1.6} /><h3>{title as string}</h3><p>{text as string}</p></div>)}</div></section>

      <section id="serve" className="serve section-wrap"><div className="section-heading centered"><p className="eyebrow">WHO WE SERVE</p><h2>Built for the people bringing eye care closer.</h2><p>We believe meaningful innovation happens when technology meets the realities of healthcare delivery.</p></div><div className="audience-grid">{audiences.map(([title, text, Icon]) => <div className="audience-card" key={title as string}><Icon size={26} /><h3>{title as string}</h3><p>{text as string}</p><a href="#contact">Explore partnership <ArrowRight size={14} /></a></div>)}</div></section>

      <section id="about" className="ambition"><div className="section-wrap ambition-inner"><div><p className="eyebrow light">OUR AMBITION</p><h2>Nigerian innovation.<br /><em>A continental ambition.</em></h2><p>We have started in Nigeria, working toward a future where access to eye screening is less dependent on location or income.</p><p>Our ambition is to build a clinically evaluated, locally supported service that can grow across West Africa and, over time, reach communities throughout the continent.</p><a className="text-link light-link" href="#contact">Build with us <ArrowRight size={16} /></a></div><div className="africa-mark" aria-hidden="true">✦<span>AFRICA</span></div></div></section>

      <section id="contact" className="contact section-wrap"><div><p className="eyebrow">START A CONVERSATION</p><h2>Help us bring earlier assessment into focus.</h2><p>We are welcoming clinical partners, research collaborators, and organizations committed to expanding access to eye care.</p></div><div className="button-row"><a className="button primary" href="mailto:hello@eagleeye.health?subject=Clinical partnership">Become a Clinical Partner <ArrowRight size={16} /></a><a className="button secondary" href="mailto:hello@eagleeye.health?subject=Deployment enquiry">Discuss a Deployment <ArrowRight size={16} /></a></div></section>

      <footer className="footer"><div className="section-wrap footer-grid"><div><img src={logo} alt="Eagle Eye" className="footer-logo" /><p className="footer-tag">Your Eye Care Squad.</p><p className="footer-description">Building accessible retinal imaging and AI-assisted screening solutions to support earlier eye assessment.</p></div><div><h3>Explore</h3>{navItems.slice(0, 5).map(([label, href]) => <a key={label} href={href}>{label}</a>)}</div><div><h3>Partnership</h3><a href="#contact">Clinical Partnerships</a><a href="#contact">Research Collaborations</a><a href="#contact">Deployment Enquiries</a></div></div><div className="section-wrap footer-bottom"><p>© 2026 Eagle Eye. Your Eye Care Squad.</p><p>Eagle Lense is being developed for retinal imaging and glaucoma screening support. Screening does not replace a comprehensive eye examination or professional diagnosis.</p></div></footer>
    </main>
  )
}
