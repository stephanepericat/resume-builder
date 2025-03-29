import { useTranslations } from 'next-intl'
import * as motion from 'motion/react-client'
import { PortableText } from '@portabletext/react'
import type { TypedObject } from '@portabletext/types'

import { SectionTitle } from './section-title'
import { DEFAULT_TRANSITION } from '@/lib/motion'
import { components } from '@/sanity/lib/components'

export const About = ({ profile }: { profile: TypedObject[] }) => {
  const t = useTranslations()

  return (
    <motion.div
      initial={{ opacity: 0, y: 20, x: 20 }}
      layout
      animate={{ opacity: 1, y: 0, x: 0 }}
      transition={DEFAULT_TRANSITION}
    >
      <SectionTitle title={t('titles.about')} />
      <PortableText value={profile} components={components} />
    </motion.div>
  )
}
