export const fallbackLng = 'en'
export const languages = [fallbackLng, 'es']
export const defaultNS = 'translation'
export const cookieName = 'i18next'

export type Language = (typeof languages)[number]
export type Namespace = typeof defaultNS

export function getOptions(
  lng: Language = fallbackLng,
  ns: Namespace = defaultNS
) {
  return {
    // debug: true,
    supportedLngs: languages,
    fallbackLng,
    lng,
    fallbackNS: defaultNS,
    defaultNS,
    ns
  }
}
