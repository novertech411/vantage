import {
  Activity,
  Building2,
  Camera,
  BrainCircuit,
  HeartHandshake,
  Network,
  ScanEye,
  Sparkles,
  Workflow,
  type LucideIcon,
} from 'lucide-react'

// TODO: confirm this is the real partnerships inbox before launch.
export const contactEmail = 'hello@eagleeye.health'
export const partnerMailto = `mailto:${contactEmail}?subject=${encodeURIComponent('Eagle Eye Partnership Inquiry')}`

// Served by the dashboard project through the /login rewrite in vercel.json.
export const loginHref = '/login'

export const navLinks = [
  { label: 'Home', href: '#top' },
  { label: 'Eagle Lens', href: '#eagle-lens' },
  { label: 'How it works', href: '#how-it-works' },
  { label: 'Our impact', href: '#impact' },
  { label: 'About us', href: '#about' },
]

export const footerLinks = [
  { label: 'Technology', href: '#eagle-lens' },
  { label: 'How it works', href: '#how-it-works' },
  { label: 'About', href: '#about' },
  { label: 'Partnerships', href: '#partner' },
  { label: 'Log in', href: loginHref },
]

export const trustPoints = ['Portable by design', 'Technology-assisted', 'Focused on access']

export type Stat = { value: string; text: string; variant?: 'highlight' | 'wide' }

// Source: Nigeria National Blindness and Visual Impairment Survey (2015).
// Verify each figure against the published paper before launch.
export const stats: Stat[] = [
  { value: '5.02%', text: 'Reported glaucoma prevalence among Nigerian adults aged 40+ in a national survey.' },
  { value: '94.4%', text: 'Of participants with glaucoma were unaware they had the condition.', variant: 'highlight' },
  { value: '1 in 5', text: 'Participants with glaucoma were already blind by the time it was found.', variant: 'wide' },
]

export const statsSource =
  'Source: Nigeria National Blindness and Visual Impairment Survey (2015). Historical survey figures, not current prevalence estimates.'

export const lensFeatures: { icon: LucideIcon; label: string }[] = [
  { icon: ScanEye, label: 'Portable retinal imaging' },
  { icon: Sparkles, label: 'Computational analysis support' },
  { icon: Workflow, label: 'Guided screening workflow' },
]

export type Step = { title: string; text: string; icon: LucideIcon }

export const steps: Step[] = [
  { title: 'Capture', text: 'Acquire retinal images with portable imaging equipment.', icon: Camera },
  { title: 'Analyze', text: 'Support assessment with computational image analysis.', icon: BrainCircuit },
  { title: 'Connect', text: 'Help link screening workflows and professional review.', icon: Network },
  { title: 'Care', text: 'Support appropriate follow-up and referral decisions.', icon: HeartHandshake },
]

export type Application = { tag: string; title: string; text: string; variant: 'community' | 'clinic'; icon: LucideIcon }

export const applications: Application[] = [
  {
    tag: '01 / Beyond the clinic',
    title: 'Community outreach',
    text: 'Supporting the possibility of eye screening in outreach programs and areas where specialist services may be less accessible.',
    variant: 'community',
    icon: Building2,
  },
  {
    tag: '02 / Within care systems',
    title: 'Clinical workflows',
    text: 'Giving eye-care teams a practical framework for image capture, screening support, and professional assessment.',
    variant: 'clinic',
    icon: Activity,
  },
]
