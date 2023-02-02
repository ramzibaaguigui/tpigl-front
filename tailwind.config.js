/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'theme-orange': "#BD723A",
        'theme-white': "#FFFEFE",
      }
    },
  },
  plugins: [
  ],
}
