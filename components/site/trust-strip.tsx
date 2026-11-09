import { Asterisk } from 'lucide-react'
import { trustPoints } from '@/lib/site-data'

export function TrustStrip() {
  return (
    <div className="trust-strip">
      <div className="shell trust-inner">
        <p>Built around what matters</p>
        <ul className="trust-points">
          {trustPoints.map((point) => (
            <li key={point}><Asterisk size={15} strokeWidth={2.5} /> {point}</li>
          ))}
        </ul>
      </div>
    </div>
  )
}
