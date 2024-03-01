import type { Meta } from '@storybook/react'

import NavLeftComponent from './NavLeftComponent'

const meta = {
  title: 'Nav/NavLeft',
  component: NavLeftComponent,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
  argTypes: {},
} satisfies Meta<typeof NavLeftComponent>

export default meta

export const Default = {
  args: {
  
  },
}