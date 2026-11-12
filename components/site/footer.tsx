import Link from 'next/link'
import { footerLinks, loginHref } from '@/lib/site-data'
import { Brand } from './brand'

export function Footer() {
  return (
    <footer className="footer">
      <div className="shell footer-inner">
        <Brand />
        <nav className="footer-links" aria-label="Footer">
          {footerLinks.map(({ label, href }) => (
            href === loginHref
              ? <a href={href} key={label}>{label}</a>
              : <Link href={href} key={label}>{label}</Link>
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
