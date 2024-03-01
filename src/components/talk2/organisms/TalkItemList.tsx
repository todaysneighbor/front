'use client'

import { useState } from 'react'
import Image from 'next/image'
import { FaArrowCircleUp } from 'react-icons/fa'
import TalkItem from '../moleclues/TalkItem'

export interface TalkItem {
  StoreName: string
  ChatContents: string[]
}

export default function TalkItemList(props: { props: any }) {
  const [message, setMessage] = useState<string>('')
  // 키 enter 메시지 보내는 이벤트 처리
  const handleKeyPress = (e: KeyboardEvent) => {
    if (e.key == ' ' || e.code == 'Space' || e.keyCode == 32) {
      sendMessage
      const target = e.target as HTMLInputElement
      target.blur() // placehorder 안나오는 문제 해결함 : 포커스 해제
    }
  }
  const sendMessage = (event: any) => {
    event.preventDefault

    // 메세지 보내고
    // 지우기
    // setMessage('')
  }
  return (
    <div>
      <div
        id="talkProduct"
        className="pt-2 grid-cols-8 grid justify-items-center"
      >
        <div className="w-[50px] h-[50px] relative ">
          <Image
            fill
            src="https://i.ebayimg.com/images/g/r4UAAOSwgQhgsMhT/s-l1600.jpg"
            alt="상점 프로필 이미지"
            className="rounded-sm"
          ></Image>
        </div>
        <div className="col-span-6 w-full flex flex-col text-border-gray text-[12px] justify-center">
          <span className="text-black font-bold">상품가격(원)</span>
          <span>상품이름</span>
        </div>
      </div>
      <hr className="my-2 w-full"></hr>
      <div>
        {/* 채팅 기록 */}
        <TalkItem />
        {/* 채팅 입력 */}
        <form className="relative p-2">
          <input
            type="text"
            className=" w-full h-[50px] rounded-full bg-hover-gray focus:outline-none px-5 pe-12 overflow-hidden"
            placeholder="메시지를 입력하세요."
            onChange={(e) => setMessage(e.target.value)}
            onKeyDown={(e) => handleKeyPress(e)}
          ></input>
          {message ? (
            <button
              className="absolute right-0 me-5 m-3 w-[25px] h-[25px]"
              onClick={sendMessage}
            >
              <FaArrowCircleUp color="red" size="26" />
            </button>
          ) : null}
        </form>
      </div>
    </div>
  )
}
