import './globals.css'

export const metadata = {
  metadataBase: new URL('https://benextstudio.com'),
  title: {
    template: '%s | BeNext Studio',
    default: 'BeNext Studio — Sports SaaS & Digital Systems | UAE',
  },
  description: 'We build high-performance vertical SaaS products (PlaySa, Academy OS) and professional web systems for businesses in Dubai and the UAE.',
  keywords: ['PlaySa', 'Malaeb', 'Academy OS', 'Sports Facility OS', 'Dubai SaaS', 'UAE software development', 'Football Turf Booking System', 'Padel Booking Website', 'Sports Academy Software'],
  authors: [{ name: 'BeNext Studio' }],
  creator: 'BeNext Studio',
  publisher: 'BeNext Studio',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: 'BeNext Studio — Software That Makes Money',
    description: 'We build high-performance SaaS (PlaySa) and digital systems for sports facilities and businesses.',
    url: 'https://benextstudio.com',
    siteName: 'BeNext Studio',
    locale: 'en_US',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  twitter: {
    card: 'summary_large_image',
    title: 'BeNext Studio — Middle East SaaS & OS',
    description: 'Operating systems for sports facilities (PlaySa) and academies (Academy OS).',
  },
  verification: {
    google: 'your-google-verification-code',
  },
}

export const viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#000000' },
  ],
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="antialiased dark">
      <head>
        <link rel="canonical" href="https://benextstudio.com" />
      </head>
      <body className="font-body bg-[#030509] text-white min-h-screen transition-colors duration-300">
        {children}
      </body>
    </html>
  )
}
