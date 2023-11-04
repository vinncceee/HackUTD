/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Define your custom colors here
        primary: {
          100: '#4d6b97',
          200: '#0083ab',
          300: '#009799',
          300: '#00a564',
          300: '#7caa15',
        },
        secondary: {
          // Define more custom colors here
        },
      },
    },
  },
  plugins: [],
}
