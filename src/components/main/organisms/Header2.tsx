'use client'

import styled from 'styled-components'
import Link from 'next/link'
import Image from 'next/image'
import SearchInput from '../molecules/SearchInput'
import CategoryTap from '../molecules/MenuButton'

interface ImageButtonProps {
  src: string
  alt: string
  width: number
  height: number
  title: string
  link: string
}

const StyledLink = styled.a`
  position: relative;
  display: inline-block;

  &:after {
    content: '';
    border: 1px solid #888;
    height: 20px;
    position: absolute;
    border-left: none;
    left: 20px;
    top: 5px;
  }
`

const ImageButtonContainer = styled.div`
  display: flex;
  align-items: center;
  margin-left: 30px;
`

const StyledImage = styled(Image)`
  margin-right: 5px;
`

const TitleText = styled.div`
  font-size: 14px;
`

export function ImageButton({
  src,
  alt,
  width,
  height,
  title,
  link,
}: ImageButtonProps) {
  return (
    <StyledLink href={link}>
      <ImageButtonContainer>
        <StyledImage
          src={src}
          alt={alt}
          width={width}
          height={height}
          layout="fixed"
        />
        <TitleText>{title}</TitleText>
      </ImageButtonContainer>
    </StyledLink>
  )
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  width: 1236px;
  height: 146px;
  padding-top: 35px;
`

const InnerContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 1024px;
  height: 40px;
`

const LogoImage = styled.img`
  margin-right: 100px;
`

const ActionButtonsContainer = styled.div`
  display: flex;
  align-items: center;
  width: 328px;
  height: 26px;
`

export default function Header2() {
  // 사용자의 상점 번호 or 아이디
  // const myShopId: number = 1

  // 번개장터 로고
  const logoUrl: string =
    'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTM2IiBoZWlnaHQ9IjQwIiB2aWV3Qm94PSIwIDAgMTM2IDQwIiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgogICAgPGcgaWQ9InouVEJEIC8gQlgtUmVmcmVzaCAvIGljX2xvZ290eXBlLXB3Ij4KICAgICAgICA8cmVjdCB3aWR0aD0iMTM2IiBoZWlnaHQ9IjQwIiBmaWxsPSJ3aGl0ZSIgLz4KICAgICAgICA8ZyBpZD0iTG9nb3R5cGUgLyBLUiAmIzIzNDsmIzE4MTsmIzE3MzsmIzIzNTsmIzE3MjsmIzE4NDsiPgogICAgICAgICAgICA8cGF0aCBpZD0iVmVjdG9yIgogICAgICAgICAgICAgICAgZD0iTTI1LjM5ODEgMTguNDQ0NUgxNi40MDMyTDE3Ljg2MiA1LjcyNThDMTcuODgxOSA1LjU1MDA1IDE3LjY3MTcgNS40NDU2NiAxNy41NDM2IDUuNTY3MjNMMS4wNTg4NCAyMS4zMjkxQzAuOTM0NjMgMjEuNDQ4MSAxLjAyMDUyIDIxLjY1NjggMS4xOTA5OSAyMS42NTU1TDkuOTYxMjYgMjEuNTYxN0w4LjcwNDU5IDM0LjU3NzdDOC42ODc0MSAzNC43NTM0IDguODk3NTEgMzQuODUzOSA5LjAyNDM3IDM0LjczMjNMMjUuNTI4OSAxOC43NzIyQzI1LjY1MTggMTguNjU0NiAyNS41NjcyIDE4LjQ0NzEgMjUuMzk4MSAxOC40NDcxVjE4LjQ0NDVaIgogICAgICAgICAgICAgICAgZmlsbD0iYmxhY2siIC8+CiAgICAgICAgICAgIDxwYXRoIGlkPSJWZWN0b3JfMiIKICAgICAgICAgICAgICAgIGQ9Ik00OC40MjA4IDI0Ljc4NzRWMTYuODExM0g0NS4xMzU3VjIxLjYxNzRDNDUuMTM1NyAyMS43MDQ2IDQ1LjA2NyAyMS43NzU5IDQ0Ljk3OTggMjEuNzgxMkwzMC43NjUzIDIyLjQ3MUMzMC42NzE1IDIyLjQ3NSAzMC41OTM1IDIyLjQwMSAzMC41OTM1IDIyLjMwNzFWNy4yMzEwNUMzMC41OTM1IDcuMTQxMTkgMzAuNjY2MiA3LjA2NzE5IDMwLjc1NzQgNy4wNjcxOUgzNS4zMDgzQzM1LjM5ODIgNy4wNjcxOSAzNS40NzIyIDcuMTM5ODcgMzUuNDcyMiA3LjIzMTA1VjEwLjg4ODdINDAuMjU3MVY3LjIzMTA1QzQwLjI1NzEgNy4xNDExOSA0MC4zMjk3IDcuMDY3MTkgNDAuNDIwOSA3LjA2NzE5SDQ0Ljk3MTlDNDUuMDYxNyA3LjA2NzE5IDQ1LjEzNTcgNy4xMzk4NyA0NS4xMzU3IDcuMjMxMDVWMTIuMjI3M0g0OC40MjA4VjYuOTU0ODdDNDguNDIwOCA2Ljg2NTAyIDQ4LjQ5MzUgNi43OTEwMiA0OC41ODQ3IDYuNzkxMDJINTMuMTM1NkM1My4yMjU1IDYuNzkxMDIgNTMuMjk5NSA2Ljg2MzY5IDUzLjI5OTUgNi45NTQ4N1YyNC43ODc0QzUzLjI5OTUgMjQuODc3MyA1My4yMjY4IDI0Ljk1MTMgNTMuMTM1NiAyNC45NTEzSDQ4LjU4NDdDNDguNDk0OCAyNC45NTEzIDQ4LjQyMDggMjQuODc4NiA0OC40MjA4IDI0Ljc4NzRaTTM1LjQ3MzUgMTcuNzk4NEw0MC4yNTg0IDE3LjY5NjdWMTQuNzcxMUgzNS40NzM1VjE3Ljc5ODRaIgogICAgICAgICAgICAgICAgZmlsbD0iYmxhY2siIC8+CiAgICAgICAgICAgIDxwYXRoIGlkPSJWZWN0b3JfMyIKICAgICAgICAgICAgICAgIGQ9Ik0zMi44NTQ4IDI0LjgwMDhIMzcuNDYyNkMzNy41NTI0IDI0LjgwMDggMzcuNjI2NCAyNC44NzM1IDM3LjYyNjQgMjQuOTY0NlYyNy45OTQ3TDUzLjEyOCAyNy4zMDQ5QzUzLjIyMDUgMjcuMzAwOSA1My4yOTg1IDI3LjM3NDkgNTMuMjk4NSAyNy40Njg3VjMxLjgzMzRDNTMuMjk4NSAzMS45MjE5IDUzLjIyODUgMzEuOTkzMyA1My4xNDEyIDMxLjk5NzJMMzIuODYxNCAzMi42ODU3QzMyLjc2ODkgMzIuNjg4MyAzMi42OTIzIDMyLjYxNDMgMzIuNjkyMyAzMi41MjE4VjI0Ljk2NDZDMzIuNjkyMyAyNC44NzQ4IDMyLjc2NDkgMjQuODAwOCAzMi44NTYxIDI0LjgwMDhIMzIuODU0OFoiCiAgICAgICAgICAgICAgICBmaWxsPSJibGFjayIgLz4KICAgICAgICAgICAgPHBhdGggaWQ9IlZlY3Rvcl80IgogICAgICAgICAgICAgICAgZD0iTTU1LjY3MzIgMjguNjg1OEw1NS45NTk5IDI4LjI3MjJDNTYuODA3IDI3LjA1NTIgNTcuNjE0MyAyNS43NDMgNTguMzYyMyAyNC4zNzI3QzU5LjExMjggMjIuOTk0NCA1OS43ODY4IDIxLjU3IDYwLjM2ODIgMjAuMTM3NUM2MC45NTc1IDE4LjY4NjYgNjEuNDcyOSAxNy4yMDEzIDYxLjg5NzEgMTUuNzIyN0M2Mi4yNDA2IDE0LjUzMjEgNjIuNTE5NSAxMy4zMzM1IDYyLjcyODIgMTIuMTUzNUw2Mi43Nzg1IDExLjg3Mkg1Ni43Mjc3QzU2LjYzNzggMTEuODcyIDU2LjU2MzggMTEuNzk5NCA1Ni41NjM4IDExLjcwODJWNy42MjIzNUM1Ni41NjM4IDcuNTMyNSA1Ni42MzY1IDcuNDU4NSA1Ni43Mjc3IDcuNDU4NUg2Ny44Nzc4QzY3Ljk3NDMgNy40NTg1IDY4LjA0OTYgNy41NDA0MiA2OC4wNDAzIDcuNjM1NTdMNjguMDEgNy45Nzc4MUM2Ny43OTA2IDEwLjQ3NzkgNjcuNDA4NyAxMi44NDMzIDY2Ljg4MDEgMTUuMDA2NUM2Ni4zNTQyIDE3LjE2NTcgNjUuNzE4NiAxOS4yMDU5IDY0Ljk5NzEgMjEuMDc1N0M2NC4yNzgzIDIyLjk0MDMgNjMuNDcwOSAyNC42OTkxIDYyLjU5NzQgMjYuMzA1OUM2MS43Mjc5IDI3LjkwMjIgNjAuODMwNyAyOS40MDg2IDU5LjkyNjggMzAuNzg2OUw1OS43NTc3IDMxLjA0NDVDNTkuNzA4OCAzMS4xMTg1IDU5LjYwOTcgMzEuMTQxIDU5LjUzNDQgMzEuMDkzNEw1NS42NzA1IDI4LjY4MThWMjguNjg0NUw1NS42NzMyIDI4LjY4NThaIgogICAgICAgICAgICAgICAgZmlsbD0iYmxhY2siIC8+CiAgICAgICAgICAgIDxwYXRoIGlkPSJWZWN0b3JfNSIKICAgICAgICAgICAgICAgIGQ9Ik03NS45NjgyIDMyLjYyODhWMjEuMDIxNEg3NC4xMDVWMzIuNjI4OEM3NC4xMDUgMzIuNzE4NiA3NC4wMzIzIDMyLjc5MjYgNzMuOTQxMSAzMi43OTI2SDY5LjU1NTNDNjkuNDY1NSAzMi43OTI2IDY5LjM5MTUgMzIuNzE5OSA2OS4zOTE1IDMyLjYyODhWNi45NTQ4N0M2OS4zOTE1IDYuODY1MDIgNjkuNDY0MiA2Ljc5MTAyIDY5LjU1NTMgNi43OTEwMkg3My45NDExQzc0LjAzMSA2Ljc5MTAyIDc0LjEwNSA2Ljg2MzY5IDc0LjEwNSA2Ljk1NDg3VjE2LjQzNzRINzUuOTY4MlY2Ljk1NDg3Qzc1Ljk2ODIgNi44NjUwMiA3Ni4wNDA5IDYuNzkxMDIgNzYuMTMyIDYuNzkxMDJIODAuNTcwN0M4MC42NjA2IDYuNzkxMDIgODAuNzM0NiA2Ljg2MzY5IDgwLjczNDYgNi45NTQ4N1YzMi42Mjg4QzgwLjczNDYgMzIuNzE4NiA4MC42NjE5IDMyLjc5MjYgODAuNTcwNyAzMi43OTI2SDc2LjEzMkM3Ni4wNDIyIDMyLjc5MjYgNzUuOTY4MiAzMi43MTk5IDc1Ljk2ODIgMzIuNjI4OFoiCiAgICAgICAgICAgICAgICBmaWxsPSJibGFjayIgLz4KICAgICAgICAgICAgPHBhdGggaWQ9IlZlY3Rvcl82IgogICAgICAgICAgICAgICAgZD0iTTgyLjkyNDMgMTguNTc3NkM4Ny4zMzY2IDE1LjAzNDkgODkuMTg5MiAxMS44ODMzIDg5LjIwNzcgMTEuODQ4OUw4OS40MzM2IDExLjQ4NDJIODQuMjk5OUM4NC4yMTAxIDExLjQ4NDIgODQuMTM2MSAxMS40MTE1IDg0LjEzNjEgMTEuMzIwNFY3LjI4NzM5Qzg0LjEzNjEgNy4xOTc1MyA4NC4yMDg4IDcuMTIzNTQgODQuMjk5OSA3LjEyMzU0SDk5Ljc0NDdDOTkuODM0NiA3LjEyMzU0IDk5LjkwODYgNy4xOTYyMSA5OS45MDg2IDcuMjg3MzlWMTEuMzIxN0M5OS45MDg2IDExLjQxMTUgOTkuODM1OSAxMS40ODU1IDk5Ljc0NDcgMTEuNDg1NUg5NC44OTkxTDk0LjgyOSAxMS42MDg0Qzk0LjU4NDUgMTIuMDQzMiA5NC4zMjQyIDEyLjQ4MzIgOTQuMDUzMyAxMi45MTRMOTMuOTI1MiAxMy4xMjAxTDk5LjkxNTIgMTYuNjU2M0M5OS45OTMxIDE2LjcwMjUgMTAwLjAyIDE2LjgwNDMgOTkuOTcyIDE2Ljg4MjJMOTcuNzE2MyAyMC41ODYyQzk3LjY2ODcgMjAuNjY1NSA5Ny41NjQ0IDIwLjY4OTIgOTcuNDg2NCAyMC42Mzc3TDkxLjQwMTIgMTYuNjFMOTEuMjYyNSAxNi43ODQ0Qzg5LjQ3OTkgMTkuMDMzNSA4Ni44NDUgMjEuMjY4IDg1Ljk1MTcgMjIuMDAyN0M4NS44ODE3IDIyLjA1OTYgODUuNzgxMiAyMi4wNDkgODUuNzIzMSAyMS45Nzg5TDgyLjkyMTcgMTguNTc3Nkg4Mi45MjQzWiIKICAgICAgICAgICAgICAgIGZpbGw9ImJsYWNrIiAvPgogICAgICAgICAgICA8cGF0aCBpZD0iVmVjdG9yXzciCiAgICAgICAgICAgICAgICBkPSJNMTAxLjc3NSAyMC45MTdWNi45NTQ4N0MxMDEuNzc1IDYuODY1MDIgMTAxLjg0NyA2Ljc5MTAyIDEwMS45MzkgNi43OTEwMkgxMDYuMjczQzEwNi4zNjMgNi43OTEwMiAxMDYuNDM3IDYuODYzNjkgMTA2LjQzNyA2Ljk1NDg3VjExLjQ3MDJIMTA5LjgyMUMxMDkuOTExIDExLjQ3MDIgMTA5Ljk4NSAxMS41NDI4IDEwOS45ODUgMTEuNjM0VjE1Ljg5MDNDMTA5Ljk4NSAxNS45ODAyIDEwOS45MTIgMTYuMDU0MiAxMDkuODIxIDE2LjA1NDJIMTA2LjQzN1YyMC45MTdDMTA2LjQzNyAyMS4wMDY5IDEwNi4zNjQgMjEuMDgwOSAxMDYuMjczIDIxLjA4MDlIMTAxLjkzOUMxMDEuODQ5IDIxLjA4MDkgMTAxLjc3NSAyMS4wMDgyIDEwMS43NzUgMjAuOTE3WiIKICAgICAgICAgICAgICAgIGZpbGw9ImJsYWNrIiAvPgogICAgICAgICAgICA8cGF0aCBpZD0iVmVjdG9yXzgiCiAgICAgICAgICAgICAgICBkPSJNMTMwLjEyMyAzMi42Mjg4VjIxLjAyMTRIMTI1LjkxMUMxMjUuODIyIDIxLjAyMTQgMTI1Ljc0OCAyMC45NDg3IDEyNS43NDggMjAuODU3NVYxNi42MDEyQzEyNS43NDggMTYuNTExNCAxMjUuODIgMTYuNDM3NCAxMjUuOTExIDE2LjQzNzRIMTMwLjEyM1Y2Ljk1NDg3QzEzMC4xMjMgNi44NjUwMiAxMzAuMTk2IDYuNzkxMDIgMTMwLjI4NyA2Ljc5MTAySDEzNC44MzhDMTM0LjkyOCA2Ljc5MTAyIDEzNS4wMDIgNi44NjM2OSAxMzUuMDAyIDYuOTU0ODdWMzIuNjI4OEMxMzUuMDAyIDMyLjcxODYgMTM0LjkyOSAzMi43OTI2IDEzNC44MzggMzIuNzkyNkgxMzAuMjg3QzEzMC4xOTcgMzIuNzkyNiAxMzAuMTIzIDMyLjcxOTkgMTMwLjEyMyAzMi42Mjg4WiIKICAgICAgICAgICAgICAgIGZpbGw9ImJsYWNrIiAvPgogICAgICAgICAgICA8cGF0aCBpZD0iVmVjdG9yXzkiCiAgICAgICAgICAgICAgICBkPSJNMTEyLjM0OCA3LjI2NDAySDEyNS42NzlDMTI1Ljc2OSA3LjI2NDAyIDEyNS44NDMgNy4zMzY2OSAxMjUuODQzIDcuNDI3ODdWMTEuNTE3N0MxMjUuODQzIDExLjYwNzUgMTI1Ljc3MSAxMS42ODE1IDEyNS42NzkgMTEuNjgxNUgxMTcuMDYyVjE2LjQzODZIMTIzLjcyNUMxMjMuODE1IDE2LjQzODYgMTIzLjg4OSAxNi41MTEzIDEyMy44ODkgMTYuNjAyNVYyMC44NTg4QzEyMy44ODkgMjAuOTQ4NyAxMjMuODE2IDIxLjAyMjcgMTIzLjcyNSAyMS4wMjI3SDExNy4wNjJWMjYuNjgzNkwxMjguMjQzIDI1LjY4OTlDMTI4LjMzOCAyNS42ODIgMTI4LjQyIDI1Ljc1NzMgMTI4LjQyIDI1Ljg1MjVWMjkuOTA1M0MxMjguNDIgMjkuOTg5OCAxMjguMzU1IDMwLjA1OTkgMTI4LjI3MiAzMC4wNjc4TDExMi4zNjIgMzEuNTc4MkMxMTIuMjY2IDMxLjU4NzQgMTEyLjE4NCAzMS41MTIxIDExMi4xODQgMzEuNDE1NlY3LjQyNjU1QzExMi4xODQgNy4zMzY3IDExMi4yNTYgNy4yNjI3IDExMi4zNDggNy4yNjI3VjcuMjY0MDJaIgogICAgICAgICAgICAgICAgZmlsbD0iYmxhY2siIC8+CiAgICAgICAgICAgIDxwYXRoIGlkPSJWZWN0b3JfMTAiCiAgICAgICAgICAgICAgICBkPSJNOTYuMjEzMSAzMy45NTkzQzg3LjAyNTIgMzMuOTU5MyA4NS42NTIzIDMwLjA3NTYgODUuNjUyMyAyNy43NTkyQzg1LjY1MjMgMjIuNjM0NyA5MS4zOTM5IDIxLjU1OTEgOTYuMjEzMSAyMS41NTkxQzEwMi45MjMgMjEuNTU5MSAxMDYuNzc0IDIzLjgyIDEwNi43NzQgMjcuNzU5MkMxMDYuNzc0IDMwLjA3MyAxMDUuNDAxIDMzLjk1OTMgOTYuMjEzMSAzMy45NTkzWk05Ni4yMTMxIDI1Ljg4NjdDOTMuNTI1MyAyNS44ODY3IDkwLjQ0MTEgMjYuMTAwOCA5MC40NDExIDI3Ljc2NzFDOTAuNDQxMSAyOS4wNDg5IDkyLjI3NTIgMjkuNjQ0OSA5Ni4yMTMxIDI5LjY0NDlDMTAwLjE1MSAyOS42NDQ5IDEwMS45ODUgMjkuMDQ2MyAxMDEuOTg1IDI3Ljc2NzFDMTAxLjk4NSAyNi40ODggMTAwLjA0MyAyNS44ODY3IDk2LjIxMzEgMjUuODg2N1oiCiAgICAgICAgICAgICAgICBmaWxsPSJibGFjayIgLz4KICAgICAgICA8L2c+CiAgICA8L2c+Cjwvc3ZnPg=='

  return (
    <Container>
      <InnerContainer>
        <Link href="/">
          <LogoImage
            src={logoUrl}
            alt="번개장터 로고 사진"
            width={136}
            height={40}
          />
        </Link>

        <div>
          <SearchInput />
        </div>

        <ActionButtonsContainer>
          {/* 판매하기 버튼 */}
          <ImageButton
            src="/product sell logo.png"
            alt="판매하기버튼 이미지"
            width={23}
            height={26}
            title="판매하기"
            link="/products/new"
          />

          {/* 내상점 버튼 */}
          <ImageButton
            src="/myshop log.png"
            alt="내상점버튼 이미지"
            width={23}
            height={24}
            title="내 상점"
            link="/shop/myShopId/products"
          />

          {/* 번개톡 버튼 */}
          <ImageButton
            src="/bungaetalk logo.png"
            alt="번개톡버튼 이미지"
            width={23}
            height={24}
            title="번개톡"
            link="/talk2"
          />
        </ActionButtonsContainer>
      </InnerContainer>

      {/* 카테고리 컴포넌트 */}
      <div>
        <CategoryTap />
      </div>
    </Container>
  )
}
