/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/components/**/*.{js,vue,ts}",
    "./src/layouts/**/*.vue",
    "./src/pages/**/*.vue",
    "./src/plugins/**/*.{js,ts}",
    "./app.vue",
    "./src/error.vue",
  ],
  theme: {
    screens: {
      sm: { max: '667px' },
      md: { min: '668px', max: '1023px' },
      lg: { min: '1024px', max: '1279px' },
      xl: { min: '1280px' },
      'min-md': { min: '668px' },
      'min-lg': { min: '1024px' },
    },
    extend: {
      colors: {
        primary: '#0524DD',
        secondary: '#10069f',
        complementaryColor1: '#FF671F',
        complementaryColor2: '#0063f2',
        complementaryColor3: '#27E0FF',
        textPrimary: '#525252',
        textSecondary: '#A7A8AA',
        // textLight: '#FFF',
        borderColor: '#e4e4e7',
        // bgDefaultColor: 'var(--bgDefaultColor)',
        bgDarkColor: '#070E37',
        bgDarkColor2: '#000211',
        bgLightColor: '#EEEEEE',
        bgLight2Color: '#F4F4F5',
        // bgPopUpColor: '#F4F4F5',
        WhiteTransparency: '#ffffffd8',
      }
    },
  },
  plugins: [],
}

