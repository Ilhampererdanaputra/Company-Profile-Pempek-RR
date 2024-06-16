/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
  "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",

  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Poppins", "sans-serif"],
        cursive: ["Pacifico", "cursive"],
      },
      colors: {
        primary:"#854d3d",
        secondary:"#4a1e1b",
        brandDark: "#270c03",

      },
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          sm: "2rem",
         
        },
      },
    },
  },
  plugins: [],
}

