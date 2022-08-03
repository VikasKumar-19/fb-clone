/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      primary: '#fff',
      bg__secondary: '#f0f2f5',
      bg__third: '#e4e6eb',
      bg__forth: '#f0f2f5',
      color__primary: '#050505',
      color__secondary: '#65676b',
      divider: '#ced0d4',
      dark_bg__primary: '#18191a',
      dark_bg__secondary: '#242526',
      dark_bg__third: '#3a3b3c',
      dark_color__primary: '#242526',
      dark_color__secondary: '#b0b3b8',
      blue__color: '#1876f2',
      green__color: '#42b72a',
      light_blue__color: '#e7f3ff',
      border__color: '#ccced2',
      shadow__1: 'rgba(0, 0, 0, 0.2)',
      shadow__2: 'rgba(0, 0, 0, 0.1)',
      shadow__3: 'rgba(0, 0, 0, 0.3)',
      shadow__inset: 'rgba(255, 255, 255, 0.5)'
    },
    extend: {},
  },
  plugins: [],
}
