/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        // Palette chaude méditerranéenne
        'terracotta': {
          50: '#fdf6f3',
          100: '#fbeae4',
          200: '#f8d5c9',
          300: '#f2b5a1',
          400: '#e98b6e',
          500: '#df6844',
          600: '#c94d2a',
          700: '#a73d22',
          800: '#8a3520',
          900: '#732f1f',
        },
        'ocre': {
          50: '#fdfaef',
          100: '#f9f1d1',
          200: '#f3e2a0',
          300: '#ebcc65',
          400: '#e4b83d',
          500: '#d99c24',
          600: '#c0791b',
          700: '#a05919',
          800: '#84471b',
          900: '#6e3b19',
        },
        'olive': {
          50: '#f8f8f2',
          100: '#f0f0e3',
          200: '#dfe0c4',
          300: '#c9ca9d',
          400: '#b0b074',
          500: '#969653',
          600: '#7a7a42',
          700: '#5f5f36',
          800: '#4d4d2f',
          900: '#42422a',
        },
        'cream': '#FDF8F3',
        'warm-white': '#FFFBF7',
        'espresso': '#2C1810',
      },
      fontFamily: {
        'display': ['Playfair Display', 'serif'],
        'body': ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
