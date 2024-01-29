'use client'
import { useState, useEffect } from 'react'

import Label from '../atoms/Label'
import styled from 'styled-components'

const Radio = styled.div`
  input[type='radio'] {
    accent-color: #f72f33;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    outline: none;
    // opacity: 0.6;
  }
  input[type='radio']:hover:before {
    box-shadow: 0px 0px 0px 8px rgba(125, 125, 125, 0.2);
    border-radius: 50%;
    opacity: 0.5;
  }

  input[type='radio']:before {
    content: '';
    display: block;
    width: 60%;
    height: 60%;
    margin: 10%; /* Keeping margin only 10% */
    padding: 40%; /* Increase the inner area for pushing the border out of the circle */
    border-radius: 50%;
    opacity: 0.5;
    transition: 0.3s; /* Move your transition to here */
  }

  input[type='radio']:hover:checked:before {
    box-shadow: 0px 0px 0px 8px rgba(247, 47, 51, 0.2);
  }
`
interface QualityTypes {
  [key: number]: string
}

const quliatyTypes: QualityTypes = {
  0: '새 상품 (미사용)',
  1: '사용감 없음',
  2: '사용감 적음',
  3: '사용감 많음',
  4: '고장/파손 상품',
}

interface QualityDescriptionTypes {
  [key: string]: string
}

const qualityDescriptionTypes: QualityDescriptionTypes = {
  '새 상품 (미사용)': '사용하지 않은 새 상품',
  '사용감 없음': '사용은 했지만 눈에 띄는 흔적이나 얼룩이 없음',
  '사용감 적음': '눈에 띄는 흔적이나 얼룩이 약간 있음',
  '사용감 많음': '눈에 띄는 흔적이나 얼룩이 많이 있음',
  '고장/파손 상품': '기능 이상이나 외관 손상 등으로 수리/수선 필요',
}

const QualityInput = () => {
  const [quality, setQuality] = useState<any>('')
  const [target, setTarget] = useState<Element | null>(null)

  useEffect(() => {
    if (document) {
      setTarget(document.querySelector('#portal'))
    }
  }, [])

  if (!target) return <></>

  return (
    <div className="flex">
      <Label
        props={
          <div>
            <span>상품상태</span>
            <span className="text-red">*</span>
          </div>
        }
      ></Label>
      <Radio className="flex flex-col gap-2">
        {Object.entries(quliatyTypes).map(([key, value]) => (
          <div key={key} className="flex gap-2">
            <input
              type="radio"
              id={`quality_${key}`}
              name="quality"
              value={value}
              className="text-bold"
              onSelect={(e) => {
                e.preventDefault()
                setQuality(key)
              }}
            />
            <label htmlFor={`quality_${key}`}>
              {value}
              <span className="text-light-gray text-[14px] ms-2">
                {qualityDescriptionTypes[value]}
              </span>
            </label>
          </div>
        ))}
      </Radio>
    </div>
  )
}

export default QualityInput
