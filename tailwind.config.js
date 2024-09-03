/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "Gris-Oscuro": "hsl(60, 4%, 9%)",
        "Azul-Claro": "hsl(178, 45%, 53%)",
        "Gris-Menos-Oscuro": "hsl(60, 3%, 5%)",
        "Gris-Claro": "hsl(0, 0%, 62%)",
      },
      fontFamily:{
        Russo: ['Russo'],
        Roboto: ['Roboto']
      }
    },
  },
  plugins: [],
}