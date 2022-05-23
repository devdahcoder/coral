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
      colors: {
        primary: {
          100: '#1E2832',
        }
      },
      backgroundImage: {
        'zara-image': "url('/Images/andrey.png')",
        'zara': "url('/Images/1024px-Zara_Logo 1.png')"
      }
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
