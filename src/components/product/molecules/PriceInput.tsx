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

const PriceInput = () => {
  const [price, setPrice] = useState<number>(0)
  const [deliveryFeeIncluded, setDeliveryFeeIncluded] = useState<Boolean>(false)
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
            <span>가격</span>
            <span className="text-red">*</span>
          </div>
        }
      ></Label>
      <div className="flex flex-col">
        <div className="relative w-[300px]">
          <input
            type="number"
            onChange={(e) => setPrice(Number(e.target.value))}
            className="border border-border-gray h-[3rem] w-full pe-10 px-[1rem] focus:outline-black"
          ></input>
          <span className="absolute right-4 top-3 text-border-gray ">원</span>
        </div>
        <Radio className="flex items-center mt-2">
          <input
            type="radio"
            id="배송비포함"
            name="exchange"
            value="배송비포함"
            className="text-red"
            onSelect={() => setDeliveryFeeIncluded(true)}
          />
          <label htmlFor="배송비포함" className="me-4 ms-1">
            배송비포함
          </label>
          <input
            type="radio"
            id="배송비별도"
            name="exchange"
            value="배송비별도"
            className="me-1"
            onSelect={() => setDeliveryFeeIncluded(false)}
          />
          <label htmlFor="배송비별도">배송비별도</label>
        </Radio>
      </div>
    </div>
  )
}

export default PriceInput
