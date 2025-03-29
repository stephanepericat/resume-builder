import { useTranslations } from 'next-intl'
import * as motion from 'motion/react-client'
import Link from 'next/link'
import { DynamicIcon, type IconName } from 'lucide-react/dynamic'

import { Button } from './ui/button'
import { SectionTitle } from './section-title'
import { DEFAULT_TRANSITION } from '@/lib/motion'

export const Details = ({
  email,
  phone,
  location,
  social,
}: {
  email: string
  phone: string
  location: string
  social: Record<string, string>
}) => {
  const t = useTranslations()
  return (
    <motion.div
      initial={{ opacity: 0, y: 20, x: -20 }}
      layout
      animate={{ opacity: 1, y: 0, x: 0 }}
      transition={DEFAULT_TRANSITION}
    >
      <SectionTitle title={t('titles.details')} />
      <h3 className="font-title font-bold text-xl tracking-tight uppercase mb-1">
        {t('details.location')}
      </h3>
      <p className="text-base mb-6">{location}</p>
      <h3 className="font-title font-bold text-xl tracking-tight uppercase mb-1">
        {t('details.email')}
      </h3>
      <p className="text-base mb-6">{email}</p>
      <h3 className="font-title font-bold text-xl tracking-tight uppercase mb-1">
        {t('details.phone')}
      </h3>
      <p className="text-base mb-6">{phone}</p>
      {social && (
        <div className="flex flex-wrap gap-4 mb-6">
          {Object.entries(social).map(([key, value]) => (
            <Link
              key={key}
              href={value}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                variant="outline"
                size="icon"
                className="rounded-full hover:cursor-pointer"
              >
                <DynamicIcon name={key as IconName} size={20} />
              </Button>
            </Link>
          ))}
        </div>
      )}
    </motion.div>
  )
}
