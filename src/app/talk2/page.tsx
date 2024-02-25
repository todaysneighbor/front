import TalkItemList from '@/components/talk2/organisms/TalkItemList'
import TalkRoomList from '@/components/talk2/organisms/TalkRoomList'

export default function NewProduct() {
  return (
    <div className="bg-red w-full h-full">
      <div className="bg-white w-[1024px] pt-[56px] mb-[24px] mx-auto grid grid-cols-2">
        <TalkRoomList /> {/* 채팅방 영역 */}
        <TalkItemList /> {/* 채팅 영역 */}
      </div>
    </div>
  )
}
