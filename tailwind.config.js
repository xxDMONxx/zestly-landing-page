/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        // Seasonal palette
        leaf: {
          50: '#f2fbf6',
          100: '#e6f7ee',
          200: '#c7edd8',
          300: '#9fdfbf',
          400: '#6bcb9e',
          500: '#3db77e',
          600: '#2f9767',
          700: '#267855',
          800: '#215f46',
          900: '#1b4c39',
        },
        harvest: {
          50: '#fff8ec',
          100: '#ffefd3',
          200: '#ffe0a6',
          300: '#ffd077',
          400: '#ffb545',
          500: '#ff9a1a',
          600: '#db7b0f',
          700: '#b25f0d',
          800: '#8a4b0f',
          900: '#6d3c0f',
        },
        orchard: {
          50: '#fef7f3',
          100: '#fdeade',
          200: '#fbd1b6',
          300: '#f8b389',
          400: '#f28e58',
          500: '#ea6a2a',
          600: '#c4521e',
          700: '#9c421a',
          800: '#7e3619',
          900: '#682e17',
        },
        lemon: {
          50: '#fffdea',
          100: '#fff7c2',
          200: '#ffef85',
          300: '#ffe451',
          400: '#ffd31e',
          500: '#ffbf0a',
          600: '#d89f06',
          700: '#a67708',
          800: '#805c0c',
          900: '#67490e',
        },
        sand: {
          50: '#fbfaf9',
          100: '#f7f4f1',
          200: '#ebe6df',
          300: '#d9d1c6',
          400: '#c2b7a5',
          500: '#a69583',
          600: '#897967',
          700: '#6f6254',
          800: '#5a4f45',
          900: '#4b423b',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'Segoe UI', 'Helvetica Neue', 'Arial', 'Noto Sans', 'sans-serif'],
      },
      boxShadow: {
        lift: '0 12px 30px -12px rgba(0,0,0,0.2)',
      },
      backgroundImage: {
  'radial-harvest': 'radial-gradient(1200px 600px at 90% -20%, rgba(255,191,10,0.12), transparent 60%), radial-gradient(900px 600px at -10% 20%, rgba(61,183,126,0.12), transparent 60%)',
        'grid-dots': 'radial-gradient(circle at 1px 1px, rgba(0,0,0,0.06) 1px, transparent 0)',
      },
      backgroundSize: {
        'grid-dots': '24px 24px',
      },
      borderRadius: {
        xl2: '1rem',
      }
    },
  },
  plugins: [],
}
