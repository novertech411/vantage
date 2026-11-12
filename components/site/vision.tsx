import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export function Vision() {
  return (
    <section className="section vision" id="about">
      <div className="shell vision-grid">
        <div>
          <div className="eyebrow">Our vision</div>
          <h2>
            Advanced eye care within
            <br />
            <span className="accent-light">reach, worldwide.</span>
          </h2>
          <p className="lead">
            We envision a future where people everywhere can access early eye
            screening and get the specialist care they need. At Eagle Eye, we’re
            building affordable imaging devices, intelligent analysis, and
            connected clinical tools that help care teams assess eye health
            earlier and coordinate follow-up across care settings.
          </p>
          <Link href="/partner" className="btn light">
            Work with us <ArrowUpRight size={16} />
          </Link>
        </div>
        <div className="vision-emblem">
          <img
            src="/eagle-mark.webp"
            alt="Eagle Eye eagle symbol"
            width={370}
            height={226}
          />
          <div className="vision-label">YOUR EYE CARE SQUAD.</div>
        </div>
      </div>
    </section>
  );
}
