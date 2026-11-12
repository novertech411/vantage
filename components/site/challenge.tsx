import { stats, statsSource } from "@/lib/site-data";

export function Challenge() {
  return (
    <section className="section challenge" id="impact">
      <div className="shell challenge-grid">
        <div>
          <div className="eyebrow">The challenge</div>
          <h2>
            Limited access.
            <br />
            <span className="accent">
              {" "}
              to eye screening delays detection and care.
            </span>
          </h2>
          <p className="lead">
            Some eye conditions progress before people notice changes in their
            vision. Where screening is unavailable or unaffordable, patients can
            miss the opportunity for early assessment and specialist referral.
            Delayed care can allow vision loss to progress and affect daily
            activities.
          </p>
          <p className="challenge-note">
            We believe where someone lives should not determine their
            opportunity to access essential eye-health services.
          </p>
        </div>
        <div>
          <div className="stats">
            {stats.map(({ value, text, variant }) => (
              <div
                className={`stat${variant ? ` ${variant}` : ""}`}
                key={value}
              >
                <strong>{value}</strong>
                <p>{text}</p>
              </div>
            ))}
          </div>
          <p className="source">{statsSource}</p>
        </div>
        <figure className="challenge-photo">
          <img
            src="/img/community-women-1400.webp"
            srcSet="/img/community-women-720.webp 720w, /img/community-women-1400.webp 1400w"
            sizes="(max-width: 1200px) 100vw, 1132px"
            alt="Older women from a rural community, one wearing glasses"
            loading="lazy"
            decoding="async"
          />
        </figure>
      </div>
    </section>
  );
}
