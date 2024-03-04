import { ModalProps } from './SignUp'

import styled from 'styled-components'

export const LogOut = ({ isOpen, setIsOpen }: ModalProps) => {
  return (
    <>
      {isOpen && (
        <>
          <Overlay />
          <StyledModal>
            <ModalContent>
              <DialogTitle>로그아웃</DialogTitle>
              <DialogText>로그아웃 하시겠습니까?</DialogText>
              <ButtonContainer>
                <CancelButton onClick={() => setIsOpen(false)}>
                  취소
                </CancelButton>
                <ConfirmButton onClick={() => setIsOpen(false)}>
                  확인
                </ConfirmButton>
              </ButtonContainer>
            </ModalContent>
          </StyledModal>
        </>
      )}
    </>
  )
}

const StyledModal = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.2);
  z-index: 1000;
`

const ModalContent = styled.div`
  background-color: white;
  border-radius: 10px;
  width: 285px;
  height: 182px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const DialogTitle = styled.div`
  font-weight: bold;
  font-size: 18px;
  margin-bottom: 4px;
`

const DialogText = styled.div`
  font-size: 15px;
  margin-bottom: 6px;
`

const ButtonContainer = styled.div`
  display: flex;
  margin-top: 12px;
`

const Button = styled.button`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 40px;
  border-radius: 4px;
  cursor: pointer;
  width: 115px;
  border: none;
`

const CancelButton = styled(Button)`
  background-color: #f4f4fa;
  color: #72707f;
  margin-right: 2px;
`

const ConfirmButton = styled(Button)`
  background-color: #ff5058;
  color: white;
  margin-left: 2px;
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
