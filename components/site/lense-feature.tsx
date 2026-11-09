import { ArrowRight } from 'lucide-react'
import { showcase } from '@/lib/site-data'

export function LenseFeature() {
  return (
    <section id="lense" className="cream-band">
      <div className="page-width feature-grid">
        <div className="feature-copy">
          <h2>Technology that meets care <i>where it happens.</i></h2>
          <p>
            A portable retinal imaging and screening platform for healthcare environments where specialist
            equipment is difficult to access.
          </p>
          <p>
            We are building a clearer path from optical capture to clinical assessment without adding
            unnecessary complexity.
          </p>
          <a className="text-link" href="#how">See how it works <ArrowRight size={15} /></a>
        </div>
        <div className="feature-card">
          <img src={showcase} alt="Eagle Lense retinal imaging workflow" />
          <div>
            <strong>Capture. Analyze. Connect.</strong>
            <span>Built for the point of care.</span>
          </div>
        </div>
      </div>
    </section>
  )
}
