/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        "custom-orange": "#FA4A0C",
        "custom-gray": "#737373",
        "custom-black": "#252B42", // Define a custom color
      },
      backgroundImage: {
        "hero-pattern": "url('./images/hero.png')",
      },
      padding: {
        "72px": "72px",
        "200px": "200px",
        "100px": "100px",
        "130px": "130px",
      },
      margin: {
        "-100px": "-100px",
      },
      fontSize: {
        "40px": ["40px", "48px"],
      },
    },
  },
  plugins: [],
};
