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
        hookia: {
          turquoise: '#40E0F0', // Color turquesa inicial
          lightBlue: '#6897F0', // Azul medio
          purple: '#8B7BF7',    // Color morado final
          50: '#E6F8FA',  // Versión más clara del turquesa
          100: '#CCF1F7',
          200: '#99E3F0',
          300: '#66D6E8',
          400: '#40E0F0', // Turquesa base
          500: '#6897F0', // Azul medio base
          600: '#7889F3',
          700: '#8B7BF7', // Morado base
          800: '#7A6AE6',
          900: '#6959D4'
        }
      }
    }
  },
  plugins: [],
};