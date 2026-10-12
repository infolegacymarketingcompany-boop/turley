import { Mail } from 'lucide-react'
import Facebook from './FacebookIcon.jsx'
import Logo from './Logo.jsx'
import { business, navLinks } from '../data/site.js'

export default function Footer() {
  return (
    <footer className="bg-navy-950 text-white/70">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-14 md:grid-cols-3 lg:px-8">
        <div>
          <Logo />
          <p className="mt-4 max-w-xs text-sm leading-relaxed">
            Quality backhoe work. Built on hard work. Based in {business.location}.
          </p>
        </div>

        <nav aria-label="Footer">
          <h2 className="font-display text-sm font-semibold uppercase tracking-widest text-white">Explore</h2>
          <ul className="mt-4 space-y-2 text-sm">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="transition-colors hover:text-brand-yellow">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h2 className="font-display text-sm font-semibold uppercase tracking-widest text-white">Contact</h2>
          <ul className="mt-4 space-y-3 text-sm">
            <li>
              <a
                href={`mailto:${business.email}`}
                className="flex items-center gap-2 break-all transition-colors hover:text-brand-yellow"
              >
                <Mail className="h-4 w-4 shrink-0 text-brand-yellow" aria-hidden="true" />
                {business.email}
              </a>
            </li>
            <li>
              <a
                href={business.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 transition-colors hover:text-brand-yellow"
              >
                <Facebook className="h-4 w-4 shrink-0 text-brand-yellow" aria-hidden="true" />
                Facebook
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-2 px-5 py-6 text-xs text-white/50 sm:flex-row sm:justify-between lg:px-8">
          <p>
            &copy; {new Date().getFullYear()} {business.name}. All rights reserved.
          </p>
          <p>Proudly serving {business.location} and surrounding areas.</p>
        </div>
      </div>
    </footer>
  )
}
