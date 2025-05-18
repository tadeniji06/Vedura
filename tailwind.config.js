/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "primary-green": "#1e3d36",
        "primary-peach": "#ddd1b4",
        "accent-gray":"#ddd1b4"
      },
    },
  },
  plugins: [],
};
