import { ArrowUpRight } from 'lucide-react'

export function Vision() {
  return (
    <section className="section vision" id="about">
      <img
        className="vision-bg"
        src="/img/community-gathering-1920.webp"
        srcSet="/img/community-gathering-960.webp 960w, /img/community-gathering-1920.webp 1920w"
        sizes="100vw"
        alt=""
        loading="lazy"
        decoding="async"
      />
      <div className="shell vision-grid">
        <div>
          <div className="eyebrow">Our vision</div>
          <h2>Built in Nigeria.<br /><span className="accent-light">Made to go further.</span></h2>
          <p className="lead">
            We believe impactful healthcare innovation should be developed with real communities in mind. Eagle Eye
            is working toward a future where earlier eye assessment can reach more people, in more places.
          </p>
          <a href="#partner" className="btn light">Work with us <ArrowUpRight size={16} /></a>
        </div>
        <div className="vision-emblem">
          <img src="/eagle-mark.webp" alt="Eagle Eye eagle symbol" width={370} height={226} />
          <div className="vision-label">YOUR EYE CARE SQUAD.</div>
        </div>
      </div>
    </section>
  )
}
