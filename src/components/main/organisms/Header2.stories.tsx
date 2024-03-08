import type { Meta } from '@storybook/react'
import Header2 from './Header2'
import SearchInput from '../molecules/SearchInput'
import MenuButton from '../molecules/MenuButton'

const meta = {
  title: 'Nav/Header2',
  component: Header2,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
  argTypes: {},
} satisfies Meta<typeof Header2>

export default meta

export const Image = {
  render: () => <img src="/product sell logo.png" alt="img 어디 진짜" />
}

export function Search() {
  return <SearchInput />
}

export function Menu() {
  return <MenuButton />
}

export const Default = {
  args: {

  }
}

