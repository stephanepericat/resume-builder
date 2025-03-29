import Link from 'next/link'
import * as motion from 'motion/react-client'
import { PortableText } from '@portabletext/react'

import { useDate } from '@/hooks/useDate'
import { Badge } from './ui/badge'
import { components } from '@/sanity/lib/components'

import { DEFAULT_TRANSITION } from '@/lib/motion'
import type { TypedObject } from '@portabletext/types'
import type { Locale } from 'next-intl'

export const EducationCard = ({
  about,
  className,
  end,
  fields,
  locale,
  location,
  school,
  start,
  title,
  website,
}: {
  about: TypedObject[]
  className?: string
  end: string | null
  fields: Record<string, string>[]
  locale: Locale
  location: string
  school: string
  start: string
  title: string
  website: string
}) => {
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
          {school}
        </Link>
      </h3>
      <div className="mb-4">
        <p className="text-base">{title}</p>
        <p className="text-sm text-muted-foreground">
          {formatDate(start, DEFAULT_FORMAT)} -{' '}
          {formatDate(end as string, DEFAULT_FORMAT)}
        </p>
        <p className="text-sm text-muted-foreground">{location}</p>
      </div>
      <PortableText value={about as TypedObject[]} components={components} />
      <div className="pt-4">
        {fields &&
          fields.map((field) => (
            <Badge variant="secondary" key={field.id} className="mr-2 mb-2">
              {field.name}
            </Badge>
          ))}
      </div>
    </motion.div>
  )
}
