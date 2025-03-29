import { getTranslations } from 'next-intl/server'
import * as motion from 'motion/react-client'

import { LanguageCard } from './language-card'
import { SectionTitle } from './section-title'
import { DEFAULT_TRANSITION } from '@/lib/motion'

import { client } from '@/sanity/lib/client'
import { LANGUAGES_QUERY } from '@/sanity/lib/queries'

import type { LANGUAGES_QUERYResult } from '@/sanity/types'
import type { Locale } from 'next-intl'

export const Languages = async ({
  locale,
  user,
}: {
  locale: Locale
  user: string
}) => {
  const t = await getTranslations()

  const languages = await client.fetch<LANGUAGES_QUERYResult>(LANGUAGES_QUERY, {
    user,
    locale,
  })

  return (
    <motion.div
      initial={{ opacity: 0, y: 20, x: 20 }}
      layout
      animate={{ opacity: 1, y: 0, x: 0 }}
      transition={{ ...DEFAULT_TRANSITION, delay: 0.75 }}
    >
      <SectionTitle title={t('titles.languages')} />
      {languages &&
        languages.map((language) => (
          <LanguageCard
            key={language.id}
            className="mb-4 lg:mb-6"
            proficiency={language.proficiency}
            title={language.title as string}
          />
        ))}
    </motion.div>
  )
}
