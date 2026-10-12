import { Shovel, Construction, Mountain, Route, Droplets, Trees } from 'lucide-react'

export const business = {
  name: "Turley's Backhoe Service",
  shortName: "Turley's",
  email: 'turleybackhoeservice@gmail.com',
  facebook: 'https://www.facebook.com/turleybackhoeservicerutledgetn/',
  location: 'Rutledge, Tennessee',
}

export const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Our Work', href: '#work' },
  { label: 'Why Us', href: '#why-us' },
  { label: 'Contact', href: '#contact' },
]

// Typical backhoe services shown for the demo — confirm the final list with the owner.
export const services = [
  {
    icon: Shovel,
    title: 'Trenching',
    description: 'Clean, accurate trenches for water lines, electrical, and utility runs.',
  },
  {
    icon: Construction,
    title: 'Digging & Excavation',
    description: 'General digging for footers, foundations, and small excavation jobs.',
  },
  {
    icon: Mountain,
    title: 'Site Prep & Grading',
    description: 'Leveling and shaping ground so your project starts on solid footing.',
  },
  {
    icon: Route,
    title: 'Driveways & Gravel',
    description: 'Driveway cutting, spreading gravel, and repairing worn or rutted drives.',
  },
  {
    icon: Droplets,
    title: 'Drainage Work',
    description: 'Ditches, culverts, and drainage solutions to move water off your property.',
  },
  {
    icon: Trees,
    title: 'Clearing & Cleanup',
    description: 'Removing stumps, brush, rock, and debris to open up usable land.',
  },
]

const work = (file, caption, alt, width, height) => ({ src: `/images/work/${file}.png`, caption, alt, width, height })

export const gallery = [
  work('septic-install', 'Septic Tank Install', 'Mini excavator digging beside a new septic tank lid and PVC pipe', 1360, 627),
  work('mini-excavator-trench', 'Trenching With the Mini Ex', 'CAT mini excavator digging a long trench across a green lawn', 765, 1020),
  work('backhoe-yard', 'Backhoe Site Work', 'CAT backhoe working in a wooded yard beside piles of red dirt', 1360, 765),
  work('line-trenching', 'Field Line Trenching', 'Open trenches and dirt piles in a front yard with the work truck and trailer nearby', 1360, 627),
  work('service-truck-trailer', 'Ready to Roll', 'Blue Ram service truck towing a CAT mini excavator on a trailer in the fall', 1360, 1020),
  work('trench-excavation', 'Trench Excavation', 'Deep trench dug through a yard with a mini excavator at the edge', 724, 420),
  work('lot-clearing', 'Lot Clearing', 'Wooded backyard cleared of brush, leaving open ground beside a play set', 1360, 1020),
  work('yard-grading', 'Yard Grading', 'Freshly graded red dirt yard with the work truck and trailer in the background', 1360, 627),
  work('backhoe-field', 'On the Job', 'Yellow CAT backhoe parked on a freshly mowed field with hills behind', 540, 717),
  work('brush-clearing', 'Brush & Dirt Work', 'Backhoe loader beside cleared brush and fresh dirt piles at the tree line', 1360, 765),
  work('equipment-lineup', 'Our Equipment', 'CAT mini excavator, blue Ram truck, and CAT track loader lined up on gravel', 960, 821),
  work('mack-dump-truck', 'Hauling Equipment', 'Blue Mack dump truck towing a backhoe on a lowboy trailer', 960, 720),
]

export const quoteServiceOptions = [...services.map((s) => s.title), 'Other / Not Sure']
