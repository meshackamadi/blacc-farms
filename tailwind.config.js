export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'instrument-serif': ['"Instrument Serif"', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      colors: {
        cream: '#F5F5DC',
        wheat: '#F5DEB3',
        sage: '#87A96B',
        sun: '#FFD700',
        clay: '#CD853F',
        earth: '#8B4513',
        green: '#22c55e',
        black: '#2D3748',
        blacc: '#2D3748',  // Added blacc color matching black
      },
      // backgroundImage utilities removed for runtime-resolved images
    },
  },
  plugins: [],
}