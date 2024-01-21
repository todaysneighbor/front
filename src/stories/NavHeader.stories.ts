import type { Meta, StoryObj } from '@storybook/react';
import { NavHeader } from './NavHeader';

export default {
    title: 'Nav/NavHeader', // 스토리북에 올릴 component 폴더 계층 구조
    component: NavHeader,   //  스토리를 만들 컴포넌트 이름
    parameters: {
        layout: 'fullscreen',
    },
    tags: ['autodocs'],
    argTypes: {
        padding: { control: 'text' },
        color: { control: 'color' },
    }
} 

// 스토리들
export const LoggedIn: StoryObj = {    
    args: {
        
    }
}

export const LoggedOut: StoryObj = {    
    args: {
        
    }
}
