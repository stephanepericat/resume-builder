'use client'

import { useLocale, useTranslations } from 'next-intl'

import { useLocalization } from '@/hooks/useLocalization'
import { usePathname } from '@/i18n/navigation'
import { useSearchParams } from 'next/navigation'

import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'

export const LanguageToggle = () => {
  const { switchLocale } = useLocalization()
  const pathname = usePathname()
  const query = useSearchParams()
  const locale = useLocale()
  const t = useTranslations()

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="outline"
          size="icon"
          className="rounded-full print:hidden hover:cursor-pointer"
        >
          <span className="uppercase tracking-wider">{locale}</span>
          <span className="sr-only">{t('languages.toggle')}</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem
          onClick={() => switchLocale(pathname, 'en', query.toString())}
        >
          English
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => switchLocale(pathname, 'fr', query.toString())}
        >
          Français
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
