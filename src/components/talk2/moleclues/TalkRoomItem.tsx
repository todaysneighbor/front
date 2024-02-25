import Image from 'next/image'
import { TalkRoomType } from '../organisms/TalkRoomList'

interface TalkRoomItemProps {
  props: TalkRoomType
}

export default function TalkRoomItem({ props }: TalkRoomItemProps) {
  // 구조 분해(destructuring) 문법
  const { ProfileImageUrl, ProductImageUrl, StoreName, LastTalkLine, Date } =
    props

  return (
    <div>
      <div className="grid place-items-center grid-cols-8 my-2 p-3 hover:bg-hover-gray cursor-pointer font-bold">
        <div className="w-[50px] h-[50px] relative">
          <Image
            fill
            src={ProfileImageUrl}
            alt="상점 프로필 이미지"
            className="rounded-full"
          ></Image>
        </div>
        <div className="col-span-6 ps-2 pe-auto w-full h-full">
          <div className="">{StoreName}</div>
          <div
            style={{ gridTemplateColumns: '3fr 1fr' }}
            className="overflow-hidden font-semibold text-tx-gray text-[12px] w-full grid"
          >
            {/* truncate: 줄바꿈 방지, 오버플로우 히든, ... 처리 */}
            <span className="truncate">{LastTalkLine}</span>
            <span> ・ {Date}</span>
          </div>
        </div>
        <div className="w-[50px] h-[50px] relative">
          <Image
            fill
            src={ProductImageUrl}
            alt="상점 프로필 이미지"
            className="rounded-sm"
          ></Image>
        </div>
      </div>
    </div>
  )
}
