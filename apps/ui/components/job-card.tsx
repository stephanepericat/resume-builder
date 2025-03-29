import Link from 'next/link'
import { useTranslations } from 'next-intl'
import * as motion from 'motion/react-client'
import { PortableText } from '@portabletext/react'

import { useDate } from '@/hooks/useDate'
import { Badge } from './ui/badge'
import { components } from '@/sanity/lib/components'

import { DEFAULT_TRANSITION } from '@/lib/motion'
import type { TypedObject } from '@portabletext/types'
import type { Locale } from 'next-intl'

export const JobCard = ({
  about,
  className,
  company,
  contract,
  current,
  end,
  locale,
  location,
  remote,
  skills,
  start,
  title,
  website,
}: {
  about: TypedObject[]
  className?: string
  company: string
  contract: boolean
  current: boolean
  end: string | null
  locale: Locale
  location: string
  remote: boolean
  skills?: Record<string, string>[]
  start: string
  title: string
  website: string
}) => {
  const t = useTranslations()
  const { formatDate, DEFAULT_FORMAT } = useDate(locale)

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ ...DEFAULT_TRANSITION, delay: 0.2, duration: 1.0 }}
      className={className}
    >
      <h3 className="text-xl font-semibold">
        <Link
          href={website}
          target="_blank"
          className="transition-colors hover:text-muted-foreground"
        >
          {company}
        </Link>
      </h3>
      <div className="mb-4">
        <p className="text-base">{title}</p>
        <p className="text-sm text-muted-foreground">
          {formatDate(start, DEFAULT_FORMAT)} -{' '}
          {current
            ? t('jobs.current')
            : formatDate(end as string, DEFAULT_FORMAT)}
        </p>
        <p className="text-sm text-muted-foreground">
          {remote ? t('jobs.remote') : location} |{' '}
          {contract ? t('jobs.contract') : t('jobs.fullTime')}
        </p>
      </div>
      <PortableText value={about as TypedObject[]} components={components} />
      <div className="pt-4">
        {skills &&
          skills.map((skill) => (
            <Badge variant="secondary" key={skill.id} className="mr-2 mb-2">
              {skill.name}
            </Badge>
          ))}
      </div>
    </motion.div>
  )
}
