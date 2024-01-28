import type { Metadata } from 'next'
import { ClerkProvider } from '@clerk/nextjs'

import './globals.css'
import { ThemeProvider } from '@/components/themes-provider'



export const metadata: Metadata = {
  title: 'Aion.AI',
  description: 'Your customized companion.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
      <ClerkProvider>
      <html lang="en" suppressHydrationWarning>
        <body>
          <ThemeProvider attribute='class' defaultTheme='system' enableSystem>
            
            {children}
          </ThemeProvider>
            
         
        </body>
      </html>
      </ClerkProvider>
  )
}
