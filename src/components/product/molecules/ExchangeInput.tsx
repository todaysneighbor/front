'use client'

import { useState, useEffect } from 'react'

import styled from 'styled-components'
import Label from '../atoms/Label'

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

function ExchangeInput() {
  const [target, setTarget] = useState<Element | null>(null)

  useEffect(() => {
    if (document) {
      setTarget(document.querySelector('#portal'))
    }
  }, [])

  if (!target) return null

  return (
    <div className="flex">
      <Label
        props={
          <div>
            <span>교환</span>
            <span className="text-red">*</span>
          </div>
        }
      />
      <Radio className="flex items-center">
        <input
          type="radio"
          id="불가"
          name="exchange"
          value="불가"
          className="text-red"
        />
        <label htmlFor="불가" className="me-4 ms-1">
          불가
        </label>
        <input
          type="radio"
          id="가능"
          name="exchange"
          value="가능"
          className="me-1"
        />
        <label htmlFor="가능">가능</label>
      </Radio>
    </div>
  )
}

export default ExchangeInput
