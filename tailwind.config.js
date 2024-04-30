/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      backgroundImage: {
        "light": "url('https://images.pexels.com/photos/1640773/pexels-photo-1640773.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')",
        "dark": "url('https://c0.wallpaperflare.com/preview/184/811/591/blur-bread-rolls-counter-cup.jpg')",
      },
    },
    screens: {
      sm: "560px",
      md: "670px",
      lg: "924px",
      xl: "1280px",
      "2xl": "1536px",
    },
  },
  plugins: [],
};
