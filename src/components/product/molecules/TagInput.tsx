'use client'
import { KeyboardEvent, useState } from 'react'
import Label from '../atoms/Label'
import styled from 'styled-components'

const List = styled.ul`
  li::before {
    content: '- ';
    margin-right: 3px;
  }
`

const TagInput = () => {
  const [tags, setTags] = useState<string[]>([])
  const [tag, setTag] = useState<string>('')

  const addTag = (e: React.ChangeEvent<HTMLInputElement>) => {
    const target = e.target as HTMLInputElement
    if (target) {
      setTag(target.value)
      target.value = '' // Clear the input field
      target.placeholder = '태그를 입력해 주세요.(최대 5개)'
    }
  }

  const handleKeyPress = (e: KeyboardEvent) => {
    if (e.key == ' ' || e.code == 'Space' || e.keyCode == 32) {
      handleClick()
      const target = e.target as HTMLInputElement
      target.blur() // placehorder 안나오는 문제 해결함 : 포커스 해제
    }
  }

  const handleClick = () => {
    setTags([...tags, tag])
    setTag('')
  }

  const removeTag = (i: number) => {
    const cloneTags = tags.slice()
    cloneTags.splice(i, 1)
    setTags(cloneTags)
  }

  return (
    <div className="flex items-start">
      <Label
        props={
          <div>
            <span>태그</span>
          </div>
        }
      ></Label>
      <div className="flex flex-col justify-between gap-1">
        <div className="border border-border-gray h-[3rem] w-[856px] px-[1rem] flex justify-start items-center">
          {tags?.map((e, index) => (
            <div
              key={index}
              className="tagItem rounded-full me-2 bg-gray-200 px-1 flex justify-center items-center"
            >
              #{e}
              <span
                className="deleteButton rounded-full bg-gray-400 ms-1 flex justify-center items-center text-white text-[12px] w-[15px] h-[15px]"
                onClick={() => removeTag(index)}
              >
                x
              </span>
            </div>
          ))}
          {tags.length < 5 ? (
            <input
              value={tag}
              className=" ps-3 w-[240px]  focus:outline-none"
              type="text"
              maxLength={40}
              onChange={(e) => addTag(e)}
              onKeyDown={(e) => handleKeyPress(e)}
              placeholder="태그를 입력해 주세요.(최대 5개)"
            ></input>
          ) : null}
        </div>
        <div className="text-left text-[12px] text-dark-black ms-[0.25rem] leading-5">
          <List className="">
            <li>태그는 띄어쓰기로 구분되며 최대 9자까지 입력할 수 있어요.</li>
            <li>내 상품을 다양한 태그로 표현해 보세요.</li>
            <li>사람들이 내 상품을 더 잘 찾을 수 있어요.</li>
            <li>
              상품과 관련 없는 태그를 입력할 경우, 판매에 제재를 받을 수 있어요.
            </li>
          </List>
        </div>
      </div>
    </div>
  )
}

export default TagInput
