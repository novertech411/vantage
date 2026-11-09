import { stats, statsSource } from '@/lib/site-data'

export function Challenge() {
  return (
    <section className="section challenge" id="impact">
      <div className="shell challenge-grid">
        <div>
          <div className="eyebrow">The challenge</div>
          <h2>Earlier visibility.<br /><span className="accent">Better possibilities.</span></h2>
          <p className="lead">
            For many people, eye conditions go unnoticed until they begin affecting everyday life. Making screening
            more accessible can support earlier assessment and more informed decisions about care.
          </p>
          <p className="challenge-note">
            We believe where someone lives should not determine their opportunity to access essential eye-health
            services.
          </p>
        </div>
        <div>
          <div className="stats">
            {stats.map(({ value, text, variant }) => (
              <div className={`stat${variant ? ` ${variant}` : ''}`} key={value}>
                <strong>{value}</strong>
                <p>{text}</p>
              </div>
            ))}
          </div>
          <p className="source">{statsSource}</p>
        </div>
      </div>
    </section>
  )
}
