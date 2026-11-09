import { applications } from '@/lib/site-data'

export function Applications() {
  return (
    <section className="section" id="applications">
      <div className="shell">
        <div className="section-heading">
          <div className="eyebrow">Made for the real world</div>
          <h2>Technology that meets people <span className="accent">where they are.</span></h2>
          <p className="lead">Designed with practical screening environments and greater access in mind.</p>
        </div>
        <div className="care-grid">
          {applications.map(({ tag, title, text, image, alt }) => (
            <article className="care-card" key={title}>
              <div className="care-art">
                <img
                  src={`/img/${image}-1200.webp`}
                  srcSet={`/img/${image}-640.webp 640w, /img/${image}-1200.webp 1200w`}
                  sizes="(max-width: 560px) 100vw, 50vw"
                  alt={alt}
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <div className="care-copy">
                <div className="care-tag">{tag}</div>
                <h3>{title}</h3>
                <p>{text}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
