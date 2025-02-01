/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}", // Asegúrate de incluir esta línea si usas la carpeta `app`
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          50: '#f0f4f8',
          100: '#d9e2ec',
          200: '#bcccdc',
          400: '#829ab1',
          600: '#334e68',
          700: '#243b53',
          800: '#102a43',
        }
      }
    }
  },
  plugins: [],
};

