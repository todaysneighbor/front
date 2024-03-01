'use client'

import TalkItemList from '@/components/talk2/organisms/TalkItemList'
import TalkRoomList from '@/components/talk2/organisms/TalkRoomList'
import { useEffect, useState } from 'react'

export default function NewProduct() {
  // 데이터 모양 정해진 것 없어서  일단 타입 any
  const [talkContent, setTalkContent] = useState<any>()

  useEffect(() => {})

  return (
    <div className="w-full h-full bg-bg-gray">
      <div className="w-[1024px] mb-[24px] mx-auto grid grid-cols-2 gap">
        <TalkRoomList props={setTalkContent} /> {/* 채팅방 영역 */}
        <TalkItemList props={talkContent} /> {/* 채팅 영역 */}
      </div>
    </div>
  )
}
