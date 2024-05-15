'use client'

import { useState } from 'react'
import { toast } from 'sonner'
import { Tooltip, TooltipTrigger, TooltipContent } from './ui/tooltip'
import { Button } from './ui/button'
import { CopyIcon, CheckIcon } from 'lucide-react'
import clsx from 'clsx'
import { type ContactProps } from '@/types'

export function CopyToClipboard({ url }: { url: ContactProps['value'] }) {
  const [copied, setCopied] = useState(false)

  const copyToClipboard = () => {
    navigator.clipboard
      .writeText(url)
      .then(() => {
        setCopied(true)
        toast.success('Copied to clipboard')
        setTimeout(() => {
          setCopied(false)
        }, 2000)
      })
      .catch((error) => {
        if (error) toast.error('Error copying to clipboard')
      })
  }

  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <Button
          type='submit'
          size='icon'
          onClick={copyToClipboard}
          disabled={copied}
        >
          <span className='sr-only'>Copy</span>
          <CopyIcon
            className={clsx('size-4', {
              block: !copied,
              hidden: copied
            })}
          />
          <CheckIcon
            className={clsx('size-4', {
              hidden: !copied,
              block: copied
            })}
          />
        </Button>
      </TooltipTrigger>
      <TooltipContent>
        <p>Copy</p>
      </TooltipContent>
    </Tooltip>
  )
}
