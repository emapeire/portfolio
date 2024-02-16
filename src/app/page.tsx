import { About } from '@/components/about'
import { Navigation } from '@/components/navigation'
import { Section } from '@/components/section'
import { SectionTitleMain } from '@/components/section-title-main'
import { Avatar } from '@/components/ui/avatar'
import { ABOUT as about } from '@/data'

export default function Home() {
  return (
    <main className='flex min-h-screen flex-col items-center justify-between p-24 px-6'>
      <Section id='about' className='pb-32'>
        <Avatar />

        <SectionTitleMain />

        <div className='flex flex-col font-normal gap-4 text-lg md:text-xl text-slate-300 text-pretty'>
          <About title={about.title} description={about.description} />
        </div>

        <Navigation />
      </Section>
    </main>
  )
}

// import Layout from '../layouts/layout.astro'
// import Badge from '../components/ui/badge.astro'
// import SectionMainTitle from '../components/section-main-title.astro'
// import Section from '../components/section.astro'
// import Avatar from '../components/ui/avatar.astro'
// import About from '../components/about.astro'
// import Navigation from '../components/navigation.astro'
// import Career from '../components/career.astro'
// import Projects from '../components/projects.astro'
// import SectionTitle from '../components/section-secondary-title.astro'
// import ResumeIcon from '../icons/Resume.astro'
// import BriefCaseIcon from '../icons/BriefCase.astro'
// import CodeIcon from '../icons/Code.astro'

//     <Section id='career' class='md:pb-32 pb-24'>
//       <SectionTitle>
//         <BriefCaseIcon class='size-8' />
//         Career
//         <a
//           href='https://cv.emapeire.xyz'
//           target='_blank'
//           rel='noopener noreferrer'
//           class='flex justify-center items-center ml-2'
//         >
//           <Badge>
//             <div class='flex items-center'>
//               <ResumeIcon class='size-4 mr-1' />
//               Resume
//             </div>
//           </Badge>
//         </a>
//       </SectionTitle>
//       <Career />
//     </Section>

//     <Section id='projects' class='md:pb-32 pb-24'>
//       <SectionTitle>
//         <CodeIcon class='size-8' />
//         Projects
//       </SectionTitle>
//       <Projects />
//     </Section>

//     <!-- <Section id='contact' class='md:pb-32 pb-24'>
//       <SectionTitle>
//         <PersonIcon class='size-8' />
//         Contact
//       </SectionTitle>
//       <Contact />
//     </Section> -->
//   </main>
// </Layout>
