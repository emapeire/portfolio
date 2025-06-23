import { Section } from '@/components/ui/section'
import { Contact } from '@/components/contact'

export default function ContactPage() {
  return (
    <div className='flex flex-col flex-1'>
      <Section id='contact' className='pb-24'>
        <Contact />
      </Section>
    </div>
  )
}
