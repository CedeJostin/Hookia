/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}", // Asegúrate de incluir esta línea si usas la carpeta `app`
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};

