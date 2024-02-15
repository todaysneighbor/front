'use client'
import { useState } from 'react'
import Label from '../atoms/Label'

const QuantityInput = () => {
  const [quantity, setQuantity] = useState<number>(0)
  return (
    <div className="flex items-center">
      <Label
        props={
          <div>
            <span>수량</span>
            <span className="text-red">*</span>
          </div>
        }
      ></Label>
      <div className="flex justify-between items-center gap-1">
        <div className="relative w-[300px]">
          <input
            type="number"
            max={999}
            min={1}
            placeholder="숫자만 입력해주세요"
            onChange={(e) => setQuantity(Number(e.target.value))}
            className="border border-border-gray h-[3rem] w-full pe-10 px-[1rem] focus:outline-black"
          ></input>
          <span className="absolute right-4 top-3 text-border-gray ">개</span>
        </div>
      </div>
    </div>
  )
}

export default QuantityInput
