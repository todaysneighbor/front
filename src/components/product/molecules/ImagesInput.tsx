'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import styled from 'styled-components'

import { FaCamera } from 'react-icons/fa'

import Label from '../atoms/Label'

const ImgBox = styled.div`
    input {
        width: 200px;
        height: 200px;
        background-color: "#b2b2b2";
        border: 1px solid rgb(204, 204, 204)
        opacity: 0;
    }

`

import imageCompression from 'browser-image-compression'
import Line from '../atoms/Line'

export interface ImageInputProps {
  image: String
  imageArray: string[]
}

export default function ImageInput() {
  const [img, setImg] = useState<String>('')
  const [imgs, setImgs] = useState<File[] | any[]>([])

  // TODO: imgs length <= 12, if == 12 make disable
  // 이미지 파일 첨부 func
  const addPreviewImage = async (file: File) => {
    if (file) {
      // 이미지 파일 크기 옵션
      const options = {
        maxSizeMB: 0.5,
        maxWidthOrHeight: 200,
        useWebWorker: true,
      }
      try {
        // 화질 저하 시도
        const compressedFile = await imageCompression(file, options)
        const reader = new FileReader()
        reader.readAsDataURL(compressedFile)
        // 압축완료된 사진 imgs에 추가
        return await new Promise((resolve) => {
          reader.onload = (e) => {
            setImgs((imgs) => [...imgs, reader.result])
            resolve(true)
          }
        })
      } catch (error) {
        console.log(error)
      }
    }
  }
  // 삭제하기 버튼 func
  const deletePreviewImage = (index: number, arr: File[]) => {
    if (arr.length) {
      return [...arr.slice(0, index), ...arr.slice(index + 1)]
    }
    return arr
  }

  return (
    <div>
      <ImgBox className="flex">
        <Label
          props={
            <div>
              <span>상품이미지</span>
              <span className="text-red">*</span>
              <span className="text-light-gray text-[16px] ms-[0.25rem] leading-5">
                ({imgs.length}/12)
              </span>
            </div>
          }
        ></Label>
        {/* <label htmlFor="Img"></label> */}
        <ul className="flex flex-wrap overflow-x-hidden w-[856px]">
          <li className="w-[202px] h-[202px] relative flex flex-col justify-center items-center border-border-gray border rounded-sm bg-bg-gray me-[1rem]">
            <FaCamera size={60} color="rgb(204, 204, 204)" />
            <span className="text-[#666666] text-[1rem]">이미지 등록</span>
            <input
              type="file"
              name="Img"
              accept="image/jpg, image/jpeg, image/png"
              className="opacity-0 absolute"
              multiple
              onChange={(e) =>
                // 파일 갯수만큼 돌아야함
                Array.from(e.target.files as ArrayLike<File>).map(
                  (file, index) => {
                    addPreviewImage(file as File)
                  },
                )
              }
            />
          </li>

          <li className="flex ">
            {imgs
              ? imgs.map((imagePreview, index) => (
                  <div key={index} className="relative">
                    <button
                      type="button"
                      className="absolute"
                      onClick={(e) =>
                        // array 삭제 기능
                        {
                          e.preventDefault()
                          setImgs((imgs) =>
                            deletePreviewImage(index, [...imgs]),
                          )
                        }
                      }
                    >
                      ⅹ
                    </button>
                    <div>{index}</div>
                    <Image
                      priority
                      src={imagePreview}
                      width={200}
                      height={200}
                      style={{ objectFit: 'cover' }}
                      onLoad={(event) => console.log('loading')}
                      alt="이미지 미리보기"
                    />
                  </div>
                ))
              : null}
          </li>
        </ul>
      </ImgBox>{' '}
      {/* <Line /> */}
    </div>
  )
}
