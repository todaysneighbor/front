import Image from 'next/image'
import styled from 'styled-components'

export default function KaKaoLonIn() {
  return (
    <StyledKaKaoLogin>
      <Image
        src="/kakao logo.png"
        alt="카카오 로그인 로고"
        width={24}
        height={24}
      />
      <Text>카카오로 이용하기</Text>
    </StyledKaKaoLogin>
  )
}

const StyledKaKaoLogin = styled.div`
  display: flex;
  items: center;
  background-color: white;
  width: 280px;
  height: 38px;
  border-radius: 4px;
  justify-content: center;
  margin-bottom: 70px;
  cursor: pointer;
  align-items: center;

  &:hover {
    background-color: #3b1e1e;
    color: white;
  }
`


const Text = styled.div`
  font-size: 14px;
  width: 204px;
  display: flex;
  justify-content: center;
`
