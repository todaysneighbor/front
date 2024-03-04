import Image from 'next/image'

export default function SearchInput() {
  return (
    <div className="border-2 border-solid border-red">
      <div
        className="flex px-[15px] items-center"
        style={{ width: '456px', height: '36px' }}
      >
        <input
          type="text"
          placeholder="상품명, 지역명, @상점명 입력"
          maxLength={40}
          className="bg-white outline-none text-dark"
          style={{ width: '410px', height: '16px' }}
        />
        <Image
          src="/search input.png"
          alt="검색 버튼 아이콘"
          width={16}
          height={16}
        />
      </div>
    </div>
  )
}
