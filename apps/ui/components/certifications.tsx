import { getTranslations } from 'next-intl/server'
import * as motion from 'motion/react-client'

import { CertificationCard } from './certification-card'
import { SectionTitle } from './section-title'
import { DEFAULT_TRANSITION } from '@/lib/motion'

import { client } from '@/sanity/lib/client'
import { CERTIFICATION_QUERY } from '@/sanity/lib/queries'

import type { CERTIFICATION_QUERYResult } from '@/sanity/types'
import type { Locale } from 'next-intl'
import type { TypedObject } from '@portabletext/types'

export const Certifications = async ({
  locale,
  user,
}: {
  locale: Locale
  user: string
}) => {
  const t = await getTranslations()

  const certs = await client.fetch<CERTIFICATION_QUERYResult>(
    CERTIFICATION_QUERY,
    {
      user,
      locale,
    },
  )

  return (
    <motion.div
      initial={{ opacity: 0, y: 20, x: 20 }}
      layout
      animate={{ opacity: 1, y: 0, x: 0 }}
      transition={{ ...DEFAULT_TRANSITION, delay: 0.7 }}
    >
      <SectionTitle title={t('titles.certifications')} />
      {certs &&
        certs.map((cert) => (
          <CertificationCard
            key={cert.id}
            about={cert.about as TypedObject[]}
            className="mb-4 lg:mb-6"
            certificate={cert.certificate as string}
            date={cert.date as string}
            fields={cert.fields as Record<string, string>[]}
            locale={locale}
            location={cert.school?.location as string}
            school={cert.school?.name as string}
            title={cert.title as string}
            website={cert.school?.website as string}
          />
        ))}
    </motion.div>
  )
}
