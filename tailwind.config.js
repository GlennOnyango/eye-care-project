/** @type {import('tailwindcss').Config} */
import tailwindScrollbar from 'tailwind-scrollbar';

const config = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: 'var(--color-primary)',
        rorange: 'var(--color-r-orange)',
        secondary: 'var(--color-secondary)',
        white: 'var(--color-white)',
      },
      fontFamily: {
        'open-sans': ['Open Sans', 'Arial', 'Helvetica', 'sans-serif'],
        'inter': ['Inter', 'Arial', 'Helvetica', 'sans-serif'],
      },
    },
  },
  plugins: [
    tailwindScrollbar,
  ],
};

export default config;
