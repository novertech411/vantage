import { steps } from '@/lib/site-data'

export function Workflow() {
  return (
    <section className="section workflow" id="how-it-works">
      <div className="shell">
        <div className="section-heading">
          <div className="eyebrow">A connected approach</div>
          <h2>From image capture to <span className="accent">informed care.</span></h2>
          <p className="lead">
            A straightforward workflow designed to connect screening technology with people and professionals.
          </p>
        </div>
        <ol className="steps">
          {steps.map(({ title, text, icon: Icon }, i) => (
            <li className="step" key={title}>
              <div className="step-index">STEP {String(i + 1).padStart(2, '0')}</div>
              <div className="step-icon"><Icon size={26} strokeWidth={1.8} /></div>
              <h3>{title}</h3>
              <p>{text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
