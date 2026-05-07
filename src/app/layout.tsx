import type { Metadata } from 'next'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Len Dogg Hair Studio | No Cap Cuts',
  description: 'Fresh fades & fad cuts. Hit different, stay dripped. Book your cut with Len Dogg.',
  keywords: ['hair studio', 'fades', 'cuts', 'barber', 'hip hop', 'len dogg'],
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
