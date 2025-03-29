import { Suspense } from 'react'
import { useLocale } from 'next-intl'
import { Resume } from '@/components/resume'

export default function Home() {
  const locale = useLocale()

  return (
    <div className="container mx-auto p-8">
      <Suspense>
        <Resume locale={locale} user="stephane-p8082" />
      </Suspense>
    </div>
  )
}
