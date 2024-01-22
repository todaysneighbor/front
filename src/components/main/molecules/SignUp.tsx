'use client'

import Image from "next/image";
import KaKaoLonIn from "./KaKaoLogIn";
import { useState } from "react";

// zustand 상태 관리
import useModalStore from "@/zustand/LogInModalStore";

const appDownloadLogoUrl: string = 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDE2IDE2IiBmaWxsPSJub25lIj4KICAgIDxtYXNrIGlkPSJtYXNrMF8yMjU3XzYxIiBzdHlsZT0ibWFzay10eXBlOmx1bWluYW5jZSIgbWFza1VuaXRzPSJ1c2VyU3BhY2VPblVzZSIgeD0iMCIgeT0iMCIKICAgICAgICB3aWR0aD0iMTYiIGhlaWdodD0iMTYiPgogICAgICAgIDxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIgogICAgICAgICAgICBkPSJNMTYgMTEuMDE3NkMxNiAxMS4yMDc4IDE2IDExLjM5OCAxNS45OTg5IDExLjU4ODVDMTUuOTk4IDExLjc0ODcgMTUuOTk2MSAxMS45MDg4IDE1Ljk5MTYgMTIuMDY5QzE1Ljk4MjIgMTIuNDE3NyAxNS45NjEyIDEyLjc3IDE1Ljg5ODUgMTMuMTE0OUMxNS44MzQ5IDEzLjQ2NTIgMTUuNzMxMiAxMy43OTE0IDE1LjU2NjkgMTQuMTA5OEMxNS40MDYgMTQuNDIyNCAxNS4xOTU4IDE0LjcwODUgMTQuOTQ0OCAxNC45NTY2QzE0LjY5MzkgMTUuMjA0NyAxNC40MDQxIDE1LjQxMjggMTQuMDg3OSAxNS41NzE5QzEzLjc2NjEgMTUuNzM0IDEzLjQzNjUgMTUuODM2OCAxMy4wODIxIDE1Ljg5OTdDMTIuNzMzIDE1Ljk2MTcgMTIuMzc2OSAxNS45ODI0IDEyLjAyMzggMTUuOTkxN0MxMS4zNDUxIDE2IDExLjE1MjcgMTYgMTAuOTYwMyAxNkg3LjI1MDE1SDUuMDM5OTdDNC4zMDA0NiAxNS45OTc4IDQuMTM4NDQgMTUuOTk2MSAzLjk3NjQzIDE1Ljk5MTdDMy42MjM0IDE1Ljk4MjQgMy4yNjczMSAxNS45NjE3IDIuOTE4MTkgMTUuODk5N0MyLjU2Mzc3IDE1LjgzNjggMi4yMzQxNiAxNS43MzQgMS45MTIzNyAxNS41NzE5QzEuNTk1ODcgMTUuNDEyOCAxLjMwNjQyIDE1LjIwNDcgMS4wNTU0NiAxNC45NTY2QzAuODA0NDg4IDE0LjcwODUgMC41OTQyMzQgMTQuNDIyNCAwLjQzMzA1NyAxNC4xMDk4QzAuMjY5MDkyIDEzLjc5MTQgMC4xNjUzNTkgMTMuNDY1MiAwLjEwMTUwMiAxMy4xMTQ5QzAuMDM4NzYwNCAxMi43NyAwLjAxODEyNTQgMTIuNDE3NyAwLjAwODY0NDQxIDEyLjA2OUMwLjAwNDE4Mjc4IDExLjkwODggMC4wMDIyMzA4MiAxMS43NDg3IDAuMDAxMzk0MjYgMTEuNTg4NUMwIDExLjM5OCAwIDExLjIwNzggMCAxMS4wMTc2VjguODMyNjZWNy4xNjczNFY0Ljk4MjRDMCA0Ljc5MjE5IDAgNC42MDE3MSAwLjAwMTM5NDI2IDQuNDExNzdDMC4wMDIyMzA4MiA0LjI1MTMzIDAuMDA0MTgyNzggNC4wOTExNyAwLjAwODY0NDQxIDMuOTMxMDFDMC4wMTgxMjU0IDMuNTgyMDEgMC4wMzg3NjA0IDMuMjI5OTkgMC4xMDE1MDIgMi44ODQ4NUMwLjE2NTM1OSAyLjUzNDQ4IDAuMjY5MDkyIDIuMjA4NjQgMC40MzMwNTcgMS44OTAyNUMwLjU5NDIzNCAxLjU3NzM3IDAuODA0NDg4IDEuMjkxMjIgMS4wNTU0NiAxLjA0MzRDMS4zMDY0MiAwLjc5NTAyMyAxLjU5NTg3IDAuNTg3MTcgMS45MTIzNyAwLjQyODExQzIuMjM0MTYgMC4yNjYwMTggMi41NjM3NyAwLjE2MzE5NSAyLjkxODE5IDAuMTAwMzQzQzMuMjY3MzEgMC4wMzgzMTc3IDMuNjIzNCAwLjAxNzY0MjcgMy45NzY0MyAwLjAwODI3QzQuNjU1MTYgMCA0Ljg0NzU2IDAgNS4wMzk5NyAwSDcuMjUwMTVIMTAuODAyNUw4Ljc0OTg1IDAuMDAwODI3TDEwLjk2MDMgMEMxMS42OTk1IDAuMDAyMjA1MzMgMTEuODYxNiAwLjAwMzg1OTMzIDEyLjAyMzggMC4wMDgyN0MxMi4zNzY5IDAuMDE3NjQyNyAxMi43MzMgMC4wMzgzMTc3IDEzLjA4MjEgMC4xMDAzNDNDMTMuNDM2NSAwLjE2MzE5NSAxMy43NjYxIDAuMjY2MDE4IDE0LjA4NzkgMC40MjgxMUMxNC40MDQxIDAuNTg3MTcgMTQuNjkzOSAwLjc5NTAyMyAxNC45NDQ4IDEuMDQzNEMxNS4xOTU4IDEuMjkxMjIgMTUuNDA2IDEuNTc3MzcgMTUuNTY2OSAxLjg5MDI1QzE1LjczMTIgMi4yMDg2NCAxNS44MzQ5IDIuNTM0NDggMTUuODk4NSAyLjg4NDg1QzE1Ljk2MTIgMy4yMjk5OSAxNS45ODIyIDMuNTgyMDEgMTUuOTkxNiAzLjkzMTAxQzE1Ljk5NjEgNC4wOTExNyAxNS45OTggNC4yNTEzMyAxNS45OTg5IDQuNDExNzdDMTYgNC42MDE3MSAxNiA0Ljc5MjE5IDE2IDQuOTgyNFY3LjE2NzM0VjguODMyNjZWMTEuMDE3NloiCiAgICAgICAgICAgIGZpbGw9IndoaXRlIiAvPgogICAgPC9tYXNrPgogICAgPGcgbWFzaz0idXJsKCNtYXNrMF8yMjU3XzYxKSI+CiAgICAgICAgPHJlY3Qgd2lkdGg9IjE2IiBoZWlnaHQ9IjE2IiBmaWxsPSIjRUYwRTBFIiAvPgogICAgICAgIDxwYXRoCiAgICAgICAgICAgIGQ9Ik0xMi4yNzk3IDcuNTY0NTFIOS4xMDQzNUw5LjYxOTM1IDMuMDc0NTRDOS42MjYzNSAzLjAxMjUgOS41NTIxOCAyLjk3NTY0IDkuNTA2OTMgMy4wMTg1NkwzLjY4NzQ2IDguNTgyODZDMy42NDM2MSA4LjYyNDg0IDMuNjczOTMgOC42OTg1NSAzLjczNDExIDguNjk4MDhMNi44MzAyMSA4LjY2NDk2TDYuMzg2NTcgMTMuMjU5OUM2LjM4MDUxIDEzLjMyMTkgNi40NTQ2OCAxMy4zNTc0IDYuNDk5NDYgMTMuMzE0NUwxMi4zMjU5IDcuNjgwMkMxMi4zNjkzIDcuNjM4NjggMTIuMzM5NSA3LjU2NTQ0IDEyLjI3OTcgNy41NjU0NFY3LjU2NDUxWiIKICAgICAgICAgICAgZmlsbD0iYmxhY2siIC8+CiAgICA8L2c+Cjwvc3ZnPg==';

export default function SignUp () {
    // 모달을 여는 여부와, 닫는 버튼만 필요하다
    const { isOpen, closeModal } = useModalStore();

    return (
        <>
            {isOpen && (
                    <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                        <div className="w-[460px] h-[366px] pt-[40px] bg-[#F7F7F7] rounded-[10px] relative"> 
                            
                            {/* 모달 닫기 버튼 */}
                            <button onClick={closeModal}>
                                <Image 
                                    src="/modal cancel.png" alt="로그인 모달 닫기 버튼 아이콘" width={24} height={24} 
                                    className="absolute right-[20px] top-[20px]"
                                ></Image>
                            </button>                                     
                            <div className="flex flex-col items-center">
                                <Image src={appDownloadLogoUrl} alt="번개장터 앱 로고" width={30} height={34} className="mx-[195px] mb-[10px]"></Image>
                                <div className="font-bold text-[20px] mb-[15px]">번개장터로 중고거래 시작하기</div>
                                <div className="text-[14px] mb-[35px]">간편하게 가입하고 상품을 확인하세요</div>
                                
                                {/* 로그인 버튼 */}
                                <KaKaoLonIn></KaKaoLonIn>

                                {/* 수직선 */}
                                <div className="border border-1 w-4/5"></div>

                                {/* 안내사항 */}
                                <div className="pt-[16px] text-[#999999] text-xs">
                                    <div> 
                                        도움이 필요하면 
                                        {/* 이메일 클릭하면 이메일 바로 써지기 기능 구현 */}
                                        <span> 이메일 </span>
                                        또는 고객센터
                                        <b>1670-2910</b>
                                        로 문의 부탁드립니다.
                                    </div>
                                    <div>
                                        고객센터 운영시간: 09~18시 (점심시간 12~13시, 주말/공휴일 제외)
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            }
        </>
    )
}