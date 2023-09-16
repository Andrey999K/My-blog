/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        'white': '#ffffff',
        'my-green': {
          50: '#92E791FF',
          100: '#5CDF59',
          200: '#04AD01',
          300: '#3cbd33',
          400: '#237521'
        },
        // ...
      },
    }
  },
  plugins: []
};