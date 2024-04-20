import { Section } from '@/components/ui/section'
import { Hero } from '@/components/hero'
import { SectionSecondaryTitle } from '@/components/section-secondary-title'
import { Career } from '@/components/career'
import { Projects } from '@/components/projects'
import { BriefCaseIcon } from '@/components/icons/brief-case'
import { CodeIcon } from '@/components/icons/code'

export default function Home() {
  return (
    <div className='flex flex-col'>
      <Section id='about' className='pb-24'>
        <Hero />
      </Section>

      {/* TODO */}

      <Section id='career' className='pb-40'>
        <SectionSecondaryTitle>
          <BriefCaseIcon className='size-8' />
          Career
        </SectionSecondaryTitle>
        <Career />
      </Section>

      <Section id='projects' className='pb-40'>
        <SectionSecondaryTitle>
          <CodeIcon className='size-8' />
          Projects
        </SectionSecondaryTitle>
        <Projects />
      </Section>
    </div>
  )
}
