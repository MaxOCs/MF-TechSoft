/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        primary: {
          900: '#1A237E',
          800: '#283593',
          700: '#303F9F',
          600: '#3949AB',
          500: '#3F51B5',
        },
        accent: {
          500: '#00BCD4',
          400: '#26C6DA',
          300: '#4DD0E1',
        },
        gray: {
          900: '#212121',
          700: '#616161',
          400: '#BDBDBD',
          200: '#EEEEEE',
          100: '#F5F5F5',
        }
      }
    }
  },
  plugins: [],
}

