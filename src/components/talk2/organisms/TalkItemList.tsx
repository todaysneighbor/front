'use client'

import { useState } from 'react'
import { FaArrowCircleUp } from 'react-icons/fa'

export interface TalkItem {
  StoreName: string
  ChatContents: string[]
}

export default function TalkItemList(props: { props: any }) {
  const [sendMessage, setSendMessage] = useState<string>('')
  // 키 enter 메시지 보내는 이벤트 처리
  const handleKeyPress = (e: KeyboardEvent) => {
    if (e.key == ' ' || e.code == 'Space' || e.keyCode == 32) {
      handleClick()
      const target = e.target as HTMLInputElement
      target.blur() // placehorder 안나오는 문제 해결함 : 포커스 해제
    }
  }
  const handleClick = () => {
    // 메세지 보내고
    // 지우기
    // setSendMessage('')
  }
  return (
    <div>
      <div id="talkHeader">상점 이름 Link</div>
      <div>
        채팅 리스트
        <div>스토어 이름</div>
        <div>날짜</div>
        <div>채팅 시작</div>
        <form className="relative p-2">
          <input
            type="text"
            className=" w-full h-[50px] rounded-full bg-hover-gray focus:outline-none px-5 pe-12 overflow-hidden"
            placeholder="메시지를 입력하세요."
            onChange={(e) => setSendMessage(e.target.value)}
            onKeyDown={(e) => handleKeyPress(e)}
          ></input>
          {sendMessage ? (
            <button className="absolute right-0 me-5 m-3 w-[25px] h-[25px]">
              <FaArrowCircleUp color="red" size="26" />
            </button>
          ) : null}
        </form>
      </div>
    </div>
  )
}
