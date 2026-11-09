import { pillars } from '@/lib/site-data'

export function Pillars() {
  return (
    <section className="page-width pillars">
      <div className="section-intro centered">
        <h2>Engineered for the <i>point of need.</i></h2>
      </div>
      <div className="pillar-grid">
        {pillars.map(({ number, title, text, className }) => (
          <div className={`pillar-card ${className}`} key={number}>
            <span>{number}</span>
            <h3>{title}</h3>
            <p>{text}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
