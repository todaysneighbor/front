'use client'

import Image from 'next/image'
import { useState } from 'react'
import styled from 'styled-components'
import { LogOut } from './LogOut'
import React from 'react'

// 로그인 일 때의 컴포넌트
export default function NavRightLoggedIn() {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const [isHovered, setIsHovered] = useState<boolean>(false)

  // 내 상점 hover
  const [isShopHovered, setIsShopHovered] = useState<boolean>(false)

  return (
    <Container>
      <StyledText onClick={() => setIsOpen((prev) => !prev)}>
        로그아웃
      </StyledText>

      <StyledText
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        알림
        {isHovered && (
          <NotificationContainer
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <Image
              src="/alram bell.png"
              alt="빈 알림 이미지"
              width={20}
              height={23}
              className="mb-[10px]"
            ></Image>
            최근 알림이 없습니다
          </NotificationContainer>
        )}
      </StyledText>

      <ShopContainer
        onMouseEnter={() => setIsShopHovered(true)}
        onMouseLeave={() => setIsShopHovered(false)}
      >
        <StyledText>내 상점</StyledText>
        {isShopHovered && (
          <ShopSubMenu
            onMouseEnter={() => setIsShopHovered(true)}
            onMouseLeave={() => setIsShopHovered(false)}
          >
            <SubMenuItem>내 상품</SubMenuItem>
            <SubMenuItem>찜한 상품</SubMenuItem>
            <SubMenuItem>계정설정</SubMenuItem>
            <SubMenuItem>고객센터</SubMenuItem>
          </ShopSubMenu>
        )}
      </ShopContainer>
      <LogOut isOpen={isOpen} setIsOpen={setIsOpen} />
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  align-items: center;
`

const StyledText = styled.div`
  font-size: 13px;
  color: #666666;
  padding: 0 15px;
  cursor: pointer;
`

const NotificationContainer = styled.div`
  background-color: #f9f9f9;
  color: #cccccc;
  font-size: 12px;
  padding: 10px;
  position: absolute;
  top: 39px;
  width: 400px;
  height: 131px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid #888888;
`

const ShopContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
`

const ShopSubMenu = styled.div`
  position: absolute;
  top: 39px;
  background-color: #ffffff;
  width: 88px;
  height: 134px;
  border: 1px solid #888888;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`
const SubMenuItem = styled.div`
  color: #888888;
  font-size: 13px;
  margin-bottom: 10px;
  cursor: pointer;

  &:hover {
    color: #212121;
  }
`
