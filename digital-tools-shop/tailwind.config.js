/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Manrope', 'sans-serif'],
      },
      colors: {
        brand: {
          primary: '#4F39F6',
          secondary: '#A855F7',
          dark: '#101727',
          muted: '#627382',
        }
      }
    },
  },
  plugins: [],
}