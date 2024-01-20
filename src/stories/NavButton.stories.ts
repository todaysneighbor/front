import type { Meta, StoryObj } from '@storybook/react';
import { NavButton } from './NavButton';

export default {
    title: 'Nav/NavButton', // 스토리북에 올릴 component 폴더 계층 구조
    component: NavButton,   //  스토리를 만들 컴포넌트 이름
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
        padding: { control: 'text' },
        color: { control: 'color' },
    }
} 

// 스토리들
export const ImgButton: StoryObj = {    
    args: {
        size: '13px',
        label: '앱다운로드',
        padding: '15px',
        link: '/'
    }
}
