import Image from 'next/image'
import MainBanner from '@/components/main/organisms/MainBanner'
import AppDownLoadBanner from '@/components/main/organisms/AppDownLoadBanner'
import SignUp from '@/components/main/molecules/SignUp'

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between">
      <MainBanner></MainBanner>
      <AppDownLoadBanner></AppDownLoadBanner>
      <SignUp></SignUp>
    </main>
  )
}
