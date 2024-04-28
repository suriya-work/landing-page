
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'white': '#ffffff',
        'purple': '#5D50C6',
        'orange': '#FF5722',
        'bubble-gum': '#F85E9F',
        'midnight': '#121063',
        'tahiti': '#3ab7bf',
        'silver': '#ecebff',
        'bermuda': '#78dcca',
        'gray': 'rgba(25, 24, 37, 0.50)',
        'yellow': '#FACD49',
        'pink': 'rgba(250, 205, 73, 0.08)',
      },
      container: {
        center: true,
      },
    },
    plugins: [],
  }
}