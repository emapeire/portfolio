import { z } from 'zod'
import { TranslateProps } from '@/types'

const nameRegex = /^[A-Za-zÀ-ÿ' -]{2,}$/

export const getFormSchema = (t: TranslateProps) =>
  z.object({
    firstName: z
      .string()
      .min(2, t('contact.form.validation.first-name.min'))
      .max(50, t('contact.form.validation.first-name.max'))
      .regex(nameRegex, t('contact.form.validation.first-name.regex')),
    lastName: z
      .string()
      .min(2, t('contact.form.validation.last-name.min'))
      .max(50, t('contact.form.validation.last-name.max'))
      .regex(nameRegex, t('contact.form.validation.last-name.regex')),
    email: z
      .string()
      .email(t('contact.form.validation.email.email'))
      .min(5, t('contact.form.validation.email.min'))
      .max(100, t('contact.form.validation.email.max')),
    message: z
      .string()
      .min(10, t('contact.form.validation.message.min'))
      .max(500, t('contact.form.validation.message.max'))
      .refine((value) => !/http|www|href/.test(value), {
        message: t('contact.form.validation.message.refine')
      }),
    honeypot: z.string().optional()
  })

export type FormValues = z.infer<ReturnType<typeof getFormSchema>>
