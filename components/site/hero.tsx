import { ArrowRight, ArrowUpRight, Check, Radio } from 'lucide-react'

export function Hero() {
  return (
    <section className="hero" aria-labelledby="hero-title">
      <div className="shell hero-grid">
        <div className="hero-content">
          <span className="pill"><span className="dot" /> Future-focused eye care</span>
          <h1 id="hero-title">See beyond.<br /><span className="accent">Reach further.</span></h1>
          <p className="lead">
            We&apos;re making early eye screening more accessible through portable imaging, intelligent analysis,
            and connected care.
          </p>
          <div className="hero-actions">
            <a className="btn" href="#eagle-lens">Discover Eagle Lens <ArrowUpRight size={16} /></a>
            <a className="btn secondary" href="#how-it-works">See how it works <ArrowRight size={16} /></a>
          </div>
          <p className="proof"><Check size={16} /> Designed with accessibility at its core</p>
        </div>

        <HeroArt />
      </div>
    </section>
  )
}

function HeroArt() {
  return (
    <div className="hero-art" role="img" aria-label="Illustration of the Eagle Lens retinal imaging device">
      <div className="halo" />
      <div className="orbit" />
      <div className="orbit two" />
      <div className="product-stage">
        <div className="product-device" aria-hidden="true">
          <div className="device-top" />
          <div className="device-grip" />
          <div className="device-body" />
          <div className="device-lens" />
          <div className="device-label">EAGLE LENS<span>RETINAL IMAGING SYSTEM</span></div>
          <div className="device-light" />
        </div>
        <div className="floating-card scan" aria-hidden="true">
          <img className="scan-img" src="/retina.svg" alt="" />
          <div className="scan-row"><span>Retinal capture</span><span className="scan-tag">PREVIEW</span></div>
        </div>
        <div className="floating-card signal" aria-hidden="true">
          <span className="signal-icon"><Radio size={18} /></span>
          <span>Connected workflow <small className="tiny-sub">Capture · Analyze · Connect</small></span>
        </div>
      </div>
    </div>
  )
}
