import { metrics } from '@/lib/site-data'

export function Impact() {
  return (
    <section id="impact" className="page-width detection">
      <div className="section-intro">
        <h2>Earlier visibility can change the <i>care pathway.</i></h2>
        <p>Glaucoma can progress without noticeable symptoms, making earlier assessment especially important.</p>
      </div>
      <div className="metrics">
        {metrics.map(({ value, text }) => (
          <div key={value}>
            <strong>{value}</strong>
            <p>{text}</p>
          </div>
        ))}
      </div>
      <p className="footnote">
        Historical survey figures, not current prevalence estimates.{' '}
        <u>Source: Nigeria National Blindness and Visual Impairment Survey (2015)</u>
      </p>
    </section>
  )
}
