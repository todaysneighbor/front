interface BigCategoryType {
  // BigType 인터페이스는 키가 숫자이고 값이 문자열인 객체임을 나타내는 인덱스 서명 [key: number]: string을 정의합니다.
  [key: number]: string
}

export const bigCategory: BigCategoryType = {
  0: '디지털',
  1: '가전제품',
}

interface OtherCategoryType {
  [category: string]: string[]
}

export const middleCategory: OtherCategoryType = {
  디지털: [
    '휴대폰',
    '웨어러블(워치/밴드)',
    `오디오/영상/관련기기`,
    'PC/노트북',
    '게임/타이틀',
  ],
  가전제품: ['생활가전', '주방가전', '미용가전', '냉장고'],
}

export const smallCategory: OtherCategoryType = {
  휴대폰: ['스마트폰', '일반폰', '케이스/보호필름/액세서리'],
  '웨어러블(워치/밴드)': [
    '스마트워치/밴드',
    '케이스/보호필름/액세서리',
    '케이블/충전기/주변기기',
  ],
  '오디오/영상/관련기기': [
    '이어폰',
    '헤드폰',
    '스피커/앰프',
    '기타 오디오/영상/관련기기',
  ],
  'PC/노트북': ['데스크탑', '노트북/넷북', '모니터', '키보드', '마우스'],
  '게임/타이틀': ['닌텐도/NDS/Wii', '소니/플레이스테이션', 'XBOX', 'PC게임'],
  생활가전: ['청소기', '가습기', '제습기'],
}
