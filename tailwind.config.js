/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        mint_: "#E8FFF5",
        blue_: "#00C2BB",
        pink_: "#C86FCE",
        beige_: "#221111",
      },
      screens: {
        lg: "1024px",
      },
    },
  },
  plugins: [],
};
