import TodayRecommendList from "../molecules/TodayRecommendList"

export default function TodayRecommend () {
    return (
        <section className="w-[1024px] mt-[56px] mb-[24px] mx-[106px]">
            <h2 className="mb-[24px] text-[24px]">오늘의 상품 추천</h2>
            <TodayRecommendList></TodayRecommendList>
        </section>
    )
}