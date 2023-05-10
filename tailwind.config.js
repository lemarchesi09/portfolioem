/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    colors: {
      darkBg: '#1B1A1A',
      whiteBG: '#F4F4F4',
      primaryYellow: '#F9C866',
      primaryPink: '#EE7AF9',
      

    },
    fontFamily:{
      ubuntu: ['Ubuntu']
    }
  },
  plugins: [],
};
