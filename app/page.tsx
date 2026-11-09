import { Header } from '@/components/site/header'
import { Hero } from '@/components/site/hero'
import { TrustStrip } from '@/components/site/trust-strip'
import { Challenge } from '@/components/site/challenge'
import { EagleLens } from '@/components/site/eagle-lens'
import { Workflow } from '@/components/site/workflow'
import { Applications } from '@/components/site/applications'
import { Vision } from '@/components/site/vision'
import { Contact } from '@/components/site/contact'
import { Footer } from '@/components/site/footer'

export default function Page() {
  return (
    <>
      <span id="top" />
      <Header />
      <main>
        <Hero />
        <TrustStrip />
        <Challenge />
        <EagleLens />
        <Workflow />
        <Applications />
        <Vision />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
