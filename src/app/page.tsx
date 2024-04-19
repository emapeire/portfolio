import { Section } from '@/components/ui/section'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Badge } from '@/components/badge'
import { SectionTitleMain } from '@/components/section-title-main'
import { SectionSecondaryTitle } from '@/components/section-secondary-title'
import { Navigation } from '@/components/navigation'
import { About } from '@/components/about'
import { Career } from '@/components/career'
import { Projects } from '@/components/projects'
import { ABOUT as about, AVATAR as avatar } from '@/data'
import { BriefCaseIcon } from '@/components/icons/brief-case'
import { CodeIcon } from '@/components/icons/code'
import { ResumeIcon } from '@/components/icons/resume'

export default function Home() {
  return (
    <div>
      <Section id='about' className='pb-32'>
        <div className='flex'>
          <a
            href='https://github.com/emapeire'
            target='_blank'
            rel='noopener noreferrer'
            className='rounded-full'
          >
            <Avatar className='size-28 shadow border'>
              <AvatarImage alt={avatar.name} src={'/images/avatar.png'} />
              <AvatarFallback className='font-mono font-bold'>
                {avatar.initials}
              </AvatarFallback>
            </Avatar>
          </a>
        </div>

        <SectionTitleMain />

        <div className='flex flex-col font-normal gap-4 text-lg md:text-xl text-neutral-300 text-pretty'>
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
    </div>
  )
}
