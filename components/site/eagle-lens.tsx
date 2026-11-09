import { lensFeatures } from '@/lib/site-data'

export function EagleLens() {
  return (
    <section className="section product-section" id="eagle-lens">
      <div className="shell product-layout">
        <div>
          <div className="eyebrow">Introducing Eagle Lens</div>
          <h2>Smart technology.<br /><span className="accent-light">Closer to care.</span></h2>
          <p className="lead">
            A portable retinal imaging and screening concept designed to support more accessible eye-health
            assessment, with intelligent image analysis and a connected workflow.
          </p>
          <ul className="feature-lines">
            {lensFeatures.map(({ icon: Icon, label }) => (
              <li className="feature-line" key={label}>
                <span><Icon size={17} /></span> {label}
              </li>
            ))}
          </ul>
        </div>
        <div className="product-showcase">
          <div className="product-glow" />
          <div className="retina-disc">
            <img src="/retina.svg" alt="Illustration of a retinal fundus image" />
          </div>
          <div className="screen-float">
            <i /> Image capture preview
            <small>Illustrative interface — not a clinical result</small>
          </div>
        </div>
      </div>
    </section>
  )
}
