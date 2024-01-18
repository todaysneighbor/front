import Image from 'next/image'
import MainBanner from '@/components/main/MainBanner'

export default function Home() {
  return (
    <main className="items-center justify-between">
      <MainBanner></MainBanner>
    </main>
  )
}
