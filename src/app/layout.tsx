import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

// 모든 페이지에 필요한 번개장터 Header2
import Header2 from '@/components/main/organisms/Header2'
import Header from '@/components/main/organisms/Header'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'todaysneighbor',
  description: '오늘의 이웃: 번개장터 클론코딩',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className='flex justify-center border-b border-1 border-gray'>
          <Header/>
        </div>
        <div className='flex justify-center border-b border-1 border-gray'>
          <Header2/>
        </div>
        {children}
        </body>
    </html>
  )
}
