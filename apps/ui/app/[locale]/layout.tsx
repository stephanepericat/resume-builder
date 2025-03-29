import type { ReactNode } from 'react'
import type { Metadata } from 'next'
import { NextIntlClientProvider } from 'next-intl'
import { ThemeProvider } from 'next-themes'
import { Inter, Oswald } from 'next/font/google'
import '../globals.css'

const fontSans = Inter({
  variable: '--font-sans',
  subsets: ['latin'],
})

const fontTitle = Oswald({
  variable: '--font-title',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'Stephane P. Pericat',
  description: 'Experienced software engineer.',
}

export default async function LocaleLayout({
  children,
  params,
}: Readonly<{
  children: ReactNode
  params: Promise<{ locale: string }>
}>) {
  const { locale } = await params

  return (
    <html lang={locale} suppressHydrationWarning>
      <body
        className={`${fontSans.variable} ${fontTitle.variable} antialiased font-sans`}
      >
        <ThemeProvider attribute="class">
          {/* @ts-expect-error next-intl bug */}
          <NextIntlClientProvider>{children}</NextIntlClientProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
