/** @type {import('tailwindcss').Config} */
import aspect from '@tailwindcss/aspect-ratio'

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    aspect
  ],
}