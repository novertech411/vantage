import { Hero } from '@/components/site/hero'
import { TrustStrip } from '@/components/site/trust-strip'
import { Challenge } from '@/components/site/challenge'
import { EagleLens } from '@/components/site/eagle-lens'
import { Workflow } from '@/components/site/workflow'
import { Applications } from '@/components/site/applications'
import { Vision } from '@/components/site/vision'
import { Contact } from '@/components/site/contact'

export default function Page() {
  return (
    <>
      <Hero />
      <TrustStrip />
      <Challenge />
      <EagleLens />
      <Workflow />
      <Applications />
      <Vision />
      <Contact />
    </>
  )
}
