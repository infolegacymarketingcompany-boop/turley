import { ArrowRight, MapPin } from 'lucide-react'
import { Button } from './ui.jsx'
import { business } from '../data/site.js'

export default function Hero() {
  return (
    <section id="top" className="relative isolate flex min-h-[100svh] items-center overflow-hidden bg-navy-950">
      <img
        src="/images/work/backhoe-yard.png"
        alt="Turley's CAT backhoe working in a wooded yard with piles of fresh red dirt"
        className="absolute inset-0 -z-20 h-full w-full object-cover"
        fetchPriority="high"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-gradient-to-r from-navy-950 via-navy-950/85 to-navy-950/30"
      />
      <div aria-hidden="true" className="absolute inset-x-0 bottom-0 -z-10 h-40 bg-gradient-to-t from-navy-950 to-transparent" />

      <div className="mx-auto w-full max-w-7xl px-5 pb-24 pt-32 lg:px-8">
        <div className="max-w-3xl animate-[fadeUp_0.9s_ease-out_both]">
          <p className="inline-flex items-center gap-2 rounded-sm border border-brand-yellow/40 bg-brand-yellow/10 px-3 py-1.5 font-display text-xs font-semibold uppercase tracking-[0.2em] text-brand-yellow">
            <MapPin className="h-3.5 w-3.5" aria-hidden="true" />
            {business.location}
          </p>
          <h1 className="mt-6 text-balance font-display text-5xl font-bold uppercase leading-[0.95] text-white sm:text-6xl lg:text-7xl">
            Quality Backhoe Work.{' '}
            <span className="text-brand-yellow">Built on Hard Work.</span>
          </h1>
          <p className="mt-6 max-w-xl text-pretty text-lg leading-relaxed text-white/80">
            Dependable digging, trenching, and site work for homeowners, farms, and builders. Tell us about your
            project and we&apos;ll get back to you with an honest quote.
          </p>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <Button href="#contact" className="text-lg">
              Request a Free Quote
              <ArrowRight className="h-5 w-5" aria-hidden="true" />
            </Button>
            <Button href="#services" variant="outline" className="text-lg">
              View Services
            </Button>
          </div>
        </div>
      </div>

      <div aria-hidden="true" className="hazard-stripe absolute inset-x-0 bottom-0 h-2" />
    </section>
  )
}
