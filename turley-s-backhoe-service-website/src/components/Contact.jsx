import { useState } from 'react'
import { Mail, MapPin, Send, Info } from 'lucide-react'
import Facebook from './FacebookIcon.jsx'
import { Button, Reveal, SectionHeading } from './ui.jsx'
import { business, quoteServiceOptions } from '../data/site.js'

const QUOTE_ENDPOINT = import.meta.env.VITE_QUOTE_ENDPOINT

const fieldClass =
  'mt-2 w-full rounded-sm border border-slate-300 bg-white px-4 py-3 text-navy-900 placeholder:text-slate-400 focus:border-brand-orange focus:outline-none focus:ring-2 focus:ring-brand-orange/30'

function Field({ label, id, required, children }) {
  return (
    <div>
      <label htmlFor={id} className="text-sm font-semibold text-navy-800">
        {label}
        {required && <span className="text-brand-orange"> *</span>}
      </label>
      {children}
    </div>
  )
}

function buildMailto(data) {
  const subject = `Quote Request — ${data.service || 'Backhoe Work'}`
  const body = [
    `Name: ${data.name}`,
    `Email: ${data.email}`,
    data.phone && `Phone: ${data.phone}`,
    `Service: ${data.service}`,
    '',
    data.details,
  ]
    .filter((line) => line !== undefined && line !== '')
    .join('\n')
  return `mailto:${business.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
}

function QuoteForm() {
  const [status, setStatus] = useState('idle')

  async function handleSubmit(event) {
    event.preventDefault()
    const data = Object.fromEntries(new FormData(event.currentTarget))

    if (!QUOTE_ENDPOINT) {
      window.location.href = buildMailto(data)
      return
    }

    setStatus('sending')
    try {
      const res = await fetch(QUOTE_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(data),
      })
      if (!res.ok) throw new Error(`Request failed: ${res.status}`)
      event.target.reset()
      setStatus('sent')
    } catch {
      setStatus('error')
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5 rounded-sm bg-white p-6 shadow-2xl shadow-navy-950/20 sm:p-10">
      <h3 className="font-display text-2xl font-semibold uppercase tracking-wide text-navy-900">
        Request a Free Quote
      </h3>

      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Name" id="name" required>
          <input id="name" name="name" required autoComplete="name" className={fieldClass} />
        </Field>
        <Field label="Email" id="email" required>
          <input id="email" name="email" type="email" required autoComplete="email" className={fieldClass} />
        </Field>
        <Field label="Phone" id="phone">
          <input id="phone" name="phone" type="tel" autoComplete="tel" className={fieldClass} />
        </Field>
        <Field label="Service Needed" id="service" required>
          <select id="service" name="service" required defaultValue="" className={fieldClass}>
            <option value="" disabled>
              Select a service
            </option>
            {quoteServiceOptions.map((option) => (
              <option key={option}>{option}</option>
            ))}
          </select>
        </Field>
      </div>

      <Field label="Project Details" id="details" required>
        <textarea
          id="details"
          name="details"
          required
          rows={5}
          placeholder="Tell us about the job, the location, and your timeline."
          className={fieldClass}
        />
      </Field>

      <Button as="button" type="submit" className="w-full" disabled={status === 'sending'}>
        <Send className="h-5 w-5" aria-hidden="true" />
        {status === 'sending' ? 'Sending…' : QUOTE_ENDPOINT ? 'Send Quote Request' : 'Send via Email'}
      </Button>

      <div aria-live="polite" className="text-sm">
        {status === 'sent' && <p className="font-medium text-green-700">Thanks! Your request was sent.</p>}
        {status === 'error' && (
          <p className="font-medium text-red-700">
            Something went wrong. Please email us directly at{' '}
            <a href={`mailto:${business.email}`} className="underline">
              {business.email}
            </a>
            .
          </p>
        )}
        {!QUOTE_ENDPOINT && (
          <p className="flex items-start gap-2 text-slate-500">
            <Info className="mt-0.5 h-4 w-4 shrink-0" aria-hidden="true" />
            This opens your email app with your details filled in, ready to send.
          </p>
        )}
      </div>
    </form>
  )
}

const contactItems = [
  { icon: Mail, label: 'Email', value: business.email, href: `mailto:${business.email}` },
  { icon: Facebook, label: 'Facebook', value: 'Message us on Facebook', href: business.facebook, external: true },
  { icon: MapPin, label: 'Location', value: business.location },
]

export default function Contact() {
  return (
    <section id="contact" className="relative overflow-hidden bg-navy-900 py-24 lg:py-32">
      <div aria-hidden="true" className="hazard-stripe absolute inset-x-0 top-0 h-2" />
      <div className="mx-auto grid max-w-7xl gap-14 px-5 lg:grid-cols-5 lg:gap-16 lg:px-8">
        <div className="lg:col-span-2">
          <SectionHeading
            light
            eyebrow="Get In Touch"
            title="Let's Talk About Your Project"
            intro="Send us a few details about the job and we'll follow up with a free quote."
          />
          <Reveal as="ul" delay={150} className="mt-10 space-y-6">
            {contactItems.map(({ icon: Icon, label, value, href, external }) => {
              const content = (
                <>
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-sm bg-brand-yellow text-navy-950">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <span>
                    <span className="block text-xs font-semibold uppercase tracking-widest text-white/50">{label}</span>
                    <span className="block break-all text-lg text-white">{value}</span>
                  </span>
                </>
              )
              return (
                <li key={label}>
                  {href ? (
                    <a
                      href={href}
                      className="group flex items-center gap-4 [&_span:last-child>span:last-child]:transition-colors hover:[&_span:last-child>span:last-child]:text-brand-yellow"
                      {...(external && { target: '_blank', rel: 'noopener noreferrer' })}
                    >
                      {content}
                    </a>
                  ) : (
                    <div className="flex items-center gap-4">{content}</div>
                  )}
                </li>
              )
            })}
          </Reveal>
        </div>

        <Reveal delay={100} className="lg:col-span-3">
          <QuoteForm />
        </Reveal>
      </div>
    </section>
  )
}
