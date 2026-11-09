import { ArrowRight } from 'lucide-react'
import { processSteps } from '@/lib/site-data'

export function HowItWorks() {
  return (
    <section id="how" className="how-band">
      <div className="page-width">
        <div className="section-intro centered">
          <h2>A connected workflow for <i>better access.</i></h2>
        </div>
        <div className="process-grid">
          {processSteps.map(({ number, title, text, icon: Icon }, i) => (
            <article key={number}>
              <div className="process-icon"><Icon size={22} /></div>
              <span className="process-number">{number}</span>
              <h3>{title}</h3>
              <p>{text}</p>
              {i < processSteps.length - 1 && <ArrowRight className="process-arrow" size={17} />}
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
