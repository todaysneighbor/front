import Image from 'next/image'
import MainBanner from '@/components/main/organisms/MainBanner'
import AppDownLoadBanner from '@/components/main/organisms/AppDownLoadBanner'
import SignUp from '@/components/main/molecules/SignUp'

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between">

      {/* 캐러셀 배너 */}
      <MainBanner></MainBanner>

      {/* 앱 다운로드 배너 */}
      <AppDownLoadBanner></AppDownLoadBanner>
      
      {/* 로그인 모달창 */}
      <SignUp></SignUp>
    </main>
  )
}
