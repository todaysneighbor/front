'use client'

import styled from 'styled-components'
import { SignUp } from './SignUp'
import { useState } from 'react'

// 로그아웃 일 때의 컴포넌트
export default function NavRightLoggedOut() {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  return (
    <>
      <Container>
        <Text onClick={() => setIsOpen((prev) => !prev)}>로그인/회원가입</Text>
        <Text onClick={() => setIsOpen((prev) => !prev)}>내상점</Text>
      </Container>

      {/* 회원가입 모달 */}
      <SignUp isOpen={isOpen} setIsOpen={setIsOpen} />
    </>
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
