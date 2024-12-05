/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      gridRow: {
        "2r": "minmax(64px), 1fr",
      },
    },
  },
  plugins: [],
};
