import { ArrowRight, Check } from 'lucide-react'
import { showcase } from '@/lib/site-data'

export function Hero() {
  return (
    <section id="home" className="eagle-hero page-width">
      <div className="hero-message">
        <h1>Bring the future of eye care <i>into focus.</i></h1>
        <p className="hero-subtitle">
          Eagle Eye combines precision optics, smartphone imaging, and artificial intelligence to help
          healthcare professionals identify signs of glaucoma earlier.
        </p>
        <div className="hero-actions">
          <a className="dark-button" href="#contact">Partner with us <ArrowRight size={15} /></a>
          <a className="outline-button" href="#lense">Explore Eagle Lense <ArrowRight size={15} /></a>
        </div>
        <p className="proof"><Check size={14} /> Clinician-guided screening, designed around access.</p>
      </div>
      <div className="hero-mosaic">
        <div className="hero-main-image"><img src={showcase} alt="Portable retinal imaging device" /></div>
        <div className="hero-side-image"><img src={showcase} alt="Assisted retinal screening" /></div>
        <div className="hero-note">
          <span>01</span>
          <strong>Eagle Lense</strong>
          <small>Portable retinal imaging and assisted screening</small>
        </div>
      </div>
    </section>
  )
}
