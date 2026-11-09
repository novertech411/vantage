'use client'

import { useEffect, useState } from 'react'
import { ArrowUpRight, Menu, X } from 'lucide-react'
import { loginHref, navLinks } from '@/lib/site-data'
import { Brand } from './brand'

export function Header() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  // Transparent over the full-bleed hero, solid once the page scrolls.
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false)
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open])

  const close = () => setOpen(false)

  return (
    <header className={`nav-wrap${scrolled || open ? ' solid' : ''}`}>
      <div className="shell nav">
        <Brand />

        <nav className={`nav-links${open ? ' open' : ''}`} id="nav-links" aria-label="Main navigation">
          {navLinks.map(({ label, href }) => (
            <a href={href} key={label} onClick={close}>{label}</a>
          ))}
          <a className="mobile-only" href={loginHref} onClick={close}>Log in</a>
          <a className="btn mobile-only" href="#partner" onClick={close}>
            Partner with us <ArrowUpRight size={16} />
          </a>
        </nav>

        <div className="nav-actions">
          <a className="nav-login" href={loginHref}>Log in</a>
          <a className="btn" href="#partner">
            Partner with us <ArrowUpRight size={16} />
          </a>
        </div>

        <button
          className="menu-btn"
          aria-label={open ? 'Close navigation' : 'Open navigation'}
          aria-controls="nav-links"
          aria-expanded={open}
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>
    </header>
  )
}
