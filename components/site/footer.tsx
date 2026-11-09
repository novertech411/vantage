import { footerLinks } from '@/lib/site-data'
import { Brand } from './brand'

export function Footer() {
  return (
    <footer className="footer">
      <div className="shell footer-inner">
        <Brand />
        <nav className="footer-links" aria-label="Footer">
          {footerLinks.map(({ label, href }) => (
            <a href={href} key={label}>{label}</a>
          ))}
        </nav>
        <p>© {new Date().getFullYear()} Eagle Eye. All rights reserved.</p>
        <p className="footer-disclaimer">
          Eagle Lens screening support does not replace professional diagnosis. Imagery on this page is illustrative.
        </p>
      </div>
    </footer>
  )
}
