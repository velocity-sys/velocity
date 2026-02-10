/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Garamond', 'Apple Garamond', 'Baskerville', 'Georgia', 'Times New Roman', 'serif'],
      },
    },
  },
  plugins: [],
}
