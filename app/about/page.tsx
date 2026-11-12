import type { Metadata } from 'next'
import { Vision } from '@/components/site/vision'
import { Contact } from '@/components/site/contact'

export const metadata: Metadata = {
  title: 'About us — Eagle Eye',
  description: 'Built in Nigeria, made to go further. Learn about Eagle Eye.',
}

export default function AboutPage() {
  return (
    <>
      <Vision />
      <Contact />
    </>
  )
}
