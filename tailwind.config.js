/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,jsx}',
    './components/**/*.{js,jsx}',
    './replace-styles.js'
  ],
  darkMode: 'class', // Disable automatic dark mode logic
  theme: {
    extend: {
      colors: {
        bg: '#030509',
        blur: 'rgba(20, 40, 90, 0.4)',
        primary: '#1e6bff',
        'primary-glow': 'rgba(30, 107, 255, 0.4)',
        text: '#f0f4f8',
        'text-muted': '#8b9bb4',
        border: 'rgba(255, 255, 255, 0.08)',
        panel: 'rgba(10, 15, 25, 0.6)',
      },
      fontFamily: {
        display: ['Syne', 'serif'],
        body: ['Plus Jakarta Sans', 'sans-serif'],
        syne: ['Syne', 'serif'],
      },
    },
  },
  plugins: [],
}
