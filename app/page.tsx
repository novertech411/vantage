import { Header } from '@/components/site/header'
import { Hero } from '@/components/site/hero'
import { LenseFeature } from '@/components/site/lense-feature'
import { Impact } from '@/components/site/impact'
import { HowItWorks } from '@/components/site/how-it-works'
import { Pillars } from '@/components/site/pillars'
import { About } from '@/components/site/about'
import { Contact } from '@/components/site/contact'
import { Footer } from '@/components/site/footer'

export default function Page() {
  return (
    <main className="eagle-site">
      <Header />
      <Hero />
      <LenseFeature />
      <Impact />
      <HowItWorks />
      <Pillars />
      <About />
      <Contact />
      <Footer />
    </main>
  )
}
