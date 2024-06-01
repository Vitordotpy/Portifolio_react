/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#000000",
        secondary: "#AAAAAA",
        tertiary: "#141414",
        fourtiary: '#292929',
        purple: "#8758FF",
        cian:"#5CB8E4"
      },
      boxShadow: {
        card: "0px 0px 15px 0px #8758FF",
      },
      screens: {
        xs: "450px",
      },
      backgroundImage: {
        "hero-pattern": "url('/src/assets/herobg.png')",
      },
    },
  },
  plugins: [],
}

