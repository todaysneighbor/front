import type { Meta } from '@storybook/react'
import Button from './Button'

const meta = {
  title: 'component/Button',
  component: Button,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
  argTypes: {},
} satisfies Meta<typeof Button>

export default meta

export const button = {
  args: {
    children: '찜',
    right: 4,
    size: 'lg',
    color: 'gray',
  },
}
