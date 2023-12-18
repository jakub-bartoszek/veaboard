/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'keycap': 'inset 0 10px 10px 5px #ffffff60, inset 0 0 10px 0.5vw #000000aa, 0 5px 10px 0px black',
        'keycapActive': 'inset 0 10px 10px 5px #ffffff50, inset 0 0 10px 0.5vw #3e3e3e, 0 2px 10px 0px black',
        'keycapTop': 'inset 0 -2px 2px 2px #ffffff20, inset 0 2px 5px 2px #00000030, inset 0 0 10px 5px #ffffff15',
        'light': '',
      },
    },
  },
  plugins: [],
};