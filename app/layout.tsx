import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import NextAuthSessionProvider from './providers/sessionProviders'
import {AppWrapper} from "@/app/utils/context"
const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Notes APP',
  description: 'Made by Dheeraj',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NextAuthSessionProvider>
          <AppWrapper>
          {children}
          </AppWrapper>
        </NextAuthSessionProvider>
      </body>
    </html>
  )
}
