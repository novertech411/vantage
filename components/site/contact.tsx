import { ArrowUpRight } from 'lucide-react'
import { partnerMailto } from '@/lib/site-data'

export function Contact() {
  return (
    <section className="section contact" id="partner">
      <div className="shell">
        <div className="contact-panel">
          <div>
            <div className="eyebrow">Let&apos;s build the future together</div>
            <h2>Bring better eye care <span className="accent">into focus.</span></h2>
            <p className="muted">
              Interested in research, clinical, technology, or outreach partnerships? We&apos;d love to start a
              conversation.
            </p>
          </div>
          <a href={partnerMailto} className="btn">Become a partner <ArrowUpRight size={16} /></a>
        </div>
      </div>
    </section>
  )
}
