import { CheckCircle2 } from 'lucide-react'
import { Button, Reveal, SectionHeading } from './ui.jsx'
import { business } from '../data/site.js'

const points = ['Locally owned and operated', 'Residential, farm, and light commercial jobs', 'Free, no-pressure quotes']

export default function About() {
  return (
    <section id="about" className="py-24 lg:py-32">
      <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 lg:grid-cols-2 lg:gap-20 lg:px-8">
        <Reveal className="relative">
          <div className="relative overflow-hidden rounded-sm">
            <img
              src="/images/work/equipment-lineup.png"
              alt="Turley's CAT mini excavator, blue Ram truck, and CAT track loader lined up on a gravel lot"
              className="aspect-[4/5] w-full object-cover sm:aspect-[4/3] lg:aspect-[4/5]"
              loading="lazy"
              width="960"
              height="821"
            />
          </div>
          <div
            aria-hidden="true"
            className="absolute -bottom-5 -right-5 -z-10 hidden h-full w-full rounded-sm border-4 border-brand-yellow sm:block"
          />
        </Reveal>

        <div>
          <SectionHeading
            eyebrow="About the Business"
            title="Hometown Backhoe Work You Can Count On"
            intro={`${business.name} is a local backhoe operation based in ${business.location}. We take on the jobs that need a skilled operator and the right machine — and we treat every property like it's our own.`}
          />
          <Reveal as="ul" delay={150} className="mt-8 space-y-4">
            {points.map((point) => (
              <li key={point} className="flex items-start gap-3 text-lg text-navy-800">
                <CheckCircle2 className="mt-0.5 h-6 w-6 shrink-0 text-brand-orange" aria-hidden="true" />
                {point}
              </li>
            ))}
          </Reveal>
          <Reveal delay={250} className="mt-10">
            <Button href="#contact" variant="navy">
              Talk About Your Project
            </Button>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
