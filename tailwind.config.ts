/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['class', '[data-theme="dark"]'],
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    container: {
      center: true,
    },
    extend: {
      colors: {
        text: '(var(--text))',
        background: '(var(--background))',
        listBackground: '(var(--listBackground))',
        inactive: '(var(--inactive))',
        border: '(var(--border))',
      },
    },
  },
  plugins: [],
};
