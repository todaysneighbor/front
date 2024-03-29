'use client'

import React from 'react'
import styled from 'styled-components'

const StyledContainer = styled.div`
  height: 39px;
  display: flex;
  justify-content: start;
`

const StyledItem = styled.div`
  display: flex;
  padding: 0 15px;
  align-items: center;
`

const StyledText = styled.div`
  color: #666666;
  font-size: 13px;
`

const StyledImage = styled.img`
  margin-right: 5px;
`

const AppDownloadLink = styled.a`
  cursor: pointer;
`

const FavoriteLink = styled.div`
  cursor: pointer;
`

const appDownloadLogoUrl: string =
  'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDE2IDE2IiBmaWxsPSJub25lIj4KICAgIDxtYXNrIGlkPSJtYXNrMF8yMjU3XzYxIiBzdHlsZT0ibWFzay10eXBlOmx1bWluYW5jZSIgbWFza1VuaXRzPSJ1c2VyU3BhY2VPblVzZSIgeD0iMCIgeT0iMCIKICAgICAgICB3aWR0aD0iMTYiIGhlaWdodD0iMTYiPgogICAgICAgIDxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIgogICAgICAgICAgICBkPSJNMTYgMTEuMDE3NkMxNiAxMS4yMDc4IDE2IDExLjM5OCAxNS45OTg5IDExLjU4ODVDMTUuOTk4IDExLjc0ODcgMTUuOTk2MSAxMS45MDg4IDE1Ljk5MTYgMTIuMDY5QzE1Ljk4MjIgMTIuNDE3NyAxNS45NjEyIDEyLjc3IDE1Ljg5ODUgMTMuMTE0OUMxNS44MzQ5IDEzLjQ2NTIgMTUuNzMxMiAxMy43OTE0IDE1LjU2NjkgMTQuMTA5OEMxNS40MDYgMTQuNDIyNCAxNS4xOTU4IDE0LjcwODUgMTQuOTQ0OCAxNC45NTY2QzE0LjY5MzkgMTUuMjA0NyAxNC40MDQxIDE1LjQxMjggMTQuMDg3OSAxNS41NzE5QzEzLjc2NjEgMTUuNzM0IDEzLjQzNjUgMTUuODM2OCAxMy4wODIxIDE1Ljg5OTdDMTIuNzMzIDE1Ljk2MTcgMTIuMzc2OSAxNS45ODI0IDEyLjAyMzggMTUuOTkxN0MxMS4zNDUxIDE2IDExLjE1MjcgMTYgMTAuOTYwMyAxNkg3LjI1MDE1SDUuMDM5OTdDNC4zMDA0NiAxNS45OTc4IDQuMTM4NDQgMTUuOTk2MSAzLjk3NjQzIDE1Ljk5MTdDMy42MjM0IDE1Ljk4MjQgMy4yNjczMSAxNS45NjE3IDIuOTE4MTkgMTUuODk5N0MyLjU2Mzc3IDE1LjgzNjggMi4yMzQxNiAxNS43MzQgMS45MTIzNyAxNS41NzE5QzEuNTk1ODcgMTUuNDEyOCAxLjMwNjQyIDE1LjIwNDcgMS4wNTU0NiAxNC45NTY2QzAuODA0NDg4IDE0LjcwODUgMC41OTQyMzQgMTQuNDIyNCAwLjQzMzA1NyAxNC4xMDk4QzAuMjY5MDkyIDEzLjc5MTQgMC4xNjUzNTkgMTMuNDY1MiAwLjEwMTUwMiAxMy4xMTQ5QzAuMDM4NzYwNCAxMi43NyAwLjAxODEyNTQgMTIuNDE3NyAwLjAwODY0NDQxIDEyLjA2OUMwLjAwNDE4Mjc4IDExLjkwODggMC4wMDIyMzA4MiAxMS43NDg3IDAuMDAxMzk0MjYgMTEuNTg4NUMwIDExLjM5OCAwIDExLjIwNzggMCAxMS4wMTc2VjguODMyNjZWNy4xNjczNFY0Ljk4MjRDMCA0Ljc5MjE5IDAgNC42MDE3MSAwLjAwMTM5NDI2IDQuNDExNzdDMC4wMDIyMzA4MiA0LjI1MTMzIDAuMDA0MTgyNzggNC4wOTExNyAwLjAwODY0NDQxIDMuOTMxMDFDMC4wMTgxMjU0IDMuNTgyMDEgMC4wMzg3NjA0IDMuMjI5OTkgMC4xMDE1MDIgMi44ODQ4NUMwLjE2NTM1OSAyLjUzNDQ4IDAuMjY5MDkyIDIuMjA4NjQgMC40MzMwNTcgMS44OTAyNUMwLjU5NDIzNCAxLjU3NzM3IDAuODA0NDg4IDEuMjkxMjIgMS4wNTU0NiAxLjA0MzRDMS4zMDY0MiAwLjc5NTAyMyAxLjU5NTg3IDAuNTg3MTcgMS45MTIzNyAwLjQyODExQzIuMjM0MTYgMC4yNjYwMTggMi41NjM3NyAwLjE2MzE5NSAyLjkxODE5IDAuMTAwMzQzQzMuMjY3MzEgMC4wMzgzMTc3IDMuNjIzNCAwLjAxNzY0MjcgMy45NzY0MyAwLjAwODI3QzQuNjU1MTYgMCA0Ljg0NzU2IDAgNS4wMzk5NyAwSDcuMjUwMTVIMTAuODAyNUw4Ljc0OTg1IDAuMDAwODI3TDEwLjk2MDMgMEMxMS42OTk1IDAuMDAyMjA1MzMgMTEuODYxNiAwLjAwMzg1OTMzIDEyLjAyMzggMC4wMDgyN0MxMi4zNzY5IDAuMDE3NjQyNyAxMi43MzMgMC4wMzgzMTc3IDEzLjA4MjEgMC4xMDAzNDNDMTMuNDM2NSAwLjE2MzE5NSAxMy43NjYxIDAuMjY2MDE4IDE0LjA4NzkgMC40MjgxMUMxNC40MDQxIDAuNTg3MTcgMTQuNjkzOSAwLjc5NTAyMyAxNC45NDQ4IDEuMDQzNEMxNS4xOTU4IDEuMjkxMjIgMTUuNDA2IDEuNTc3MzcgMTUuNTY2OSAxLjg5MDI1QzE1LjczMTIgMi4yMDg2NCAxNS44MzQ5IDIuNTM0NDggMTUuODk4NSAyLjg4NDg1QzE1Ljk2MTIgMy4yMjk5OSAxNS45ODIyIDMuNTgyMDEgMTUuOTkxNiAzLjkzMTAxQzE1Ljk5NjEgNC4wOTExNyAxNS45OTggNC4yNTEzMyAxNS45OTg5IDQuNDExNzdDMTYgNC42MDE3MSAxNiA0Ljc5MjE5IDE2IDQuOTgyNFY3LjE2NzM0VjguODMyNjZWMTEuMDE3NloiCiAgICAgICAgICAgIGZpbGw9IndoaXRlIiAvPgogICAgPC9tYXNrPgogICAgPGcgbWFzaz0idXJsKCNtYXNrMF8yMjU3XzYxKSI+CiAgICAgICAgPHJlY3Qgd2lkdGg9IjE2IiBoZWlnaHQ9IjE2IiBmaWxsPSIjRUYwRTBFIiAvPgogICAgICAgIDxwYXRoCiAgICAgICAgICAgIGQ9Ik0xMi4yNzk3IDcuNTY0NTFIOS4xMDQzNUw5LjYxOTM1IDMuMDc0NTRDOS42MjYzNSAzLjAxMjUgOS41NTIxOCAyLjk3NTY0IDkuNTA2OTMgMy4wMTg1NkwzLjY4NzQ2IDguNTgyODZDMy42NDM2MSA4LjYyNDg0IDMuNjczOTMgOC42OTg1NSAzLjczNDExIDguNjk4MDhMNi44MzAyMSA4LjY2NDk2TDYuMzg2NTcgMTMuMjU5OUM2LjM4MDUxIDEzLjMyMTkgNi40NTQ2OCAxMy4zNTc0IDYuNDk5NDYgMTMuMzE0NUwxMi4zMjU5IDcuNjgwMkMxMi4zNjkzIDcuNjM4NjggMTIuMzM5NSA3LjU2NTQ0IDEyLjI3OTcgNy41NjU0NFY3LjU2NDUxWiIKICAgICAgICAgICAgZmlsbD0iYmxhY2siIC8+CiAgICA8L2c+Cjwvc3ZnPg=='
const starImgUrl: string =
  'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNSIgdmlld0JveD0iMCAwIDE2IDE1Ij4KICAgIDxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPHBhdGggc3Ryb2tlPSIjQ0NDIiBkPSJNLTE2LjUtMTYuNWg0OXY0OWgtNDl6Ii8+CiAgICAgICAgPHBhdGggZmlsbD0iI0U5QjQ1NyIgZmlsbC1ydWxlPSJub256ZXJvIiBkPSJNOCAwbDIuNSA0LjkzNCA1LjUuNzktNCAzLjg0OC45IDUuNDI4TDggMTIuNDM0IDMuMSAxNSA0IDkuNTcyIDAgNS43MjRsNS41LS43OXoiLz4KICAgIDwvZz4KPC9zdmc+Cg=='

export default function NavLeftComponent() {
  return (
    <StyledContainer>
      <StyledItem>
        <StyledItem>
          <StyledImage
            src={appDownloadLogoUrl}
            alt="앱 다운로드 로고"
            width={16}
            height={17}
          />
          <AppDownloadLink href="/">
            <StyledText>앱다운로드</StyledText>
          </AppDownloadLink>
        </StyledItem>
      </StyledItem>
      <StyledItem>
        <StyledImage
          src={starImgUrl}
          alt="즐겨찾기 로고"
          width={16}
          height={15}
        />
        <FavoriteLink
          onClick={() => {
            alert('Ctrl+D 키를 누르면 즐겨찾기에 추가하실 수 있습니다.')
          }}
        >
          <StyledText>즐겨찾기</StyledText>
        </FavoriteLink>
      </StyledItem>
    </StyledContainer>
  )
}
