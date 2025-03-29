import { About } from './about'
import { Certifications } from './certifications'
import { Education } from './education'
import { Jobs } from './jobs'
import { Languages } from './languages'
import { Separator } from './ui/separator'

import type { TypedObject } from '@portabletext/types'
import type { Locale } from 'next-intl'

export const Contents = ({
  locale,
  profile,
  user,
}: {
  locale: Locale
  profile: TypedObject[]
  user: string
}) => {
  return (
    <div className="mt-4">
      <About profile={profile} />
      <Separator className="my-4" />
      <Jobs locale={locale} user={user} />
      <Separator className="my-4" />
      <Education locale={locale} user={user} />
      <Separator className="my-4" />
      <Certifications locale={locale} user={user} />
      <Separator className="my-4" />
      <Languages locale={locale} user={user} />
    </div>
  )
}
