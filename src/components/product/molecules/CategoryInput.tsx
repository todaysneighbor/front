'use client'

import { useState, useEffect } from 'react'
import styled from 'styled-components'

import { bigCategory, middleCategory, smallCategory } from '@/data/category'
import Label from '../atoms/Label'

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

function CategoryInput() {
  const [big, setBig] = useState<string>('')
  const [middle, setMiddle] = useState<string>('')
  const [small, setSmall] = useState<string>('')
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
            <span>카테고리</span>
            <span className="text-red">*</span>
          </div>
        }
      />
      <div className="w-full">
        <Category>
          {/* 대분류 */}
          <ul className="w-[280px] h-[300px]  overflow-y-scroll">
            {Object.entries(bigCategory).map(([key, value]) => (
              <li key={key} value={value}>
                <button
                  type="button"
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
            {big && middleCategory[big]
              ? (middleCategory as any)[big].map((value: string) => (
                  <li key={value} value={value}>
                    <button
                      type="button"
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
                ))
              : null}
          </ul>
          {/* 소분류 */}
          <ul className="w-[280px] h-[300px] border-s border-border-gray overflow-y-scroll">
            {middle && smallCategory[middle]
              ? (smallCategory as any)[middle].map((value: string) => (
                  <li key={value} value={value}>
                    <button
                      type="button"
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
                ))
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
