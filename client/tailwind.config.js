/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        'gradient-shift': 'gradient-shift 8s ease infinite',
        'shimmer': 'shimmer 3s infinite',
        'shake': 'shake 0.5s ease-in-out',
        'loading': 'loading 1.5s infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        'gradient-shift': {
          '0%': { 'background-position': '0% 50%' },
          '50%': { 'background-position': '100% 50%' },
          '100%': { 'background-position': '0% 50%' },
        },
        'shimmer': {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(100%)' },
        },
        'shake': {
          '0%, 100%': { transform: 'translateX(0)' },
          '25%': { transform: 'translateX(-5px)' },
          '75%': { transform: 'translateX(5px)' },
        },
        'loading': {
          '0%': { 'background-position': '-200px 0' },
          '100%': { 'background-position': 'calc(200px + 100%) 0' },
        },
        'float': {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
      backgroundImage: {
        'gradient-primary': 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        'gradient-dark': 'linear-gradient(135deg, #1a202c 0%, #2d3748 100%)',
        'shimmer-gradient': 'linear-gradient(45deg, transparent, rgba(255, 255, 255, 0.1), transparent)',
        'loading-gradient': 'linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.4), transparent)',
      },
      backgroundSize: {
        '200': '200% 200%',
        'loading': '200px 100%',
      },
      backdropBlur: {
        xs: '2px',
      },
      boxShadow: {
        'form': '0 20px 40px rgba(0, 0, 0, 0.1)',
        'input': '0 4px 6px rgba(0, 0, 0, 0.05)',
        'input-focus': '0 0 0 3px rgba(66, 153, 225, 0.1), 0 10px 25px rgba(0, 0, 0, 0.1)',
        'input-hover': '0 6px 12px rgba(0, 0, 0, 0.08)',
        'glow-blue': '0 0 0 3px rgba(66, 153, 225, 0.1)',
        'glow-green': '0 0 0 3px rgba(72, 187, 120, 0.1)',
        'glow-red': '0 0 0 3px rgba(245, 101, 101, 0.1)',
        'soft': '0 8px 20px #4AB7AA4D'
      },
      colors: {
        'glass': {
          'white': 'rgba(255, 255, 255, 0.95)',
          'light': 'rgba(255, 255, 255, 0.1)',
          'border': 'rgba(255, 255, 255, 0.2)',
        },
        // 'light-green': '#4AB7AA',
        // 'light-green-30%': '#4AB7AA4D'
        teal: {
          base: 'hsla(173, 43%, 50%)'
        }
      }
    },
  },
  plugins: [],
}
