import { useEffect, useState } from 'react'
import { Menu, X, Mail } from 'lucide-react'
import Logo from './Logo.jsx'
import { Button } from './ui.jsx'
import { business, navLinks } from '../data/site.js'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const solid = scrolled || open

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        solid ? 'bg-navy-950/95 shadow-lg shadow-navy-950/30 backdrop-blur' : 'bg-transparent'
      }`}
    >
      <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 lg:px-8" aria-label="Main">
        <Logo />

        <ul className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="font-display text-sm font-medium uppercase tracking-widest text-white/85 transition-colors hover:text-brand-yellow"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-5 md:flex">
          <a
            href={`mailto:${business.email}`}
            className="hidden items-center gap-2 text-sm text-white/80 transition-colors hover:text-white lg:flex"
          >
            <Mail className="h-4 w-4 text-brand-yellow" aria-hidden="true" />
            Email Us
          </a>
          <Button href="#contact" className="px-5 py-2.5 text-sm">
            Free Quote
          </Button>
        </div>

        <button
          type="button"
          className="rounded-sm p-2 text-white md:hidden"
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((v) => !v)}
        >
          <span className="sr-only">{open ? 'Close menu' : 'Open menu'}</span>
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {open && (
        <div id="mobile-menu" className="border-t border-white/10 px-5 pb-6 md:hidden">
          <ul className="flex flex-col py-2">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block border-b border-white/10 py-4 font-display text-lg uppercase tracking-widest text-white"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <Button href="#contact" onClick={() => setOpen(false)} className="mt-4 w-full">
            Request a Free Quote
          </Button>
        </div>
      )}
    </header>
  )
}
