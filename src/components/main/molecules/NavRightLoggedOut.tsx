'use client'

import styled from 'styled-components'
import Link from 'next/link'
// import useModalStore from "@/zustand/LogInModalStore"

// 로그아웃 일 때의 컴포넌트
export default function NavRightLoggedOut() {
  // 로그아웃일 때 로그인 모달 창 오픈 버튼이 되어줘야 한다
  // const { openModal } = useModalStore();

  return (
    <Container>
      <Text>로그인/회원가입</Text>
      <Link href="/mypage">
        <Text>내상점</Text>
      </Link>
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  align-items: center;
`

const Text = styled.div`
  font-size: 13px;
  color: #666666;
  padding: 0 15px;
  cursor: pointer;
`
