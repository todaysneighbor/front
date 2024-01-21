import Image from 'next/image'
import MainBanner from '@/components/main/organisms/MainBanner'
import AppDownLoadBanner from '@/components/main/organisms/AppDownLoadBanner'

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between">
      <MainBanner></MainBanner>
      <AppDownLoadBanner></AppDownLoadBanner>
    </main>
  )
}
