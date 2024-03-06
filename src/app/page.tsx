import MainBanner from '@/components/main/organisms/MainBanner'
import AppDownLoadBanner from '@/components/main/organisms/AppDownLoadBanner'
import TodayRecommend from '@/components/main/organisms/TodayRecommend'

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between">
      {/* 캐러셀 배너 */}
      <MainBanner />

      {/* 앱 다운로드 배너 */}
      <AppDownLoadBanner />

      {/* 오늘의 상품 추천 */}
      <TodayRecommend />
    </main>
  )
}
