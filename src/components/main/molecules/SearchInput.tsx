import styled from 'styled-components'
import { FaSearch } from "react-icons/fa";

const InputContainer = styled.div`
  display: flex;
  padding: 0 15px;
  align-items: center;
  width: 456px;
  height: 36px;
  border: 2px solid red;
`

const Input = styled.input`
  width: 440px;
  height: 16px;
  background-color: white;
  border: none;
  color: dark;
  outline: none;
`

export default function SearchInput() {
  return (
    <InputContainer>
      <Input
        type="text"
        placeholder="상품명, 지역명, @상점명 입력"
        maxLength={40}
      />
      <FaSearch width={20} height={20} color="#F72F33" />
    </InputContainer>
  )
}
