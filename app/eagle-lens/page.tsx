import type { Metadata } from 'next'
import { EagleLens } from '@/components/site/eagle-lens'
import { Applications } from '@/components/site/applications'
import { Contact } from '@/components/site/contact'

export const metadata: Metadata = {
  title: 'Eagle Lens — Eagle Eye',
  description: 'Portable retinal imaging and guided screening workflows from Eagle Eye.',
}

export default function EagleLensPage() {
  return (
    <>
      <EagleLens />
      <Applications />
      <Contact />
    </>
  )
}
