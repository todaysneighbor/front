import type { Meta, StoryObj } from '@storybook/react';

import TodayRecommendItem from './TodayRecommendItem';

const meta =  {
    title: 'Item/TodayRecommend',
    component: TodayRecommendItem,
    // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
    tags: ['autodocs'],
    parameters: {
      layout: 'fullscreen',
    },
    argTypes: {

    }
} satisfies Meta<typeof TodayRecommendItem>

export default meta;

// 스토리
type Story = StoryObj<typeof meta>;

// 기본형
export const Default = {
  args: {
    itemId: 1,
    imgSrc: 'https://media.bunjang.co.kr/product/249782749_1_1705996544_w292.jpg',
    itemName: '슬로건 팝니다',
    itemPrice: 30000,
    itemDate: new Date(2024, 0, 25, 12, 0)

  }
}

// 이름이 긴 상품
export const LongItem = {
  args: {
    itemId: 2,
    imgSrc: 'https://media.bunjang.co.kr/product/250825353_1_1706145841_w292.jpg',
    itemName: '이름이 엄청 긴 멋진 검정 구두 입니다. 잘 팔렸으면 좋겠다.',
    itemPrice: 35000,
    itemDate: new Date(2024, 0, 26, 12, 0)  
  }
}

// 리스트 ..
