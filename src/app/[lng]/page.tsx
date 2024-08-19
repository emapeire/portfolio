import { Section } from '@/components/ui/section'
import { Hero } from '@/components/hero'
import { type Language } from '../i18n/settings'

export default function Home({ params }: { params: { lng: Language } }) {
  return (
    <div className='flex flex-col flex-1'>
      <Section id='about' className='pb-24'>
        <Hero />
      </Section>
    </div>
  )
}
