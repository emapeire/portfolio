import { Header } from '@/components/header'
import { Section } from '@/components/section'
import { Avatar } from '@/components/ui/avatar'
import { Badge } from '@/components/ui/badge'
import { SectionTitleMain } from '@/components/section-title-main'
import { SectionSecondaryTitle } from '@/components/section-secondary-title'
import { Navigation } from '@/components/navigation'
import { About } from '@/components/about'
import { Career } from '@/components/career'
import { Projects } from '@/components/projects'
import { Footer } from '@/components/footer'
import { ABOUT as about } from '@/data'
import { BriefCaseIcon } from '@/icons/brief-case'
import { CodeIcon } from '@/icons/code'
import { ResumeIcon } from '@/icons/resume'

export default function Home() {
  return (
    <main className='flex min-h-screen flex-col items-center justify-center py-24 px-4'>
      <Header />

      <Section id='about' className='pb-32'>
        <Avatar />

        <SectionTitleMain />

        <div className='flex flex-col font-normal gap-4 text-lg md:text-xl text-gray-300 text-pretty'>
          <About title={about.title} description={about.description} />
        </div>

        <Navigation />
      </Section>

      <Section id='career' className='pb-40'>
        <SectionSecondaryTitle>
          <BriefCaseIcon className='size-8' />
          Career
          <a
            href='https://cv.emapeire.xyz'
            target='_blank'
            rel='noopener noreferrer'
            className='flex justify-center items-center ml-3 hover:scale-105 transition-all ease-in-out'
          >
            <Badge>
              <div className='flex items-center'>
                <ResumeIcon className='size-4 mr-1' />
                Resume
              </div>
            </Badge>
          </a>
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

      <Footer />
    </main>
  )
}
