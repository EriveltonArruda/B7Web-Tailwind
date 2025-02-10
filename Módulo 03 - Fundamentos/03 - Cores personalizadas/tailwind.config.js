/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      // adicionando cores no tailwind
      colors: {
        'vermelho': '#FF0000',
        'vermelho-escuro': '#990000'
      }
    },
  },
  plugins: [],
}