// tailwind.config.js
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      keyframes: {
        popIn: {
          '0%': {
            transform: 'scale(0.5)',
            opacity: '0',
            letterSpacing: '-0.25em',
          },
          '60%': {
            transform: 'scale(1.2)',
            opacity: '1',
            letterSpacing: '0.05em',
          },
          '100%': {
            transform: 'scale(1)',
            opacity: '1',
            letterSpacing: '0.02em',
          },
        },
      },
      animation: {
        popIn: 'popIn 2s ease-out forwards',
      },
    },
  },
  plugins: [],
};
