/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  plugins: [],
  theme: {
    extend: {
      fontFamily: {
        'title': ['PPAgrandirText-Bold', 'Poppins', 'system-ui', 'sans-serif'],
        'sans': ['Poppins', 'system-ui', 'sans-serif'],
      }
    }
  }
};
