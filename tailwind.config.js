/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
        colors: {
            'blue': 'var(--blue)',
            'eastern-blue': 'var(--eastern-blue)',
            'red': 'var(--red)',
            'white': 'var(--white)',
            'very-light-grayish-blue': 'var(--very-light-grayish-blue)',
            'light-grayish-blue-1': 'var(--light-grayish-blue-1)',
            'light-grayish-blue-2': 'var(--light-grayish-blue-2)',
            'grayish-blue': 'var(--grayish-blue)',
            'dark-grayish-blue': 'var(--dark-grayish-blue)',
            'very-dark-blue': 'var(--very-dark-blue)',
        },
        screens: {
          'xl-mobile': '425px',
          'sm-tablet': '540px',
          'md-tablet': '768px',
          'lg-tablet': '960px',
          'desktop': '1280px',
          'xl-desktop': '1440px',
        },
    },
  },
  plugins: [],
}