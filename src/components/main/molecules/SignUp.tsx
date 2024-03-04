import Image from 'next/image'
import KaKaoLonIn from './KaKaoLogIn'
import styled from 'styled-components'

const appDownloadLogoUrl: string =
  'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDE2IDE2IiBmaWxsPSJub25lIj4KICAgIDxtYXNrIGlkPSJtYXNrMF8yMjU3XzYxIiBzdHlsZT0ibWFzay10eXBlOmx1bWluYW5jZSIgbWFza1VuaXRzPSJ1c2VyU3BhY2VPblVzZSIgeD0iMCIgeT0iMCIKICAgICAgICB3aWR0aD0iMTYiIGhlaWdodD0iMTYiPgogICAgICAgIDxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIgogICAgICAgICAgICBkPSJNMTYgMTEuMDE3NkMxNiAxMS4yMDc4IDE2IDExLjM5OCAxNS45OTg5IDExLjU4ODVDMTUuOTk4IDExLjc0ODcgMTUuOTk2MSAxMS45MDg4IDE1Ljk5MTYgMTIuMDY5QzE1Ljk4MjIgMTIuNDE3NyAxNS45NjEyIDEyLjc3IDE1Ljg5ODUgMTMuMTE0OUMxNS44MzQ5IDEzLjQ2NTIgMTUuNzMxMiAxMy43OTE0IDE1LjU2NjkgMTQuMTA5OEMxNS40MDYgMTQuNDIyNCAxNS4xOTU4IDE0LjcwODUgMTQuOTQ0OCAxNC45NTY2QzE0LjY5MzkgMTUuMjA0NyAxNC40MDQxIDE1LjQxMjggMTQuMDg3OSAxNS41NzE5QzEzLjc2NjEgMTUuNzM0IDEzLjQzNjUgMTUuODM2OCAxMy4wODIxIDE1Ljg5OTdDMTIuNzMzIDE1Ljk2MTcgMTIuMzc2OSAxNS45ODI0IDEyLjAyMzggMTUuOTkxN0MxMS4zNDUxIDE2IDExLjE1MjcgMTYgMTAuOTYwMyAxNkg3LjI1MDE1SDUuMDM5OTdDNC4zMDA0NiAxNS45OTc4IDQuMTM4NDQgMTUuOTk2MSAzLjk3NjQzIDE1Ljk5MTdDMy42MjM0IDE1Ljk4MjQgMy4yNjczMSAxNS45NjE3IDIuOTE4MTkgMTUuODk5N0MyLjU2Mzc3IDE1LjgzNjggMi4yMzQxNiAxNS43MzQgMS45MTIzNyAxNS41NzE5QzEuNTk1ODcgMTUuNDEyOCAxLjMwNjQyIDE1LjIwNDcgMS4wNTU0NiAxNC45NTY2QzAuODA0NDg4IDE0LjcwODUgMC41OTQyMzQgMTQuNDIyNCAwLjQzMzA1NyAxNC4xMDk4QzAuMjY5MDkyIDEzLjc5MTQgMC4xNjUzNTkgMTMuNDY1MiAwLjEwMTUwMiAxMy4xMTQ5QzAuMDM4NzYwNCAxMi43NyAwLjAxODEyNTQgMTIuNDE3NyAwLjAwODY0NDQxIDEyLjA2OUMwLjAwNDE4Mjc4IDExLjkwODggMC4wMDIyMzA4MiAxMS43NDg3IDAuMDAxMzk0MjYgMTEuNTg4NUMwIDExLjM5OCAwIDExLjIwNzggMCAxMS4wMTc2VjguODMyNjZWNy4xNjczNFY0Ljk4MjRDMCA0Ljc5MjE5IDAgNC42MDE3MSAwLjAwMTM5NDI2IDQuNDExNzdDMC4wMDIyMzA4MiA0LjI1MTMzIDAuMDA0MTgyNzggNC4wOTExNyAwLjAwODY0NDQxIDMuOTMxMDFDMC4wMTgxMjU0IDMuNTgyMDEgMC4wMzg3NjA0IDMuMjI5OTkgMC4xMDE1MDIgMi44ODQ4NUMwLjE2NTM1OSAyLjUzNDQ4IDAuMjY5MDkyIDIuMjA4NjQgMC40MzMwNTcgMS44OTAyNUMwLjU5NDIzNCAxLjU3NzM3IDAuODA0NDg4IDEuMjkxMjIgMS4wNTU0NiAxLjA0MzRDMS4zMDY0MiAwLjc5NTAyMyAxLjU5NTg3IDAuNTg3MTcgMS45MTIzNyAwLjQyODExQzIuMjM0MTYgMC4yNjYwMTggMi41NjM3NyAwLjE2MzE5NSAyLjkxODE5IDAuMTAwMzQzQzMuMjY3MzEgMC4wMzgzMTc3IDMuNjIzNCAwLjAxNzY0MjcgMy45NzY0MyAwLjAwODI3QzQuNjU1MTYgMCA0Ljg0NzU2IDAgNS4wMzk5NyAwSDcuMjUwMTVIMTAuODAyNUw4Ljc0OTg1IDAuMDAwODI3TDEwLjk2MDMgMEMxMS42OTk1IDAuMDAyMjA1MzMgMTEuODYxNiAwLjAwMzg1OTMzIDEyLjAyMzggMC4wMDgyN0MxMi4zNzY5IDAuMDE3NjQyNyAxMi43MzMgMC4wMzgzMTc3IDEzLjA4MjEgMC4xMDAzNDNDMTMuNDM2NSAwLjE2MzE5NSAxMy43NjYxIDAuMjY2MDE4IDE0LjA4NzkgMC40MjgxMUMxNC40MDQxIDAuNTg3MTcgMTQuNjkzOSAwLjc5NTAyMyAxNC45NDQ4IDEuMDQzNEMxNS4xOTU4IDEuMjkxMjIgMTUuNDA2IDEuNTc3MzcgMTUuNTY2OSAxLjg5MDI1QzE1LjczMTIgMi4yMDg2NCAxNS44MzQ5IDIuNTM0NDggMTUuODk4NSAyLjg4NDg1QzE1Ljk2MTIgMy4yMjk5OSAxNS45ODIyIDMuNTgyMDEgMTUuOTkxNiAzLjkzMTAxQzE1Ljk5NjEgNC4wOTExNyAxNS45OTggNC4yNTEzMyAxNS45OTg5IDQuNDExNzdDMTYgNC42MDE3MSAxNiA0Ljc5MjE5IDE2IDQuOTgyNFY3LjE2NzM0VjguODMyNjZWMTEuMDE3NloiCiAgICAgICAgICAgIGZpbGw9IndoaXRlIiAvPgogICAgPC9tYXNrPgogICAgPGcgbWFzaz0idXJsKCNtYXNrMF8yMjU3XzYxKSI+CiAgICAgICAgPHJlY3Qgd2lkdGg9IjE2IiBoZWlnaHQ9IjE2IiBmaWxsPSIjRUYwRTBFIiAvPgogICAgICAgIDxwYXRoCiAgICAgICAgICAgIGQ9Ik0xMi4yNzk3IDcuNTY0NTFIOS4xMDQzNUw5LjYxOTM1IDMuMDc0NTRDOS42MjYzNSAzLjAxMjUgOS41NTIxOCAyLjk3NTY0IDkuNTA2OTMgMy4wMTg1NkwzLjY4NzQ2IDguNTgyODZDMy42NDM2MSA4LjYyNDg0IDMuNjczOTMgOC42OTg1NSAzLjczNDExIDguNjk4MDhMNi44MzAyMSA4LjY2NDk2TDYuMzg2NTcgMTMuMjU5OUM2LjM4MDUxIDEzLjMyMTkgNi40NTQ2OCAxMy4zNTc0IDYuNDk5NDYgMTMuMzE0NUwxMi4zMjU5IDcuNjgwMkMxMi4zNjkzIDcuNjM4NjggMTIuMzM5NSA3LjU2NTQ0IDEyLjI3OTcgNy41NjU0NFY3LjU2NDUxWiIKICAgICAgICAgICAgZmlsbD0iYmxhY2siIC8+CiAgICA8L2c+Cjwvc3ZnPg=='

export type ModalProps = {
  isOpen: boolean
  setIsOpen: (value: boolean) => void
}

export const SignUp = ({ isOpen, setIsOpen }: ModalProps) => {
  return (
    <>
      {isOpen && (
        <>
          <Overlay />
          <ModalContainer>
            <ModalContent>
              {/* Close button */}
              <CloseButton onClick={() => setIsOpen(false)}>
                <Image
                  src="/modal cancel.png"
                  alt="Close icon"
                  width={24}
                  height={24}
                />
              </CloseButton>

              {/* Modal content */}
              <AppLogo
                src={appDownloadLogoUrl}
                alt="App Logo"
                width={30}
                height={34}
              />
              <ModalTitle>번개장터로 중고거래 시작하기</ModalTitle>
              <ModalText>간편하게 가입하고 상품을 확인하세요</ModalText>

              {/* 로그인 버튼 */}
              <KaKaoLonIn />
            </ModalContent>
          </ModalContainer>
        </>
      )}
    </>
  )
}

const ModalContainer = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1000;
`

const ModalContent = styled.div`
  width: 360px;
  height: 286px;
  padding-top: 40px;
  background-color: #f7f7f7;
  border-radius: 10px;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const CloseButton = styled.button`
  position: absolute;
  right: 20px;
  top: 20px;
`

const AppLogo = styled(Image)`
  margin: 0 auto 10px;
`

const ModalTitle = styled.div`
  font-weight: bold;
  font-size: 20px;
  margin-bottom: 15px;
`

const ModalText = styled.div`
  font-size: 14px;
  margin-bottom: 35px;
`
const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.2);
  z-index: 999;
`
