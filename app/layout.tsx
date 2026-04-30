import type { Metadata } from 'next'
import { Geist } from 'next/font/google'
import './globals.css'

const _geist = Geist({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'Numex AI - Your Trusted Financial Advisor',
  description: 'Secure, private financial management with Numex AI. Keep your expenses confidential while getting expert financial guidance.',
  keywords: 'financial advisor, expense management, AI finance, budget planner, privacy-focused',
  openGraph: {
    title: 'Numex AI - Your Trusted Financial Advisor',
    description: 'Secure, private financial management with Numex AI.',
    type: 'website',
  },
  twitter: {
    title: 'Numex AI - Your Trusted Financial Advisor',
    description: 'Secure, private financial management with Numex AI.',
  },
  authors: [{ name: "Dasturchioka | Sardor Aminov", url: "https://dasturchioka.uz" }]
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="apple-mobile-web-app-title" content="Numex AI" />
      </head>
      <body style={{ fontFamily: _geist.style.fontFamily }} className="font-sans antialiased">
        {children}
      </body>
    </html>
  )
}
