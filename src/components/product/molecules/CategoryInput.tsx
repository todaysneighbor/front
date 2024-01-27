'use client'
import { useState, useEffect } from 'react'
import styled from 'styled-components'

import Label from '../atoms/Label'
import { bigCategory, middleCategory, smallCategory } from '@/data/category'

const Category = styled.div`
  display: flex !important;
  width: 100%;
  border: 1px solid rgb(204 204 204);
  ul {
    display: inline-block;
  }
  li {
    padding: 0px 24px;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`

const CategoryInput = () => {
  const [big, setBig] = useState<string>('')
  const [middle, setMiddle] = useState<string>('')
  const [small, setSmall] = useState<string>('')
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
            <span>카테고리</span>
            <span className="text-red">*</span>
          </div>
        }
      ></Label>
      <div className="w-full">
        <Category>
          {/* 대분류 */}
          <ul className="w-[280px] h-[300px]  overflow-y-scroll">
            {Object.entries(bigCategory).map(([key, value]) => (
              <li key={key} value={value}>
                <button
                  className="w-full h-full text-left px-2"
                  value={value}
                  onClick={(e) => {
                    e.preventDefault()
                    setBig(value)
                    setMiddle('')
                    setSmall('')
                  }}
                >
                  {value}
                </button>
              </li>
            ))}
          </ul>
          {/* 중분류 */}
          <ul className="w-[280px] h-[300px] border-s border-border-gray overflow-y-scroll">
            {big && (middleCategory as any)[big]
              ? (middleCategory as any)[big].map(
                  ([index, value]: [string, string]) => (
                    <li key={index} value={value}>
                      <button
                        className="w-full h-full text-left px-2"
                        value={value}
                        onClick={(e) => {
                          e.preventDefault()
                          setMiddle(value)
                          setSmall('')
                        }}
                      >
                        {value}
                      </button>
                    </li>
                  ),
                )
              : null}
          </ul>
          {/* 소분류 */}
          <ul className="w-[280px] h-[300px] border-s border-border-gray overflow-y-scroll">
            {middle && (smallCategory as any)[middle]
              ? (smallCategory as any)[middle].map(
                  ([index, value]: [string, string]) => (
                    <li key={index} value={value}>
                      <button
                        className="w-full h-full text-left px-2"
                        value={value}
                        onClick={(e) => {
                          e.preventDefault()
                          setSmall(value)
                        }}
                      >
                        {value}
                      </button>
                    </li>
                  ),
                )
              : null}
          </ul>
        </Category>
        <div className="text-red text-[16px] mt-4">
          선택한 카테고리 :<span className="ps-1 font-bold">{big}</span>
          <span className="ps-1 font-bold">
            {middle ? '>' : null} {middle}
          </span>
          <span className="ps-1 font-bold">
            {small ? '>' : null} {small}
          </span>
        </div>
      </div>
    </div>
  )
}

export default CategoryInput
