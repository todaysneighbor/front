'use client'
import Image from 'next/image'
import MainBanner from '@/components/main/organisms/MainBanner'
import AppDownLoadBanner from '@/components/main/organisms/AppDownLoadBanner'
import SignUp from '@/components/main/molecules/SignUp'

import useModalStore from '@/zustand/LogInModalStore'

export default function Home() {
  // 모달창이 열릴 때 페이지의 배경 CSS 변경, 배경 선택하면 모달창 닫힘
  const { isOpen, closeModal } = useModalStore();

  return (
    <main className="flex flex-col items-center justify-between" onClick={closeModal}>

      {/* 캐러셀 배너 */}
      <MainBanner></MainBanner>

      {/* 앱 다운로드 배너 */}
      <AppDownLoadBanner></AppDownLoadBanner>
      
      {/* 로그인 모달창 */}
      {isOpen && (
        <SignUp></SignUp>
      )}
    </main>
  )
}
