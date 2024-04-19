import { XIcon } from '@/components/icons/x'
import { ButtonSocialPill } from './button-social-pill'
import { GitHubIcon } from '@/components/icons/github'
import { LinkedInIcon } from '@/components/icons/linkedin'
import { MailIcon } from '@/components/icons/mail'

export function Navigation() {
  return (
    <nav className='flex md:flex-row flex-col gap-x-5 my-8 px-8 text-sm md:text-base overflow-x-auto whitespace-nowrap'>
      <ButtonSocialPill href='https://x.com/emapeire'>
        <XIcon className='size-6' />
        The everything app
      </ButtonSocialPill>
      <ButtonSocialPill href='https://github.com/emapeire'>
        <GitHubIcon className='size-6' />
        GitHub
      </ButtonSocialPill>
      <ButtonSocialPill href='https://linkedin.com/in/emanuelpeire'>
        <LinkedInIcon className='size-6' />
        LinkedIn
      </ButtonSocialPill>
      <ButtonSocialPill href='mailto:me@emapeire.xyz'>
        <MailIcon className='md:size-8 size-6' />
        Email
      </ButtonSocialPill>
    </nav>
  )
}
