'use client'

import useLogOutModalStore from "@/zustand/LogOutModalStore"

export default function LogOut () {
    const { isLogOutOpen, closeLogOutModal } = useLogOutModalStore();
    return (
        <>
            {isLogOutOpen && (
                <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 shadow-xl">
                    <div className="bg-white rounded w-[296px] h-[182px] p-[24px] flex flex-col justify-center items-center">
                        <div className="font-bold text-[18px] mb-4">로그아웃</div>
                        <div className="text-[15px] mb-6">로그아웃 하시겠습니까?</div>
                        <div className="flex">
                            <button className="flex items-center justify-center bg-[#f4f4fa] text-[#72707f] font-4 w-[120px] h-12" onClick={closeLogOutModal}>취소</button>
                            {/* TODO: API 확인 연결 후 닫기로 기능 변경 */}
                            <button className="flex items-center justify-center bg-[#ff5058] text-white w-[120px] h-12 ms-2" onClick={closeLogOutModal}>확인</button>
                        </div>
                        </div>
                </div>
            )}
        </>
    )
}