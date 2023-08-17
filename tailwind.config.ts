import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      borderRadius: {
        iconRadius: '67% 33% 74% 26% / 67% 26% 74% 33%',
      },
      boxShadow: {
        iconShdow: '6px 6px 10px -1px rgba(0,0,0,0.15), -6px -6px 10px -1px rgba(255,255,255,0.7)'
      },
      colors: {
        mainColor: '#104f42',
        secondaryColor: '#EF4444'
      },
      screens: {
        '4xl': '1920px'
      }
    },
  },
  plugins: [],
}
export default config
