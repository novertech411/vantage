'use client'

import { useState } from 'react'
import { ArrowRight, Menu, X } from 'lucide-react'
import { logo, navLinks } from '@/lib/site-data'

export function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header className="eagle-nav">
      <a className="eagle-brand" href="#home">
        <img src={logo} alt="Eagle Eye" />
      </a>
      <nav className="nav-links">
        {navLinks.map(({ label, href }) => (
          <a href={href} key={label}>{label}</a>
        ))}
      </nav>
      <a className="nav-button" href="#contact">
        Partner with us <ArrowRight size={14} />
      </a>
      <button className="nav-menu" aria-label="Toggle navigation" onClick={() => setOpen(!open)}>
        {open ? <X /> : <Menu />}
      </button>
      {open && (
        <nav className="mobile-links">
          {navLinks.map(({ label, href }) => (
            <a href={href} key={label} onClick={() => setOpen(false)}>{label}</a>
          ))}
          <a href="#contact" onClick={() => setOpen(false)}>
            Partner with us <ArrowRight size={14} />
          </a>
        </nav>
      )}
    </header>
  )
}
