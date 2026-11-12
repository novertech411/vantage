import { lensFeatures } from "@/lib/site-data";

export function EagleLens() {
  return (
    <section className="section product-section" id="eagle-lens">
      <div className="shell product-layout">
        <div>
          <div className="eyebrow">Introducing Eagle Lens</div>
          <h2 className=" text-l">
            An integrated platform for eye imaging,
            <br />
            <span className="accent-light">
              screening, and clinical assessment.
            </span>
          </h2>
          <p className="lead">
            Eagle Lens brings together affordable optical hardware, AI-assisted
            image analysis, and connected clinical software to support
            assessment across the eye, from the cornea to the retina. We’re
            building a single workflow for frontline teams and specialists to
            capture and review images, assess potential signs of eye disease,
            and coordinate follow-up care.
          </p>
          <ul className="feature-lines">
            {lensFeatures.map(({ icon: Icon, label }) => (
              <li className="feature-line" key={label}>
                <span>
                  <Icon size={17} />
                </span>{" "}
                {label}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="product-photo">
        <img
          src="/img/eagle-lens-1600.webp"
          srcSet="/img/eagle-lens-960.webp 960w, /img/eagle-lens-1600.webp 1600w"
          sizes="(max-width: 800px) 100vw, 50vw"
          alt="A screener holding the orange Eagle Lens attachment and a smartphone up to a patient's eye"
          width={1600}
          height={1067}
          loading="lazy"
          decoding="async"
        />
      </div>
    </section>
  );
}
