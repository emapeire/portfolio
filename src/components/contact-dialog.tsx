import { Copy } from 'lucide-react'

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
      <DialogContent className='sm:max-w-md'>
        <DialogHeader>
          <DialogTitle>Contact me</DialogTitle>
          <DialogDescription>
            Feel free to reach out to me through the following channels.
          </DialogDescription>
        </DialogHeader>

        {data.contact.map((contact) => (
          <div
            key={contact.label}
            className='flex items-end space-x-3 space-y-6'
          >
            <div className='grid flex-1 gap-2'>
              <Label htmlFor='link' className='font-semibold'>
                {contact.label}
              </Label>
              <Input id='link' defaultValue={contact.value} readOnly />
            </div>
            <Button type='submit' size='icon'>
              <span className='sr-only'>Copy</span>
              <Copy className='size-4' />
            </Button>
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
