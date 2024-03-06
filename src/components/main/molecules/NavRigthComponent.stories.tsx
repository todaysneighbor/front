import React from 'react'
import type { Meta } from '@storybook/react'
import NavRightLoggedIn from './NavRightLoggedIn'
import NavRightLoggedOut from './NavRightLoggedOut'

const meta: Meta = {
  title: 'Nav/NavRight',
  component: NavRightLoggedIn,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
  argTypes: {},
} satisfies Meta<typeof NavRightLoggedIn>

export default meta

export function Default ({ isLoggedIn }: any) {
  return isLoggedIn ? <NavRightLoggedIn /> : <NavRightLoggedOut />
}

Default.args = {
  isLoggedIn: true,
}
