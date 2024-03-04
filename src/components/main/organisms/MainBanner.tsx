'use client'
import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css"

interface Banner {
    href: string // 링크
    src: string // 사진
}

const banners: Banner[] = [
  {
    href: 'https://exhibition.bunjang.co.kr/viewer/payevent2401',
    src: '/banner/ad1.jpeg',
  },
  {
    href: 'https://exhibition.bunjang.co.kr/viewer/pay?utm_source=bunjang&utm_medium=topbanner&utm_campaign=240108',
    src: '/banner/ad2.jpeg',
  },
  {
    href: 'https://e`xhibition.bunjang.co.kr/viewer/care_margiela?utm_source=bunjang&utm_medium=topbanner&utm_campaign=care_margiela',
    src: '/banner/ad3.jpeg',
  },
  {
    href: 'https://exhibition.bunjang.co.kr/viewer/care_ourlegacy?utm_source=bunjang&utm_medium=topbanner&utm_campaign=care_ourlegacy',
    src: '/banner/ad4.jpeg',
  },
  {
    href: 'https://exhibition.bunjang.co.kr/viewer/naverevent2401?utm_source=bunjang&utm_medium=&utm_campaign=231226',
    src: '/banner/ad5.png',
  },
];

export const StyledSlider = styled(Slider)`
   height: 300px; //슬라이드 컨테이너 영역
   justify-content: center;

  .slick-list {  // 슬라이드 스크린
    width: 1024px;
    height: 300px;
    justify-content: center;
  }

  .slick-prev {
    z-index: 9999;
  }

`;

function SampleNextArrow(props: any) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, position: 'absolute', right: 0 }}
        onClick={onClick}
      />
    );
  }
  
  function SamplePrevArrow(props: any) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, position: 'absolute', left: 0 }}
        onClick={onClick}
      />
    );
  }

export default function MainBanner () {
    // 로그인 모달이 오픈되면 클릭이벤트 막기
    const settings = {
        dots: false,    // 슬라이드 밑 점
        infinite: true, // 무한 반복
        speed: 500,
        autoplay: true, // 자동 넘김
        autoplaySpeed: 2000,  
        slidesToShow: 1,    // 스크린데 보여지는 슬라이드 개수
        slidesToScroll: 1,   // n장씩 뒤로 넘어가게 함
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />
      };
      
      return (
        <section className="flex justify-center relative z-0" >
            <StyledSlider {...settings}>
                {banners.map((banner, index) => (
                <div key={index}>
                    <Link href={banner.href}>
                    <Image src={banner.src} alt="" width={1024} height={298.66} />
                    </Link>
                </div>
                ))}
            </StyledSlider>
        </section>
        )
}