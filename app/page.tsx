'use client'

import { useState } from 'react'
import { ArrowRight, BrainCircuit, Camera, Check, Menu, Stethoscope, Users, X } from 'lucide-react'

const logo = 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-11-05%20at%202.54.06%20AM-QNBplxEKqoPnrJZBLRP9zvitJDLW2k.jpeg'
const showcase = 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Eagle%20Eye_%20AI-Powered%20Eye%20Care-3-gwLwPJONZFFuCCnmLtroTgbWxRJiax.png'
const heroImage = 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Eagle%20Eye%20AI-Powered%20Eye%20Care-2%20%281%29-gwLwPJONZFFuCCnmLtroTgbWxRJiax.png'
const nav = [['Home', '#home'], ['Eagle Lense', '#lense'], ['How it works', '#how'], ['Our impact', '#impact'], ['About', '#about']]

const process = [
  ['01', 'Capture', 'Bring the retina into view through portable smartphone imaging.', Camera],
  ['02', 'Analyze', 'Surface useful signals with computational image analysis.', BrainCircuit],
  ['03', 'Connect', 'Support clinician-guided assessment and referral.', Stethoscope],
  ['04', 'Care', 'Help patients move toward appropriate follow-up care.', Users],
]

export default function Page() {
  const [open, setOpen] = useState(false)
  return <main className="eagle-site">
    <header className="eagle-nav">
      <a className="eagle-brand" href="#home"><img src={logo} alt="Eagle Eye" /></a>
      <nav className="nav-links">{nav.map(([label, href]) => <a href={href} key={label}>{label}</a>)}</nav>
      <a className="nav-button" href="#contact">Partner with us <ArrowRight size={14} /></a>
      <button className="nav-menu" aria-label="Toggle navigation" onClick={() => setOpen(!open)}>{open ? <X /> : <Menu />}</button>
      {open && <nav className="mobile-links">{nav.map(([label, href]) => <a href={href} key={label} onClick={() => setOpen(false)}>{label}</a>)}<a href="#contact">Partner with us <ArrowRight size={14} /></a></nav>}
    </header>

    <section id="home" className="eagle-hero page-width">
      <div className="hero-message"><h1>Bring the future of eye care <i>into focus.</i></h1><p className="hero-subtitle">Eagle Eye combines precision optics, smartphone imaging, and artificial intelligence to help healthcare professionals identify signs of glaucoma earlier.</p><div className="hero-actions"><a className="dark-button" href="#contact">Partner with us <ArrowRight size={15} /></a><a className="outline-button" href="#lense">Explore Eagle Lense <ArrowRight size={15} /></a></div><p className="proof"><Check size={14} /> Clinician-guided screening, designed around access.</p></div>
      <div className="hero-mosaic"><div className="hero-main-image"><img src={showcase} alt="Portable retinal imaging device" /></div><div className="hero-side-image"><img src={showcase} alt="Assisted retinal screening" /></div><div className="hero-note"><span>01</span><strong>Eagle Lense</strong><small>Portable retinal imaging and assisted screening</small></div></div>
    </section>

    <section id="lense" className="cream-band"><div className="page-width feature-grid"><div className="feature-copy"><p className="micro-label">INTRODUCING EAGLE LENSE <span /></p><h2>Technology that meets care <i>where it happens.</i></h2><p>A portable retinal imaging and screening platform for healthcare environments where specialist equipment is difficult to access.</p><p>We are building a clearer path from optical capture to clinical assessment without adding unnecessary complexity.</p><a className="text-link" href="#how">See how it works <ArrowRight size={15} /></a></div><div className="feature-card"><img src={showcase} alt="Eagle Lense retinal imaging workflow" /><div><strong>Capture. Analyze. Connect.</strong><span>Built for the point of care.</span></div></div></div></section>

    <section id="impact" className="page-width detection"><div className="section-intro"><p className="micro-label">THE DETECTION GAP <span /></p><h2>Earlier visibility can change the <i>care pathway.</i></h2><p>Glaucoma can progress without noticeable symptoms, making earlier assessment especially important.</p></div><div className="metrics"><div><strong>5.02%</strong><p>Glaucoma prevalence among adults aged 40+ examined in Nigeria&apos;s survey.</p></div><div><strong>94.4%</strong><p>Of participants with glaucoma were unaware they had the condition.</p></div><div><strong>1 IN 5</strong><p>Participants with glaucoma were already blind.</p></div></div><p className="footnote">Historical survey figures, not current prevalence estimates. <u>Source: Nigeria National Blindness and Visual Impairment Survey (2015)</u></p></section>

    <section id="how" className="how-band"><div className="page-width"><div className="section-intro centered"><p className="micro-label">CAPTURE. ANALYZE. CONNECT. <span /></p><h2>A connected workflow for <i>better access.</i></h2></div><div className="process-grid">{process.map(([number, title, text, Icon]) => <article key={number}><div className="process-icon"><Icon size={22} /></div><span className="process-number">{number}</span><h3>{title}</h3><p>{text}</p>{number !== '04' && <ArrowRight className="process-arrow" size={17} />}</article>)}</div></div></section>

    <section className="page-width pillars"><div className="section-intro centered"><p className="micro-label">WHY EAGLE LENSE <span /></p><h2>Engineered for the <i>point of need.</i></h2></div><div className="pillar-grid"><div className="pillar-card purple-card"><span>01</span><h3>Portable by design</h3><p>A compact imaging setup that can travel between clinical and outreach settings.</p></div><div className="pillar-card yellow-card"><span>02</span><h3>Locally supported</h3><p>Built around the realities of healthcare delivery in Nigeria and across Africa.</p></div><div className="pillar-card pink-card"><span>03</span><h3>AI-assisted screening</h3><p>Computational support for identifying retinal findings for professional review.</p></div></div></section>

    <section id="about" className="about-band"><div className="page-width about-inner"><div><p className="micro-label light-label">OUR AMBITION <span /></p><h2>Nigerian innovation.<br /><i>A continental ambition.</i></h2><p>Building a future where access to eye care is less dependent on location or income.</p><a className="light-link" href="#contact">Build with us <ArrowRight size={15} /></a></div><div className="africa-glow">EAGLE<br /><strong>EYE</strong><small>YOUR EYE CARE SQUAD.</small></div></div></section>

    <section id="contact" className="contact-band page-width"><div><p className="micro-label">START A CONVERSATION <span /></p><h2>Help us bring earlier assessment <i>into focus.</i></h2></div><a className="dark-button" href="mailto:hello@eagleeye.health">Become a partner <ArrowRight size={15} /></a></section>
    <footer className="eagle-footer"><div className="page-width footer-row"><span>© 2026 Eagle Eye</span><span>Your Eye Care Squad.</span><span>Eagle Lense screening support does not replace professional diagnosis.</span></div></footer>
  </main>
}
