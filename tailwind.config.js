/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary-charcoal': '#2d3748',
        'primary-scarlet': '#cc0000',
        'accent-gray': '#718096',
        'bg-light': '#f7fafc',
        'text-dark': '#1a202c',
        'text-gray': '#4a5568',
        'border-gray': '#e2e8f0',
      },
    },
  },
  plugins: [],
}
