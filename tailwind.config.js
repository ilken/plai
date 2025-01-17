/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/app/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        cyber: {
          primary: '#00ff9f',
          secondary: '#00b8ff',
          accent: '#ff00ff',
          dark: '#1a1a2e',
          light: '#e6e6ff',
        },
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
        'beam': 'beam 2s linear infinite',
      },
      keyframes: {
        beam: {
          '0%': { left: '-100%' },
          '100%': { left: '100%' },
        },
        glow: {
          '0%': { boxShadow: '0 0 5px #00ff9f, 0 0 10px #00ff9f, 0 0 15px #00ff9f' },
          '100%': { boxShadow: '0 0 10px #00ff9f, 0 0 20px #00ff9f, 0 0 30px #00ff9f' },
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Space Grotesk', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}; 