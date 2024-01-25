import type { Meta, StoryObj } from '@storybook/react';

import TodayRecommendItem from './TodayRecommendItem';

export default {
    title: 'Item/TodayRecommend',
    component: TodayRecommendItem,
    // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
    tags: ['autodocs'],
    parameters: {
      layout: 'fullscreen',
    },
    argTypes: {


    }

} 

const Template = (args: any) => <TodayRecommendItem {...args} />;

export const Default = Template.bind({});
export const LongItem = Template.bind({});

// 기본형
Default.args = {
    itemId: 1,
    imgSrc: 'https://media.bunjang.co.kr/product/250825353_1_1706145841_w292.jpg',
    itemName: '멋진 구두',
    itemPrice: 30000,
    itemDate: new Date(2024, 0, 25, 12, 0)
}

// 이름이 긴 상품
LongItem.args = {
  itemId: 2,
  imgSrc: 'https://media.bunjang.co.kr/product/250825353_1_1706145841_w292.jpg',
  itemName: '이름이 엄청 긴 멋진 검정 구두 입니다. 잘 팔렸으면 좋겠다.',
  itemPrice: 35000,
  itemDate: new Date(2024, 0, 20, 12, 0)
}