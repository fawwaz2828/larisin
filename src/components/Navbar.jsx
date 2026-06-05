import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { IconArrowRight, IconMenu, IconX } from './icons.jsx'
import { WA_KONSULTASI } from '../constants.js'

const navLinks = [
  { label: 'Beranda', to: '/#beranda', section: 'beranda' },
  { label: 'Fitur', to: '/#fitur', section: 'fitur' },
  { label: 'Harga', to: '/#harga', section: 'harga' },
  { label: 'Tentang Kami', to: '/#tentang', section: 'tentang' },
]

const SECTION_IDS = ['beranda', 'fitur', 'harga', 'tentang']

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('beranda')
  const location = useLocation()

  // Scroll-spy: highlight the section crossing the middle of the viewport.
  // IntersectionObserver respects ScrollSmoother's transform, so no GSAP needed.
  useEffect(() => {
    if (location.pathname !== '/') return
    const sections = SECTION_IDS.map((id) => document.getElementById(id)).filter(Boolean)
    if (!sections.length) return

    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActiveSection(e.target.id)
        })
      },
      { rootMargin: '-45% 0px -50% 0px', threshold: 0 },
    )
    sections.forEach((s) => obs.observe(s))
    return () => obs.disconnect()
  }, [location.pathname])

  const isActive = (link) =>
    link.path
      ? location.pathname === link.path
      : location.pathname === '/' && activeSection === link.section

  return (
    <header className="nav">
      <div className="wrap nav-inner">
        <Link to="/#beranda" className="logo" onClick={() => setOpen(false)}>
          <img src="/larisin-logo.png" alt="larisin ai" />
        </Link>

        <nav className={`nav-menu${open ? ' open' : ''}`}>
          {navLinks.map((link) => (
            <Link
              key={link.label}
              to={link.to}
              className={isActive(link) ? 'active' : undefined}
              onClick={() => setOpen(false)}
            >
              {link.label}
              {link.badge && isActive(link) && (
                <span className="nav-badge">{link.badge}</span>
              )}
            </Link>
          ))}
        </nav>

        <a
          href={WA_KONSULTASI}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-lime"
        >
          Mulai Konsultasi <span className="arr"><IconArrowRight /></span>
        </a>

        <button
          type="button"
          className="nav-toggle"
          aria-label="Buka menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <IconX /> : <IconMenu />}
        </button>
      </div>
    </header>
  )
}
