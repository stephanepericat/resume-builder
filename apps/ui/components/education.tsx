import { getTranslations } from 'next-intl/server'
import * as motion from 'motion/react-client'

import { EducationCard } from './education-card'
import { SectionTitle } from './section-title'
import { DEFAULT_TRANSITION } from '@/lib/motion'

import { client } from '@/sanity/lib/client'
import { EDUCATION_QUERY } from '@/sanity/lib/queries'

import type { EDUCATION_QUERYResult } from '@/sanity/types'
import type { Locale } from 'next-intl'
import type { TypedObject } from '@portabletext/types'

export const Education = async ({
  locale,
  user,
}: {
  locale: Locale
  user: string
}) => {
  const t = await getTranslations()

  const schools = await client.fetch<EDUCATION_QUERYResult>(EDUCATION_QUERY, {
    user,
    locale,
  })

  return (
    <motion.div
      initial={{ opacity: 0, y: 20, x: 20 }}
      layout
      animate={{ opacity: 1, y: 0, x: 0 }}
      transition={{ ...DEFAULT_TRANSITION, delay: 0.65 }}
    >
      <SectionTitle title={t('titles.education')} />
      {schools &&
        schools.map((school) => (
          <EducationCard
            key={school.id}
            about={school.about as TypedObject[]}
            className="mb-4 lg:mb-6"
            end={school.end}
            fields={school.fields as Record<string, string>[]}
            locale={locale}
            location={school.school?.location as string}
            school={school.school?.name as string}
            start={school.start as string}
            title={school.title as string}
            website={school.school?.website as string}
          />
        ))}
    </motion.div>
  )
}
