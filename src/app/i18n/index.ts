import {
  createInstance,
  type TOptionsBase,
  type i18n,
  type TFunction
} from 'i18next'
import resourcesToBackend from 'i18next-resources-to-backend'
import { initReactI18next } from 'react-i18next'
import { getOptions, type Namespace, type Language } from './settings'

export interface TranslationOptions extends TOptionsBase {
  keyPrefix?: string
}

type TranslationResources = Record<string, unknown>

const initI18next = async (lng: Language, ns: Namespace): Promise<i18n> => {
  const i18nInstance = createInstance()
  await i18nInstance
    .use(initReactI18next)
    .use(
      resourcesToBackend(
        async (
          language: Language,
          namespace: Namespace
        ): Promise<TranslationResources> =>
          await ((await import(
            `./locales/${language}/${namespace}.json`
          )) as Promise<TranslationResources>)
      )
    )
    .init(getOptions(lng, ns))
  return i18nInstance
}

export async function useTranslation(
  lng: Language,
  ns: Namespace,
  options: TranslationOptions = {}
): Promise<{
  t: TFunction<Namespace, string>
  i18n: i18n
}> {
  const i18nextInstance = await initI18next(lng, ns)
  return {
    t: i18nextInstance.getFixedT(lng, ns, options.keyPrefix),
    i18n: i18nextInstance
  }
}
