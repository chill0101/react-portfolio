/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'shine': 'shine 1s forwards',
      },
      keyframes: {
        shine: {
          '0%': { left: '-100%' },
          '100%': { left: '150%' }
        }
      },
      height: {
        '70': '17.5rem',
        '90': '22.5rem',
      },
      width: {
        '70': '17.5rem',
        '90': '22.5rem',
      },
      // Mantén cualquier otra extensión que ya tengas aquí
    },
  },
  plugins: [],
}