export default function FormHeader() {
  return (
    <div className="w-[1024px]">
      <div>
        <span className="text-red text-[14px]">상품등록</span>
      </div>
      <div className="text-[26px] my-[30px]">
        기본정보 <span className="ms-4 text-red text-[14px] ">*필수항목</span>
      </div>
      <hr className="bg-neutral-800 h-1 w-full mb-[30px]"></hr>
    </div>
  )
}
