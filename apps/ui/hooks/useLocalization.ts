import { useRouter } from '@/i18n/navigation'

export const useLocalization = () => {
  const { replace } = useRouter()

  const switchLocale = (path: string, locale: string, query?: string) =>
    replace(`${path}${query && query.length ? '?' + query : ''}`, { locale })

  return {
    switchLocale,
  }
}
