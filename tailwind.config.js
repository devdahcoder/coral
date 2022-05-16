module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
      },
      // animation: {
      //   'bounce': 'bounce 3s ease infinite',
      // },
      // keyframes: {
      //   'bounce': {
      //     '0%':   { transform: 'translateY(0)' },
      //     '50%':  { transform: 'translateY(-100px)' },
      //     '100%': { transform: 'translateY(0)' }
      //   },
      // }
    },
    
  },
  plugins: [],
}
