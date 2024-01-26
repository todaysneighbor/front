'use client'
import Image from 'next/image'

// 컴포넌트
import MainBanner from '@/components/main/organisms/MainBanner'
import AppDownLoadBanner from '@/components/main/organisms/AppDownLoadBanner'
import SignUp from '@/components/main/molecules/SignUp'
import LogOut from '@/components/main/molecules/LogOut'
import TodayRecommend from '@/components/main/organisms/TodayRecommend'

// 상태관리
import useModalStore from '@/zustand/LogInModalStore'
import useLogOutModalStore from '@/zustand/LogOutModalStore'

export default function Home() {
  // 모달창이 열릴 때 페이지의 배경 CSS 변경, 배경 선택하면 모달창 닫힘
  const { isOpen, closeModal } = useModalStore();
  const { isLogOutOpen, closeLogOutModal } = useLogOutModalStore();

  return (
    <main className="flex flex-col items-center justify-between" onClick={closeModal}>

      {/* 캐러셀 배너 */}
      <MainBanner></MainBanner>

      {/* 앱 다운로드 배너 */}
      <AppDownLoadBanner></AppDownLoadBanner>

      {/* 오늘의 상품 추천 */}
      <TodayRecommend></TodayRecommend>
      
      {/* 로그인 모달창 */}
      {isOpen && (
        <SignUp></SignUp>
      )}

      {/* 로그아웃 모달창 */}
      {isLogOutOpen && (
        <LogOut></LogOut>
      )}
    </main>
  )
}
