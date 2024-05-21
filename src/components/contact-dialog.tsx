import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from '@/components/ui/dialog'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { CopyToClipboard } from './copy-to-clipboard'
import { ArrowUpRightIcon } from 'lucide-react'
import { data } from '@/constants'

export function ContactDialog() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          variant='ghost'
          size={null}
          className='font-semibold py-2 md:px-4 px-2'
        >
          Contact
        </Button>
      </DialogTrigger>
      <DialogContent className='sm:max-w-3xl'>
        <DialogHeader>
          <DialogTitle className='text-xl'>Contact me</DialogTitle>
          <DialogDescription>
            Feel free to reach out to me through the following channels.
          </DialogDescription>
        </DialogHeader>

        {data.contact.map((contact) => (
          <div key={contact.label} className='flex items-end gap-4 pt-2'>
            <div className='grid flex-1 gap-2'>
              <Label
                htmlFor={contact.label}
                className='font-semibold text-base font-mono pb-1'
              >
                <a
                  href={`${contact.prefix}${contact.value}`}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='hover:underline hover:underline-offset-4 group inline-flex gap-1 items-center'
                >
                  {contact.label}
                  <ArrowUpRightIcon className='size-4 text-neutral-500 dark:group-hover:text-neutral-100 group-hover:text-neutral-900' />
                </a>
              </Label>
              <Input
                id={contact.label}
                defaultValue={contact.value}
                readOnly
                className='font-mono'
              />
            </div>
            <CopyToClipboard url={contact.value} />
          </div>
        ))}

        <DialogFooter className='sm:justify-start mt-2'>
          <DialogClose asChild>
            <Button type='button' variant='secondary' size='sm'>
              Close
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
