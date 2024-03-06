import styled from 'styled-components'
import { useState } from 'react'
import Link from 'next/link'

import { IoIosMenu } from 'react-icons/io'
import { IoMenu } from 'react-icons/io5'

const StyledMenuButton = styled.div`
  width: 1024px;
  height: 70px;
  display: flex;
  align-items: center;
`

const IconContainer = styled.div`
  margin-right: 20px;
`

const StyledLink = styled(Link)`
  font-weight: bold;
`
const StyledIcon = styled.div`
  font-size: 20px;
  height: 16px;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    cursor: pointer;
  }
`

export default function MenuButton() {
  const [isHovered, setIsHovered] = useState<boolean>(false)

  return (
    <StyledMenuButton>
      <IconContainer>
        <StyledIcon
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {isHovered ? <IoIosMenu /> : <IoMenu />}
        </StyledIcon>
      </IconContainer>
      <StyledLink href="https://seller.bunjang.co.kr/intro">
        <b>번개장터 판매자센터</b>
      </StyledLink>
    </StyledMenuButton>
  )
}
