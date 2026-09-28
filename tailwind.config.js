/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        navy:  { DEFAULT: '#1B2E3B', light: '#223849', dark: '#14222d' },
        red:   { DEFAULT: '#B11E1E', light: '#c92222', dark: '#8f1818' },
        cream: { DEFAULT: '#F8F4E9', dim: '#d9d0b8', muted: '#b8ad95' },
        gold:  { DEFAULT: '#C9A96B', light: '#dcc08a', dark: '#a8873f' },
        stone: { DEFAULT: '#3E3A34', light: '#524e47' },
      },
      fontFamily: {
        sans:  ['Montserrat', 'sans-serif'],
        serif: ['Merriweather', 'Georgia', 'serif'],
      },
      maxWidth: { hub: '420px' },
      keyframes: {
        rise: {
          from: { opacity: '0', transform: 'translateY(10px)' },
          to:   { opacity: '1', transform: 'translateY(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%':      { transform: 'translateY(-5px)' },
        },
      },
      animation: {
        rise:  'rise 0.5s ease forwards',
        float: 'float 6s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
