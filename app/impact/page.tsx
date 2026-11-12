import type { Metadata } from 'next'
import { Challenge } from '@/components/site/challenge'
import { Contact } from '@/components/site/contact'

export const metadata: Metadata = {
  title: 'Our impact — Eagle Eye',
  description: 'Why earlier eye screening matters in Nigeria.',
}

export default function ImpactPage() {
  return (
    <>
      <Challenge />
      <Contact />
    </>
  )
}
