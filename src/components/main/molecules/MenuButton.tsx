import Image from "next/image"
import { useState } from "react"
import Link from "next/link";

export default function MenuButton () {
    const [isHovered, setIsHovered] = useState<boolean>(false);
    return (
        <div style={{ width: '1024px', height: '70px'}} className="flex items-center">
            <div className="mr-[20px]">
                <Image 
                    src={isHovered ? `/category tap hover.png` : `/category tap.png`}
                    alt="메뉴 버튼 아이콘" 
                    width={20} 
                    height={16}
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                ></Image>
            </div>
            <Link href={`https://seller.bunjang.co.kr/intro`}>
                <b>번개장터 판매자센터</b>
            </Link>
        </div>
    )
}