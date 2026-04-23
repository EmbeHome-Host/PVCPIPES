/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#0F172A',
        accent: '#14B8A6',
        secondary: '#F0F9FF',
        text: '#0F172A',
      },
      boxShadow: {
        soft: '0 12px 35px rgba(15, 23, 42, 0.14)',
      },
      animation: {
        pulseSlow: 'pulse 3s infinite',
      },
    },
  },
  plugins: [],
}

