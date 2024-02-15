'use client'
import { useState } from 'react'
import Label from '../atoms/Label'

const DescriptionInput = () => {
  const [description, setDescription] = useState<string>('')
  return (
    <div className="flex items-start">
      <Label
        props={
          <div>
            <span>설명</span>
            <span className="text-red">*</span>
          </div>
        }
      ></Label>
      <div className="flex flex-col">
        <textarea
          rows={10} // Specifies the number of visible text lines
          cols={150}
          wrap="soft"
          maxLength={200} // Specifies the maximum number of characters allowed in the textarea
          onChange={(e) => setDescription(e.target.value)}
          placeholder="구매시기, 브랜드/모델명, 제품의 상태 (사용감, 하자 유무) 등을 입력해 주세요. "
          className="resize-none border border-border-gray h-[10rem] w-[856px] p-[1rem] focus:outline-black break-words text-wrap overscroll-auto"
        ></textarea>
        <div className="text-right text-[16px] mt-[0.5rem] ms-[0.25rem] leading-5">
          {description.length}/200
        </div>
      </div>
    </div>
  )
}

export default DescriptionInput
