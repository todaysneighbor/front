import type { Preview } from '@storybook/react'
import * as NextImage from 'next/image'
// storybook 환경에서 Next image 최적화를 쓰지 않으므로 해제해줘야 한다
// NextImage.defaultProps = {
//   unoptimized: true,
// }

// NextImage.propTypes = {
//   unoptimized: null,
// }

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
}

export default preview
