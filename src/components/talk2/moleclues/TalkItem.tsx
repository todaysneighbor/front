import Image from 'next/image'
import { CiShop } from 'react-icons/ci'

import { format } from 'date-fns'
import { ko } from 'date-fns/locale'

export default function TalkItem() {
  function findDate(year: string, month: string, day: string) {
    const result = format(
      new (Date as any)(year, month, day),
      'yyyy년 MM월 dd일',
    )
    // 주의 : month 인덱스 0부터 시작함
    return result
  }

  return (
    <div>
      <div className="grid place-items-center content-center my-2 p-3">
        {/* 상점소개 */}
        <div className="w-[100px] h-[100px] relative cursor-pointer ">
          {/* TODO: 링크 추가해야함 */}
          <CiShop
            className="rounded-full inline-block bg-gray-300 w-full h-full p-3"
            color="white"
          />

          {/* 이미지 주소가 있다면
          <Image
            fill
            src="{'이미지 주소'}"
            alt="상점 프로필 이미지"
            className="rounded-full"
          ></Image> */}
        </div>
        <div id="storeName" className="font-bold m-2">
          상점이름
        </div>
        {/* 채팅 시작 날짜 */}
        <div className="grid grid-cols-5 w-full h-[20px] text-[10px] text-border-gray items-center">
          <hr className="w-full col-span-2 bg-border-gray" />
          <span className="text-center"> {findDate('2023', '1', '11')}</span>
          <hr className="w-full col-span-2 bg-border-gray" />
        </div>
      </div>
      {/* 채팅 말풍선 시작 */}
    </div>
  )
}
