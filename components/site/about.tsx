import { ArrowRight } from 'lucide-react'

export function About() {
  return (
    <section id="about" className="about-band">
      <div className="page-width about-inner">
        <div>
          <h2>Nigerian innovation.<br /><i>A continental ambition.</i></h2>
          <p>Building a future where access to eye care is less dependent on location or income.</p>
          <a className="light-link" href="#contact">Build with us <ArrowRight size={15} /></a>
        </div>
        <div className="africa-glow">
          EAGLE<br />
          <strong>EYE</strong>
          <small>YOUR EYE CARE SQUAD.</small>
        </div>
      </div>
    </section>
  )
}
