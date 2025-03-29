import { getTranslations } from 'next-intl/server'
import * as motion from 'motion/react-client'

import { JobCard } from './job-card'
import { SectionTitle } from './section-title'
import { DEFAULT_TRANSITION } from '@/lib/motion'

import { client } from '@/sanity/lib/client'
import { JOBS_QUERY } from '@/sanity/lib/queries'

import type { JOBS_QUERYResult } from '@/sanity/types'
import type { Locale } from 'next-intl'
import type { TypedObject } from '@portabletext/types'

export const Jobs = async ({
  locale,
  user,
}: {
  locale: Locale
  user: string
}) => {
  const t = await getTranslations()

  const jobs = await client.fetch<JOBS_QUERYResult>(JOBS_QUERY, {
    user,
    locale,
  })

  return (
    <motion.div
      initial={{ opacity: 0, y: 20, x: 20 }}
      layout
      animate={{ opacity: 1, y: 0, x: 0 }}
      transition={{ ...DEFAULT_TRANSITION, delay: 0.6 }}
    >
      <SectionTitle title={t('titles.jobs')} />
      {jobs &&
        jobs.map((job) => (
          <JobCard
            key={job.id}
            about={job.about as TypedObject[]}
            className="mb-4 lg:mb-6"
            company={job.company?.name as string}
            contract={job.contract as boolean}
            current={job.current as boolean}
            end={job.end}
            locale={locale}
            location={job.company?.location as string}
            remote={job.remote as boolean}
            skills={job.skills as Record<string, string>[]}
            start={job.start as string}
            title={job.title as string}
            website={job.company?.website as string}
          />
        ))}
    </motion.div>
  )
}
