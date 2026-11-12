import type { Metadata } from 'next'
import { Contact } from '@/components/site/contact'

export const metadata: Metadata = {
  title: 'Partner with us — Eagle Eye',
  description: 'Research, clinical, technology and outreach partnerships with Eagle Eye.',
}

export default function PartnerPage() {
  return (
    <>
      <Contact />
    </>
  )
}
