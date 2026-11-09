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
          {applications.map(({ tag, title, text, variant, icon: Icon }) => (
            <article className="care-card" key={title}>
              <div className={`care-art ${variant}`} aria-hidden="true">
                <div className="care-abstract" />
                <Icon className="care-icon" size={70} strokeWidth={1.2} />
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
