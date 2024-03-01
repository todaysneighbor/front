import TodayRecommendItem from '@/components/main/atoms/TodayRecommendItem'
import { TodayRecommendItemProps } from '@/components/main/atoms/TodayRecommendItem'

export default function TodayRecommendList() {
  // TODO: React Query, 무한 스크롤
  const itemList = [
    {
      itemId: 1,
      imgSrc:
        'https://media.bunjang.co.kr/product/245580000_1_1706012679_w292.jpg',
      itemPrice: 4500,
      itemDate: new Date(2024, 0, 26, 5),
      itemName: '포챠코 인형',
    },
    {
      itemId: 2,
      imgSrc:
        'https://media.bunjang.co.kr/product/245580000_1_1706012679_w292.jpg',
      itemPrice: 4500,
      itemDate: new Date(2024, 0, 25, 5),
      itemName: '포챠코 인형 긴 제목 버전 엄청 긴 제목입니다',
    },
    {
      itemId: 3,
      imgSrc:
        'https://media.bunjang.co.kr/product/245580000_1_1706012679_w292.jpg',
      itemPrice: 4500,
      itemDate: new Date(2024, 0, 25, 5),
      itemName: '포챠코 인형 긴 제목 버전 엄청 긴 제목입니다',
    },
    {
      itemId: 4,
      imgSrc:
        'https://media.bunjang.co.kr/product/245580000_1_1706012679_w292.jpg',
      itemPrice: 4500,
      itemDate: new Date(2024, 0, 25, 5),
      itemName: '포챠코 인형',
    },
    {
      itemId: 5,
      imgSrc:
        'https://media.bunjang.co.kr/product/245580000_1_1706012679_w292.jpg',
      itemPrice: 4500,
      itemDate: new Date(2024, 0, 25, 5),
      itemName: '포챠코 인형',
    },
    {
      itemId: 6,
      imgSrc:
        'https://media.bunjang.co.kr/product/245580000_1_1706012679_w292.jpg',
      itemPrice: 4500,
      itemDate: new Date(2024, 0, 25, 5),
      itemName: '포챠코 인형',
    },
    {
      itemId: 7,
      imgSrc:
        'https://media.bunjang.co.kr/product/249273196_1_1704971377_w292.jpg',
      itemPrice: 4500,
      itemDate: new Date(2024, 1, 28, 5),
      itemName: '아디다스 가젤',
    },
  ]
  return (
    <div className="flex flex-wrap">
      {itemList &&
        itemList.map((item: TodayRecommendItemProps) => (
          <TodayRecommendItem
            itemId={item.itemId}
            itemName={item.itemName}
            itemPrice={item.itemPrice}
            itemDate={item.itemDate}
            imgSrc={item.imgSrc}
          />
        ))}
    </div>
  )
}
