/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#0052FF",
        accent: "#FF007A",
        cyan: "#00E7FF",
        navy: "#0A0B1F",
      },
    },
  },
  plugins: [],
};
