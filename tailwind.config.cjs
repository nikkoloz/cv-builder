/** @type {import('tailwindcss').Config} */
module.exports = {
 content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
 mode: "jit",
 theme: {
  fontSize: {
   'h1': ['28px', {
    lineHeight: '36px',
    letterSpacing: '-1.05px',
    fontWeight: '400',
   }],

  },
  extend: {
   fontFamily: {
    "helvetca": "HelvetcaNeue"
   },
   colors: {
    'main-blue': '#070724',
    'main-black': '#1A1A1A',
   },
  },
 },
 plugins: [],
}
