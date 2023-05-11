/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      screens: {
        sm: '450px',
        ls: '630px',
        md: '801px',
        lg: '1000px',
        xl: '1440px',
      },
      colors: {
        darkBlue: '#14213D',
        pastelYellow: '#FCA311',
        lightGray: '#E5E5E5',
      },
    },
  },
  plugins: [],
};
