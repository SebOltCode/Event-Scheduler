/** @type {import('tailwindcss').Config} */
module.exports = {
  theme: {
    extend: {
      backgroundImage: {
        "background": "/media-src/white-shapes-abstract-background-free-vector.jpg"
      }
    },
  },
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  plugins: [require('daisyui')],
};

