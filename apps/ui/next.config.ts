import { NextConfig } from 'next'
import createNextIntlPlugin from 'next-intl/plugin'

const nextConfig: NextConfig = {
  async headers() {
    return[{
      headers: [
        {
          key: 'X-Robots-Tag',
          value: 'noindex, nofollow',
        },
      ],
      source: '/:path*',
    }];
  }
}

const withNextIntl = createNextIntlPlugin()
export default withNextIntl(nextConfig)
