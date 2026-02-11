/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  plugins: [],
  theme: {
    extend: {
      fontFamily: {
        'title': ['AGrandir', 'system-ui', 'sans-serif'],
        'sans': ['Montserrat', 'system-ui', 'sans-serif'],
      }
    }
  }
};
