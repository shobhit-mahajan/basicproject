/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'white-to-transparent': 'linear-gradient(to right, rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0))',
      },
    },
    fontFamily:{
      'sans':["Work Sans", 'sans-serif']
    }
  },
  plugins: [],
}