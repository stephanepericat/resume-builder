import type { Locale } from 'next-intl'
import * as motion from 'motion/react-client'
import { Contents } from './contents'
import { Header } from './header'
import { Sidebar } from './sidebar'

import { client } from '@/sanity/lib/client'
import { PROFILE_QUERY } from '@/sanity/lib/queries'
import { GLOBAL_TRANSITION } from '@/lib/motion'

import type { PROFILE_QUERYResult } from '@/sanity/types'
import type { TypedObject } from '@portabletext/types'

export const Resume = async ({
  locale,
  user,
}: {
  locale: Locale
  user: string
}) => {
  const info = await client.fetch<PROFILE_QUERYResult>(PROFILE_QUERY, {
    locale,
    user,
  })

  return (
    <motion.div
      initial={{ opacity: 0, y: -10, x: -10 }}
      layout
      animate={{ opacity: 1, y: 0, x: 0 }}
      transition={GLOBAL_TRANSITION}
    >
      <Header name={info?.name as string} title={info?.title as string} />
      <div className="grid lg:grid-cols-[320px_1fr] gap-4 lg:gap-6">
        <Sidebar
          email={info?.email as string}
          phone={info?.phone as string}
          location={info?.location as string}
          social={info?.social as Record<string, string>}
        />
        <Contents
          locale={locale}
          profile={info?.profile as TypedObject[]}
          user={user}
        />
      </div>
    </motion.div>
  )
}
