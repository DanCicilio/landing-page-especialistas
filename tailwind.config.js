/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#4f46e5',
        'primary-dark': '#3730a3',
        secondary: '#9333ea',
        accent: '#f59e0b',
        'accent-dark': '#d97706',
        dark: '#0a0e27',
      },
      animation: {
        'fade-in-up': 'fadeInUp 0.8s ease-out',
        'fade-in-down': 'fadeInDown 1s ease-out',
        'slide-in-left': 'slideInLeft 0.8s ease-out',
        'slide-in-right': 'slideInRight 0.8s ease-out',
        'float': 'float 3s ease-in-out infinite',
        'spotlight': 'spotlight 2s ease .75s 1 forwards',
        'shimmer-slide': 'shimmer-slide var(--speed) ease-in-out infinite alternate',
        'spin-around': 'spin-around calc(var(--speed) * 2) infinite linear',
        'meteor-effect': 'meteor 5s linear infinite',
      },
      keyframes: {
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeInDown: {
          '0%': { opacity: '0', transform: 'translateY(-30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideInLeft: {
          '0%': { opacity: '0', transform: 'translateX(-50px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        slideInRight: {
          '0%': { opacity: '0', transform: 'translateX(50px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        spotlight: {
          '0%': { opacity: '0', transform: 'translate(-72%, -62%) scale(0.5)' },
          '100%': { opacity: '1', transform: 'translate(-50%, -40%) scale(1)' },
        },
        'shimmer-slide': {
          to: { transform: 'translate(calc(100cqw - 100%), 0)' },
        },
        'spin-around': {
          '0%': { transform: 'translateZ(0) rotate(0)' },
          '15%, 35%': { transform: 'translateZ(0) rotate(90deg)' },
          '65%, 85%': { transform: 'translateZ(0) rotate(270deg)' },
          '100%': { transform: 'translateZ(0) rotate(360deg)' },
        },
        meteor: {
          '0%': { transform: 'rotate(215deg) translateX(0)', opacity: '1' },
          '70%': { opacity: '1' },
          '100%': { transform: 'rotate(215deg) translateX(-500px)', opacity: '0' },
        },
      },
    },
  },
  plugins: [],
}
