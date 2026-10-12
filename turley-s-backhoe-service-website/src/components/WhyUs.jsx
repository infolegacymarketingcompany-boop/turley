import { HardHat, MessageSquare, ShieldCheck, Home } from 'lucide-react'
import { Reveal, SectionHeading } from './ui.jsx'

const reasons = [
  {
    icon: HardHat,
    title: 'Hard-Working Approach',
    text: 'We show up ready to work and stay until the job is done right.',
  },
  {
    icon: MessageSquare,
    title: 'Straight Communication',
    text: 'Clear expectations, honest quotes, and no runaround.',
  },
  {
    icon: ShieldCheck,
    title: 'Respect for Your Land',
    text: 'Careful operation that protects your yard, drive, and surroundings.',
  },
  {
    icon: Home,
    title: 'Local to Rutledge',
    text: 'A hometown business that cares about its neighbors and reputation.',
  },
]

export default function WhyUs() {
  return (
    <section id="why-us" className="bg-slate-50 py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeading
          center
          eyebrow="Why Choose Us"
          title="Work Done the Right Way"
          intro="When you hire Turley's, you get an operator who takes pride in the details."
        />

        <div className="mt-16 grid gap-px overflow-hidden rounded-sm bg-slate-200 sm:grid-cols-2 lg:grid-cols-4">
          {reasons.map(({ icon: Icon, title, text }, index) => (
            <Reveal key={title} delay={index * 100} className="bg-white p-8 text-center lg:p-10">
              <span className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-navy-900 text-brand-yellow">
                <Icon className="h-8 w-8" aria-hidden="true" />
              </span>
              <h3 className="mt-6 font-display text-xl font-semibold uppercase tracking-wide text-navy-900">
                {title}
              </h3>
              <p className="mt-3 leading-relaxed text-slate-600">{text}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
