/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      aspectRatio: {
        'HD': '17 / 10',
        '3/2': '3 / 2',
        '3/5': '3 / 5',
      },
    }
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
  ],
}

