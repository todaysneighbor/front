'use client'
import { useState } from 'react'
import Label from '../atoms/Label'

const NameInput = () => {
  const [name, setName] = useState<string>('')
  return (
    <div className="flex items-center">
      <Label
        props={
          <div>
            <span>상품명</span>
            <span className="text-red">*</span>
          </div>
        }
      ></Label>
      <div className="flex justify-between items-center gap-1">
        <input
          type="text"
          maxLength={40}
          onChange={(e) => setName(e.target.value)}
          placeholder="상품명을 입력해 주세요."
          className="border border-border-gray h-[3rem] w-[800px] px-[1rem] focus:outline-black"
        ></input>
        <div className="text-right text-[16px] ms-[0.25rem] leading-5">
          {name.length}/40
        </div>
      </div>
    </div>
  )
}

export default NameInput
