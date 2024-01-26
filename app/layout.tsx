import type { Metadata } from 'next'
import { ClerkProvider } from '@clerk/nextjs'

import './globals.css'



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
          
            
            {children}
            
         
        </body>
      </html>
      </ClerkProvider>
  )
}
