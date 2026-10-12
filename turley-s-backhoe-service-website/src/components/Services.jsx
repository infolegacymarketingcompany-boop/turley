import { Reveal, SectionHeading } from './ui.jsx'
import { services } from '../data/site.js'

function ServiceCard({ icon: Icon, title, description, index }) {
  return (
    <Reveal
      as="article"
      delay={(index % 3) * 100}
      className="group relative overflow-hidden rounded-sm border border-white/10 bg-navy-800/60 p-8 transition-colors duration-300 hover:border-brand-yellow/60 hover:bg-navy-800"
    >
      <span
        aria-hidden="true"
        className="absolute right-6 top-6 font-display text-5xl font-bold text-white/5 transition-colors group-hover:text-brand-yellow/15"
      >
        {String(index + 1).padStart(2, '0')}
      </span>
      <span className="flex h-14 w-14 items-center justify-center rounded-sm bg-brand-yellow text-navy-950 transition-colors group-hover:bg-brand-orange group-hover:text-white">
        <Icon className="h-7 w-7" aria-hidden="true" />
      </span>
      <h3 className="mt-6 font-display text-2xl font-semibold uppercase tracking-wide text-white">{title}</h3>
      <p className="mt-3 leading-relaxed text-white/70">{description}</p>
      <span
        aria-hidden="true"
        className="absolute inset-x-0 bottom-0 h-1 origin-left scale-x-0 bg-brand-yellow transition-transform duration-300 group-hover:scale-x-100"
      />
    </Reveal>
  )
}

export default function Services() {
  return (
    <section id="services" className="relative bg-navy-950 py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading
            light
            eyebrow="Our Services"
            title="Backhoe Services for Your Property"
            intro="From a single trench to full site prep, we bring the machine and the know-how to get it done right."
          />
          <img
            src="/images/work/septic-install.png"
            alt="Mini excavator digging for a septic tank installation in a front yard"
            className="hidden h-40 w-72 rounded-sm object-cover opacity-80 lg:block"
            loading="lazy"
            width="288"
            height="160"
          />
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <ServiceCard key={service.title} index={index} {...service} />
          ))}
        </div>

        <p className="mt-10 text-center text-white/60">
          Don&apos;t see your job listed?{' '}
          <a href="#contact" className="font-semibold text-brand-yellow underline-offset-4 hover:underline">
            Ask us about it.
          </a>
        </p>
      </div>
    </section>
  )
}
