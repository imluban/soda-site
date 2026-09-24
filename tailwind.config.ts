import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        heading: ['Galada', 'cursive'],
        manrope: ['Manrope', 'sans-serif'],
      },
      colors: {
        pink: { DEFAULT: '#fbcfe8', dark: '#011d17' },
        teal: {
          inner: '#0b8a78',
          mid: '#044e3b',
          outer: '#011411',
        },
        blue: {
          inner: '#0b4f8a',
          mid: '#04294e',
          outer: '#010c14',
        },
      },
    },
  },
  plugins: [],
}
export default config
