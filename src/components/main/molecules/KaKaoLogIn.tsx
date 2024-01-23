import Image from "next/image"

export default function KaKaoLonIn () {
    return (
        <div className="flex items-center bg-white w-[280px] h-[38px] rounded-[4px] justify-center mb-[70px] hover:bg-[#3b1e1e] hover:text-white">
            <Image src='/kakao logo.png' alt="카카오 로그인 로고" width={24} height={24} className="hover: bg-white rounded-lg"></Image>
            <div className="font-[14px] w-[204px] flex justify-center">카카오로 이용하기</div>
        </div>
    )
}