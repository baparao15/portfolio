import { useEffect, useState } from 'react'
import './Navbar.css'

const links = [
  { to: '#top', label: 'Home' },
  { to: '#projects', label: 'Projects' },
  { to: '#experience', label: 'Experience' },
  { to: '#certifications', label: 'Credentials' },
  { to: '#about', label: 'About' },
  { to: '#contact', label: 'Contact' },
]

function Navbar() {
  const [open, setOpen] = useState(false)
  const [activeId, setActiveId] = useState('top')

  useEffect(() => {
    const sections = links
      .map((link) => document.getElementById(link.to.slice(1)))
      .filter(Boolean)

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]
        if (visible) setActiveId(visible.target.id)
      },
      { rootMargin: '-40% 0px -50% 0px', threshold: [0, 0.25, 0.5, 0.75, 1] },
    )

    sections.forEach((section) => observer.observe(section))
    return () => observer.disconnect()
  }, [])

  return (
    <header className="navbar">
      <div className="container navbar-inner">
        <a href="#top" className="brand" onClick={() => setOpen(false)}>
          BAPA RAO PENDYALA
        </a>

        <button
          className={`menu-toggle ${open ? 'is-open' : ''}`}
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((o) => !o)}
        >
          <span />
          <span />
          <span />
        </button>

        <nav className={`nav-links ${open ? 'is-open' : ''}`}>
          <ul>
            {links.map((link) => (
              <li key={link.to}>
                <a
                  href={link.to}
                  className={activeId === link.to.slice(1) ? 'active' : ''}
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Navbar
