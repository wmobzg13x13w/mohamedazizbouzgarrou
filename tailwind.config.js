/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#0A192F",
        secondary: "#112240",
        accent: "#3A86FF",
        "text-primary": "#E6F1FF",
        "text-secondary": "#8892B0",
        teal: "#4ECDC4",
        yellow: "#FFD700",
        purple: "#6A0DAD",
      },
    },
  },
  plugins: [],
};
