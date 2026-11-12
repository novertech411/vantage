import { ArrowRight, ArrowUpRight } from "lucide-react";

export function Hero() {
  return (
    <section className="hero" aria-labelledby="hero-title">
      <img
        className="hero-bg"
        src="/img/hero-outreach-1920.webp"
        srcSet="/img/hero-outreach-960.webp 960w, /img/hero-outreach-1920.webp 1920w"
        sizes="100vw"
        alt="A health worker examining a woman's eyes with a penlight during a community outreach"
        fetchPriority="high"
        decoding="async"
      />
      <div className="hero-scrim" aria-hidden="true" />

      <div className="shell hero-inner">
        <div className="hero-content">
          <h1 id="hero-title">
            See beyond.
            <br />
            <span className="accent-light">Reach further.</span>
          </h1>
          <p className="lead">
            We&apos;re making early eye screening more accessible through
            portable imaging, intelligent analysis, and connected care.
          </p>
          <div className="hero-actions">
            <a className="btn" href="/eagle-lens">
              Discover Eagle Lens <ArrowUpRight size={16} />
            </a>
            <a className="btn glass" href="/how-it-works">
              See how it works <ArrowRight size={16} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
