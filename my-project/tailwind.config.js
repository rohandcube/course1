/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#A63D40', // Your brand primary color
        'secondary': '#5C5C5C', // Secondary color as per your palette
        'gray-background': '#666', // Background color for sections
      },
    },
  },
  plugins: [],
}
