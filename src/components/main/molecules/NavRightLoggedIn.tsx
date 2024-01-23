'use client'

import Image from "next/image"
import { useState } from "react";
import useLogOutModalStore from "@/zustand/LogOutModalStore";

// 로그인 일 때의 컴포넌트
export default function NavRightLoggedIn () {
    // 로그인일 때 로그아웃 모달 창 오픈
    const { openLogOutModal } = useLogOutModalStore();

    // TODO: 알림 창 CSS
    // 알림 창 hover
    const [isHovered, setIsHovered] = useState<boolean>(false);

    // 내 상점 hover
    const [isShopHovered, setIsShopHovered] = useState<boolean>(false);

    return (
        <div className="flex items-center">
            <div className="text-[13px] font-[#666666] px-[15px] cursor-auto" onClick={openLogOutModal}>로그아웃</div>

            {/* TODO: 최근 알림 API */}
            {/* 알림 */}
            <div className="relative text-[13px] font-[#666666] px-[15px] cursor-auto" onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>알림</div>
            {isHovered && (
                <div className="bg-[#f9f9f9] text-[#cccccc] text-[12px] p-10 absolute top-8 w-[400px] h-[131px] flex flex-col items-center z-20 right-10 border" onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
                <Image src="/alram bell.png" alt="빈 알림 이미지" width={20} height={23} className="mb-[10px]"></Image>
                최근 알림이 없습니다
                </div>
            )}

            {/* TODO: 내 상점 링크 연결(내 상점 번호 필요) */}
            <div className="relative text-[13px] font-[#666666] px-[15px] cursor-auto" onMouseEnter={() => setIsShopHovered(true)} onMouseLeave={() => setIsShopHovered(false)}>내 상점</div>
            {isShopHovered && (
                <div className="absolute top-8 bg-white w-[88px] h-[134px] border border-1 flex flex-col items-center justify-center right-0 z-20" onMouseEnter={() => setIsShopHovered(true)} onMouseLeave={() => setIsShopHovered(false)}>
                    <div className="text-[#888888] text-[13px] mb-[10px] hover:text-[#212121]">내 상품</div>
                    <div className="text-[#888888] text-[13px] mb-[10px] hover:text-[#212121]">찜한 상품</div>
                    <div className="text-[#888888] text-[13px] mb-[10px] hover:text-[#212121]">계정설정</div>
                    <div className="text-[#888888] text-[13px] mb-[10px] hover:text-[#212121]">고객센터</div>
                </div>
            )}
        </div>
    )
}