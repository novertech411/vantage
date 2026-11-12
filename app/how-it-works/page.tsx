import type { Metadata } from 'next'
import { Workflow } from '@/components/site/workflow'
import { Contact } from '@/components/site/contact'

export const metadata: Metadata = {
  title: 'How it works — Eagle Eye',
  description: 'Capture, analyze, connect and care — how Eagle Eye supports eye screening.',
}

export default function HowItWorksPage() {
  return (
    <>
      <Workflow />
      <Contact />
    </>
  )
}
