import dayjs from 'dayjs'
import LocalizedFormat from 'dayjs/plugin/localizedFormat'
import RelativeTime from 'dayjs/plugin/relativeTime'
import UpdateLocale from 'dayjs/plugin/updateLocale'

// you need to import locale files for languages you want to support
import 'dayjs/locale/fr'

dayjs.extend(LocalizedFormat)
dayjs.extend(RelativeTime)
dayjs.extend(UpdateLocale)

dayjs.updateLocale('en', {
  relativeTime: {
    future: 'in %s',
    past: '%s ago',
    s: '%ds',
    m: '1m',
    mm: '%dm',
    h: '1h',
    hh: '%dh',
    d: '1d',
    dd: '%dd',
    M: '1m',
    MM: '%dm',
    y: '1y',
    yy: '%dy',
  },
})

dayjs.updateLocale('fr', {
  relativeTime: {
    future: 'in %s',
    past: '%s',
    s: '%ds',
    m: '1m',
    mm: '%dm',
    h: '1h',
    hh: '%dh',
    d: '1j',
    dd: '%dj',
    M: '1m',
    MM: '%dm',
    y: '1an',
    yy: '%dans',
  },
})

export const useDate = (locale?: string | null) => {
  const DEFAULT_FORMAT = 'MMMM YYYY'
  const LOCALIZED_DATE_FORMAT = 'LL'
  const LOCALIZED_SHORT = 'll'

  const formatDate = (rawDate: Date | string, format: string) =>
    dayjs(rawDate).format(format)

  const getTimeFromNow = (rawDate: Date | string) =>
    dayjs(rawDate).fromNow(true)

  const setDateLocale = (newLocale: string): void => {
    dayjs.locale(newLocale)
  }

  if (locale) {
    setDateLocale(locale)
  }

  return {
    DEFAULT_FORMAT,
    formatDate,
    getTimeFromNow,
    LOCALIZED_DATE_FORMAT,
    LOCALIZED_SHORT,
    setDateLocale,
  }
}
