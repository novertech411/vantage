import { ArrowRight } from 'lucide-react'

export function Contact() {
  return (
    <section id="contact" className="contact-band page-width">
      <div>
        <h2>Help us bring earlier assessment <i>into focus.</i></h2>
      </div>
      <a className="dark-button" href="mailto:hello@eagleeye.health">
        Become a partner <ArrowRight size={15} />
      </a>
    </section>
  )
}
