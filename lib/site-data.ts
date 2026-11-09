import { BrainCircuit, Camera, Stethoscope, Users, type LucideIcon } from 'lucide-react'

export const logo =
  'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-11-05%20at%202.54.06%20AM-QNBplxEKqoPnrJZBLRP9zvitJDLW2k.jpeg'

export const showcase =
  'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Eagle%20Eye_%20AI-Powered%20Eye%20Care-3-gwLwPJONZFFuCCnmLtroTgbWxRJiax.png'

export const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Eagle Lense', href: '#lense' },
  { label: 'How it works', href: '#how' },
  { label: 'Our impact', href: '#impact' },
  { label: 'About', href: '#about' },
]

export type ProcessStep = { number: string; title: string; text: string; icon: LucideIcon }

export const processSteps: ProcessStep[] = [
  { number: '01', title: 'Capture', text: 'Bring the retina into view through portable smartphone imaging.', icon: Camera },
  { number: '02', title: 'Analyze', text: 'Surface useful signals with computational image analysis.', icon: BrainCircuit },
  { number: '03', title: 'Connect', text: 'Support clinician-guided assessment and referral.', icon: Stethoscope },
  { number: '04', title: 'Care', text: 'Help patients move toward appropriate follow-up care.', icon: Users },
]

export const metrics = [
  { value: '5.02%', text: "Glaucoma prevalence among adults aged 40+ examined in Nigeria's survey." },
  { value: '94.4%', text: 'Of participants with glaucoma were unaware they had the condition.' },
  { value: '1 IN 5', text: 'Participants with glaucoma were already blind.' },
]

export const pillars = [
  { number: '01', title: 'Portable by design', text: 'A compact imaging setup that can travel between clinical and outreach settings.', className: 'purple-card' },
  { number: '02', title: 'Locally supported', text: 'Built around the realities of healthcare delivery in Nigeria and across Africa.', className: 'yellow-card' },
  { number: '03', title: 'AI-assisted screening', text: 'Computational support for identifying retinal findings for professional review.', className: 'pink-card' },
]
