import { Section } from '@/components/ui/section'
import { Hero } from '@/components/hero'
import { Career } from '@/components/career'
// import { Projects } from '@/components/projects'
// import { CodeIcon } from '@/components/icons/code'

export default function Home() {
  return (
    <div className='flex flex-col'>
      <Section id='about' className='pb-24'>
        <Hero />
      </Section>

      <Section id='career' className='pb-24'>
        <Career />
      </Section>

      {/* TODO */}

      {/* <Section id='projects' className='pb-24'>
        <SectionSecondaryTitle>
          <CodeIcon className='size-8' />
          Projects
        </SectionSecondaryTitle>
        <Projects />
      </Section> */}
    </div>
  )
}
