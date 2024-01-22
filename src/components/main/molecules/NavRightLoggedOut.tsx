'use client'

import useModalStore from "@/zustand/LogInModalStore"

// 로그아웃 일 때의 컴포넌트
export default function NavRightLoggedOut () {
    // 로그아웃일 때 로그인 모달 창 오픈 버튼이 되어줘야 한다
    const { openModal } = useModalStore();

    return (
        <div className="flex items-center">
            <div className="text-[13px] font-[#666666] px-[15px]" onClick={openModal}>로그인/회원가입</div>
            <div className="text-[13px] font-[#666666] px-[15px]" onClick={openModal}>내상점</div>
        </div>
    )
}