import 'server-only'

const privacyPolicyDictionary = {
  ja: () => import('@/dictionaries/privacy_policy/ja.json').then((module) => module.default),
  en: () => import('@/dictionaries/privacy_policy/en.json').then((module) => module.default),
}

export const getPrivacyPolicyDictionary = async (locale: 'en' | 'ja') => {
  return privacyPolicyDictionary[locale]()
}

const termsDictionary = {
  ja: () => import('@/dictionaries/terms/ja.json').then((module) => module.default),
  en: () => import('@/dictionaries/terms/en.json').then((module) => module.default),
}

export const getTermsDictionary = async (locale: 'en' | 'ja') => {
  return termsDictionary[locale]()
}