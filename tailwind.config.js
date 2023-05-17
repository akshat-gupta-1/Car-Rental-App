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
      gridTemplateColumns: {
        custom: 'minmax(0,0.75fr) minmax(400px,1.5fr) minmax(0,0.75fr)',
        custom2: 'minmax(400px) minmax(0,0.75fr)',
        customcta: '120px 300px',
        customcta2: 'minmax(300px,1fr) minmax(300px,1fr)',
      },
    },
  },
  plugins: [],
};
