import styled from 'styled-components'
import { ButtonProps, ButtonColor, ButtonSize } from './Button.types'

const StyledButton = styled.button<{ size: ButtonSize; color: ButtonColor }>`
  min-height: ${(props) => (props.size === 'sm' ? '56px' : '56px')};
  min-width: ${(props) => (props.size === 'sm' ? '143px' : '176px')};
  padding: 1px;
  font-size: 18px;
  border: none;
  color: white;
  ${(props) =>
    props.color === 'gray' &&
    `
    background-color: gray;
  `}
  ${(props) =>
    props.color === 'yellow' &&
    `
    background-color: #FFA425;
  `}
    ${(props) =>
    props.color === 'red' &&
    `
    background-color: red;
  `};
`

export default function Button({
  children,
  left,
  right,
  size,
  color,
}: ButtonProps) {
  return (
    <StyledButton size={size} color={color}>
      {left}
      {children}
      {right}
    </StyledButton>
  )
}
