import './globals.css'
import { Inter } from 'next/font/google'
import Navigation from '@/components/core/Navigation'
import Footer from '@/components/core/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'next-pokemon',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} flex flex-col min-h-screen pt-5`}>
        <div className="container px-4 mb-10">
          <Navigation />

          {children}
        </div>

        <Footer />
      </body>
    </html>
  )
}