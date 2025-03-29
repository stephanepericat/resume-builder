import { useTranslations } from 'next-intl'
import * as motion from 'motion/react-client'

import { DEFAULT_TRANSITION } from '@/lib/motion'

export const LanguageCard = ({
  className,
  proficiency,
  title,
}: {
  className?: string
  proficiency: 'fluent' | 'native' | null
  title: string
}) => {
  const t = useTranslations()

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ ...DEFAULT_TRANSITION, delay: 0.2, duration: 1.0 }}
      className={className}
    >
      <h3 className="text-xl font-semibold">{title}</h3>
      <div className="mb-4">
        <p className="text-sm text-muted-foreground">
          {t(`languages.proficiency.${proficiency}`)}
        </p>
      </div>
    </motion.div>
  )
}
