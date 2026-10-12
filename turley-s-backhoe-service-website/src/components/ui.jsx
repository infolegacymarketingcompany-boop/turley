import { useEffect, useRef } from 'react'

export function Reveal({ as: Tag = 'div', delay = 0, className = '', children, ...props }) {
  const ref = useRef(null)

  useEffect(() => {
    const node = ref.current
    if (!node) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          node.classList.add('is-visible')
          observer.disconnect()
        }
      },
      { threshold: 0.15 },
    )
    observer.observe(node)
    return () => observer.disconnect()
  }, [])

  return (
    <Tag ref={ref} className={`reveal ${className}`} style={{ transitionDelay: `${delay}ms` }} {...props}>
      {children}
    </Tag>
  )
}

export function Eyebrow({ children, light = false }) {
  return (
    <p
      className={`flex items-center gap-3 font-display text-sm font-semibold uppercase tracking-[0.2em] ${
        light ? 'text-brand-yellow' : 'text-brand-orange'
      }`}
    >
      <span aria-hidden="true" className="h-0.5 w-8 bg-current" />
      {children}
    </p>
  )
}

export function SectionHeading({ eyebrow, title, intro, light = false, center = false }) {
  return (
    <Reveal className={`max-w-2xl ${center ? 'mx-auto text-center [&>p:first-child]:justify-center' : ''}`}>
      <Eyebrow light={light}>{eyebrow}</Eyebrow>
      <h2
        className={`mt-4 text-balance font-display text-4xl font-bold uppercase leading-tight md:text-5xl ${
          light ? 'text-white' : 'text-navy-900'
        }`}
      >
        {title}
      </h2>
      {intro && (
        <p className={`mt-5 text-pretty text-lg leading-relaxed ${light ? 'text-white/75' : 'text-slate-600'}`}>
          {intro}
        </p>
      )}
    </Reveal>
  )
}

const buttonStyles = {
  primary:
    'bg-brand-yellow text-navy-950 hover:bg-brand-orange hover:text-white focus-visible:outline-brand-yellow',
  outline:
    'border-2 border-white/80 text-white hover:bg-white hover:text-navy-900 focus-visible:outline-white',
  navy: 'bg-navy-900 text-white hover:bg-brand-orange focus-visible:outline-navy-900',
}

export function Button({ variant = 'primary', className = '', as: Tag = 'a', children, ...props }) {
  return (
    <Tag
      className={`inline-flex items-center justify-center gap-2 rounded-sm px-6 py-3.5 font-display text-base font-semibold uppercase tracking-wider transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 disabled:opacity-60 ${buttonStyles[variant]} ${className}`}
      {...props}
    >
      {children}
    </Tag>
  )
}
