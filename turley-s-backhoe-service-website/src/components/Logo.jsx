import { business } from '../data/site.js'

export default function Logo({ light = true }) {
  return (
    <a href="#top" className="group flex items-center gap-3" aria-label={`${business.name} — back to top`}>
      <img
        src="/images/logo.png"
        alt=""
        width="48"
        height="48"
        className="h-12 w-12 rounded-full ring-2 ring-brand-yellow/70"
      />
      <span className="flex flex-col leading-none">
        <span
          className={`font-display text-xl font-bold uppercase tracking-wide ${light ? 'text-white' : 'text-navy-900'}`}
        >
          {business.shortName}
        </span>
        <span className="font-display text-[11px] font-semibold uppercase tracking-[0.25em] text-brand-yellow">
          Backhoe Service
        </span>
      </span>
    </a>
  )
}
