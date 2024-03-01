import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        red: '#F72F33', // 번개장터 빨간색
        'dark-black': '#212121', // 번개장터 검정색 (디폴트 값으로 설정해뒀음)
        c: 'rgb(178, 178, 178)',
        'border-gray': 'rgb(204, 204, 204)', //#cccccc
        'bg-gray': 'rgb(250, 250, 250)',
        'tx-gray': '#b2b2b2',
        'hover-gray': '#f2f2f2',
      },
    },
  },
  plugins: [],
}
export default config
