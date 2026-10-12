import { useEffect, useRef, useState } from 'react'
import { ChevronLeft, ChevronRight, X } from 'lucide-react'
import { Reveal, SectionHeading } from './ui.jsx'
import { gallery } from '../data/site.js'

export default function Gallery() {
  const dialogRef = useRef(null)
  const [activeIndex, setActiveIndex] = useState(null)
  const active = activeIndex === null ? null : gallery[activeIndex]

  useEffect(() => {
    const dialog = dialogRef.current
    if (!dialog) return
    if (activeIndex !== null && !dialog.open) dialog.showModal()
    if (activeIndex === null && dialog.open) dialog.close()
  }, [activeIndex])

  const step = (dir) => setActiveIndex((i) => (i + dir + gallery.length) % gallery.length)

  return (
    <section id="work" className="bg-slate-100 py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeading
          eyebrow="Our Work"
          title="Real Jobs Around Rutledge"
          intro="Septic installs, trenching, grading, and clearing — here's a look at our equipment and recent projects."
        />

        <ul className="mt-14 columns-1 gap-5 sm:columns-2 lg:columns-3">
          {gallery.map((photo, index) => (
            <Reveal as="li" key={photo.src} delay={(index % 3) * 80} className="mb-5 break-inside-avoid">
              <button
                type="button"
                onClick={() => setActiveIndex(index)}
                className="group relative block w-full overflow-hidden rounded-sm bg-navy-900 text-left focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-orange"
              >
                <img
                  src={photo.src}
                  alt={photo.alt}
                  width={photo.width}
                  height={photo.height}
                  loading="lazy"
                  className="h-auto w-full transition-transform duration-500 group-hover:scale-105"
                />
                <span className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-navy-950/90 to-transparent px-4 pb-3 pt-10 font-display text-sm font-semibold uppercase tracking-wider text-white">
                  {photo.caption}
                </span>
              </button>
            </Reveal>
          ))}
        </ul>
      </div>

      <dialog
        ref={dialogRef}
        onClose={() => setActiveIndex(null)}
        onClick={(e) => e.target === e.currentTarget && setActiveIndex(null)}
        onKeyDown={(e) => {
          if (e.key === 'ArrowRight') step(1)
          if (e.key === 'ArrowLeft') step(-1)
        }}
        aria-label={active?.caption ?? 'Photo viewer'}
        className="m-auto max-h-[90vh] w-[min(92vw,1100px)] bg-transparent p-0 backdrop:bg-navy-950/90"
      >
        {active && (
          <figure className="relative">
            <img src={active.src} alt={active.alt} className="max-h-[80vh] w-full rounded-sm object-contain" />
            <figcaption className="mt-3 text-center font-display text-sm uppercase tracking-wider text-white">
              {active.caption}
            </figcaption>
            <button
              type="button"
              onClick={() => setActiveIndex(null)}
              className="absolute right-3 top-3 rounded-full bg-navy-950/80 p-2 text-white hover:bg-brand-orange"
            >
              <span className="sr-only">Close</span>
              <X className="h-5 w-5" aria-hidden="true" />
            </button>
            <button
              type="button"
              onClick={() => step(-1)}
              className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full bg-navy-950/80 p-2 text-white hover:bg-brand-orange"
            >
              <span className="sr-only">Previous photo</span>
              <ChevronLeft className="h-6 w-6" aria-hidden="true" />
            </button>
            <button
              type="button"
              onClick={() => step(1)}
              className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full bg-navy-950/80 p-2 text-white hover:bg-brand-orange"
            >
              <span className="sr-only">Next photo</span>
              <ChevronRight className="h-6 w-6" aria-hidden="true" />
            </button>
          </figure>
        )}
      </dialog>
    </section>
  )
}
