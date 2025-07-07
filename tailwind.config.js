export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'lion-black': '#000000',
        'lion-white': '#f5f5f4',
        'lion-blue': '#3666b2',
        'lion-blue-dark': '#004aad',
        'lion-cyan': '#5de0e6',
        'lion-navy': '#00243f',
      },
      fontFamily: {
        'serif': ['PT Serif', 'serif'],
      },
    },
  },
  plugins: [],
}

